import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Neurosurgery in Istanbul | Ocean Health & Travel',
  description: 'Neurosurgery coordination in Istanbul — deep brain stimulation, disc herniation, brain tumours. JCI-accredited neurosurgical teams. Specialist referral required. Free assessment within 48 hours.',
}

const WA_URL = 'https://wa.me/447441904858?text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20neurosurgery%20in%20Istanbul'

const procedures = [
  {
    name: 'Deep Brain Stimulation (DBS)',
    slug: '/treatments/deep-brain-stimulation-turkey',
    price: 'from £23,700',
    uk: '£40,000 – £60,000+',
    saving: '40–60%',
    desc: 'For Parkinson\'s disease, essential tremor, and dystonia. Two-stage procedure requiring specialist neurological referral.',
    referral: true,
  },
  {
    name: 'Lumbar Disc Herniation',
    slug: null,
    price: 'from £4,000',
    uk: '£8,000 – £15,000',
    saving: '55–75%',
    desc: 'Surgical decompression for lumbar disc herniation causing sciatica or nerve root compression. Microdiscectomy or endoscopic techniques.',
    referral: false,
  },
  {
    name: 'Cervical Disc Herniation',
    slug: null,
    price: 'from £4,750',
    uk: '£10,000 – £18,000',
    saving: '55–75%',
    desc: 'Anterior cervical discectomy and fusion (ACDF) or disc replacement for cervical disc disease causing arm pain or weakness.',
    referral: false,
  },
  {
    name: 'Pituitary Adenoma',
    slug: null,
    price: 'Contact us',
    uk: 'Variable',
    saving: null,
    desc: 'Transsphenoidal or endoscopic resection of pituitary tumours. Requires full endocrinological and neurosurgical assessment.',
    referral: true,
  },
  {
    name: 'Meningioma',
    slug: null,
    price: 'Contact us',
    uk: 'Variable',
    saving: null,
    desc: 'Surgical resection of meningiomas. Approach and complexity depend on tumour size, location, and grade.',
    referral: true,
  },
  {
    name: 'Glial Tumours',
    slug: null,
    price: 'Contact us',
    uk: 'Variable',
    saving: null,
    desc: 'Glioma, glioblastoma, and other glial tumour resection. Requires multidisciplinary neuro-oncology assessment.',
    referral: true,
  },
  {
    name: 'Acoustic Neuroma (Vestibular Schwannoma)',
    slug: null,
    price: 'Contact us',
    uk: 'Variable',
    saving: null,
    desc: 'Surgical or radiosurgical management of vestibular schwannomas. Approach depends on tumour size and hearing status.',
    referral: true,
  },
  {
    name: 'Fetal Myelomeningocele',
    slug: null,
    price: 'Contact us',
    uk: 'Variable',
    saving: null,
    desc: 'Prenatal or postnatal surgical repair of open spinal dysraphism. Requires specialist maternal-fetal medicine and neurosurgical coordination.',
    referral: true,
  },
]

const faqs = [
  {
    q: 'Do I need a referral for neurosurgery in Istanbul?',
    a: 'For most neurosurgical procedures, a referral letter from a neurologist, neurosurgeon, or relevant specialist is required before coordination can begin. For spinal procedures (disc herniation), a GP referral or orthopaedic/neurology letter is helpful but not always mandatory. For complex brain surgery (DBS, tumour resection), full specialist documentation is essential. Ocean Health & Travel does not provide neurological assessments or medical opinions.'
  },
  {
    q: 'How much does neurosurgery cost in Istanbul?',
    a: 'Costs vary significantly by procedure. Deep brain stimulation starts from £23,700 (vs. £40,000–£60,000+ in the UK). Disc surgery starts from £4,000–£4,750 (vs. £8,000–£18,000). Complex brain tumour surgery is quoted individually based on clinical documentation. All quotes are itemised and provided within 48 hours of receiving your medical records.'
  },
  {
    q: 'What documentation do I need to provide?',
    a: 'For spinal procedures: recent MRI spine, clinical summary, and current symptoms. For brain surgery and DBS: specialist referral letter, recent MRI brain, full clinical summary, current medication list, and any previous surgical history. Our physician coordinator will review your documentation and liaise with the neurosurgical team before providing a quote.'
  },
  {
    q: 'How long will I need to stay in Istanbul?',
    a: 'Hospital and Istanbul stay vary by procedure. Disc surgery typically requires 5–10 days in total. DBS surgery requires 2–3 weeks. Complex brain tumour resection may require 3–4 weeks. Your surgical team will advise on the appropriate stay based on your specific case.'
  },
  {
    q: 'Is neurosurgery in Istanbul safe?',
    a: 'Ocean Health & Travel coordinates neurosurgical procedures at JCI-accredited hospitals with internationally trained neurosurgical teams. We do not provide medical advice — all clinical decisions rest with your treating neurosurgical team. As with any neurosurgical procedure, risks are significant and will be discussed in full during pre-operative consultation.'
  },
]

