'use client'
import { useState, useRef, useCallback } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { ref as storageRef, uploadBytes } from 'firebase/storage'
import { db, storage } from '@/app/lib/firebase'
import { PROCEDURES } from '@/app/lib/procedures'

const REF_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
function makeCaseRef(): string {
  const arr = new Uint32Array(6)
  crypto.getRandomValues(arr)
  return Array.from(arr, n => REF_ALPHABET[n % REF_ALPHABET.length]).join('')
}

const EXTRA: { slug: string; name: string }[] = [
  { slug: 'rhinoplasty-istanbul', name: 'Rhinoplasty' },
  { slug: 'hair-transplant-istanbul', name: 'Hair transplant' },
  { slug: 'dental-istanbul', name: 'Dental treatment' },
  { slug: 'ophthalmology-istanbul', name: 'Eye surgery / LASIK' },
  { slug: 'knee-replacement-turkey', name: 'Knee replacement' },
  { slug: 'urology-istanbul', name: 'Urology' },
  { slug: 'other', name: 'Other / not sure yet' },
]
const NEURO = new Set(['lumbar-disc-istanbul', 'cervical-disc-istanbul', 'neurosurgery-istanbul'])

const CONDITIONS = [
  ['diabetes', 'Diabetes'],
  ['heart', 'Heart condition'],
  ['bp', 'High blood pressure'],
  ['anticoag', 'Blood-thinning medication'],
  ['clot', 'Previous blood clot (DVT or PE)'],
  ['smoker', 'Smoker or vaper'],
  ['surgery', 'Previous surgery in the area'],
  ['none', 'None of these'],
] as const

const TIMING = [
  ['asap', 'As soon as possible'],
  ['1-3', 'Within 1–3 months'],
  ['3-6', 'In 3–6 months'],
  ['flex', 'Flexible / just exploring'],
] as const

const MAX_FILE = 15 * 1024 * 1024
const MAX_FILES = 10
const OK_TYPES = ['application/pdf', 'image/jpeg', 'image/png', 'image/heic', 'image/heif', 'image/webp']

const EMPTY = {
  procedure: '', fullName: '', age: '', country: '', email: '', phone: '',
  mainConcern: '', heightCm: '', weightKg: '', timing: '', medications: '',
  howHeard: '', trap: '',
}

