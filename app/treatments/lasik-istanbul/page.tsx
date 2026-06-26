import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LASIK Eye Surgery in Istanbul | From £600 per eye | Ocean Health & Travel',
  description: 'LASIK laser eye surgery in Istanbul from £600 per eye — vs. £1,500–£2,500 at UK private clinics. JCI-accredited ophthalmology centres, physician-led coordination. Free quote in 48 hours.',
}

const WA_URL = 'https://wa.me/447441904858?text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20LASIK%20eye%20surgery%20in%20Istanbul'

const faqs = [
  {
    q: 'How much does LASIK cost in Istanbul?',
    a: 'LASIK laser eye surgery in Istanbul starts from £600 per eye, compared to £1,500–£2,500 per eye at UK private clinics — a saving of 60–75%. The exact price depends on your prescription, the laser platform used, and whether additional procedures such as wavefront-guided or topography-guided LASIK are recommended. A full itemised quote is provided within 48 hours of receiving your pre-operative assessment results.'
  },
  {
    q: 'Am I suitable for LASIK?',
    a: 'LASIK suitability depends on your corneal thickness, pupil size, prescription range, and overall eye health. A pre-operative assessment (including corneal topography) is required before surgery can be confirmed. Ocean Health & Travel does not provide ophthalmic assessments — suitability is determined by your treating ophthalmologist at our partner clinic. Patients with thin corneas, dry eye syndrome, or certain prescriptions may be better suited to alternative procedures such as LASEK, PRK, or SMILE.'
  },
  {
    q: 'What is the difference between LASIK, LASEK, and SMILE?',
    a: 'LASIK involves creating a thin corneal flap before laser reshaping — fastest recovery, most common. LASEK (and PRK) remove the surface epithelium without a flap — slower recovery but suitable for thinner corneas. SMILE (Small Incision Lenticule Extraction) is a newer flapless procedure with a small incision — good for dry eye patients. Your ophthalmologist will recommend the most appropriate procedure based on your pre-operative assessment.'
  },
  {
    q: 'How long does LASIK take and what is the recovery?',
    a: 'The LASIK procedure itself takes approximately 15 minutes per eye. Most patients notice significantly improved vision within 24 hours. You should avoid driving for at least 24–48 hours post-procedure. Most patients are comfortable flying home 2–3 days after surgery, subject to their surgeon\'s clearance. Full visual stabilisation typically occurs within 1–3 months.'
  },
  {
    q: 'How long do I need to stay in Istanbul?',
    a: 'Most patients stay in Istanbul for 3–5 days — including pre-operative assessment, surgery, and a post-operative check before flying home. This is one of the most time-efficient procedures we coordinate.'
  },
  {
    q: 'What coordination services are included?',
    a: 'Our coordination package includes airport transfer, hotel accommodation, professional interpretation at all appointments, and clinic liaison. Post-procedure documentation is provided in English. Flights are not included. We are a coordinator, not a medical provider.'
  },
]