export default function NeurosurgeryPage() {
  return (
    <>
      <style>{`
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth;-webkit-font-smoothing:antialiased}
        body{font-family:'Inter',sans-serif;color:#1a1a1a;background:#fff}
        a{text-decoration:none;color:inherit}
        .inner{max-width:1160px;margin:0 auto;padding:0 2.5rem}
        nav{background:rgba(255,255,255,.96);backdrop-filter:blur(12px);box-shadow:0 1px 0 rgba(0,0,0,.08);position:sticky;top:0;z-index:500}
        .nav-inner{height:66px;display:flex;align-items:center;justify-content:space-between}
        .logo{font-family:'DM Serif Display',serif;font-size:18px;color:#085041;letter-spacing:-.01em}
        .nav-links{display:flex;gap:2rem;list-style:none;align-items:center}
        .nav-links a{font-size:13px;color:#444;transition:color .2s}
        .nav-links a:hover{color:#085041}
        .btn-nav{border:1px solid #085041;padding:8px 18px;border-radius:7px;font-size:13px;font-weight:500;color:#085041!important;transition:all .2s}
        .btn-nav:hover{background:#085041;color:#fff!important}
        .hero{background:linear-gradient(135deg,#1a1a2e 0%,#16213e 50%,#0f3460 100%);padding:100px 0 80px;position:relative;overflow:hidden}
        .hero::before{content:'';position:absolute;width:500px;height:500px;border-radius:50%;background:radial-gradient(circle,rgba(99,102,241,.15) 0%,transparent 70%);top:-100px;right:-100px;pointer-events:none}
        .hero-inner{position:relative;z-index:1}
        .breadcrumb{font-size:12px;color:rgba(255,255,255,.5);margin-bottom:1.25rem}
        .breadcrumb a{color:rgba(255,255,255,.5)}
        .breadcrumb span{margin:0 6px}
        .kicker{font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#a5b4fc;margin-bottom:1rem}
        .warn-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(245,158,11,.15);border:1px solid rgba(245,158,11,.3);border-radius:100px;padding:6px 14px;font-size:12px;font-weight:500;color:#fcd34d;margin-bottom:1.25rem}
        h1{font-family:'DM Serif Display',serif;font-size:clamp(34px,4.5vw,56px);line-height:1.1;letter-spacing:-.025em;color:#fff;margin-bottom:1rem;font-weight:400;max-width:700px}
        h1 em{font-style:italic;color:#a5b4fc}
        .hero-sub{font-size:16px;color:rgba(255,255,255,.72);line-height:1.75;margin-bottom:1.5rem;font-weight:300;max-width:560px}
        .hero-warn{background:rgba(245,158,11,.1);border:1px solid rgba(245,158,11,.25);border-radius:10px;padding:1rem 1.25rem;font-size:13px;color:#fcd34d;line-height:1.65;margin-bottom:2rem;max-width:600px}
        .hero-actions{display:flex;gap:12px;flex-wrap:wrap}
        .btn-primary{background:#fff;color:#1a1a2e;border:none;padding:14px 26px;border-radius:10px;font-size:15px;font-weight:600;display:inline-flex;align-items:center;gap:8px;transition:transform .2s,box-shadow .2s;cursor:pointer;font-family:'Inter',sans-serif;box-shadow:0 4px 20px rgba(0,0,0,.2)}
        .btn-primary:hover{transform:translateY(-2px);box-shadow:0 8px 28px rgba(0,0,0,.3)}
        .btn-ghost{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.35);padding:14px 26px;border-radius:10px;font-size:15px;display:inline-flex;align-items:center;gap:8px;transition:all .2s;cursor:pointer;font-family:'Inter',sans-serif}
        .btn-ghost:hover{background:rgba(255,255,255,.1)}
        .trust-row{display:flex;gap:1.5rem;flex-wrap:wrap;margin-top:1.5rem}
        .trust-item{display:flex;align-items:center;gap:7px;font-size:12.5px;color:rgba(255,255,255,.7)}
        .trust-dot{width:7px;height:7px;border-radius:50%;background:#a5b4fc;flex-shrink:0}
        .sec{padding:5rem 0}
        .sec.bg{background:#fafaf9}
        .sec.border{border-top:1px solid #f0ede8;border-bottom:1px solid #f0ede8}
        h2{font-family:'DM Serif Display',serif;font-size:clamp(26px,3vw,38px);font-weight:400;color:#1a1a1a;letter-spacing:-.02em;line-height:1.2;margin-bottom:1rem}
        .proc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:2rem}
        .proc-card{background:#fff;border:1px solid #f0ede8;border-radius:16px;padding:1.5rem;display:flex;flex-direction:column;transition:transform .25s,box-shadow .25s,border-color .25s}
        .proc-card:hover{transform:translateY(-3px);box-shadow:0 10px 30px rgba(0,0,0,.08);border-color:#c7d2fe}
        .proc-card.featured{border-color:#6366f1;background:#f5f3ff}
        .proc-card.referral-card{border-left:3px solid #f59e0b}
        .ref-badge{display:inline-block;font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;background:#fef3e2;color:#92400e;border:1px solid #fde68a;border-radius:4px;padding:2px 8px;margin-bottom:.6rem}
        .proc-name{font-size:15px;font-weight:600;color:#1a1a1a;margin-bottom:.4rem}
        .proc-desc{font-size:13px;color:#777;line-height:1.65;font-weight:300;margin-bottom:1rem;flex:1}
        .proc-footer{display:flex;justify-content:space-between;align-items:center;padding-top:.85rem;border-top:1px solid #f5f4f2;margin-top:auto}
        .proc-price{font-size:14px;font-weight:600;color:#4f46e5}
        .proc-uk{font-size:11px;color:#aaa;margin-top:2px}
        .proc-saving{font-size:11px;background:#ede9fe;color:#4338ca;border-radius:20px;padding:3px 10px;font-weight:600}
        .proc-link{font-size:12px;color:#4f46e5;font-weight:600;margin-top:.75rem;display:inline-flex;align-items:center;gap:4px}
        .faq-list{display:flex;flex-direction:column;border:1px solid #f0ede8;border-radius:16px;overflow:hidden;margin-top:2.5rem}
        .faq-item{border-bottom:1px solid #f0ede8}
        .faq-item:last-child{border-bottom:none}
        .faq-q{width:100%;text-align:left;padding:1.25rem 1.5rem;background:#fff;border:none;cursor:pointer;font-family:'Inter',sans-serif;font-size:15px;font-weight:500;color:#1a1a1a;display:flex;justify-content:space-between;align-items:center;gap:1rem;transition:background .2s}
        .faq-q:hover{background:#fafaf9}
        .faq-a{padding:0 1.5rem 1.25rem;font-size:14px;color:#666;line-height:1.75;font-weight:300}
        .cta-box{background:linear-gradient(135deg,#1a1a2e,#16213e);border-radius:20px;padding:3rem;text-align:center}
        .cta-box h2{color:#fff;margin-bottom:.75rem}
        .cta-box p{font-size:15px;color:rgba(255,255,255,.6);font-weight:300;line-height:1.7;margin-bottom:2rem;max-width:480px;margin-left:auto;margin-right:auto}
        .cta-btns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}
        .btn-cta-w{background:#a5b4fc;color:#1a1a2e;border:none;padding:14px 28px;border-radius:10px;font-size:15px;font-weight:600;display:inline-flex;align-items:center;gap:8px;cursor:pointer;font-family:'Inter',sans-serif;transition:all .2s}
        .btn-cta-w:hover{background:#c7d2fe}
        .btn-cta-o{background:transparent;color:rgba(255,255,255,.7);border:1px solid rgba(255,255,255,.25);padding:14px 28px;border-radius:10px;font-size:15px;display:inline-flex;align-items:center;gap:8px;cursor:pointer;font-family:'Inter',sans-serif;transition:all .2s}
        .btn-cta-o:hover{background:rgba(255,255,255,.08);color:#fff}
        footer{background:#111;padding:3rem 0 2rem}
        .footer-legal{font-size:11.5px;color:#444;line-height:1.8}
        .footer-legal em{color:#333;font-style:normal;font-size:11px}
        @media(max-width:900px){.proc-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:600px){.proc-grid{grid-template-columns:1fr}.inner{padding:0 1.25rem}.hero{padding:80px 0 60px}.cta-btns{flex-direction:column;align-items:center}}
      `}</style>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a }
        }))
      })}} />

      <nav>
        <div className="inner nav-inner">
          <a href="/" className="logo">Ocean Health &amp; Travel</a>
          <ul className="nav-links">
            <li><a href="/#compare">NHS vs OHT</a></li>
            <li><a href="/#services">Treatments</a></li>
            <li><a href="/#how-it-works">How it works</a></li>
            <li><a href={WA_URL} target="_blank" className="btn-nav">Send documents</a></li>
          </ul>
        </div>
      </nav>

      <section className="hero">
        <div className="inner hero-inner">
          <div className="breadcrumb">
            <a href="/">Home</a><span>›</span>
            <a href="/#services">Treatments</a><span>›</span>
            Neurosurgery Istanbul
          </div>
          <div className="warn-badge">⚠️ Most procedures require specialist referral</div>
          <div className="kicker">Neurosurgery · Istanbul</div>
          <h1>Neurosurgery<br />in Istanbul.<br /><em>JCI-accredited teams.</em></h1>
          <p className="hero-sub">
            Physician-led coordination for neurosurgical procedures in Istanbul. We liaise between you, your UK specialist, and the neurosurgical team — handling documentation, logistics, and interpretation throughout.
          </p>
          <div className="hero-warn">
            <strong>Important:</strong> Most neurosurgical procedures require a referral letter from a neurologist or relevant specialist before coordination can begin. Ocean Health &amp; Travel does not provide neurological assessments or medical opinions. All clinical decisions rest with your treating neurosurgical team.
          </div>
          <div className="hero-actions">
            <a href={WA_URL} target="_blank" className="btn-primary">Send your documents</a>
            <a href="#procedures" className="btn-ghost">View procedures ↓</a>
          </div>
          <div className="trust-row">
            {['Specialist referral required','JCI-accredited hospitals','Physician-led coordination','Full documentation to UK team'].map(t => (
              <div key={t} className="trust-item"><div className="trust-dot"></div>{t}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" id="procedures">
        <div className="inner">
          <div className="kicker">Procedures coordinated</div>
          <h2>Neurosurgery in Istanbul</h2>
          <p style={{fontSize:'15px',color:'#666',lineHeight:1.7,fontWeight:300,maxWidth:'600px',marginBottom:'0'}}>
            Procedures marked ⚠️ require specialist referral documentation before coordination can begin.
          </p>
          <div className="proc-grid">
            {procedures.map(p => (
              <div key={p.name} className={`proc-card${p.slug ? ' featured' : ''}${p.referral ? ' referral-card' : ''}`}>
                {p.referral && <div className="ref-badge">⚠️ Referral required</div>}
                <div className="proc-name">{p.name}</div>
                <div className="proc-desc">{p.desc}</div>
                <div className="proc-footer">
                  <div>
                    <div className="proc-price">{p.price}</div>
                    <div className="proc-uk">UK: {p.uk}</div>
                  </div>
                  {p.saving && <span className="proc-saving">{p.saving}</span>}
                </div>
                {p.slug
                  ? <a href={p.slug} className="proc-link">Full procedure guide →</a>
                  : <a href={WA_URL} target="_blank" className="proc-link">Send documents →</a>
                }
              </div>
            ))}
          </div>
          <p style={{fontSize:'12px',color:'#bbb',marginTop:'1.5rem',lineHeight:1.6}}>
            Prices indicative and highly variable by case complexity. Coordination fee quoted separately. Flights not included. Ocean Health &amp; Travel is a coordinator, not a medical provider.
          </p>
        </div>
      </section>

      <section className="sec bg border" id="faq">
        <div className="inner">
          <div className="kicker">Common questions</div>
          <h2>Neurosurgery Istanbul — FAQ</h2>
          <div className="faq-list">
            {faqs.map(f => (
              <details key={f.q} className="faq-item">
                <summary className="faq-q">
                  {f.q}
                  <span style={{fontSize:'18px',color:'#6366f1',flexShrink:0}}>+</span>
                </summary>
                <div className="faq-a">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="inner">
          <div className="cta-box">
            <h2>Ready to send your documents?</h2>
            <p>Send your referral letter and clinical notes. Our physician coordinator will review and respond within 48 hours.</p>
            <div className="cta-btns">
              <a href={WA_URL} target="_blank" className="btn-cta-w">💬 WhatsApp us</a>
              <a href="mailto:info@oceanhealthtravel.com" className="btn-cta-o">✉️ Email documents</a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="inner">
          <div className="footer-legal">
            © 2025 Ocean Health &amp; Travel Ltd · Registered in England &amp; Wales · Company no. 16186647<br />
            London: 17 Green Lanes, N16 9BS · Fethiye: Karagözler Mah., Fevzi Çakmak Cad. No:11/A, Muğla ·{' '}
            <a href="mailto:info@oceanhealthtravel.com" style={{color:'#555'}}>info@oceanhealthtravel.com</a> ·{' '}
            <a href="tel:+447441904858" style={{color:'#555'}}>+44 7441 904858</a><br />
            Flights not included · Client money protected via Trust Account · Coordinator, not a medical provider · Elective procedures only<br />
            <em>Ocean Health &amp; Travel does not provide medical advice. All clinical decisions rest with your treating neurosurgical team. Not suitable for emergencies.</em>
          </div>
        </div>
      </footer>
    </>
  )
}
