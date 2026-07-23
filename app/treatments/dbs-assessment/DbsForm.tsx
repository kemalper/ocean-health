'use client'
import { useState, useRef, useCallback } from 'react'
import { useSearchParams } from 'next/navigation'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { ref as storageRef, uploadBytes } from 'firebase/storage'
import { db, storage } from '@/app/lib/firebase'

/* ---------- notification routing ---------- */
const WA_NUMBERS: Record<string, string> = {
  oht: '447441904858',
  mustafa: '905314607738',
}

/* ---------- case reference ---------- */
const REF_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789' // 0/O, 1/I removed
function makeCaseRef(): string {
  const arr = new Uint32Array(6)
  crypto.getRandomValues(arr)
  return Array.from(arr, n => REF_ALPHABET[n % REF_ALPHABET.length]).join('')
}

/* ---------- i18n ---------- */
type Lang = 'en' | 'tr'
const T = {
  en: {
    kicker: 'Neurosurgery · Istanbul',
    title: 'DBS Pre-Assessment',
    sub: 'Complete this form to have your case reviewed by the neurosurgical team. It takes about 5–7 minutes. Ocean Health & Travel forwards your information to the specialist team — all clinical decisions rest with the treating physicians.',
    steps: ['Personal', 'Diagnosis', 'Medication', 'Health', 'Submit'],
    back: 'Back', next: 'Next', submit: 'Submit pre-assessment', submitting: 'Submitting…',
    required: 'This field is required.',
    atLeastOne: 'Please select at least one option.',
    stepIncomplete: 'Please complete the highlighted fields to continue.',
    s1: 'Personal Information',
    fullName: 'Full name', age: 'Age', country: 'Country / City', email: 'Email',
    phone: 'WhatsApp / Phone', completedBy: 'Who is completing this form?',
    completedByOpts: { patient: 'The patient', spouse: 'Spouse / partner', child: 'Child or sibling', family: 'Other family member' },
    select: 'Please select…',
    s2: "Parkinson's Diagnosis",
    yearOfDiagnosis: 'Year of diagnosis', diseaseDuration: 'Disease duration (years)',
    onsetSide: 'Which side did symptoms start?',
    sides: { left: 'Left', right: 'Right', both: 'Both' },
    otherSide: 'Has the other side been affected over time?',
    otherSideOpts: { no: 'No', mild: 'Mildly', significant: 'Significantly' },
    symptoms: 'Main symptoms',
    symptomOpts: { tremor: 'Tremor', bradykinesia: 'Slowness of movement (bradykinesia)', rigidity: 'Stiffness (rigidity)', balance: 'Balance / walking problems', freezing: 'Freezing episodes', speech: 'Speech / swallowing difficulties' },
    s3: 'Medication & Treatment',
    levodopaUse: 'Does the patient use Levodopa?',
    levodopaOpts: { yes: 'Yes, currently', never: 'Never used', stopped: 'Used before, stopped' },
    levodopaImprovement: 'Improvement after Levodopa',
    improvementOpts: { none: 'None', mild: 'Mild', moderate: 'Moderate', good: 'Good', excellent: 'Excellent' },
    currentMeds: "Current Parkinson's medications",
    currentMedsPh: 'e.g. Madopar 125mg 4× daily, Requip 8mg…',
    dyskinesia: 'Involuntary movements (dyskinesia)?',
    dyskinesiaOpts: { no: 'No', mild: 'Mild', severe: 'Severe' },
    wearingOff: 'Does medication wear off before the next dose?',
    wearingOffOpts: { no: 'No', sometimes: 'Sometimes', regularly: 'Regularly' },
    s4: 'Memory, Mental & General Health',
    memoryProblems: 'Memory / thinking problems',
    memoryOpts: { none: 'None', mild: 'Mild', moderate: 'Moderate', severe: 'Severe' },
    psychHistory: 'Psychiatric history',
    psychOpts: { none: 'None', depression: 'Depression', anxiety: 'Anxiety', hallucinations: 'Hallucinations / delusions', impulse: 'Impulse control problems' },
    conditions: 'Other significant conditions',
    conditionOpts: { none: 'None', heart: 'Heart disease', pacemaker: 'Pacemaker / ICD', bloodThinners: 'Blood thinners', diabetes: 'Diabetes', kidneyLiver: 'Kidney / liver disease', cancer: 'Active cancer' },
    mriStatus: 'Is a brain MRI available?',
    mriOpts: { normal: 'Yes — reported normal', findings: 'Yes — with findings', notDone: 'Not done yet' },
    s5: 'Expectations & Documents',
    mainComplaint: 'What bothers the patient most right now?',
    expectation: 'What does the patient hope to achieve from surgery?',
    additionalNotes: "Anything else you'd like us to know?",
    howHeard: 'How did you hear about us?',
    upload: 'Documents (optional)',
    uploadHint: 'MRI reports, neurology letters, medication lists — PDF or images, max 15MB per file.',
    uploadDrop: 'Drag files here or tap to choose',
    fileTooBig: (n: string) => `"${n}" exceeds the 15MB limit. Compress it or upload a smaller file.`,
    fileBadType: (n: string) => `"${n}" is not a supported type. Upload PDF or image files.`,
    consent: 'I consent to {{BRAND}} processing the health information provided in this form for the purpose of forwarding it to the partner neurosurgical team for review, as described in the',
    consentLink: 'Privacy Policy',
    consentEnd: '. I understand this form does not constitute a medical consultation.',
    submitErr: 'Submission failed. Please check your connection and try again.',
    successTitle: 'Pre-assessment received',
    successBody: 'Your reference code is below. The neurosurgical team will review your information and we will contact you, typically within 48 hours.',
    successRef: 'Your reference',
    waBtn: 'Notify via WhatsApp',
    langBtn: 'TR',
  },
  tr: {
    kicker: 'Beyin Cerrahisi · İstanbul',
    title: 'DBS Ön Değerlendirme',
    sub: 'Vakanızın beyin cerrahisi ekibi tarafından incelenmesi için bu formu doldurun. Yaklaşık 5–7 dakika sürer. Ocean Health & Travel bilgilerinizi uzman ekibe iletir — tüm klinik kararlar tedavi eden hekimlere aittir.',
    steps: ['Kişisel', 'Tanı', 'İlaç', 'Sağlık', 'Gönder'],
    back: 'Geri', next: 'İleri', submit: 'Ön değerlendirmeyi gönder', submitting: 'Gönderiliyor…',
    required: 'Bu alan zorunludur.',
    atLeastOne: 'Lütfen en az bir seçenek işaretleyin.',
    stepIncomplete: 'Devam etmek için işaretli alanları doldurun.',
    s1: 'Kişisel Bilgiler',
    fullName: 'Ad soyad', age: 'Yaş', country: 'Ülke / Şehir', email: 'E-posta',
    phone: 'WhatsApp / Telefon', completedBy: 'Formu kim dolduruyor?',
    completedByOpts: { patient: 'Hastanın kendisi', spouse: 'Eşi / partneri', child: 'Çocuğu veya kardeşi', family: 'Diğer aile üyesi' },
    select: 'Seçiniz…',
    s2: 'Parkinson Tanısı',
    yearOfDiagnosis: 'Tanı yılı', diseaseDuration: 'Hastalık süresi (yıl)',
    onsetSide: 'Belirtiler hangi tarafta başladı?',
    sides: { left: 'Sol', right: 'Sağ', both: 'Her iki taraf' },
    otherSide: 'Zamanla diğer taraf da etkilendi mi?',
    otherSideOpts: { no: 'Hayır', mild: 'Hafif', significant: 'Belirgin' },
    symptoms: 'Ana belirtiler',
    symptomOpts: { tremor: 'Titreme (tremor)', bradykinesia: 'Hareketlerde yavaşlama', rigidity: 'Katılık (rijidite)', balance: 'Denge / yürüme sorunları', freezing: 'Donma atakları', speech: 'Konuşma / yutma güçlüğü' },
    s3: 'İlaç ve Tedavi',
    levodopaUse: 'Hasta Levodopa kullanıyor mu?',
    levodopaOpts: { yes: 'Evet, halen', never: 'Hiç kullanmadı', stopped: 'Kullandı, bıraktı' },
    levodopaImprovement: 'Levodopa sonrası düzelme',
    improvementOpts: { none: 'Yok', mild: 'Hafif', moderate: 'Orta', good: 'İyi', excellent: 'Çok iyi' },
    currentMeds: 'Kullanılan Parkinson ilaçları',
    currentMedsPh: 'örn. Madopar 125mg günde 4×, Requip 8mg…',
    dyskinesia: 'İstemsiz hareketler (diskinezi)?',
    dyskinesiaOpts: { no: 'Yok', mild: 'Hafif', severe: 'Şiddetli' },
    wearingOff: 'İlaç etkisi bir sonraki dozdan önce geçiyor mu?',
    wearingOffOpts: { no: 'Hayır', sometimes: 'Bazen', regularly: 'Düzenli olarak' },
    s4: 'Bellek, Ruh Sağlığı ve Genel Sağlık',
    memoryProblems: 'Bellek / düşünme sorunları',
    memoryOpts: { none: 'Yok', mild: 'Hafif', moderate: 'Orta', severe: 'Şiddetli' },
    psychHistory: 'Psikiyatrik öykü',
    psychOpts: { none: 'Yok', depression: 'Depresyon', anxiety: 'Anksiyete', hallucinations: 'Halüsinasyon / sanrı', impulse: 'Dürtü kontrol sorunları' },
    conditions: 'Diğer önemli hastalıklar',
    conditionOpts: { none: 'Yok', heart: 'Kalp hastalığı', pacemaker: 'Kalp pili / ICD', bloodThinners: 'Kan sulandırıcı', diabetes: 'Diyabet', kidneyLiver: 'Böbrek / karaciğer hastalığı', cancer: 'Aktif kanser' },
    mriStatus: 'Beyin MR görüntülemesi var mı?',
    mriOpts: { normal: 'Evet — normal raporlu', findings: 'Evet — bulgulu', notDone: 'Henüz yapılmadı' },
    s5: 'Beklentiler ve Belgeler',
    mainComplaint: 'Hastayı şu an en çok ne rahatsız ediyor?',
    expectation: 'Hasta ameliyattan ne bekliyor?',
    additionalNotes: 'Bilmemizi istediğiniz başka bir şey var mı?',
    howHeard: 'Bizi nereden duydunuz?',
    upload: 'Belgeler (isteğe bağlı)',
    uploadHint: 'MR raporları, nöroloji mektupları, ilaç listeleri — PDF veya görsel, dosya başına en fazla 15MB.',
    uploadDrop: 'Dosyaları buraya sürükleyin veya seçmek için dokunun',
    fileTooBig: (n: string) => `"${n}" 15MB sınırını aşıyor. Sıkıştırın veya daha küçük bir dosya yükleyin.`,
    fileBadType: (n: string) => `"${n}" desteklenmeyen bir tür. PDF veya görsel dosyası yükleyin.`,
    consent: "Bu formda verdiğim sağlık bilgilerinin, inceleme amacıyla partner beyin cerrahisi ekibine iletilmesi için {{BRAND}} tarafından işlenmesine, ",
    consentLink: 'Gizlilik Politikası',
    consentEnd: "'nda açıklandığı şekilde açık rıza veriyorum. Bu formun tıbbi bir muayene yerine geçmediğini anlıyorum.",
    submitErr: 'Gönderim başarısız oldu. Bağlantınızı kontrol edip tekrar deneyin.',
    successTitle: 'Ön değerlendirme alındı',
    successBody: 'Referans kodunuz aşağıdadır. Beyin cerrahisi ekibi bilgilerinizi inceleyecek ve genellikle 48 saat içinde sizinle iletişime geçeceğiz.',
    successRef: 'Referans kodunuz',
    waBtn: "WhatsApp'tan bildir",
    langBtn: 'EN',
  },
} as const

