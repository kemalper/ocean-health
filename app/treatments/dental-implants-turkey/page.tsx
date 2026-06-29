import type { Metadata } from 'next'
import Nav from '@/app/components/Nav'

export const metadata: Metadata = {
  title: 'Dental Implants in Turkey | From £350 | Ocean Health & Travel',
  description: 'Dental implants in Istanbul from £350 per implant — vs. £2,000–£2,800 at UK private clinics. JCI-accredited dental clinics, physician-led coordination, 2–3 week timeline. Free quote in 48 hours.',
}

const WA_URL = 'https://wa.me/447441904858?text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20dental%20implants%20in%20Turkey'

const faqs = [
  {
    q: 'How much do dental implants cost in Turkey?',
    a: 'Single dental implants in Istanbul start from £350, compared to £2,000–£2,800 at UK private dental clinics — a saving of approximately 80%. Full-arch restorations (All-on-4 or All-on-6) start from £4,500. Exact pricing depends on the number of implants, bone grafting requirements, and the type of restoration chosen.'
  },
  {
    q: 'How long does the dental implant process take?',
    a: 'Most patients complete their implant treatment in 7–10 days in Istanbul. This typically includes consultation, implant placement, and fitting of temporary restorations. Final permanent crowns or bridges are usually fitted 3–6 months later, once osseointegration (bone fusion) is complete. Some patients return to Istanbul for the final restoration; others have this completed by their UK dentist.'
  },
  {
    q: 'Is it safe to get dental implants in Turkey?',
    a: 'Ocean Health & Travel coordinates dental implant procedures exclusively at JCI-accredited clinics and internationally certified dental centres in Istanbul. All partner clinics use CE-marked implant systems from established manufacturers (Straumann, Nobel Biocare, Osstem). We do not provide dental advice — all clinical decisions rest with your treating dentist.'
  },
  {
    q: 'Which implant brands are used?',
    a: 'Our partner clinics use established implant systems including Straumann, Nobel Biocare, Osstem, and MegaGen. The specific implant system recommended will depend on your bone density, anatomy, and the treating dentist\'s assessment. Brand and model will be specified in your itemised quote.'
  },
  {
    q: 'What is included in the coordination package?',
    a: 'Our coordination package includes airport transfer, hotel accommodation, professional interpretation at all appointments, and full clinic liaison. Post-treatment dental records and documentation are provided in English. Flights are not included. We are a coordinator, not a dental provider.'
  },
  {
    q: 'Can I get zirconium crowns and veneers at the same time?',
    a: 'Yes. Many patients combine dental implants with zirconium crowns, porcelain veneers, or full smile design during the same visit to Istanbul, maximising the value of a single trip. We can coordinate combined treatment plans — contact us with your dental goals and we will provide a full itemised quote.'
  },
]

