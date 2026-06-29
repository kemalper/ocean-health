import type { Metadata } from 'next'
import Nav from '@/app/components/Nav'

export const metadata: Metadata = {
  title: 'Knee Replacement in Turkey | From £3,500 | Ocean Health & Travel',
  description: 'Knee replacement surgery in Istanbul from £3,500 — vs. £12,000–£16,000 at UK private clinics and 12–18 month NHS wait. JCI-accredited orthopaedic teams, physician-led coordination. Free quote in 48 hours.',
}

const WA_URL = 'https://wa.me/447441904858?text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20knee%20replacement%20in%20Turkey'

const faqs = [
  {
    q: 'How much does knee replacement cost in Turkey?',
    a: 'Knee replacement surgery in Istanbul starts from £3,500, compared to £12,000–£16,000 at UK private orthopaedic centres. The price includes surgeon fee, anaesthesia, implant, hospital stay, and standard post-operative care. Airport transfer, hotel, and interpreter are coordinated separately. An itemised quote is provided within 48 hours of receiving your clinical documentation.'
  },
  {
    q: 'How long is the NHS waiting list for knee replacement?',
    a: 'NHS waiting times for knee replacement surgery have reached 12–18 months in many areas of England, with some patients waiting longer. Through Ocean Health & Travel, surgery can typically be arranged within 2–3 weeks of first contact.'
  },
  {
    q: 'What type of knee implant is used?',
    a: 'Our partner orthopaedic teams use CE-marked knee implant systems from internationally recognised manufacturers including Zimmer Biomet, Smith & Nephew, Stryker, and DePuy Synthes. The specific implant recommended will depend on your anatomy, activity level, and degree of joint degeneration. Implant brand and model will be specified in your itemised quote.'
  },
  {
    q: 'How long will I need to stay in Istanbul?',
    a: 'Most patients stay in Istanbul for 10–14 days following knee replacement surgery. Hospital stay is typically 3–5 days, followed by a period of supervised rehabilitation and physiotherapy before flying home. Flying too early after knee replacement carries risks — your surgical team will advise on the appropriate time to travel.'
  },
  {
    q: 'What physiotherapy and rehabilitation is included?',
    a: 'In-hospital physiotherapy begins the day after surgery as part of standard care at our partner hospitals. We coordinate additional outpatient physiotherapy sessions during your Istanbul stay. On return to the UK, you will continue rehabilitation with your own physiotherapist or NHS community physio team. Post-discharge documentation is forwarded to your UK GP on request.'
  },
  {
    q: 'What documentation do I need to provide?',
    a: 'To provide an accurate quote, we ask for recent knee X-rays (weight-bearing AP and lateral views), a GP or orthopaedic surgeon referral letter if available, and a summary of your symptoms, medication, and relevant medical history. Our physician coordinator will review your documentation and liaise with the orthopaedic team.'
  },
]