/* ---------- form state ---------- */
type FormState = {
  fullName: string; age: string; country: string; email: string; phone: string; completedBy: string
  yearOfDiagnosis: string; diseaseDuration: string; onsetSide: string; otherSideAffected: string; symptoms: string[]
  levodopaUse: string; levodopaImprovement: string; currentMeds: string; dyskinesia: string; wearingOff: string
  memoryProblems: string; psychHistory: string[]; conditions: string[]; mriStatus: string
  mainComplaint: string; expectation: string; additionalNotes: string; howHeard: string
  consentGiven: boolean
}
const INITIAL: FormState = {
  fullName: '', age: '', country: '', email: '', phone: '', completedBy: '',
  yearOfDiagnosis: '', diseaseDuration: '', onsetSide: '', otherSideAffected: '', symptoms: [],
  levodopaUse: '', levodopaImprovement: '', currentMeds: '', dyskinesia: '', wearingOff: '',
  memoryProblems: '', psychHistory: [], conditions: [], mriStatus: '',
  mainComplaint: '', expectation: '', additionalNotes: '', howHeard: '',
  consentGiven: false,
}

const MAX_FILE = 15 * 1024 * 1024
const OK_TYPES = ['application/pdf', 'image/jpeg', 'image/png', 'image/heic', 'image/heif', 'image/webp']