export default function LasikPage() {
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
        .logo{display:flex;align-items:center}
        .nav-links{display:flex;gap:2rem;list-style:none;align-items:center}
        .nav-links a{font-size:13px;color:#444;transition:color .2s}
        .nav-links a:hover{color:#085041}
        .btn-nav{border:1px solid #085041;padding:8px 18px;border-radius:7px;font-size:13px;font-weight:500;color:#085041!important;transition:all .2s}
        .btn-nav:hover{background:#085041;color:#fff!important}
        .hero{background:linear-gradient(135deg,#0a0a1a 0%,#0d1b3e 50%,#1a237e 100%);padding:100px 0 80px;position:relative;overflow:hidden}
        .hero::before{content:'';position:absolute;width:600px;height:600px;border-radius:50%;background:radial-gradient(circle,rgba(100,181,246,.15) 0%,transparent 70%);top:-150px;right:-150px;pointer-events:none}
        .hero::after{content:'';position:absolute;width:300px;height:300px;border-radius:50%;background:radial-gradient(circle,rgba(129,212,250,.08) 0%,transparent 70%);bottom:-50px;left:-50px;pointer-events:none}
        .hero-grid{display:grid;grid-template-columns:1.2fr 0.8fr;gap:3rem;align-items:center;position:relative;z-index:1}
        .breadcrumb{font-size:12px;color:rgba(255,255,255,.5);margin-bottom:1.25rem}
        .breadcrumb a{color:rgba(255,255,255,.5)}
        .breadcrumb span{margin:0 6px}
        .kicker{font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#90caf9;margin-bottom:1rem}
        h1{font-family:'DM Serif Display',serif;font-size:clamp(34px,4vw,54px);line-height:1.1;letter-spacing:-.025em;color:#fff;margin-bottom:1rem;font-weight:400}
        h1 em{font-style:italic;color:#90caf9}
        .hero-sub{font-size:16px;color:rgba(255,255,255,.72);line-height:1.75;margin-bottom:2rem;font-weight:300;max-width:500px}
        .hero-actions{display:flex;gap:12px;flex-wrap:wrap}
        .btn-primary{background:#90caf9;color:#0d1b3e;border:none;padding:14px 26px;border-radius:10px;font-size:15px;font-weight:600;display:inline-flex;align-items:center;gap:8px;transition:transform .2s,box-shadow .2s;cursor:pointer;font-family:'Inter',sans-serif;box-shadow:0 4px 20px rgba(0,0,0,.2)}
        .btn-primary:hover{transform:translateY(-2px);box-shadow:0 8px 28px rgba(0,0,0,.3);background:#bbdefb}
        .btn-ghost{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.35);padding:14px 26px;border-radius:10px;font-size:15px;display:inline-flex;align-items:center;gap:8px;transition:all .2s;cursor:pointer;font-family:'Inter',sans-serif}
        .btn-ghost:hover{background:rgba(255,255,255,.1)}
        .hero-card{background:rgba(255,255,255,.08);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.12);border-radius:20px;padding:1.75rem}
        .price-row{display:flex;justify-content:space-between;align-items:flex-start;padding:.85rem 0;border-bottom:1px solid rgba(255,255,255,.08)}
        .price-row:last-child{border-bottom:none}
        .price-label{font-size:13px;color:rgba(255,255,255,.55)}
        .price-val{font-family:'DM Serif Display',serif;font-size:22px;color:#fff;font-weight:400}
        .price-val.accent{color:#90caf9}
        .trust-row{display:flex;gap:1.5rem;flex-wrap:wrap;margin-top:1.5rem}
        .trust-item{display:flex;align-items:center;gap:7px;font-size:12.5px;color:rgba(255,255,255,.75)}
        .trust-dot{width:7px;height:7px;border-radius:50%;background:#90caf9;flex-shrink:0}
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
        .prose ul li::before{content:'·';position:absolute;left:0;color:#1976d2;font-weight:700;font-size:18px}
        .procedure-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin:1.5rem 0}
        .procedure-card{background:#fafaf9;border:1px solid #f0ede8;border-radius:12px;padding:1.25rem}
        .procedure-tag{display:inline-block;font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;background:#e3f2fd;color:#0d47a1;border-radius:4px;padding:2px 8px;margin-bottom:.75rem}
        .procedure-card h4{font-size:14px;font-weight:600;color:#1a1a1a;margin-bottom:.5rem}
        .procedure-card p{font-size:12.5px;color:#666;line-height:1.65;font-weight:300;margin:0}
        .compare-table{width:100%;border-collapse:collapse;margin:1.5rem 0;border:1px solid #f0ede8;border-radius:12px;overflow:hidden}
        .compare-table th{font-size:11px;text-transform:uppercase;letter-spacing:.07em;color:#bbb;font-weight:500;padding:.85rem 1rem;text-align:left;background:#fafaf9;border-bottom:1px solid #f0ede8}
        .compare-table td{padding:.85rem 1rem;border-bottom:1px solid #fafaf9;font-size:14px;color:#1a1a1a}
        .compare-table tr:last-child td{border-bottom:none}
        .td-ist{color:#0d47a1;font-weight:600}
        .td-uk{color:#aaa}
        .saving{background:#e3f2fd;color:#0d47a1;font-weight:600;border-radius:20px;padding:3px 10px;font-size:12px;white-space:nowrap;display:inline-block}
        .disclaimer{background:#e8f4f8;border:1px solid #b3d9f5;border-radius:12px;padding:1.25rem 1.5rem;font-size:13px;color:#0d47a1;line-height:1.75;margin-top:1.5rem}
        .sidebar{position:sticky;top:80px}
        .sidebar-card{background:#fff;border:1px solid #f0ede8;border-radius:16px;padding:1.75rem;margin-bottom:1rem}
        .sidebar-card.dark{background:linear-gradient(135deg,#0a0a1a,#0d1b3e);border-color:transparent}
        .sidebar-title{font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:#bbb;margin-bottom:1.25rem}
        .sidebar-card.dark .sidebar-title{color:rgba(255,255,255,.45)}
        .sidebar-price-row{display:flex;justify-content:space-between;align-items:baseline;padding:.6rem 0;border-bottom:1px solid #f5f4f2}
        .sidebar-price-row:last-of-type{border-bottom:none}
        .sidebar-price-label{font-size:13px;color:#777}
        .sidebar-price-val{font-size:15px;font-weight:600;color:#0d47a1}
        .sidebar-price-val.uk{color:#aaa;font-weight:400}
        .btn-full{width:100%;padding:14px;border-radius:10px;font-size:15px;font-weight:600;display:flex;align-items:center;justify-content:center;gap:8px;cursor:pointer;font-family:'Inter',sans-serif;transition:all .2s;margin-top:1rem;border:none}
        .btn-full.blue{background:#1565c0;color:#fff}
        .btn-full.blue:hover{background:#0d47a1}
        .btn-full.outline{background:rgba(255,255,255,.08);color:#fff;border:1px solid rgba(255,255,255,.2)}
        .check-item{display:flex;align-items:flex-start;gap:8px;padding:.5rem 0;border-bottom:1px solid #f5f4f2}
        .check-item:last-child{border-bottom:none}
        .check-dot{width:6px;height:6px;border-radius:50%;background:#1565c0;flex-shrink:0;margin-top:6px}
        .process-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:0;position:relative;margin-top:2.5rem}
        .process-grid::before{content:'';position:absolute;top:22px;left:10%;right:10%;height:1px;background:linear-gradient(90deg,transparent,#bbdefb 20%,#bbdefb 80%,transparent)}
        .proc-step{text-align:center;padding:0 .5rem;position:relative;z-index:1}
        .proc-circle{width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#0a0a1a,#1565c0);display:flex;align-items:center;justify-content:center;margin:0 auto 1rem;font-size:15px;font-weight:600;color:#90caf9;box-shadow:0 4px 14px rgba(21,101,192,.3)}
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
        @media(max-width:900px){.hero-grid{grid-template-columns:1fr}.hero-card{display:none}.content-grid{grid-template-columns:1fr}.sidebar{position:static}.procedure-grid{grid-template-columns:1fr}.process-grid{grid-template-columns:1fr 1fr;gap:1rem}.process-grid::before{display:none}}
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

      <nav>
        <div className="inner nav-inner">
          <a href="/" className="logo"><img src="/logo.png" alt="Ocean Health &amp; Travel" style={{height:"44px",width:"auto",display:"block"}} /></a>
          <ul className="nav-links">
            <li><a href="/#compare">NHS vs OHT</a></li>
            <li><a href="/#services">Treatments</a></li>
            <li><a href="/#how-it-works">How it works</a></li>
            <li><a href={WA_URL} target="_blank" className="btn-nav">Free quote</a></li>
          </ul>
        </div>
      </nav>

      <section className="hero">
        <div className="inner">
          <div className="hero-grid">
            <div>
              <div className="breadcrumb">
                <a href="/">Home</a><span>›</span>
                <a href="/#services">Treatments</a><span>›</span>
                LASIK Istanbul
              </div>
              <div className="kicker">Ophthalmology · Istanbul</div>
              <h1>LASIK Eye Surgery<br />in Istanbul.<br /><em>From £600 per eye.</em></h1>
              <p className="hero-sub">
                Advanced laser platforms. JCI-accredited ophthalmology centres. Physician-led coordination from pre-operative assessment through procedure and post-operative documentation.
              </p>
              <div className="hero-actions">
                <a href={WA_URL} target="_blank" className="btn-primary">Get a free quote</a>
                <a href="#procedures" className="btn-ghost">LASIK vs SMILE ↓</a>
              </div>
              <div className="trust-row">
                {['JCI-accredited clinics','Advanced laser platforms','3–5 day Istanbul stay','60–75% lower than UK'].map(t => (
                  <div key={t} className="trust-item"><div className="trust-dot"></div>{t}</div>
                ))}
              </div>
            </div>
            <div className="hero-card">
              <div className="sidebar-title" style={{color:'rgba(255,255,255,.45)'}}>Price comparison</div>
              <div className="price-row">
                <div>
                  <div className="price-label">Istanbul (OHT)</div>
                  <div className="price-val accent">from £600 per eye</div>
                </div>
              </div>
              <div className="price-row">
                <div>
                  <div className="price-label">UK private clinic</div>
                  <div className="price-val" style={{color:'rgba(255,255,255,.35)',fontSize:'17px'}}>£1,500 – £2,500 per eye</div>
                </div>
              </div>
              <div className="price-row">
                <div>
                  <div className="price-label">Typical saving</div>
                  <div className="price-val accent">60 – 75%</div>
                </div>
              </div>
              <div className="price-row">
                <div>
                  <div className="price-label">Procedure time</div>
                  <div className="price-val" style={{fontSize:'17px'}}>~15 min per eye</div>
                </div>
              </div>
              <div className="price-row">
                <div>
                  <div className="price-label">Istanbul stay</div>
                  <div className="price-val" style={{fontSize:'17px'}}>3 – 5 days</div>
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
              <h2>LASIK eye surgery in Istanbul — what to expect</h2>
              <p>
                LASIK (Laser-Assisted In Situ Keratomileusis) is the world&apos;s most commonly performed elective surgical procedure, offering permanent correction of myopia (short-sightedness), hyperopia (long-sightedness), and astigmatism. Istanbul&apos;s ophthalmology centres offer the same advanced laser platforms used in UK clinics, at 60–75% lower cost.
              </p>
              <p>
                Ocean Health &amp; Travel coordinates LASIK and related laser eye procedures at JCI-accredited ophthalmology centres in Istanbul. We are a coordination service — not a medical provider. All clinical decisions, including suitability assessment and procedure selection, rest with your treating ophthalmologist.
              </p>

              <h3 id="procedures">LASIK, LASEK, and SMILE — which procedure?</h3>
              <div className="procedure-grid">
                <div className="procedure-card">
                  <div className="procedure-tag">LASIK</div>
                  <h4>Most common</h4>
                  <p>Corneal flap created, laser reshapes tissue underneath. Fast recovery — improved vision within 24h. Suitable for most prescriptions.</p>
                </div>
                <div className="procedure-card">
                  <div className="procedure-tag">LASEK / PRK</div>
                  <h4>No flap</h4>
                  <p>Surface epithelium removed, laser applied directly. Slower recovery (3–7 days). Better for thin corneas or active lifestyles.</p>
                </div>
                <div className="procedure-card">
                  <div className="procedure-tag">SMILE</div>
                  <h4>Flapless</h4>
                  <p>Small incision, lenticule extracted. Minimal dry eye risk. Good for high myopia. Newer technique with growing evidence base.</p>
                </div>
              </div>
              <p>
                Your ophthalmologist will determine the most appropriate procedure during your pre-operative assessment, based on corneal thickness, pupil size, prescription, and lifestyle factors.
              </p>

              <h3>Price comparison — laser eye surgery</h3>
              <table className="compare-table">
                <thead>
                  <tr><th>Procedure</th><th>UK private (per eye)</th><th>Istanbul (OHT)</th><th>Saving</th></tr>
                </thead>
                <tbody>
                  {[
                    ['LASIK','£1,500 – £2,500','from £600','60–75%'],
                    ['LASEK / PRK','£1,200 – £2,000','from £500','60–75%'],
                    ['SMILE','£2,000 – £3,000','from £800','60–70%'],
                    ['Cataract surgery','£2,000 – £3,500','from £800','~65%'],
                    ['Premium lens replacement','£3,000 – £5,000','from £1,200','~65%'],
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
              <p style={{fontSize:'12px',color:'#bbb',marginTop:'-.5rem',marginBottom:'1.5rem'}}>Prices per eye. Coordination fee quoted separately. Flights not included.</p>

              <h3>Recovery timeline</h3>
              <ul>
                <li><strong>Day of procedure:</strong> Rest advised, vision may be blurry or hazy</li>
                <li><strong>24 hours:</strong> Most LASIK patients notice significant improvement</li>
                <li><strong>48–72 hours:</strong> Comfortable to fly home (subject to surgeon clearance)</li>
                <li><strong>1 week:</strong> Return to most normal activities</li>
                <li><strong>1–3 months:</strong> Full visual stabilisation</li>
              </ul>

              <h3>Why Istanbul for laser eye surgery?</h3>
              <ul>
                <li>60–75% lower cost than UK private clinics</li>
                <li>Same advanced laser platforms (Zeiss, Alcon, Schwind) as UK centres</li>
                <li>High-volume, experienced ophthalmological teams</li>
                <li>JCI-accredited facilities</li>
                <li>3–5 day Istanbul stay — one of the most time-efficient procedures we coordinate</li>
              </ul>

              <div className="disclaimer">
                <strong>Note:</strong> LASIK suitability requires pre-operative assessment including corneal topography. Ocean Health &amp; Travel does not provide ophthalmic assessments. All clinical decisions rest with your treating ophthalmologist. This information is for general guidance only and does not constitute medical advice.
              </div>
            </div>

            <div className="sidebar">
              <div className="sidebar-card dark">
                <div className="sidebar-title">Get a free quote</div>
                <p style={{fontSize:'14px',color:'rgba(255,255,255,.65)',lineHeight:1.65,marginBottom:'1.25rem',fontWeight:300}}>
                  Tell us your prescription and we&apos;ll provide a full quote within 48 hours — no obligation.
                </p>
                <a href={WA_URL} target="_blank" className="btn-full blue">💬 WhatsApp us</a>
                <a href="mailto:info@oceanhealthtravel.com" className="btn-full outline" style={{marginTop:'8px'}}>✉️ Email us</a>
              </div>

              <div className="sidebar-card">
                <div className="sidebar-title">Price comparison</div>
                <div className="sidebar-price-row">
                  <span className="sidebar-price-label">LASIK (Istanbul, per eye)</span>
                  <span className="sidebar-price-val">from £600</span>
                </div>
                <div className="sidebar-price-row">
                  <span className="sidebar-price-label">LASIK (UK private)</span>
                  <span className="sidebar-price-val uk">£1,500 – £2,500</span>
                </div>
                <div className="sidebar-price-row">
                  <span className="sidebar-price-label">SMILE (Istanbul)</span>
                  <span className="sidebar-price-val">from £800/eye</span>
                </div>
                <div className="sidebar-price-row">
                  <span className="sidebar-price-label">Typical saving</span>
                  <span className="sidebar-price-val">60 – 75%</span>
                </div>
                <div className="sidebar-price-row">
                  <span className="sidebar-price-label">Istanbul stay</span>
                  <span className="sidebar-price-val">3–5 days</span>
                </div>
                <p style={{fontSize:'11px',color:'#bbb',marginTop:'1rem',lineHeight:1.6}}>Prices per eye. Coordination fee quoted separately. Flights not included.</p>
              </div>

              <div className="sidebar-card">
                <div className="sidebar-title">What&apos;s included</div>
                {['Airport transfer','Hotel near clinic','Interpreter at all appointments','Clinic liaison','Post-procedure documentation in English'].map(item => (
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
          <h2>From enquiry to procedure in 3–5 days</h2>
          <div className="process-grid">
            {[
              {n:'1',t:'Enquiry',d:'Tell us your prescription and contact us via WhatsApp'},
              {n:'2',t:'Quote',d:'Full itemised proposal within 48 hours'},
              {n:'3',t:'Assessment',d:'Pre-operative corneal mapping at partner clinic'},
              {n:'4',t:'Procedure',d:'LASIK, SMILE, or LASEK — interpreter present'},
              {n:'5',t:'Home',d:'Post-op check, documentation provided, fly home'},
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
          <h2>LASIK Istanbul — FAQ</h2>
          <div className="faq-list">
            {faqs.map((f) => (
              <details key={f.q} className="faq-item">
                <summary className="faq-q">
                  {f.q}
                  <span style={{fontSize:'18px',color:'#1565c0',flexShrink:0}}>+</span>
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
          <h2>Ready to find out if LASIK is right for you?</h2>
          <p style={{fontSize:'16px',color:'#666',lineHeight:1.7,fontWeight:300,maxWidth:'500px',margin:'0 auto 2rem'}}>
            Tell us your prescription. Full itemised quote within 48 hours — no obligation.
          </p>
          <div style={{display:'flex',gap:'14px',justifyContent:'center',flexWrap:'wrap'}}>
            <a href={WA_URL} target="_blank" style={{background:'#1565c0',color:'#fff',border:'none',padding:'15px 30px',borderRadius:'10px',fontSize:'15px',fontWeight:600,display:'inline-flex',alignItems:'center',gap:'9px',cursor:'pointer',fontFamily:'Inter,sans-serif'}}>
              💬 Get a free quote
            </a>
            <a href="mailto:info@oceanhealthtravel.com" style={{background:'transparent',color:'#1565c0',border:'1px solid #1565c0',padding:'15px 30px',borderRadius:'10px',fontSize:'15px',display:'inline-flex',alignItems:'center',gap:'9px',cursor:'pointer',fontFamily:'Inter,sans-serif'}}>
              ✉️ Email us
            </a>
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
            <em>Ocean Health &amp; Travel does not provide medical advice. All clinical decisions rest with your treating ophthalmologist. Not suitable for emergencies.</em>
          </div>
        </div>
      </footer>
    </>
  )
}