export default function RecordsForm() {
  const sp = useSearchParams()
  const pre = sp.get('procedure') || ''
  const all = [...PROCEDURES.map(p => ({ slug: p.slug, name: p.name })), ...EXTRA]
  const [form, setForm] = useState({ ...EMPTY, procedure: all.some(a => a.slug === pre) ? pre : '' })
  const [conds, setConds] = useState<string[]>([])
  const [consent, setConsent] = useState(false)
  const [files, setFiles] = useState<File[]>([])
  const [errors, setErrors] = useState<Record<string, boolean>>({})
  const [fileErr, setFileErr] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitErr, setSubmitErr] = useState('')
  const [doneRef, setDoneRef] = useState<string | null>(null)
  const fileInput = useRef<HTMLInputElement>(null)
  const topRef = useRef<HTMLDivElement>(null)

  const set = (k: keyof typeof EMPTY, v: string) => {
    setForm(f => ({ ...f, [k]: v }))
    setErrors(e => ({ ...e, [k]: false }))
  }
  const toggle = (v: string) => {
    setConds(c => {
      let n = c.includes(v) ? c.filter(x => x !== v) : [...c, v]
      if (v === 'none') n = n.includes('none') ? ['none'] : n
      else n = n.filter(x => x !== 'none')
      return n
    })
    setErrors(e => ({ ...e, conds: false }))
  }

  const addFiles = useCallback((list: FileList | File[]) => {
    setFileErr('')
    const ok: File[] = []
    for (const f of Array.from(list)) {
      if (f.size > MAX_FILE) { setFileErr(`"${f.name}" is over 15MB. Please compress it or send a smaller file.`); continue }
      const okType = OK_TYPES.includes(f.type) || /\.(pdf|jpe?g|png|heic|heif|webp)$/i.test(f.name)
      if (!okType) { setFileErr(`"${f.name}" is not a supported type. Upload PDF or image files.`); continue }
      ok.push(f)
    }
    setFiles(prev => {
      const n = [...prev, ...ok]
      if (n.length > MAX_FILES) { setFileErr(`You can upload up to ${MAX_FILES} files. Extra files were ignored.`); return n.slice(0, MAX_FILES) }
      return n
    })
  }, [])

  const hint = NEURO.has(form.procedure)
    ? 'MRI images and reports, clinical letters, medication list. PDF or images, max 15MB each.'
    : 'Clear photos from the front and sides (no face needed for body procedures), and any relevant reports. PDF or images, max 15MB each.'

  const submit = async () => {
    if (form.trap) { setDoneRef('DONE'); return }
    const errs: Record<string, boolean> = {}
    for (const k of ['procedure', 'fullName', 'age', 'country', 'email'] as const) if (!String(form[k]).trim()) errs[k] = true
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) errs.email = true
    const age = Number(form.age)
    if (form.age && (!Number.isFinite(age) || age < 18 || age > 100)) errs.age = true
    if (conds.length === 0) errs.conds = true
    if (!consent) errs.consent = true
    setErrors(errs)
    if (Object.keys(errs).length) { setSubmitErr('Please complete the highlighted fields.'); return }
    setSubmitErr('')
    setSubmitting(true)
    try {
      const caseRef = makeCaseRef()
      const paths: string[] = []
      for (const f of files) {
        const safe = f.name.replace(/[^\w.\-]+/g, '_').slice(0, 80)
        const path = `patients/${caseRef}/documents/${Date.now()}_${safe}`
        await uploadBytes(storageRef(storage, path), f)
        paths.push(path)
      }
      const name = all.find(a => a.slug === form.procedure)?.name ?? form.procedure
      await addDoc(collection(db, 'cases'), {
        status: 'patient_submitted',
        specialty: form.procedure,
        caseRef,
        sourceChannel: 'oht-records-review',
        completedBy: 'patient',
        patient: { fullName: form.fullName.trim(), age, country: form.country.trim(), email: form.email.trim(), phone: form.phone.trim() },
        enquiry: {
          procedureName: name,
          mainConcern: form.mainConcern.trim(),
          heightCm: form.heightCm.trim(),
          weightKg: form.weightKg.trim(),
          timing: form.timing,
          conditions: conds,
          medicationsAllergies: form.medications.trim(),
          howHeard: form.howHeard.trim(),
        },
        consentGiven: true,
        documents: paths,
        createdAt: serverTimestamp(),
      })
      try {
        await addDoc(collection(db, 'mail'), {
          to: 'kemalper@gmail.com',
          message: {
            subject: `Yeni kayıt incelemesi: ${name} - Ref: ${caseRef}`,
            text: `Yeni bir ön inceleme formu dolduruldu.\n\nReferans: ${caseRef}\nİşlem: ${name}\nDosya sayısı: ${paths.length}\n\nDetaylar Firebase panelinde (cases).`,
          },
        })
      } catch (e) {
        console.error('mail notification failed', e)
      }
      setDoneRef(caseRef)
      topRef.current?.scrollIntoView({ behavior: 'auto', block: 'start' })
    } catch {
      setSubmitErr('We could not submit your form. Check your connection and try again, or message us on WhatsApp.')
    } finally {
      setSubmitting(false)
    }
  }

  const er = (k: string) => (errors[k] ? ' bad' : '')

  if (doneRef) {
    const wa = `https://wa.me/447441904858?text=${encodeURIComponent(`Hello, I just sent my details for review. Reference ${doneRef}`)}`
    return (
      <div className="rf" ref={topRef}>
        <style>{CSS}</style>
        <div className="done">
          <h2>Thank you. Your details have been received.</h2>
          {doneRef !== 'DONE' && <p>Your reference is <b>{doneRef}</b>. Keep it if you contact us.</p>}
          <p>We pass your information to the treating team and come back to you with their view and an itemised quote. For neurosurgery the treating neurosurgeon reviews your imaging first. This is not a medical consultation, and in an emergency you should use emergency services.</p>
          <a className="btn" href={wa} target="_blank" rel="noopener noreferrer">Message us on WhatsApp</a>
        </div>
      </div>
    )
  }

  return (
    <div className="rf" ref={topRef}>
      <style>{CSS}</style>
      <div className="grid">
        <div className={'f' + er('procedure')}>
          <label htmlFor="procedure">Procedure of interest<span>*</span></label>
          <select id="procedure" value={form.procedure} onChange={e => set('procedure', e.target.value)}>
            <option value="">Select…</option>
            {all.map(a => <option key={a.slug} value={a.slug}>{a.name}</option>)}
          </select>
          <small>For deep brain stimulation please use the <Link href="/treatments/dbs-assessment">DBS pre-assessment</Link>.</small>
        </div>
        <div className={'f' + er('timing')}>
          <label htmlFor="timing">When are you hoping to travel?</label>
          <select id="timing" value={form.timing} onChange={e => set('timing', e.target.value)}>
            <option value="">Select…</option>
            {TIMING.map(([v, l]) => <option key={v} value={l}>{l}</option>)}
          </select>
        </div>
        <div className={'f' + er('fullName')}><label htmlFor="fullName">Full name<span>*</span></label><input id="fullName" autoComplete="name" value={form.fullName} onChange={e => set('fullName', e.target.value)} /></div>
        <div className={'f' + er('age')}><label htmlFor="age">Age<span>*</span></label><input id="age" type="number" inputMode="numeric" value={form.age} onChange={e => set('age', e.target.value)} /><small>You must be 18 or over.</small></div>
        <div className={'f' + er('country')}><label htmlFor="country">Country of residence<span>*</span></label><input id="country" autoComplete="country-name" value={form.country} onChange={e => set('country', e.target.value)} /></div>
        <div className={'f' + er('email')}><label htmlFor="email">Email<span>*</span></label><input id="email" type="email" autoComplete="email" value={form.email} onChange={e => set('email', e.target.value)} /></div>
        <div className="f"><label htmlFor="phone">Phone or WhatsApp (optional)</label><input id="phone" type="tel" autoComplete="tel" placeholder="+44 …" value={form.phone} onChange={e => set('phone', e.target.value)} /></div>
        <div className="f two">
          <div><label htmlFor="heightCm">Height, cm (optional)</label><input id="heightCm" type="number" inputMode="numeric" value={form.heightCm} onChange={e => set('heightCm', e.target.value)} /></div>
          <div><label htmlFor="weightKg">Weight, kg (optional)</label><input id="weightKg" type="number" inputMode="numeric" value={form.weightKg} onChange={e => set('weightKg', e.target.value)} /></div>
        </div>
      </div>

      <div className="f"><label htmlFor="mainConcern">What would you like to change or treat? (optional)</label><textarea id="mainConcern" rows={4} value={form.mainConcern} onChange={e => set('mainConcern', e.target.value)} /></div>

      <fieldset className={'f' + er('conds')}>
        <legend>Does any of this apply to you?<span>*</span></legend>
        <div className="checks">
          {CONDITIONS.map(([v, l]) => (
            <label key={v} className="chk"><input type="checkbox" checked={conds.includes(v)} onChange={() => toggle(v)} />{l}</label>
          ))}
        </div>
      </fieldset>

      <div className="f"><label htmlFor="medications">Current medicines and allergies (optional)</label><textarea id="medications" rows={3} value={form.medications} onChange={e => set('medications', e.target.value)} /></div>

      <div className="f">
        <label>Photos and records (optional)</label>
        <div className="drop" role="button" tabIndex={0}
          onClick={() => fileInput.current?.click()}
          onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fileInput.current?.click() } }}
          onDragOver={e => e.preventDefault()}
          onDrop={e => { e.preventDefault(); addFiles(e.dataTransfer.files) }}>
          <div>Drag files here or tap to choose</div>
          <small>{hint}</small>
        </div>
        <input ref={fileInput} type="file" multiple accept=".pdf,image/*" style={{ display: 'none' }} onChange={e => { if (e.target.files) addFiles(e.target.files); e.target.value = '' }} />
        {fileErr && <div className="msg">{fileErr}</div>}
        {files.length > 0 && (
          <ul className="files">
            {files.map((f, i) => (
              <li key={i}><span>{f.name}</span><span>{(f.size / 1024 / 1024).toFixed(1)}MB</span>
                <button type="button" aria-label={`Remove ${f.name}`} onClick={() => setFiles(fs => fs.filter((_, j) => j !== i))}>×</button></li>
            ))}
          </ul>
        )}
      </div>

      <div className="f"><label htmlFor="howHeard">How did you hear about us? (optional)</label><input id="howHeard" value={form.howHeard} onChange={e => set('howHeard', e.target.value)} /></div>

      <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
        <label>Leave this empty<input tabIndex={-1} autoComplete="off" value={form.trap} onChange={e => set('trap', e.target.value)} /></label>
      </div>

      <div className={'consent' + er('consent')}>
        <label>
          <input type="checkbox" checked={consent} onChange={e => { setConsent(e.target.checked); setErrors(x => ({ ...x, consent: false })) }} />
          <span>I explicitly consent to Ocean Health &amp; Travel Ltd processing the health information and files I provide in this form, and sharing them with the hospital and clinicians who assess my case, so that I can receive a quote. I understand this is not a medical consultation. See the <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">privacy policy</a>.</span>
        </label>
      </div>

      {submitErr && <div className="err" role="alert">{submitErr}</div>}
      <button type="button" className="btn" onClick={submit} disabled={submitting}>{submitting ? 'Submitting…' : 'Send for review'}</button>
    </div>
  )
}

