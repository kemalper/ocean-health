import type { Metadata } from 'next'
import Nav from '@/app/components/Nav'

export const metadata: Metadata = {
  title: 'Deep Brain Stimulation in Turkey | From £23,700 | Ocean Health & Travel',
  description: 'Deep brain stimulation (DBS) for Parkinson\'s disease in Istanbul from £23,700 — vs. £40,000–£60,000+ at UK private centres. JCI-accredited neurosurgical teams, physician-led coordination. Specialist referral required.',
}

const WA_URL = 'https://wa.me/447441904858?text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20deep%20brain%20stimulation%20in%20Turkey'

const faqs = [
  {
    q: 'How much does deep brain stimulation cost in Turkey?',
    a: 'Deep brain stimulation (DBS) in Istanbul starts from £23,700, compared to £40,000–£60,000+ at UK private neurosurgical centres. Exact pricing depends on the specific device used, surgical complexity, and length of hospital stay. A detailed itemised quote is provided following review of your clinical documentation.'
  },
  {
    q: 'Is a referral required for DBS surgery in Istanbul?',
    a: 'Yes. Deep brain stimulation is a complex neurosurgical procedure requiring specialist referral and full clinical assessment before coordination can begin. You will need to provide a referral letter from a neurologist or movement disorder specialist, along with recent imaging and clinical notes. Ocean Health & Travel does not provide medical assessments or referrals.'
  },
  {
    q: 'Which conditions is DBS used for?',
    a: 'Deep brain stimulation is most commonly used for Parkinson\'s disease, essential tremor, and dystonia. It may also be considered for obsessive-compulsive disorder (OCD) and epilepsy in selected cases. Suitability is determined by your neurological specialist, not by Ocean Health & Travel.'
  },
  {
    q: 'How long does DBS surgery take and what is the recovery?',
    a: 'DBS surgery is typically performed in stages. The electrode implantation procedure takes 4–6 hours and is often performed under local anaesthesia with the patient awake to enable real-time feedback. The pulse generator (battery) is implanted in a separate procedure under general anaesthesia. Hospital stay is typically 5–10 days. Most patients remain in Istanbul for 2–3 weeks post-operatively before flying home.'
  },
  {
    q: 'What documentation do I need to provide?',
    a: 'To initiate the coordination process, we require: a referral letter from your neurologist or movement disorder specialist; recent MRI brain imaging; a summary of your current medication and symptom history; and details of any previous neurosurgical procedures. Our physician coordinator will review your documentation and liaise with the neurosurgical team.'
  },
  {
    q: 'What coordination services are included?',
    a: 'Our coordination package includes airport transfer, hotel accommodation near the hospital, professional medical interpretation at all appointments and during surgery, and full clinic liaison throughout your stay. Post-discharge documentation — including operative notes and follow-up instructions — is forwarded to your UK neurologist and GP on request. Flights are not included.'
  },
]