export default function KneeReplacementPage() {
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
        .hero{background:linear-gradient(135deg,#1c1c1c 0%,#2d3436 50%,#434343 100%);padding:100px 0 80px;position:relative;overflow:hidden}
        .hero::before{content:'';position:absolute;width:500px;height:500px;border-radius:50%;background:radial-gradient(circle,rgba(253,203,110,.1) 0%,transparent 70%);top:-100px;right:-100px;pointer-events:none}
        .hero-grid{display:grid;grid-template-columns:1.2fr 0.8fr;gap:3rem;align-items:center;position:relative;z-index:1}
        .breadcrumb{font-size:12px;color:rgba(255,255,255,.5);margin-bottom:1.25rem}
        .breadcrumb a{color:rgba(255,255,255,.5)}
        .breadcrumb span{margin:0 6px}
        .kicker{font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#fdcb6e;margin-bottom:1rem}
        h1{font-family:'DM Serif Display',serif;font-size:clamp(34px,4vw,54px);line-height:1.1;letter-spacing:-.025em;color:#fff;margin-bottom:1rem;font-weight:400}
        h1 em{font-style:italic;color:#fdcb6e}
        .hero-sub{font-size:16px;color:rgba(255,255,255,.72);line-height:1.75;margin-bottom:2rem;font-weight:300;max-width:500px}
        .nhs-callout{background:rgba(220,38,38,.15);border:1px solid rgba(220,38,38,.3);border-radius:10px;padding:1rem 1.25rem;font-size:13px;color:#fca5a5;line-height:1.65;margin-bottom:2rem}
        .hero-actions{display:flex;gap:12px;flex-wrap:wrap}
        .btn-primary{background:#fdcb6e;color:#1c1c1c;border:none;padding:14px 26px;border-radius:10px;font-size:15px;font-weight:600;display:inline-flex;align-items:center;gap:8px;transition:transform .2s,box-shadow .2s;cursor:pointer;font-family:'Inter',sans-serif;box-shadow:0 4px 20px rgba(0,0,0,.2)}
        .btn-primary:hover{transform:translateY(-2px);box-shadow:0 8px 28px rgba(0,0,0,.3)}
        .btn-ghost{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.35);padding:14px 26px;border-radius:10px;font-size:15px;display:inline-flex;align-items:center;gap:8px;transition:all .2s;cursor:pointer;font-family:'Inter',sans-serif}
        .btn-ghost:hover{background:rgba(255,255,255,.1)}
        .hero-card{background:rgba(255,255,255,.08);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.12);border-radius:20px;padding:1.75rem}
        .price-row{display:flex;justify-content:space-between;align-items:flex-start;padding:.85rem 0;border-bottom:1px solid rgba(255,255,255,.08)}
        .price-row:last-child{border-bottom:none}
        .price-label{font-size:13px;color:rgba(255,255,255,.55)}
        .price-val{font-family:'DM Serif Display',serif;font-size:22px;color:#fff;font-weight:400}
        .price-val.accent{color:#fdcb6e}
        .trust-row{display:flex;gap:1.5rem;flex-wrap:wrap;margin-top:1.5rem}
        .trust-item{display:flex;align-items:center;gap:7px;font-size:12.5px;color:rgba(255,255,255,.75)}
        .trust-dot{width:7px;height:7px;border-radius:50%;background:#fdcb6e;flex-shrink:0}
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
        .prose ul li::before{content:'·';position:absolute;left:0;color:#e17055;font-weight:700;font-size:18px}
        .compare-box{background:#fafaf9;border:1px solid #f0ede8;border-radius:12px;overflow:hidden;margin:1.5rem 0}
        .compare-table{width:100%;border-collapse:collapse}
        .compare-table th{font-size:11px;text-transform:uppercase;letter-spacing:.07em;color:#bbb;font-weight:500;padding:.85rem 1rem;text-align:left;border-bottom:1px solid #f0ede8;background:#fff}
        .compare-table td{padding:.85rem 1rem;border-bottom:1px solid #fafaf9;font-size:14px;color:#1a1a1a}
        .compare-table tr:last-child td{border-bottom:none}
        .td-oht{color:#2d3436;font-weight:600}
        .td-nhs{color:#aaa}
        .saving{background:#ffeaa7;color:#2d3436;font-weight:600;border-radius:20px;padding:3px 10px;font-size:12px;white-space:nowrap;display:inline-block}
        .disclaimer{background:#f8f7f4;border:1px solid #e4e1db;border-radius:12px;padding:1.25rem 1.5rem;font-size:13px;color:#666;line-height:1.75;margin-top:1.5rem}
        .sidebar{position:sticky;top:80px}
        .sidebar-card{background:#fff;border:1px solid #f0ede8;border-radius:16px;padding:1.75rem;margin-bottom:1rem}
        .sidebar-card.dark{background:linear-gradient(135deg,#1c1c1c,#2d3436);border-color:transparent}
        .sidebar-title{font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:#bbb;margin-bottom:1.25rem}
        .sidebar-card.dark .sidebar-title{color:rgba(255,255,255,.45)}
        .sidebar-price-row{display:flex;justify-content:space-between;align-items:baseline;padding:.6rem 0;border-bottom:1px solid #f5f4f2}
        .sidebar-price-row:last-of-type{border-bottom:none}
        .sidebar-price-label{font-size:13px;color:#777}
        .sidebar-price-val{font-size:15px;font-weight:600;color:#2d3436}
        .sidebar-price-val.uk{color:#aaa;font-weight:400}
        .btn-full{width:100%;padding:14px;border-radius:10px;font-size:15px;font-weight:600;display:flex;align-items:center;justify-content:center;gap:8px;cursor:pointer;font-family:'Inter',sans-serif;transition:all .2s;margin-top:1rem;border:none}
        .btn-full.amber{background:#fdcb6e;color:#1c1c1c}
        .btn-full.amber:hover{background:#e6b800}
        .btn-full.outline{background:rgba(255,255,255,.08);color:#fff;border:1px solid rgba(255,255,255,.2)}
        .check-item{display:flex;align-items:flex-start;gap:8px;padding:.5rem 0;border-bottom:1px solid #f5f4f2}
        .check-item:last-child{border-bottom:none}
        .check-dot{width:6px;height:6px;border-radius:50%;background:#e17055;flex-shrink:0;margin-top:6px}
        .process-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:0;position:relative;margin-top:2.5rem}
        .process-grid::before{content:'';position:absolute;top:22px;left:10%;right:10%;height:1px;background:linear-gradient(90deg,transparent,#ffeaa7 20%,#ffeaa7 80%,transparent)}
        .proc-step{text-align:center;padding:0 .5rem;position:relative;z-index:1}
        .proc-circle{width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#1c1c1c,#434343);display:flex;align-items:center;justify-content:center;margin:0 auto 1rem;font-size:15px;font-weight:600;color:#fdcb6e;box-shadow:0 4px 14px rgba(0,0,0,.3)}
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

      <Nav />

      <section className="hero">
        <div className="inner">
          <div className="hero-grid">
            <div>
              <div className="breadcrumb">
                <a href="/">Home</a><span>›</span>
                <a href="/#services">Treatments</a><span>›</span>
                Knee Replacement Turkey
              </div>
              <div className="kicker">Orthopaedics · Istanbul</div>
              <h1>Knee Replacement<br />in Turkey.<br /><em>From £3,500.</em></h1>
              <p className="hero-sub">
                CE-marked implants. JCI-accredited orthopaedic teams. Surgery in 2–3 weeks — not 12–18 months on the NHS waiting list.
              </p>
              <div className="nhs-callout">
                <strong>NHS waiting time:</strong> 12–18+ months for knee replacement in many areas of England. Through Ocean Health &amp; Travel, surgery can typically be arranged within 2–3 weeks.
              </div>
              <div className="hero-actions">
                <a href={WA_URL} target="_blank" className="btn-primary">Get a free quote</a>
                <a href="#faq" className="btn-ghost">Read FAQs ↓</a>
              </div>
              <div className="trust-row">
                {['CE-marked implants','JCI-accredited hospitals','2–3 week timeline','GP documentation included'].map(t => (
                  <div key={t} className="trust-item"><div className="trust-dot"></div>{t}</div>
                ))}
              </div>
            </div>
            <div className="hero-card">
              <div className="sidebar-title" style={{color:'rgba(255,255,255,.45)'}}>Price comparison</div>
              <div className="price-row">
                <div>
                  <div className="price-label">Istanbul (OHT)</div>
                  <div className="price-val accent">from £3,500</div>
                </div>
              </div>
              <div className="price-row">
                <div>
                  <div className="price-label">UK private clinic</div>
                  <div className="price-val" style={{color:'rgba(255,255,255,.35)',fontSize:'17px'}}>£12,000 – £16,000</div>
                </div>
              </div>
              <div className="price-row">
                <div>
                  <div className="price-label">NHS wait</div>
                  <div className="price-val" style={{color:'#fca5a5',fontSize:'17px'}}>12 – 18+ months</div>
                </div>
              </div>
              <div className="price-row">
                <div>
                  <div className="price-label">Typical saving</div>
                  <div className="price-val accent">70 – 75%</div>
                </div>
              </div>
              <div className="price-row">
                <div>
                  <div className="price-label">Istanbul stay</div>
                  <div className="price-val" style={{fontSize:'17px'}}>10 – 14 days</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="inner">
          <div className="content-grid">
            <div className="prose">
              <h2>Knee replacement in Turkey — what to expect</h2>
              <p>
                Knee replacement (total knee arthroplasty) is one of the most commonly performed orthopaedic procedures worldwide, offering significant pain relief and improved mobility for patients with severe knee arthritis or joint degeneration. Istanbul has become a leading destination for orthopaedic surgery, combining internationally trained surgeons, JCI-accredited hospitals, and costs 70–75% lower than UK private centres.
              </p>
              <p>
                Ocean Health &amp; Travel coordinates knee replacement surgery at JCI-accredited orthopaedic centres in Istanbul. We are a coordination service — not a medical provider. All clinical decisions rest with your treating orthopaedic surgeon.
              </p>

              <h3>NHS vs. Istanbul — a direct comparison</h3>
              <div className="compare-box">
                <table className="compare-table">
                  <thead>
                    <tr><th></th><th>NHS</th><th>UK private</th><th>Istanbul (OHT)</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>Waiting time</td><td className="td-nhs">12–18+ months</td><td className="td-nhs">2–4 weeks</td><td className="td-oht">2–3 weeks</td></tr>
                    <tr><td>Cost</td><td className="td-nhs">Free (long wait)</td><td className="td-nhs">£12,000–£16,000</td><td className="td-oht">from £3,500</td></tr>
                    <tr><td>Implant standard</td><td className="td-nhs">CE-marked</td><td className="td-nhs">CE-marked</td><td className="td-oht">CE-marked</td></tr>
                    <tr><td>Hospital accreditation</td><td className="td-nhs">CQC</td><td className="td-nhs">CQC</td><td className="td-oht">JCI</td></tr>
                    <tr><td>Interpreter</td><td className="td-nhs">—</td><td className="td-nhs">—</td><td className="td-oht">Included</td></tr>
                  </tbody>
                </table>
              </div>

              <h3>What does knee replacement involve?</h3>
              <p>
                Total knee replacement involves removing damaged cartilage and bone from the knee joint and replacing it with metal and plastic implant components that replicate the natural movement of the knee. The procedure is performed under general or spinal anaesthesia and typically takes 1.5–2 hours.
              </p>
              <ul>
                <li>Total knee replacement — full joint resurfacing</li>
                <li>Partial (unicompartmental) knee replacement — where only one compartment is affected</li>
                <li>Revision knee replacement — where a previous implant requires replacement</li>
              </ul>

              <h3>Recovery and rehabilitation</h3>
              <p>
                Hospital stay following knee replacement is typically 3–5 days. In-hospital physiotherapy begins the day after surgery. Most patients stay in Istanbul for 10–14 days in total before flying home.
              </p>
              <ul>
                <li>Days 1–5: Hospital stay, in-patient physiotherapy begins</li>
                <li>Days 5–14: Hotel recovery, outpatient physiotherapy in Istanbul</li>
                <li>Week 2–3: Flight home (subject to surgical team clearance)</li>
                <li>Months 1–3: Intensive physiotherapy and rehabilitation at home</li>
                <li>Months 3–12: Progressive recovery, most patients walking normally by 3–6 months</li>
              </ul>

              <h3>Implants used</h3>
              <p>
                Our partner orthopaedic centres use CE-marked knee implant systems from internationally recognised manufacturers. The specific implant recommended will depend on your anatomy, weight, activity level, and the degree of joint degeneration. All implant details are specified in your itemised quote before any commitment is made.
              </p>

              <h3>Documentation helpful for your quote</h3>
              <ul>
                <li>Recent knee X-rays (weight-bearing AP and lateral views)</li>
                <li>GP or orthopaedic referral letter (if available)</li>
                <li>Summary of symptoms, duration, and current medication</li>
                <li>BMI and relevant medical history (diabetes, heart conditions, blood thinners)</li>
              </ul>

              <div className="disclaimer">
                <strong>Medical disclaimer:</strong> Ocean Health &amp; Travel is a medical coordination service, not a medical provider. We do not provide orthopaedic assessments or clinical opinions. All clinical decisions rest with your treating surgeon. This information is for general guidance only. Knee replacement is an elective procedure and is not suitable for emergency situations.
              </div>
            </div>

            <div className="sidebar">
              <div className="sidebar-card dark">
                <div className="sidebar-title">Get a free quote</div>
                <p style={{fontSize:'14px',color:'rgba(255,255,255,.65)',lineHeight:1.65,marginBottom:'1.25rem',fontWeight:300}}>
                  Share your X-rays and medical history. Full itemised quote within 48 hours — no obligation.
                </p>
                <a href={WA_URL} target="_blank" className="btn-full amber">💬 WhatsApp us</a>
                <a href="mailto:info@oceanhealthtravel.com" className="btn-full outline" style={{marginTop:'8px'}}>✉️ Email us</a>
              </div>

              <div className="sidebar-card">
                <div className="sidebar-title">Price comparison</div>
                <div className="sidebar-price-row">
                  <span className="sidebar-price-label">Istanbul (OHT)</span>
                  <span className="sidebar-price-val">from £3,500</span>
                </div>
                <div className="sidebar-price-row">
                  <span className="sidebar-price-label">UK private</span>
                  <span className="sidebar-price-val uk">£12,000 – £16,000</span>
                </div>
                <div className="sidebar-price-row">
                  <span className="sidebar-price-label">Typical saving</span>
                  <span className="sidebar-price-val">70 – 75%</span>
                </div>
                <div className="sidebar-price-row">
                  <span className="sidebar-price-label">NHS wait</span>
                  <span className="sidebar-price-val" style={{color:'#dc2626'}}>12–18+ months</span>
                </div>
                <div className="sidebar-price-row">
                  <span className="sidebar-price-label">OHT timeline</span>
                  <span className="sidebar-price-val">2–3 weeks</span>
                </div>
                <p style={{fontSize:'11px',color:'#bbb',marginTop:'1rem',lineHeight:1.6}}>Prices indicative. Coordination fee quoted separately. Flights not included.</p>
              </div>

              <div className="sidebar-card">
                <div className="sidebar-title">What&apos;s included</div>
                {['Airport transfer','Hotel near hospital','Interpreter at all appointments','In-hospital physiotherapy','GP documentation on request'].map(item => (
                  <div key={item} className="check-item">
                    <div className="check-dot"></div>
                    <span style={{fontSize:'13px',color:'#555'}}>{item}</span>
                  </div>
                ))}
                <p style={{fontSize:'11px',color:'#bbb',marginTop:'1rem',lineHeight:1.6}}>Flights not included. Coordinator, not a medical provider.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec bg border" id="process">
        <div className="inner">
          <div className="kicker">The process</div>
          <h2>From enquiry to surgery in 2–3 weeks</h2>
          <div className="process-grid">
            {[
              {n:'1',t:'Enquiry',d:'Share X-rays and medical history via WhatsApp or email'},
              {n:'2',t:'Quote',d:'Itemised proposal within 48 hours'},
              {n:'3',t:'Booking',d:'Hospital, hotel, and transfers confirmed'},
              {n:'4',t:'Surgery',d:'Knee replacement with interpreter present'},
              {n:'5',t:'GP docs',d:'Clinical notes forwarded to your UK GP'},
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

      <section className="sec" id="faq">
        <div className="inner">
          <div className="kicker">Common questions</div>
          <h2>Knee replacement Turkey — FAQ</h2>
          <div className="faq-list">
            {faqs.map((f) => (
              <details key={f.q} className="faq-item">
                <summary className="faq-q">
                  {f.q}
                  <span style={{fontSize:'18px',color:'#e17055',flexShrink:0}}>+</span>
                </summary>
                <div className="faq-a">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="sec bg">
        <div className="inner" style={{textAlign:'center'}}>
          <div className="kicker">Get started</div>
          <h2>Ready to stop waiting?</h2>
          <p style={{fontSize:'16px',color:'#666',lineHeight:1.7,fontWeight:300,maxWidth:'500px',margin:'0 auto 2rem'}}>
            Share your X-rays and we&apos;ll have a full itemised quote within 48 hours. Surgery in 2–3 weeks, not 18 months.
          </p>
          <div style={{display:'flex',gap:'14px',justifyContent:'center',flexWrap:'wrap'}}>
            <a href={WA_URL} target="_blank" style={{background:'#2d3436',color:'#fdcb6e',border:'none',padding:'15px 30px',borderRadius:'10px',fontSize:'15px',fontWeight:600,display:'inline-flex',alignItems:'center',gap:'9px',cursor:'pointer',fontFamily:'Inter,sans-serif'}}>
              💬 Get a free quote
            </a>
            <a href="mailto:info@oceanhealthtravel.com" style={{background:'transparent',color:'#2d3436',border:'1px solid #2d3436',padding:'15px 30px',borderRadius:'10px',fontSize:'15px',display:'inline-flex',alignItems:'center',gap:'9px',cursor:'pointer',fontFamily:'Inter,sans-serif'}}>
              ✉️ Email us
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="inner">
          <div className="footer-legal">
            © {new Date().getFullYear()} Ocean Health &amp; Travel Ltd · Registered in England &amp; Wales · Company no. 16186647<br />
            London: 17 Green Lanes, N16 9BS · Fethiye: Karagözler Mah., Fevzi Çakmak Cad. No:11/A, Muğla ·{' '}
            <a href="mailto:info@oceanhealthtravel.com" style={{color:'#555'}}>info@oceanhealthtravel.com</a> ·{' '}
            <a href="tel:+447441904858" style={{color:'#555'}}>+44 7441 904858</a><br />
            Flights not included · Client payments held in a designated client account · Coordinator, not a medical provider · Elective procedures only<br />
            <em>Ocean Health &amp; Travel does not provide medical advice. All clinical decisions rest with your treating surgeon. Not suitable for emergencies.</em>
          </div>
        </div>
      </footer>
    </>
  )
}