export default function DentalImplantsPage() {
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
        .hero{background:linear-gradient(135deg,#1e3a5f 0%,#1a5276 50%,#117a8b 100%);padding:100px 0 80px;position:relative;overflow:hidden}
        .hero::before{content:'';position:absolute;width:500px;height:500px;border-radius:50%;background:radial-gradient(circle,rgba(52,152,219,.2) 0%,transparent 70%);top:-100px;right:-100px;pointer-events:none}
        .hero-grid{display:grid;grid-template-columns:1.2fr 0.8fr;gap:3rem;align-items:center;position:relative;z-index:1}
        .breadcrumb{font-size:12px;color:rgba(255,255,255,.5);margin-bottom:1.25rem}
        .breadcrumb a{color:rgba(255,255,255,.5)}
        .breadcrumb span{margin:0 6px}
        .kicker{font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#7fb3d3;margin-bottom:1rem}
        h1{font-family:'DM Serif Display',serif;font-size:clamp(34px,4vw,54px);line-height:1.1;letter-spacing:-.025em;color:#fff;margin-bottom:1rem;font-weight:400}
        h1 em{font-style:italic;color:#aed6f1}
        .hero-sub{font-size:16px;color:rgba(255,255,255,.72);line-height:1.75;margin-bottom:2rem;font-weight:300;max-width:500px}
        .hero-actions{display:flex;gap:12px;flex-wrap:wrap}
        .btn-primary{background:#fff;color:#1e3a5f;border:none;padding:14px 26px;border-radius:10px;font-size:15px;font-weight:600;display:inline-flex;align-items:center;gap:8px;transition:transform .2s,box-shadow .2s;cursor:pointer;font-family:'Inter',sans-serif;box-shadow:0 4px 20px rgba(0,0,0,.2)}
        .btn-primary:hover{transform:translateY(-2px);box-shadow:0 8px 28px rgba(0,0,0,.3)}
        .btn-ghost{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.35);padding:14px 26px;border-radius:10px;font-size:15px;display:inline-flex;align-items:center;gap:8px;transition:all .2s;cursor:pointer;font-family:'Inter',sans-serif}
        .btn-ghost:hover{background:rgba(255,255,255,.1)}
        .hero-card{background:rgba(255,255,255,.08);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.12);border-radius:20px;padding:1.75rem}
        .price-row{display:flex;justify-content:space-between;align-items:flex-start;padding:.85rem 0;border-bottom:1px solid rgba(255,255,255,.08)}
        .price-row:last-child{border-bottom:none}
        .price-label{font-size:13px;color:rgba(255,255,255,.55)}
        .price-val{font-family:'DM Serif Display',serif;font-size:22px;color:#fff;font-weight:400}
        .price-val.accent{color:#aed6f1}
        .trust-row{display:flex;gap:1.5rem;flex-wrap:wrap;margin-top:1.5rem}
        .trust-item{display:flex;align-items:center;gap:7px;font-size:12.5px;color:rgba(255,255,255,.75)}
        .trust-dot{width:7px;height:7px;border-radius:50%;background:#aed6f1;flex-shrink:0}
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
        .prose ul li::before{content:'·';position:absolute;left:0;color:#1a5276;font-weight:700;font-size:18px}
        .treatment-table{width:100%;border-collapse:collapse;margin:1.5rem 0;border:1px solid #f0ede8;border-radius:12px;overflow:hidden}
        .treatment-table th{font-size:11px;text-transform:uppercase;letter-spacing:.07em;color:#bbb;font-weight:500;padding:.85rem 1rem;text-align:left;background:#fafaf9;border-bottom:1px solid #f0ede8}
        .treatment-table td{padding:.85rem 1rem;border-bottom:1px solid #fafaf9;font-size:14px;color:#1a1a1a}
        .treatment-table tr:last-child td{border-bottom:none}
        .td-ist{color:#1a5276;font-weight:600}
        .td-uk{color:#aaa}
        .saving{background:#dbeafe;color:#1e3a5f;font-weight:600;border-radius:20px;padding:3px 10px;font-size:12px;white-space:nowrap;display:inline-block}
        .disclaimer{background:#f0f9ff;border:1px solid #bae6fd;border-radius:12px;padding:1.25rem 1.5rem;font-size:13px;color:#0c4a6e;line-height:1.75;margin-top:1.5rem}
        .sidebar{position:sticky;top:80px}
        .sidebar-card{background:#fff;border:1px solid #f0ede8;border-radius:16px;padding:1.75rem;margin-bottom:1rem}
        .sidebar-card.dark{background:linear-gradient(135deg,#1e3a5f,#117a8b);border-color:transparent}
        .sidebar-title{font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:#bbb;margin-bottom:1.25rem}
        .sidebar-card.dark .sidebar-title{color:rgba(255,255,255,.45)}
        .sidebar-price-row{display:flex;justify-content:space-between;align-items:baseline;padding:.6rem 0;border-bottom:1px solid #f5f4f2}
        .sidebar-price-row:last-of-type{border-bottom:none}
        .sidebar-price-label{font-size:13px;color:#777}
        .sidebar-price-val{font-size:15px;font-weight:600;color:#1e3a5f}
        .sidebar-price-val.uk{color:#aaa;font-weight:400}
        .btn-full{width:100%;padding:14px;border-radius:10px;font-size:15px;font-weight:600;display:flex;align-items:center;justify-content:center;gap:8px;cursor:pointer;font-family:'Inter',sans-serif;transition:all .2s;margin-top:1rem;border:none}
        .btn-full.blue{background:#1a5276;color:#fff}
        .btn-full.blue:hover{background:#1e3a5f}
        .btn-full.outline{background:rgba(255,255,255,.08);color:#fff;border:1px solid rgba(255,255,255,.2)}
        .check-item{display:flex;align-items:flex-start;gap:8px;font-size:13px;color:#555;padding:.5rem 0;border-bottom:1px solid #f5f4f2}
        .check-item:last-child{border-bottom:none}
        .check-dot{width:6px;height:6px;border-radius:50%;background:#1a5276;flex-shrink:0;margin-top:6px}
        .process-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:0;position:relative;margin-top:2.5rem}
        .process-grid::before{content:'';position:absolute;top:22px;left:10%;right:10%;height:1px;background:linear-gradient(90deg,transparent,#bae6fd 20%,#bae6fd 80%,transparent)}
        .proc-step{text-align:center;padding:0 .5rem;position:relative;z-index:1}
        .proc-circle{width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#1e3a5f,#1a5276);display:flex;align-items:center;justify-content:center;margin:0 auto 1rem;font-size:15px;font-weight:600;color:#fff;box-shadow:0 4px 14px rgba(26,82,118,.3)}
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
                Dental Implants Turkey
              </div>
              <div className="kicker">Dental · Istanbul</div>
              <h1>Dental Implants<br />in Turkey.<br /><em>From £350.</em></h1>
              <p className="hero-sub">
                CE-marked implant systems. JCI-accredited dental clinics. Physician-led coordination from first enquiry through treatment and discharge documentation.
              </p>
              <div className="hero-actions">
                <a href={WA_URL} target="_blank" className="btn-primary">Get a free quote</a>
                <a href="#faq" className="btn-ghost">Read FAQs ↓</a>
              </div>
              <div className="trust-row">
                {['JCI-accredited clinics','CE-marked implant systems','Fixed, itemised pricing','GP documentation included'].map(t => (
                  <div key={t} className="trust-item"><div className="trust-dot"></div>{t}</div>
                ))}
              </div>
            </div>
            <div className="hero-card">
              <div className="sidebar-title" style={{color:'rgba(255,255,255,.45)'}}>Price comparison</div>
              <div className="price-row">
                <div>
                  <div className="price-label">Single implant (Istanbul)</div>
                  <div className="price-val accent">from £350</div>
                </div>
              </div>
              <div className="price-row">
                <div>
                  <div className="price-label">Single implant (UK private)</div>
                  <div className="price-val" style={{color:'rgba(255,255,255,.35)',fontSize:'17px'}}>£2,000 – £2,800</div>
                </div>
              </div>
              <div className="price-row">
                <div>
                  <div className="price-label">Full arch (All-on-4)</div>
                  <div className="price-val accent">from £4,500</div>
                </div>
              </div>
              <div className="price-row">
                <div>
                  <div className="price-label">Typical saving</div>
                  <div className="price-val accent">~80%</div>
                </div>
              </div>
              <div className="price-row">
                <div>
                  <div className="price-label">Treatment timeline</div>
                  <div className="price-val" style={{fontSize:'17px'}}>7 – 10 days</div>
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
              <h2>Dental implants in Turkey — what to expect</h2>
              <p>
                Dental implants are titanium posts surgically placed into the jawbone to act as artificial tooth roots, onto which crowns, bridges, or dentures are attached. Istanbul has become one of the world&apos;s leading destinations for dental implant treatment, combining highly experienced prosthodontists, modern facilities, and costs up to 80% lower than UK private dental clinics.
              </p>
              <p>
                Ocean Health &amp; Travel coordinates dental implant treatment at JCI-accredited and internationally certified dental clinics in Istanbul. We are a coordination service — not a dental provider. All clinical decisions rest with your treating dentist.
              </p>

              <h3>Dental implant price comparison</h3>
              <table className="treatment-table">
                <thead>
                  <tr><th>Treatment</th><th>UK private</th><th>Istanbul (OHT)</th><th>Saving</th></tr>
                </thead>
                <tbody>
                  {[
                    ['Single dental implant','£2,000 – £2,800','from £350','~80%'],
                    ['Zirconium crown','£700 – £1,200','from £150','~75%'],
                    ['Porcelain veneer (per tooth)','£600 – £1,000','from £180','~70%'],
                    ['Full arch (All-on-4)','£15,000 – £25,000','from £4,500','~70%'],
                    ['Smile design','£3,000 – £8,000','from £1,200','~65%'],
                  ].map(row => (
                    <tr key={row[0]}>
                      <td>{row[0]}</td>
                      <td className="td-uk">{row[1]}</td>
                      <td className="td-ist">{row[2]}</td>
                      <td><span className="saving">{row[3]}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p style={{fontSize:'12px',color:'#bbb',marginTop:'-.5rem',marginBottom:'1.5rem'}}>Prices indicative. Coordination fee quoted separately. Flights not included.</p>

              <h3>The dental implant process</h3>
              <p>
                Most patients complete the implant placement phase in 7–10 days in Istanbul. The process typically involves:
              </p>
              <ul>
                <li><strong>Day 1–2:</strong> Consultation, X-rays/CT scan, treatment planning</li>
                <li><strong>Day 2–3:</strong> Implant placement surgery (local anaesthesia)</li>
                <li><strong>Day 3–7:</strong> Recovery, fitting of temporary restorations</li>
                <li><strong>3–6 months later:</strong> Final permanent crowns fitted once osseointegration is complete</li>
              </ul>

              <h3>Implant systems used</h3>
              <p>
                Our partner clinics use CE-marked implant systems from established international manufacturers including Straumann, Nobel Biocare, Osstem, and MegaGen. The specific system recommended will depend on your bone density, anatomy, and treatment plan. All implant brands and models are specified in your itemised quote before any commitment is made.
              </p>

              <h3>Combining treatments in one visit</h3>
              <p>
                Many patients maximise the value of their trip to Istanbul by combining dental implants with additional treatments such as zirconium crowns, porcelain veneers, smile design, or orthodontic work. We can coordinate comprehensive dental treatment plans — contact us with your goals and we will provide a full itemised quote covering all planned work.
              </p>

              <h3>Why Istanbul for dental implants?</h3>
              <ul>
                <li>80% lower cost vs. UK private dental clinics</li>
                <li>High-volume, experienced prosthodontists and oral surgeons</li>
                <li>CE-marked implant systems from internationally recognised manufacturers</li>
                <li>JCI-accredited and internationally certified dental facilities</li>
                <li>7–10 day treatment timeline — no 6-month NHS waiting list</li>
                <li>English-speaking coordinators and interpreters throughout</li>
              </ul>

              <div className="disclaimer">
                <strong>Note:</strong> Ocean Health &amp; Travel is a medical coordination service, not a dental provider. We do not provide dental assessments or clinical opinions. All clinical decisions — including treatment planning, implant selection, and post-operative management — rest with your treating dentist. This information is for general guidance only and does not constitute dental advice.
              </div>
            </div>

            <div className="sidebar">
              <div className="sidebar-card dark">
                <div className="sidebar-title">Get a free quote</div>
                <p style={{fontSize:'14px',color:'rgba(255,255,255,.65)',lineHeight:1.65,marginBottom:'1.25rem',fontWeight:300}}>
                  Tell us how many implants you need and any existing dental records. Full itemised quote within 48 hours.
                </p>
                <a href={WA_URL} target="_blank" className="btn-full blue">💬 WhatsApp us</a>
                <a href="mailto:info@oceanhealthtravel.com" className="btn-full outline" style={{marginTop:'8px'}}>✉️ Email us</a>
              </div>

              <div className="sidebar-card">
                <div className="sidebar-title">Price comparison</div>
                <div className="sidebar-price-row">
                  <span className="sidebar-price-label">Single implant (Istanbul)</span>
                  <span className="sidebar-price-val">from £350</span>
                </div>
                <div className="sidebar-price-row">
                  <span className="sidebar-price-label">Single implant (UK)</span>
                  <span className="sidebar-price-val uk">£2,000 – £2,800</span>
                </div>
                <div className="sidebar-price-row">
                  <span className="sidebar-price-label">Full arch All-on-4</span>
                  <span className="sidebar-price-val">from £4,500</span>
                </div>
                <div className="sidebar-price-row">
                  <span className="sidebar-price-label">Typical saving</span>
                  <span className="sidebar-price-val">~80%</span>
                </div>
                <div className="sidebar-price-row">
                  <span className="sidebar-price-label">Timeline</span>
                  <span className="sidebar-price-val">7–10 days</span>
                </div>
                <p style={{fontSize:'11px',color:'#bbb',marginTop:'1rem',lineHeight:1.6}}>Prices indicative. Coordination fee quoted separately. Flights not included.</p>
              </div>

              <div className="sidebar-card">
                <div className="sidebar-title">What&apos;s included</div>
                {['Airport transfer','Hotel near clinic','Interpreter at all appointments','Clinic liaison','Dental records in English on request'].map(item => (
                  <div key={item} className="check-item">
                    <div className="check-dot"></div>
                    <span style={{fontSize:'13px',color:'#555'}}>{item}</span>
                  </div>
                ))}
                <p style={{fontSize:'11px',color:'#bbb',marginTop:'1rem',lineHeight:1.6}}>Flights not included. Coordinator, not a dental provider.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="sec bg border" id="process">
        <div className="inner">
          <div className="kicker">The process</div>
          <h2>From enquiry to treatment in 7–10 days</h2>
          <div className="process-grid">
            {[
              {n:'1',t:'Enquiry',d:'Tell us how many implants you need and share any X-rays'},
              {n:'2',t:'Quote',d:'Full itemised proposal within 48 hours'},
              {n:'3',t:'Booking',d:'Clinic, hotel, and transfers confirmed'},
              {n:'4',t:'Treatment',d:'Implant placement with interpreter present'},
              {n:'5',t:'Records',d:'Dental documentation provided in English'},
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
          <h2>Dental implants in Turkey — FAQ</h2>
          <div className="faq-list">
            {faqs.map((f) => (
              <details key={f.q} className="faq-item">
                <summary className="faq-q">
                  {f.q}
                  <span style={{fontSize:'18px',color:'#1a5276',flexShrink:0}}>+</span>
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
          <h2>Ready to find out what dental implants cost?</h2>
          <p style={{fontSize:'16px',color:'#666',lineHeight:1.7,fontWeight:300,maxWidth:'500px',margin:'0 auto 2rem'}}>
            Tell us how many implants you need. Full itemised quote within 48 hours — no obligation.
          </p>
          <div style={{display:'flex',gap:'14px',justifyContent:'center',flexWrap:'wrap'}}>
            <a href={WA_URL} target="_blank" style={{background:'#1a5276',color:'#fff',border:'none',padding:'15px 30px',borderRadius:'10px',fontSize:'15px',fontWeight:600,display:'inline-flex',alignItems:'center',gap:'9px',cursor:'pointer',fontFamily:'Inter,sans-serif'}}>
              💬 Get a free quote
            </a>
            <a href="mailto:info@oceanhealthtravel.com" style={{background:'transparent',color:'#1a5276',border:'1px solid #1a5276',padding:'15px 30px',borderRadius:'10px',fontSize:'15px',display:'inline-flex',alignItems:'center',gap:'9px',cursor:'pointer',fontFamily:'Inter,sans-serif'}}>
              ✉️ Email us
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
            Flights not included · Client money protected via Trust Account · Coordinator, not a dental provider · Elective procedures only<br />
            <em>Ocean Health &amp; Travel does not provide dental or medical advice. All clinical decisions rest with your treating dentist. Not suitable for emergencies.</em>
          </div>
        </div>
      </footer>
    </>
  )
}