const CSS = `
.rf{position:relative;max-width:860px}
.rf *{box-sizing:border-box}
.rf .grid{display:grid;grid-template-columns:1fr 1fr;gap:1.1rem 1.5rem;margin-bottom:1.1rem}
.rf .f{margin-bottom:1.1rem;border:0;padding:0;min-width:0}
.rf .grid .f{margin-bottom:0}
.rf .f.two{display:grid;grid-template-columns:1fr 1fr;gap:1rem}
.rf label,.rf legend{display:block;font-size:14px;font-weight:600;margin-bottom:.4rem;color:#12202B;padding:0}
.rf label span,.rf legend span{color:#b3261e;margin-left:2px}
.rf input[type=text],.rf input[type=email],.rf input[type=tel],.rf input[type=number],.rf input:not([type]),.rf select,.rf textarea{width:100%;padding:12px 14px;border:1px solid #E6E0D4;border-radius:10px;background:#fff;font:inherit;font-size:16px;color:#12202B}
.rf textarea{resize:vertical}
.rf input:focus,.rf select:focus,.rf textarea:focus{outline:2px solid #0B6B55;outline-offset:1px}
.rf .bad input,.rf .bad select,.rf .bad textarea{border-color:#b3261e}
.rf .bad legend{color:#b3261e}
.rf small{display:block;font-size:12.5px;color:#5B6770;margin-top:.35rem;font-weight:400}
.rf small a{color:#0B6B55;border-bottom:1px solid #0B6B55}
.rf .checks{display:grid;grid-template-columns:1fr 1fr;gap:.5rem 1.5rem}
.rf .chk{display:flex;gap:.6rem;align-items:center;font-weight:400;font-size:15px;margin:0}
.rf .chk input{width:18px;height:18px;accent-color:#0B6B55}
.rf .drop{border:1.5px dashed #0B6B55;border-radius:12px;background:#E3F0EA;padding:1.4rem;text-align:center;cursor:pointer;font-size:15px}
.rf .files{list-style:none;margin:.75rem 0 0;padding:0}
.rf .files li{display:flex;gap:.75rem;align-items:center;padding:.45rem 0;border-bottom:1px solid #E6E0D4;font-size:14px}
.rf .files li span:first-child{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.rf .files li span:nth-child(2){color:#5B6770}
.rf .files button{border:0;background:none;font-size:20px;cursor:pointer;color:#5B6770}
.rf .msg{color:#b3261e;font-size:13.5px;margin-top:.5rem}
.rf .consent{background:#fff;border:1px solid #E6E0D4;border-radius:12px;padding:1rem 1.2rem;margin:1.25rem 0}
.rf .consent.bad{border-color:#b3261e}
.rf .consent label{display:flex;gap:.75rem;align-items:flex-start;font-weight:400;font-size:14px;line-height:1.5;margin:0}
.rf .consent input{margin-top:3px;width:18px;height:18px;flex:none;accent-color:#0B6B55}
.rf .consent a{color:#0B6B55;border-bottom:1px solid #0B6B55}
.rf .err{background:#fdecea;color:#8c1d18;border-radius:10px;padding:.8rem 1rem;margin-bottom:1rem;font-size:14.5px}
.rf .btn{display:inline-flex;align-items:center;padding:15px 28px;border:0;border-radius:10px;background:#0B6B55;color:#fff;font-weight:600;font-size:15px;cursor:pointer;text-decoration:none}
.rf .btn:hover{background:#08503F}
.rf .btn:disabled{opacity:.6;cursor:default}
.rf .done{background:#fff;border:1px solid #E6E0D4;border-radius:16px;padding:2rem}
.rf .done h2{font-family:'DM Serif Display',serif;font-weight:400;font-size:28px;margin:0 0 1rem}
.rf .done p{margin:0 0 1rem;font-size:16px}
@media(max-width:700px){.rf .grid,.rf .checks{grid-template-columns:1fr}}
`