export default function DbsForm({ brand = 'oht' }: { brand?: 'oht' | 'surgicheck' }) {
  const searchParams = useSearchParams()
  const rawSource = (searchParams.get('source') || '').toLowerCase()
  const sourceChannel: 'oht' | 'mustafa' = rawSource === 'mustafa' ? 'mustafa' : 'oht'
  const waTarget = WA_NUMBERS[sourceChannel]

  const [lang, setLang] = useState<Lang>('en')
  const t = T[lang]
  const [step, setStep] = useState(0)
  const [form, setForm] = useState<FormState>(INITIAL)
  const [errors, setErrors] = useState<Record<string, boolean>>({})
  const [stepMsg, setStepMsg] = useState('')
  const [files, setFiles] = useState<File[]>([])
  const [fileErr, setFileErr] = useState('')
  const [dragOver, setDragOver] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitErr, setSubmitErr] = useState('')
  const [doneRef, setDoneRef] = useState<string | null>(null)
  const fileInput = useRef<HTMLInputElement>(null)
  const topRef = useRef<HTMLDivElement>(null)

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) => {
    setForm(f => ({ ...f, [k]: v }))
    setErrors(e => ({ ...e, [k]: false }))
    setStepMsg('')
  }
  const toggleArr = (k: 'symptoms' | 'psychHistory' | 'conditions', v: string) => {
    setForm(f => {
      let next = f[k].includes(v) ? f[k].filter(x => x !== v) : [...f[k], v]
      if (k !== 'symptoms') {
        if (v === 'none') next = next.includes('none') ? ['none'] : next
        else next = next.filter(x => x !== 'none')
      }
      return { ...f, [k]: next }
    })
    setErrors(e => ({ ...e, [k]: false }))
    setStepMsg('')
  }

  /* ---------- validation ---------- */
  const REQUIRED_BY_STEP: (keyof FormState)[][] = [
    ['fullName', 'age', 'country', 'email', 'completedBy'],
    ['yearOfDiagnosis', 'onsetSide', 'symptoms'],
    ['levodopaUse'],
    ['memoryProblems', 'mriStatus'],
    ['consentGiven'],
  ]
  const validateStep = (s: number): boolean => {
    const errs: Record<string, boolean> = {}
    for (const k of REQUIRED_BY_STEP[s]) {
      const v = form[k]
      if (Array.isArray(v) ? v.length === 0 : typeof v === 'boolean' ? !v : !String(v).trim()) errs[k] = true
    }
    if (s === 0 && form.email && !/^\S+@\S+\.\S+$/.test(form.email)) errs.email = true
    setErrors(errs)
    const bad = Object.keys(errs).length > 0
    setStepMsg(bad ? t.stepIncomplete : '')
    return !bad
  }
  const goNext = () => { if (validateStep(step)) { setStep(s => s + 1); topRef.current?.scrollIntoView({ behavior: 'auto', block: 'start' }) } }
  const goBack = () => { setStep(s => Math.max(0, s - 1)); setStepMsg('') }

  /* ---------- files ---------- */
  const addFiles = useCallback((list: FileList | File[]) => {
    setFileErr('')
    const accepted: File[] = []
    for (const f of Array.from(list)) {
      if (f.size > MAX_FILE) { setFileErr(t.fileTooBig(f.name)); continue }
      const okType = OK_TYPES.includes(f.type) || /\.(pdf|jpe?g|png|heic|heif|webp)$/i.test(f.name)
      if (!okType) { setFileErr(t.fileBadType(f.name)); continue }
      accepted.push(f)
    }
    if (accepted.length) setFiles(prev => [...prev, ...accepted])
  }, [t])

  /* ---------- submit ---------- */
  const handleSubmit = async () => {
    if (!validateStep(4)) return
    setSubmitting(true)
    setSubmitErr('')
    try {
      const caseRef = makeCaseRef()
      // 1) upload files first
      const paths: string[] = []
      for (const f of files) {
        const safe = f.name.replace(/[^\w.\-]+/g, '_')
        const path = `patients/${caseRef}/documents/${Date.now()}_${safe}`
        await uploadBytes(storageRef(storage, path), f)
        paths.push(path)
      }
      // 2) single Firestore create (rules forbid update)
      await addDoc(collection(db, 'cases'), {
        status: 'patient_submitted',
        specialty: 'dbs',
        caseRef,
        sourceChannel,
        completedBy: form.completedBy,
        patient: { fullName: form.fullName.trim(), age: Number(form.age), country: form.country.trim(), email: form.email.trim(), phone: form.phone.trim() },
        diagnosis: { yearOfDiagnosis: form.yearOfDiagnosis, diseaseDuration: form.diseaseDuration, onsetSide: form.onsetSide, otherSideAffected: form.otherSideAffected, symptoms: form.symptoms },
        medication: { levodopaUse: form.levodopaUse, levodopaImprovement: form.levodopaImprovement, currentMeds: form.currentMeds.trim(), dyskinesia: form.dyskinesia, wearingOff: form.wearingOff },
        cognition: { memoryProblems: form.memoryProblems, psychHistory: form.psychHistory },
        health: { conditions: form.conditions, mriStatus: form.mriStatus },
        expectations: { mainComplaint: form.mainComplaint.trim(), expectation: form.expectation.trim(), additionalNotes: form.additionalNotes.trim(), howHeard: form.howHeard.trim() },
        consentGiven: true,
        documents: paths,
        createdAt: serverTimestamp(),
      })

      // 3) email notification — separate write, must not affect success screen if it fails
      try {
        const recipientEmail = sourceChannel === 'mustafa'
          ? 'drmustafasakar@gmail.com'
          : 'kemalper@gmail.com'
        await addDoc(collection(db, 'mail'), {
          to: recipientEmail,
          message: {
            subject: `Yeni DBS başvurusu — Ref: ${caseRef}`,
            text: `Yeni bir DBS ön değerlendirme formu dolduruldu.\n\nReferans: ${caseRef}\nKaynak: ${sourceChannel}\n\nDetaylar için Firebase panelinden incelenebilir.`,
          },
        })
      } catch (mailErr) {
        console.error('mail notification failed', mailErr)
      }

      setDoneRef(caseRef)
      topRef.current?.scrollIntoView({ behavior: 'auto', block: 'start' })
    } catch {
      setSubmitErr(t.submitErr)
    } finally {
      setSubmitting(false)
    }
  }

  /* ---------- small field components ---------- */
  const err = (k: string) => (errors[k] ? ' field-err' : '')
  const Text = ({ k, label, type = 'text', ph, req }: { k: keyof FormState; label: string; type?: string; ph?: string; req?: boolean }) => (
    <div className="field">
      <label htmlFor={k}>{label}{req && <span className="req">*</span>}</label>
      <input id={k} type={type} inputMode={type === 'number' ? 'numeric' : undefined} value={form[k] as string} placeholder={ph}
        onChange={e => set(k, e.target.value as never)} className={err(k)} />
      {errors[k] && <div className="field-msg">{t.required}</div>}
    </div>
  )
  const Radio = ({ k, label, opts, req }: { k: keyof FormState; label: string; opts: Record<string, string>; req?: boolean }) => (
    <div className={'field' + err(k)} role="radiogroup" aria-label={label}>
      <label>{label}{req && <span className="req">*</span>}</label>
      <div className="chip-row">
        {Object.entries(opts).map(([val, txt]) => (
          <button key={val} type="button" role="radio" aria-checked={form[k] === val}
            className={'chip' + (form[k] === val ? ' on' : '')} onClick={() => set(k, val as never)}>{txt}</button>
        ))}
      </div>
      {errors[k] && <div className="field-msg">{t.required}</div>}
    </div>
  )
  const Checks = ({ k, label, opts, req }: { k: 'symptoms' | 'psychHistory' | 'conditions'; label: string; opts: Record<string, string>; req?: boolean }) => (
    <div className={'field' + err(k)}>
      <label>{label}{req && <span className="req">*</span>}</label>
      <div className="chip-row">
        {Object.entries(opts).map(([val, txt]) => (
          <button key={val} type="button" role="checkbox" aria-checked={form[k].includes(val)}
            className={'chip' + (form[k].includes(val) ? ' on' : '')} onClick={() => toggleArr(k, val)}>{txt}</button>
        ))}
      </div>
      {errors[k] && <div className="field-msg">{t.atLeastOne}</div>}
    </div>
  )
  const Select = ({ k, label, opts, req }: { k: keyof FormState; label: string; opts: Record<string, string>; req?: boolean }) => (
    <div className="field">
      <label htmlFor={k}>{label}{req && <span className="req">*</span>}</label>
      <select id={k} value={form[k] as string} onChange={e => set(k, e.target.value as never)} className={err(k)}>
        <option value="">{t.select}</option>
        {Object.entries(opts).map(([val, txt]) => <option key={val} value={val}>{txt}</option>)}
      </select>
      {errors[k] && <div className="field-msg">{t.required}</div>}
    </div>
  )
  const Area = ({ k, label, ph }: { k: keyof FormState; label: string; ph?: string }) => (
    <div className="field">
      <label htmlFor={k}>{label}</label>
      <textarea id={k} rows={3} value={form[k] as string} placeholder={ph} onChange={e => set(k, e.target.value as never)} />
    </div>
  )

  /* ---------- success screen ---------- */
  if (doneRef) {
    const waMsg = encodeURIComponent(`DBS application — Ref: ${doneRef}`)
    return (
      <div className="form-wrap" ref={topRef}>
        <div className="card success">
          <div className="success-icon">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#085041" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
          </div>
          <h2>{t.successTitle}</h2>
          <p className="success-body">{t.successBody}</p>
          <div className="ref-label">{t.successRef}</div>
          <div className="ref-code">{doneRef}</div>
          <a className="btn-submit wa" href={`https://wa.me/${waTarget}?text=${waMsg}`} target="_blank" rel="noopener">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.1 4.49.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35z"/><path d="M12.05 2a9.95 9.95 0 00-8.6 14.93L2 22l5.2-1.36A9.95 9.95 0 1012.05 2zm0 18.1a8.14 8.14 0 01-4.15-1.14l-.3-.18-3.08.8.82-3-.2-.31a8.15 8.15 0 1113.06-9.72 8.15 8.15 0 01-6.15 13.55z"/></svg>
            {t.waBtn}
          </a>
        </div>
      </div>
    )
  }

  /* ---------- wizard ---------- */
  return (
    <div className="form-wrap" ref={topRef}>
      {/* progress */}
      <div className="progress" aria-label={`Step ${step + 1} of 5`}>
        {t.steps.map((s, i) => (
          <div key={s} className={'p-step' + (i === step ? ' cur' : i < step ? ' done' : '')}>
            <div className="p-dot">{i < step ? '✓' : i + 1}</div>
            <div className="p-label">{s}</div>
          </div>
        ))}
        <div className="p-bar"><div className="p-fill" style={{ width: `${(step / 4) * 100}%` }} /></div>
      </div>

      <div className="card">
        {step === 0 && (
          <>
            <h2>{t.s1}</h2>
            <div className="grid2">
              {Text({ k: "fullName", label: t.fullName, req: true })}
              {Text({ k: "age", label: t.age, type: "number", req: true })}
              {Text({ k: "country", label: t.country, req: true })}
              {Text({ k: "email", label: t.email, type: "email", req: true })}
              {Text({ k: "phone", label: t.phone, type: "tel", ph: "+44 …" })}
              {Select({ k: "completedBy", label: t.completedBy, opts: t.completedByOpts, req: true })}
            </div>
          </>
        )}
        {step === 1 && (
          <>
            <h2>{t.s2}</h2>
            <div className="grid2">
              {Text({ k: "yearOfDiagnosis", label: t.yearOfDiagnosis, type: "number", ph: "e.g. 2016", req: true })}
              {Text({ k: "diseaseDuration", label: t.diseaseDuration, type: "number" })}
            </div>
            {Radio({ k: "onsetSide", label: t.onsetSide, opts: t.sides, req: true })}
            {Radio({ k: "otherSideAffected", label: t.otherSide, opts: t.otherSideOpts })}
            {Checks({ k: "symptoms", label: t.symptoms, opts: t.symptomOpts, req: true })}
          </>
        )}
        {step === 2 && (
          <>
            <h2>{t.s3}</h2>
            {Radio({ k: "levodopaUse", label: t.levodopaUse, opts: t.levodopaOpts, req: true })}
            {Select({ k: "levodopaImprovement", label: t.levodopaImprovement, opts: t.improvementOpts })}
            {Area({ k: "currentMeds", label: t.currentMeds, ph: t.currentMedsPh })}
            {Radio({ k: "dyskinesia", label: t.dyskinesia, opts: t.dyskinesiaOpts })}
            {Radio({ k: "wearingOff", label: t.wearingOff, opts: t.wearingOffOpts })}
          </>
        )}
        {step === 3 && (
          <>
            <h2>{t.s4}</h2>
            {Select({ k: "memoryProblems", label: t.memoryProblems, opts: t.memoryOpts, req: true })}
            {Checks({ k: "psychHistory", label: t.psychHistory, opts: t.psychOpts })}
            {Checks({ k: "conditions", label: t.conditions, opts: t.conditionOpts })}
            {Radio({ k: "mriStatus", label: t.mriStatus, opts: t.mriOpts, req: true })}
          </>
        )}
        {step === 4 && (
          <>
            <h2>{t.s5}</h2>
            {Area({ k: "mainComplaint", label: t.mainComplaint })}
            {Area({ k: "expectation", label: t.expectation })}
            {Area({ k: "additionalNotes", label: t.additionalNotes })}
            {Text({ k: "howHeard", label: t.howHeard })}

            <div className="field">
              <label>{t.upload}</label>
              <div className={'dropzone' + (dragOver ? ' over' : '')}
                onDragOver={e => { e.preventDefault(); setDragOver(true) }}
                onDragLeave={() => setDragOver(false)}
                onDrop={e => { e.preventDefault(); setDragOver(false); addFiles(e.dataTransfer.files) }}
                onClick={() => fileInput.current?.click()}
                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fileInput.current?.click() } }}
                tabIndex={0} role="button" aria-label={t.uploadDrop}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#085041" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><path d="M17 8l-5-5-5 5"/><path d="M12 3v12"/></svg>
                <div>{t.uploadDrop}</div>
                <div className="drop-hint">{t.uploadHint}</div>
              </div>
              <input ref={fileInput} type="file" multiple accept=".pdf,image/*" style={{ display: 'none' }}
                onChange={e => { if (e.target.files) addFiles(e.target.files); e.target.value = '' }} />
              {fileErr && <div className="field-msg">{fileErr}</div>}
              {files.length > 0 && (
                <ul className="file-list">
                  {files.map((f, i) => (
                    <li key={i}>
                      <span className="file-name">{f.name}</span>
                      <span className="file-size">{(f.size / 1024 / 1024).toFixed(1)}MB</span>
                      <button type="button" aria-label={`Remove ${f.name}`} onClick={() => setFiles(fs => fs.filter((_, j) => j !== i))}>×</button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className={'consent' + err('consentGiven')}>
              <label className="consent-label">
                <input type="checkbox" checked={form.consentGiven} onChange={e => set('consentGiven', e.target.checked)} />
                <span>{t.consent.replace('{{BRAND}}', brand === 'surgicheck' ? 'SurgiCheck' : 'Ocean Health & Travel')} <a href={brand === 'surgicheck' ? 'https://www.surgicheck.net/privacy-en.html' : '/privacy-policy'} target="_blank">{t.consentLink}</a>{t.consentEnd}</span>
              </label>
              {errors.consentGiven && <div className="field-msg">{t.required}</div>}
            </div>
            {submitErr && <div className="submit-err" role="alert">{submitErr}</div>}
          </>
        )}

        {stepMsg && <div className="step-msg" role="alert">{stepMsg}</div>}

        <div className="wiz-nav">
          {step > 0 ? <button type="button" className="btn-back" onClick={goBack} disabled={submitting}>← {t.back}</button> : <span />}
          {step < 4
            ? <button type="button" className="btn-submit" onClick={goNext}>{t.next} →</button>
            : <button type="button" className="btn-submit" onClick={handleSubmit} disabled={submitting}>{submitting ? t.submitting : t.submit}</button>}
        </div>
      </div>

      {/* language toggle rendered by parent via prop-less pattern: expose here */}
      <button type="button" className="lang-toggle" onClick={() => setLang(l => (l === 'en' ? 'tr' : 'en'))} aria-label="Change language">
        {t.langBtn}
      </button>
    </div>
  )
}