export default function DBSPage() {
  return (
    <>
      <style>{`
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth;-webkit-font-smoothing:antialiased}
        body{font-family:'Inter',sans-serif;color:#1a1a1a;background:#fff}
        a{text-decoration:none;color:inherit}
        .inner{max-width:1160px;margin:0 auto;padding:0 2.5rem}
.nav-links a:hover{color:#085041}
        .btn-
.btn-nav:hover{background:#085041;color:#fff!important}
        .hero{background:linear-gradient(135deg,#1a1a2e 0%,#16213e 50%,#0f3460 100%);padding:100px 0 80px;position:relative;overflow:hidden}
        .hero::before{content:'';position:absolute;width:500px;height:500px;border-radius:50%;background:radial-gradient(circle,rgba(99,102,241,.15) 0%,transparent 70%);top:-100px;right:-100px;pointer-events:none}
        .hero-grid{display:grid;grid-template-columns:1.2fr 0.8fr;gap:3rem;align-items:center;position:relative;z-index:1}
        .breadcrumb{font-size:12px;color:rgba(255,255,255,.5);margin-bottom:1.25rem}
        .breadcrumb a{color:rgba(255,255,255,.5)}
        .breadcrumb span{margin:0 6px}
        .kicker{font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#a5b4fc;margin-bottom:1rem}
        .warning-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(245,158,11,.15);border:1px solid rgba(245,158,11,.3);border-radius:100px;padding:6px 14px;font-size:12px;font-weight:500;color:#fcd34d;margin-bottom:1.25rem}
        h1{font-family:'DM Serif Display',serif;font-size:clamp(34px,4vw,54px);line-height:1.1;letter-spacing:-.025em;color:#fff;margin-bottom:1rem;font-weight:400}
        h1 em{font-style:italic;color:#a5b4fc}
        .hero-sub{font-size:16px;color:rgba(255,255,255,.72);line-height:1.75;margin-bottom:1.5rem;font-weight:300;max-width:500px}
        .hero-warn{background:rgba(245,158,11,.1);border:1px solid rgba(245,158,11,.25);border-radius:10px;padding:1rem 1.25rem;font-size:13px;color:#fcd34d;line-height:1.65;margin-bottom:2rem}
        .hero-actions{display:flex;gap:12px;flex-wrap:wrap}
        .btn-primary{background:#fff;color:#1a1a2e;border:none;padding:14px 26px;border-radius:10px;font-size:15px;font-weight:600;display:inline-flex;align-items:center;gap:8px;transition:transform .2s,box-shadow .2s;cursor:pointer;font-family:'Inter',sans-serif;box-shadow:0 4px 20px rgba(0,0,0,.2)}
        .btn-primary:hover{transform:translateY(-2px);box-shadow:0 8px 28px rgba(0,0,0,.3)}
        .btn-ghost{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.35);padding:14px 26px;border-radius:10px;font-size:15px;display:inline-flex;align-items:center;gap:8px;transition:all .2s;cursor:pointer;font-family:'Inter',sans-serif}
        .btn-ghost:hover{background:rgba(255,255,255,.1)}
        .hero-card{background:rgba(255,255,255,.08);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.12);border-radius:20px;padding:1.75rem}
        .price-row{display:flex;justify-content:space-between;align-items:flex-start;padding:.85rem 0;border-bottom:1px solid rgba(255,255,255,.08)}
        .price-row:last-child{border-bottom:none}
        .price-label{font-size:13px;color:rgba(255,255,255,.55)}
        .price-val{font-family:'DM Serif Display',serif;font-size:22px;color:#fff;font-weight:400}
        .price-val.accent{color:#a5b4fc}
        .trust-row{display:flex;gap:1.5rem;flex-wrap:wrap;margin-top:1.5rem}
        .trust-item{display:flex;align-items:center;gap:7px;font-size:12.5px;color:rgba(255,255,255,.7)}
        .trust-dot{width:7px;height:7px;border-radius:50%;background:#a5b4fc;flex-shrink:0}
        .sec{padding:5rem 0}
        .sec.bg{background:#fafaf9}
        .sec.border{border-top:1px solid #f0ede8;border-bottom:1px solid #f0ede8}
        h2{font-family:'DM Serif Display',serif;font-size:clamp(26px,3vw,38px);font-weight:400;color:#1a1a1a;letter-spacing:-.02em;line-height:1.2;margin-bottom:1rem}
        h3{font-family:'DM Serif Display',serif;font-size:22px;font-weight:400;color:#1a1a1a;letter-spacing:-.01em;margin-bottom:.75rem}
        .content-grid{display:grid;grid-template-columns:1fr 340px;gap:3rem;align-items:start}
        .prose p{font-size:15px;color:#444;line-height:1.8;margin-bottom:1.25rem;font-weight:300}
        .prose h3{margin-top:2rem;margin-bottom:.75rem}
        .prose ul{list-style:none;padding:0;margin-bottom:1.25rem}
        .prose ul li{font-size:15px;color:#444;line-height:1.8;padding-left:16px;position:relative;font-weight:300}
        .prose ul li::before{content:'·';position:absolute;left:0;color:#6366f1;font-weight:700;font-size:18px}
        .clinical-warning{background:#fffbeb;border:1px solid #fde68a;border-radius:12px;padding:1.25rem 1.5rem;font-size:13.5px;color:#92400e;line-height:1.75;margin:1.5rem 0}
        .medical-disclaimer{background:#f8f7f4;border:1px solid #e4e1db;border-radius:12px;padding:1.25rem 1.5rem;font-size:13px;color:#666;line-height:1.75;margin-top:1.5rem}
        .sidebar{position:sticky;top:80px}
        .sidebar-card{background:#fff;border:1px solid #f0ede8;border-radius:16px;padding:1.75rem;margin-bottom:1rem}
        .sidebar-card.dark{background:linear-gradient(135deg,#1a1a2e,#16213e);border-color:transparent}
        .sidebar-card.warn{background:#fffbeb;border:1px solid #fde68a}
        .sidebar-title{font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:#bbb;margin-bottom:1.25rem}
        .sidebar-card.dark .sidebar-title{color:rgba(255,255,255,.45)}
        .sidebar-card.warn .sidebar-title{color:#92400e}
        .sidebar-price-row{display:flex;justify-content:space-between;align-items:baseline;padding:.6rem 0;border-bottom:1px solid #f5f4f2}
        .sidebar-price-row:last-of-type{border-bottom:none}
        .sidebar-price-label{font-size:13px;color:#777}
        .sidebar-price-val{font-size:15px;font-weight:600;color:#1a1a2e}
        .sidebar-price-val.uk{color:#aaa;font-weight:400}
        .btn-full{width:100%;padding:14px;border-radius:10px;font-size:15px;font-weight:600;display:flex;align-items:center;justify-content:center;gap:8px;cursor:pointer;font-family:'Inter',sans-serif;transition:all .2s;margin-top:1rem;border:none}
        .btn-full.indigo{background:#4f46e5;color:#fff}
        .btn-full.indigo:hover{background:#3730a3}
        .btn-full.outline{background:rgba(255,255,255,.08);color:#fff;border:1px solid rgba(255,255,255,.2)}
        .btn-full.outline:hover{background:rgba(255,255,255,.15)}
        .checklist{display:flex;flex-direction:column;gap:.5rem}
        .check-item{display:flex;align-items:flex-start;gap:8px;font-size:13px;color:#555;padding:.5rem 0;border-bottom:1px solid #f5f4f2}
        .check-item:last-child{border-bottom:none}
        .check-dot{width:6px;height:6px;border-radius:50%;background:#6366f1;flex-shrink:0;margin-top:6px}
        .process-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:0;position:relative;margin-top:2.5rem}
        .process-grid::before{content:'';position:absolute;top:22px;left:10%;right:10%;height:1px;background:linear-gradient(90deg,transparent,#c7d2fe 20%,#c7d2fe 80%,transparent)}
        .proc-step{text-align:center;padding:0 .5rem;position:relative;z-index:1}
        .proc-circle{width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#1a1a2e,#4f46e5);display:flex;align-items:center;justify-content:center;margin:0 auto 1rem;font-size:15px;font-weight:600;color:#fff;box-shadow:0 4px 14px rgba(79,70,229,.3)}
        .proc-t{font-size:13px;font-weight:600;margin-bottom:.3rem}
        .proc-d{font-size:11px;color:#888;line-height:1.5}
        .faq-list{display:flex;flex-direction:column;border:1px solid #f0ede8;border-radius:16px;overflow:hidden;margin-top:2.5rem}
        .faq-item{border-bottom:1px solid #f0ede8}
        .faq-item:last-child{border-bottom:none}
        .faq-q{width:100%;text-align:left;padding:1.25rem 1.5rem;background:#fff;border:none;cursor:pointer;font-family:'Inter',sans-serif;font-size:15px;font-weight:500;color:#1a1a1a;display:flex;justify-content:space-between;align-items:center;gap:1rem;transition:background .2s}
        .faq-q:hover{background:#fafaf9}
        .faq-a{padding:0 1.5rem 1.25rem;font-size:14px;color:#666;line-height:1.75;font-weight:300}
        footer{background:#111;padding:3rem 0 2rem}
        .footer-legal{font-size:11.5px;color:#444;line-height:1.8}
        .footer-legal em{color:#333;font-style:normal;font-size:11px}
        @media(max-width:900px){.hero-grid{grid-template-columns:1fr}.hero-card{display:none}.content-grid{grid-template-columns:1fr}.sidebar{position:static}.process-grid{grid-template-columns:1fr 1fr;gap:1rem}.process-grid::before{display:none}}
        @media(max-width:480px){.inner{padding:0 1.25rem}.hero{padding:80px 0 60px}.process-grid{grid-template-columns:1fr}}
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

      {/* NAV */}
      <Nav />

      {/* HERO */}
      <section className="hero">
        <div className="inner">
          <div className="hero-grid">
            <div>
              <div className="breadcrumb">
                <a href="/">Home</a><span>›</span>
                <a href="/#services">Treatments</a><span>›</span>
                Deep Brain Stimulation Turkey
              </div>
              <div className="warning-badge">
                ⚠️ Specialist neurological referral required
              </div>
              <div className="kicker">Neurosurgery · Istanbul</div>
              <h1>Deep Brain Stimulation<br />in Turkey.<br /><em>From £23,700.</em></h1>
              <p className="hero-sub">
                JCI-accredited neurosurgical teams in Istanbul. Physician-led coordination including full clinical liaison, medical interpretation, and post-operative documentation.
              </p>
              <div className="hero-warn">
                <strong>Important:</strong> DBS is a complex elective neurosurgical procedure. A referral letter from a neurologist or movement disorder specialist is required before coordination can begin. Ocean Health &amp; Travel does not provide medical assessments or clinical opinions.
              </div>
              <div className="hero-actions">
                <a href={WA_URL} target="_blank" className="btn-primary">Send your referral documents</a>
                <a href="#faq" className="btn-ghost">Read FAQs ↓</a>
              </div>
              <div className="trust-row">
                {['Specialist referral required','JCI-accredited hospitals','Physician-led coordination','GP & neurologist documentation'].map(t => (
                  <div key={t} className="trust-item"><div className="trust-dot"></div>{t}</div>
                ))}
              </div>
            </div>
            <div className="hero-card">
              <div className="sidebar-title" style={{color:'rgba(255,255,255,.45)'}}>Price comparison</div>
              <div className="price-row">
                <div>
                  <div className="price-label">Istanbul (OHT)</div>
                  <div className="price-val accent">from £23,700</div>
                </div>
              </div>
              <div className="price-row">
                <div>
                  <div className="price-label">UK private centre</div>
                  <div className="price-val" style={{color:'rgba(255,255,255,.35)',fontSize:'17px'}}>£40,000 – £60,000+</div>
                </div>
              </div>
              <div className="price-row">
                <div>
                  <div className="price-label">Typical saving</div>
                  <div className="price-val accent">40 – 60%</div>
                </div>
              </div>
              <div className="price-row">
                <div>
                  <div className="price-label">Hospital stay</div>
                  <div className="price-val" style={{fontSize:'17px'}}>5 – 10 days</div>
                </div>
              </div>
              <div className="price-row">
                <div>
                  <div className="price-label">Istanbul stay</div>
                  <div className="price-val" style={{fontSize:'17px'}}>2 – 3 weeks</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="sec">
        <div className="inner">
          <div className="content-grid">
            <div className="prose">
              <h2>Deep brain stimulation in Turkey — what to expect</h2>
              <p>
                Deep brain stimulation (DBS) is an established neurosurgical procedure in which electrodes are implanted into specific areas of the brain to modulate abnormal neural activity. It is most commonly used for Parkinson&apos;s disease, essential tremor, and dystonia, and is typically considered when symptoms are no longer adequately controlled by medication.
              </p>
              <p>
                Ocean Health &amp; Travel coordinates DBS procedures at JCI-accredited hospitals in Istanbul with experienced neurosurgical teams. We are a medical coordination service — not a medical provider. All clinical decisions, including patient selection, surgical planning, and post-operative management, rest with your treating neurosurgical team.
              </p>

              <div className="clinical-warning">
                <strong>Referral requirement:</strong> Deep brain stimulation requires a referral letter from a neurologist or movement disorder specialist, along with recent MRI imaging and a full clinical summary. We cannot begin coordination without this documentation. If you do not yet have a referral, please consult your GP or neurologist first.
              </div>

              <h3>How does DBS work?</h3>
              <p>
                DBS works by delivering continuous electrical impulses to targeted brain regions — most commonly the subthalamic nucleus (STN) or globus pallidus interna (GPi) for Parkinson&apos;s disease. These impulses modulate the abnormal neural circuits responsible for motor symptoms such as tremor, rigidity, and bradykinesia.
              </p>
              <p>
                The procedure does not destroy brain tissue and is reversible — the stimulator can be adjusted or switched off. This distinguishes it from older ablative procedures such as thalamotomy.
              </p>

              <h3>The DBS procedure — what happens</h3>
              <p>
                DBS surgery is typically performed in two stages:
              </p>
              <ul>
                <li><strong>Stage 1 — Electrode implantation:</strong> Performed under local anaesthesia with the patient awake, allowing the surgical team to map brain activity and confirm electrode placement in real time. Duration: 4–6 hours.</li>
                <li><strong>Stage 2 — Pulse generator implantation:</strong> The implantable pulse generator (IPG) is placed under the collarbone under general anaesthesia. Duration: 1–2 hours. Typically performed 1–2 days after Stage 1.</li>
                <li><strong>Programming:</strong> Initial stimulator programming begins 2–4 weeks post-operatively. Fine-tuning continues over several months with your neurologist.</li>
              </ul>

              <h3>Recovery and post-operative care</h3>
              <p>
                Hospital stay following DBS surgery is typically 5–10 days. Most patients remain in Istanbul for 2–3 weeks before flying home. Post-operative follow-up and stimulator programming will continue with your UK neurologist after return.
              </p>
              <ul>
                <li>Days 1–10: Hospital stay, wound healing, initial recovery</li>
                <li>Weeks 2–3: Remaining in Istanbul, clinic follow-up</li>
                <li>Week 3–4: Flight home (subject to surgical team clearance)</li>
                <li>Months 1–6: Stimulator programming and optimisation with UK neurologist</li>
              </ul>

              <h3>DBS cost in Turkey vs. UK</h3>
              <p>
                Deep brain stimulation at UK private neurosurgical centres typically costs between £40,000 and £60,000+, depending on the device manufacturer, surgical complexity, and length of inpatient stay. The same procedure at JCI-accredited hospitals in Istanbul starts from £23,700 — a saving of 40–60%. Device costs (Medtronic, Abbott, Boston Scientific) are a significant component of total cost and vary by patient.
              </p>

              <h3>Documentation required</h3>
              <ul>
                <li>Referral letter from neurologist or movement disorder specialist</li>
                <li>Recent MRI brain (within 12 months)</li>
                <li>Current medication list and symptom history</li>
                <li>Details of any previous neurosurgical procedures</li>
                <li>UPDRS assessment scores (if available)</li>
              </ul>

              <div className="medical-disclaimer">
                <strong>Medical disclaimer:</strong> Ocean Health &amp; Travel is a medical coordination service, not a medical provider. We do not provide neurological assessments, clinical opinions, or medical advice. All clinical decisions — including suitability for DBS, surgical technique, device selection, and post-operative management — rest with your treating neurosurgical and neurological team. This information is for general guidance only and does not constitute medical advice. DBS is an elective procedure and is not suitable for emergency situations.
              </div>
            </div>

            <div className="sidebar">
              <div className="sidebar-card dark">
                <div className="sidebar-title">Send your documents</div>
                <p style={{fontSize:'14px',color:'rgba(255,255,255,.65)',lineHeight:1.65,marginBottom:'1.25rem',fontWeight:300}}>
                  Send your referral letter and clinical notes. Our physician coordinator will review and liaise with the neurosurgical team.
                </p>
                <a href={WA_URL} target="_blank" className="btn-full indigo">💬 WhatsApp us</a>
                <a href="mailto:info@oceanhealthtravel.com" className="btn-full outline" style={{marginTop:'8px'}}>✉️ Email documents</a>
              </div>

              <div className="sidebar-card warn">
                <div className="sidebar-title">Before you contact us</div>
                <div className="checklist">
                  {[
                    'Referral letter from neurologist',
                    'Recent MRI brain imaging',
                    'Current medication list',
                    'Symptom history summary',
                    'UPDRS scores (if available)',
                  ].map(item => (
                    <div key={item} className="check-item">
                      <div className="check-dot"></div>
                      <span style={{color:'#92400e'}}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="sidebar-card">
                <div className="sidebar-title">Price comparison</div>
                <div className="sidebar-price-row">
                  <span className="sidebar-price-label">Istanbul (OHT)</span>
                  <span className="sidebar-price-val">from £23,700</span>
                </div>
                <div className="sidebar-price-row">
                  <span className="sidebar-price-label">UK private</span>
                  <span className="sidebar-price-val uk">£40,000 – £60,000+</span>
                </div>
                <div className="sidebar-price-row">
                  <span className="sidebar-price-label">Typical saving</span>
                  <span className="sidebar-price-val">40 – 60%</span>
                </div>
                <div className="sidebar-price-row">
                  <span className="sidebar-price-label">Hospital stay</span>
                  <span className="sidebar-price-val">5–10 days</span>
                </div>
                <p style={{fontSize:'11px',color:'#bbb',marginTop:'1rem',lineHeight:1.6}}>Prices indicative. Device cost varies by manufacturer. Coordination fee quoted separately. Flights not included.</p>
              </div>

              <div className="sidebar-card">
                <div className="sidebar-title">What&apos;s included</div>
                {['Airport transfer','Hotel near hospital','Medical interpreter at all appointments','Full clinic liaison','Operative notes forwarded to UK neurologist & GP'].map(item => (
                  <div key={item} className="check-item">
                    <div style={{width:'6px',height:'6px',borderRadius:'50%',background:'#6366f1',flexShrink:0,marginTop:'6px'}}></div>
                    <span style={{fontSize:'13px',color:'#555'}}>{item}</span>
                  </div>
                ))}
                <p style={{fontSize:'11px',color:'#bbb',marginTop:'1rem',lineHeight:1.6}}>Flights not included. Coordinator, not a medical provider.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="sec bg border" id="process">
        <div className="inner">
          <div className="kicker">The process</div>
          <h2>From referral to surgery</h2>
          <div className="process-grid">
            {[
              {n:'1',t:'Send documents',d:'Referral letter, MRI, and clinical notes via WhatsApp or email'},
              {n:'2',t:'Clinical review',d:'Our physician coordinator liaises with the neurosurgical team'},
              {n:'3',t:'Quote & booking',d:'Itemised proposal and surgery date confirmed'},
              {n:'4',t:'Surgery',d:'Two-stage procedure at JCI-accredited hospital'},
              {n:'5',t:'Documentation',d:'Operative notes sent to your UK neurologist and GP'},
            ].map(s => (
              <div key={s.t} className="proc-step">
                <div className="proc-circle">{s.n}</div>
                <div className="proc-t">{s.t}</div>
                <div className="proc-d">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec" id="faq">
        <div className="inner">
          <div className="kicker">Common questions</div>
          <h2>Deep brain stimulation in Turkey — FAQ</h2>
          <div className="faq-list">
            {faqs.map((f) => (
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

      {/* CTA */}
      <section className="sec bg">
        <div className="inner" style={{textAlign:'center'}}>
          <div className="kicker">Get started</div>
          <h2>Ready to send your referral documents?</h2>
          <p style={{fontSize:'16px',color:'#666',lineHeight:1.7,fontWeight:300,maxWidth:'520px',margin:'0 auto 2rem'}}>
            Send your neurologist&apos;s referral letter and clinical notes. Our physician coordinator will review and come back to you within 48 hours.
          </p>
          <div style={{display:'flex',gap:'14px',justifyContent:'center',flexWrap:'wrap'}}>
            <a href={WA_URL} target="_blank" style={{background:'#4f46e5',color:'#fff',border:'none',padding:'15px 30px',borderRadius:'10px',fontSize:'15px',fontWeight:600,display:'inline-flex',alignItems:'center',gap:'9px',cursor:'pointer',fontFamily:'Inter,sans-serif'}}>
              💬 WhatsApp us
            </a>
            <a href="mailto:info@oceanhealthtravel.com" style={{background:'transparent',color:'#4f46e5',border:'1px solid #4f46e5',padding:'15px 30px',borderRadius:'10px',fontSize:'15px',display:'inline-flex',alignItems:'center',gap:'9px',cursor:'pointer',fontFamily:'Inter,sans-serif'}}>
              ✉️ Email documents
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="inner">
          <div className="footer-legal">
            © 2025 Ocean Health &amp; Travel Ltd · Registered in England &amp; Wales · Company no. 16186647<br />
            London: 17 Green Lanes, N16 9BS · Fethiye: Karagözler Mah., Fevzi Çakmak Cad. No:11/A, Muğla ·{' '}
            <a href="mailto:info@oceanhealthtravel.com" style={{color:'#555'}}>info@oceanhealthtravel.com</a> ·{' '}
            <a href="tel:+447441904858" style={{color:'#555'}}>+44 7441 904858</a><br />
            Flights not included · Client money protected via Trust Account · Coordinator, not a medical provider · Elective procedures only<br />
            <em>Ocean Health &amp; Travel does not provide medical advice. All clinical decisions rest with your treating clinic. Not suitable for emergencies. DBS requires specialist neurological referral.</em>
          </div>
        </div>
      </footer>
    </>
  )
}
