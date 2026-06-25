import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rhinoplasty in Istanbul | From £3,200 | Ocean Health & Travel',
  description: 'Rhinoplasty (nose surgery) in Istanbul from £3,200 — vs. £7,000–£12,000 at UK private clinics. JCI-accredited surgeons, physician-led coordination, 2–3 week timeline. Free quote in 48 hours.',
}

const WA_URL = 'https://wa.me/447441904858?text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20rhinoplasty%20in%20Istanbul'

const faqs = [
  {
    q: 'How much does rhinoplasty cost in Istanbul?',
    a: 'Rhinoplasty in Istanbul through Ocean Health & Travel starts from £3,200, compared to £7,000–£12,000 at UK private clinics. The price includes surgeon fee, anaesthesia, hospital stay, and standard post-operative care. Airport transfer, hotel, and interpreter are coordinated separately.'
  },
  {
    q: 'How long does rhinoplasty take to arrange through Ocean Health & Travel?',
    a: 'Most patients receive a full itemised quote within 48 hours of first contact. Surgery can typically be arranged within 2–3 weeks — compared to months-long waiting lists at UK private clinics.'
  },
  {
    q: 'Which hospitals perform rhinoplasty in Istanbul?',
    a: 'We work exclusively with JCI (Joint Commission International) accredited hospitals in Istanbul, including Memorial Hospitals Group. All partner facilities meet international standards for surgical safety and patient care.'
  },
  {
    q: 'Is rhinoplasty in Turkey safe?',
    a: 'Ocean Health & Travel coordinates exclusively with JCI-accredited hospitals and board-certified plastic surgeons. We do not provide medical advice — all clinical decisions rest with your treating surgeon. As with any surgical procedure, risks exist and will be discussed during your pre-operative consultation.'
  },
  {
    q: 'What is included in the coordination package?',
    a: 'Our coordination package includes airport transfer, hotel accommodation, professional interpretation at all appointments, and clinic liaison throughout your stay. Post-discharge documentation is forwarded to your UK GP on request. Flights are not included.'
  },
  {
    q: 'How do I get started?',
    a: 'Contact us via WhatsApp or email with your goals and any relevant medical history. We will provide a full itemised quote within 48 hours — no obligation.'
  },
]

export default function RhinoplastyPage() {
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
        .hero{background:linear-gradient(135deg,#042e22 0%,#085041 50%,#0d6b55 100%);padding:100px 0 80px;position:relative;overflow:hidden}
        .hero::before{content:'';position:absolute;width:500px;height:500px;border-radius:50%;background:radial-gradient(circle,rgba(29,158,117,.2) 0%,transparent 70%);top:-100px;right:-100px;pointer-events:none}
        .hero-grid{display:grid;grid-template-columns:1.2fr 0.8fr;gap:3rem;align-items:center;position:relative;z-index:1}
        .breadcrumb{font-size:12px;color:rgba(255,255,255,.5);margin-bottom:1.25rem}
        .breadcrumb a{color:rgba(255,255,255,.5);transition:color .2s}
        .breadcrumb a:hover{color:#6ee7b7}
        .breadcrumb span{margin:0 6px}
        .kicker{font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#6ee7b7;margin-bottom:1rem}
        h1{font-family:'DM Serif Display',serif;font-size:clamp(36px,4.5vw,58px);line-height:1.1;letter-spacing:-.025em;color:#fff;margin-bottom:1rem;font-weight:400}
        h1 em{font-style:italic;color:#6ee7b7}
        .hero-sub{font-size:16px;color:rgba(255,255,255,.72);line-height:1.75;margin-bottom:2rem;font-weight:300;max-width:500px}
        .hero-actions{display:flex;gap:12px;flex-wrap:wrap}
        .btn-primary{background:#fff;color:#085041;border:none;padding:14px 26px;border-radius:10px;font-size:15px;font-weight:600;display:inline-flex;align-items:center;gap:8px;transition:transform .2s,box-shadow .2s;cursor:pointer;font-family:'Inter',sans-serif;box-shadow:0 4px 20px rgba(0,0,0,.15)}
        .btn-primary:hover{transform:translateY(-2px);box-shadow:0 8px 28px rgba(0,0,0,.2)}
        .btn-ghost{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.35);padding:14px 26px;border-radius:10px;font-size:15px;display:inline-flex;align-items:center;gap:8px;transition:all .2s;cursor:pointer;font-family:'Inter',sans-serif}
        .btn-ghost:hover{background:rgba(255,255,255,.1)}
        .hero-card{background:rgba(255,255,255,.1);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.15);border-radius:20px;padding:1.75rem}
        .price-row{display:flex;justify-content:space-between;align-items:center;padding:.85rem 0;border-bottom:1px solid rgba(255,255,255,.1)}
        .price-row:last-child{border-bottom:none}
        .price-label{font-size:13px;color:rgba(255,255,255,.65)}
        .price-val{font-family:'DM Serif Display',serif;font-size:22px;color:#fff;font-weight:400}
        .price-val.green{color:#6ee7b7}
        .price-saving{font-size:11px;font-weight:600;background:rgba(110,231,183,.2);color:#6ee7b7;border-radius:20px;padding:3px 10px;margin-top:3px;display:inline-block}
        .sec{padding:5rem 0}
        .sec.bg{background:#fafaf9}
        .sec.border{border-top:1px solid #f0ede8;border-bottom:1px solid #f0ede8}
        h2{font-family:'DM Serif Display',serif;font-size:clamp(26px,3vw,38px);font-weight:400;color:#1a1a1a;letter-spacing:-.02em;line-height:1.2;margin-bottom:1rem}
        h3{font-family:'DM Serif Display',serif;font-size:22px;font-weight:400;color:#1a1a1a;letter-spacing:-.01em;margin-bottom:.75rem}
        .sec-sub{font-size:16px;color:#666;line-height:1.7;font-weight:300;max-width:640px;margin-bottom:3rem}
        .content-grid{display:grid;grid-template-columns:1fr 340px;gap:3rem;align-items:start}
        .prose p{font-size:15px;color:#444;line-height:1.8;margin-bottom:1.25rem;font-weight:300}
        .prose h3{margin-top:2rem;margin-bottom:.75rem}
        .prose ul{list-style:none;padding:0;margin-bottom:1.25rem}
        .prose ul li{font-size:15px;color:#444;line-height:1.8;padding-left:16px;position:relative;font-weight:300}
        .prose ul li::before{content:'·';position:absolute;left:0;color:#1D9E75;font-weight:700;font-size:18px}
        .sidebar{position:sticky;top:80px}
        .sidebar-card{background:#fff;border:1px solid #f0ede8;border-radius:16px;padding:1.75rem;margin-bottom:1rem}
        .sidebar-card.dark{background:linear-gradient(135deg,#042e22,#085041);border-color:transparent}
        .sidebar-title{font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:#bbb;margin-bottom:1.25rem}
        .sidebar-card.dark .sidebar-title{color:rgba(255,255,255,.5)}
        .sidebar-price-row{display:flex;justify-content:space-between;align-items:baseline;padding:.6rem 0;border-bottom:1px solid #f5f4f2}
        .sidebar-price-row:last-of-type{border-bottom:none}
        .sidebar-price-label{font-size:13px;color:#777}
        .sidebar-price-val{font-size:15px;font-weight:600;color:#085041}
        .sidebar-price-val.uk{color:#aaa;font-weight:400}
        .btn-full{width:100%;padding:14px;border-radius:10px;font-size:15px;font-weight:600;display:flex;align-items:center;justify-content:center;gap:8px;cursor:pointer;font-family:'Inter',sans-serif;transition:all .2s;margin-top:1rem;border:none}
        .btn-full.green{background:#1D9E75;color:#fff}
        .btn-full.green:hover{background:#085041}
        .btn-full.white{background:#fff;color:#085041;border:1px solid #f0ede8}
        .btn-full.white:hover{border-color:#085041}
        .process-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:0;position:relative;margin-top:2.5rem}
        .process-grid::before{content:'';position:absolute;top:22px;left:10%;right:10%;height:1px;background:linear-gradient(90deg,transparent,#c6f0de 20%,#c6f0de 80%,transparent)}
        .proc-step{text-align:center;padding:0 .5rem;position:relative;z-index:1}
        .proc-circle{width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#085041,#1D9E75);display:flex;align-items:center;justify-content:center;margin:0 auto 1rem;font-size:15px;font-weight:600;color:#fff;box-shadow:0 4px 14px rgba(8,80,65,.3)}
        .proc-t{font-size:13px;font-weight:600;margin-bottom:.3rem}
        .proc-d{font-size:11px;color:#888;line-height:1.5}
        .faq-list{display:flex;flex-direction:column;gap:0;margin-top:2.5rem;border:1px solid #f0ede8;border-radius:16px;overflow:hidden}
        .faq-item{border-bottom:1px solid #f0ede8}
        .faq-item:last-child{border-bottom:none}
        .faq-q{width:100%;text-align:left;padding:1.25rem 1.5rem;background:#fff;border:none;cursor:pointer;font-family:'Inter',sans-serif;font-size:15px;font-weight:500;color:#1a1a1a;display:flex;justify-content:space-between;align-items:center;gap:1rem;transition:background .2s}
        .faq-q:hover{background:#fafaf9}
        .faq-a{padding:0 1.5rem 1.25rem;font-size:14px;color:#666;line-height:1.75;font-weight:300}
        .disclaimer{background:#fffbeb;border:1px solid #fde68a;border-radius:12px;padding:1.25rem 1.5rem;font-size:13px;color:#92400e;line-height:1.7;margin-top:2rem}
        .trust-row{display:flex;gap:1.5rem;flex-wrap:wrap;margin-top:1.5rem}
        .trust-item{display:flex;align-items:center;gap:7px;font-size:12.5px;color:rgba(255,255,255,.8)}
        .trust-dot{width:7px;height:7px;border-radius:50%;background:#6ee7b7;flex-shrink:0}
        footer{background:#111;padding:3rem 0 2rem;margin-top:0}
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Rhinoplasty (Nose Surgery) in Istanbul",
        "description": "Rhinoplasty coordinated by Ocean Health & Travel at JCI-accredited hospitals in Istanbul, Turkey. Starting from £3,200.",
        "procedureType": "Surgical",
        "followup": "Post-discharge documentation forwarded to UK GP on request",
        "preparation": "Pre-operative clinical assessment required",
        "howPerformed": "Performed by board-certified plastic surgeons at JCI-accredited hospitals in Istanbul"
      })}} />

      {/* NAV */}
      <nav>
        <div className="inner nav-inner">
          <a href="/" className="logo">Ocean Health &amp; Travel</a>
          <ul className="nav-links">
            <li><a href="/#compare">NHS vs OHT</a></li>
            <li><a href="/#services">Treatments</a></li>
            <li><a href="/#how-it-works">How it works</a></li>
            <li><a href={WA_URL} target="_blank" className="btn-nav">Free quote</a></li>
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="inner">
          <div className="hero-grid">
            <div>
              <div className="breadcrumb">
                <a href="/">Home</a><span>›</span>
                <a href="/#services">Treatments</a><span>›</span>
                Rhinoplasty Istanbul
              </div>
              <div className="kicker">Plastic surgery · Istanbul</div>
              <h1>Rhinoplasty in Istanbul.<br /><em>From £3,200.</em></h1>
              <p className="hero-sub">
                Board-certified surgeons. JCI-accredited hospitals. Physician-led coordination from first enquiry through discharge and GP documentation. Surgery in 2–3 weeks.
              </p>
              <div className="hero-actions">
                <a href={WA_URL} target="_blank" className="btn-primary">Get a free quote</a>
                <a href="#faq" className="btn-ghost">Read FAQs ↓</a>
              </div>
              <div className="trust-row">
                {['JCI-accredited hospitals','Physician-led coordination','Fixed, itemised pricing','GP documentation included'].map(t => (
                  <div key={t} className="trust-item"><div className="trust-dot"></div>{t}</div>
                ))}
              </div>
            </div>
            <div className="hero-card">
              <div className="sidebar-title" style={{color:'rgba(255,255,255,.5)'}}>Price comparison</div>
              <div className="price-row">
                <div>
                  <div className="price-label">Istanbul (OHT)</div>
                  <div className="price-val green">from £3,200</div>
                  
                </div>
              </div>
              <div className="price-row">
                <div>
                  <div className="price-label">UK private clinic</div>
                  <div className="price-val" style={{color:'rgba(255,255,255,.4)',fontSize:'18px'}}>£7,000 – £12,000</div>
                </div>
              </div>
              <div className="price-row">
                <div>
                  <div className="price-label">Typical saving</div>
                  <div className="price-val green">55 – 70%</div>
                </div>
              </div>
              <div className="price-row">
                <div>
                  <div className="price-label">Timeline</div>
                  <div className="price-val green">2 – 3 weeks</div>
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
              <h2>Rhinoplasty in Istanbul — what to expect</h2>
              <p>
                Rhinoplasty, commonly known as a nose job, is one of the most commonly performed plastic surgery procedures worldwide. Istanbul has become a leading destination for rhinoplasty, combining highly experienced surgeons, internationally accredited hospitals, and significantly lower costs compared to UK private clinics.
              </p>
              <p>
                Ocean Health &amp; Travel coordinates rhinoplasty procedures at JCI-accredited hospitals in Istanbul. We are a medical coordination service — not a medical provider. All clinical decisions rest with your treating surgeon and the hospital team.
              </p>

              <h3>What does rhinoplasty involve?</h3>
              <p>
                Rhinoplasty is a surgical procedure performed under general anaesthesia to reshape the nose. It can address both aesthetic concerns (shape, size, symmetry) and functional issues (breathing difficulties, deviated septum). The procedure typically takes 2–3 hours, with most patients staying in Istanbul for 7–10 days post-operatively before flying home.
              </p>
              <ul>
                <li>Primary rhinoplasty (first-time surgery)</li>
                <li>Revision rhinoplasty (corrective surgery after a previous procedure)</li>
                <li>Functional rhinoplasty (septoplasty for breathing issues)</li>
                <li>Combined aesthetic and functional procedures</li>
              </ul>

              <h3>Recovery timeline</h3>
              <p>
                Most patients experience significant swelling and bruising for the first 1–2 weeks. A splint is typically worn for 7–10 days. The majority of visible swelling subsides within 4–6 weeks, though final results may take up to 12 months to fully develop as residual swelling resolves.
              </p>
              <ul>
                <li>Days 1–7: Rest, swelling and bruising at peak</li>
                <li>Days 7–10: Splint removal, most patients fly home</li>
                <li>Weeks 2–4: Presentable for social activities</li>
                <li>Months 3–12: Final results develop progressively</li>
              </ul>

              <h3>Rhinoplasty cost in Istanbul vs. UK</h3>
              <p>
                Rhinoplasty at UK private clinics typically costs between £7,000 and £12,000, depending on the surgeon, clinic, and complexity of the procedure. The same procedure at JCI-accredited hospitals in Istanbul starts from £3,200 — a saving of 55–70%. This price differential is driven by lower operating costs in Turkey, not by differences in surgical quality or hospital standards at accredited facilities.
              </p>

              <h3>Why Istanbul for rhinoplasty?</h3>
              <ul>
                <li>High volume of procedures — Istanbul surgeons perform significantly more rhinoplasties per year than most UK surgeons, building substantial case experience</li>
                <li>JCI-accredited hospitals meeting international safety standards</li>
                <li>55–70% lower cost vs. UK private clinics</li>
                <li>2–3 week timeline from first enquiry to surgery</li>
                <li>English-speaking coordinators and interpreters throughout</li>
              </ul>

              <div className="disclaimer">
                <strong>Important:</strong> Ocean Health &amp; Travel is a medical coordination service, not a medical provider. We do not provide medical advice or surgical assessments. All clinical decisions — including suitability for surgery, surgical technique, and post-operative management — rest with your treating surgeon at the partner hospital. This information is for general guidance only and does not constitute medical advice.
              </div>
            </div>

            <div className="sidebar">
              <div className="sidebar-card dark">
                <div className="sidebar-title">Get a free quote</div>
                <p style={{fontSize:'14px',color:'rgba(255,255,255,.65)',lineHeight:1.65,marginBottom:'1.25rem',fontWeight:300}}>
                  Tell us about your goals. We&apos;ll have a full itemised quote back within 48 hours — no obligation.
                </p>
                <a href={WA_URL} target="_blank" className="btn-full green">💬 WhatsApp us</a>
                <a href="mailto:info@oceanhealthtravel.com" className="btn-full white" style={{marginTop:'8px',background:'rgba(255,255,255,.1)',color:'#fff',border:'1px solid rgba(255,255,255,.2)'}}>✉️ Email us</a>
              </div>

              <div className="sidebar-card">
                <div className="sidebar-title">Price comparison</div>
                <div className="sidebar-price-row">
                  <span className="sidebar-price-label">Istanbul (OHT)</span>
                  <span className="sidebar-price-val">from £3,200</span>
                </div>
                <div className="sidebar-price-row">
                  <span className="sidebar-price-label">UK private</span>
                  <span className="sidebar-price-val uk">£7,000 – £12,000</span>
                </div>
                <div className="sidebar-price-row">
                  <span className="sidebar-price-label">Typical saving</span>
                  <span className="sidebar-price-val">55 – 70%</span>
                </div>
                <div className="sidebar-price-row">
                  <span className="sidebar-price-label">Timeline</span>
                  <span className="sidebar-price-val">2–3 weeks</span>
                </div>
                <p style={{fontSize:'11px',color:'#bbb',marginTop:'1rem',lineHeight:1.6}}>Prices indicative. Coordination fee quoted separately. Flights not included.</p>
              </div>

              <div className="sidebar-card">
                <div className="sidebar-title">What&apos;s included</div>
                {['Airport transfer','Hotel & accommodation','Interpreter at all appointments','Clinic liaison','GP documentation on request'].map(item => (
                  <div key={item} style={{fontSize:'13px',color:'rgba(255,255,255,.75)',padding:'.5rem 0',borderBottom:'1px solid #f5f4f2',display:'flex',alignItems:'center',gap:'8px'}}>
                    <div style={{width:'6px',height:'6px',borderRadius:'50%',background:'#1D9E75',flexShrink:0}}></div>
                    {item}
                  </div>
                ))}
                <p style={{fontSize:'11px',color:'#bbb',marginTop:'1rem',lineHeight:1.6}}>Flights not included. Coordinator, not a medical provider.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="sec bg border" id="process">
        <div className="inner">
          <div className="kicker">The process</div>
          <h2>From enquiry to surgery in 2–3 weeks</h2>
          <div className="process-grid">
            {[
              {n:'1',t:'Enquiry',d:'WhatsApp or email us your goals and preferred dates'},
              {n:'2',t:'Quote',d:'Full itemised proposal within 48 hours'},
              {n:'3',t:'Booking',d:'Clinic, hotel, and transfers confirmed'},
              {n:'4',t:'Surgery',d:'Interpreter at every appointment'},
              {n:'5',t:'Home',d:'GP documentation forwarded on request'},
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
          <h2>Rhinoplasty in Istanbul — FAQ</h2>
          <div className="faq-list">
            {faqs.map((f) => (
              <details key={f.q} className="faq-item">
                <summary className="faq-q">
                  {f.q}
                  <span style={{fontSize:'18px',color:'#1D9E75',flexShrink:0}}>+</span>
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
          <h2>Ready to find out what rhinoplasty costs?</h2>
          <p style={{fontSize:'16px',color:'#666',lineHeight:1.7,fontWeight:300,maxWidth:'500px',margin:'0 auto 2rem'}}>
            Send us your goals and preferred dates. Full itemised quote within 48 hours — no obligation.
          </p>
          <div style={{display:'flex',gap:'14px',justifyContent:'center',flexWrap:'wrap'}}>
            <a href={WA_URL} target="_blank" style={{background:'#085041',color:'#fff',border:'none',padding:'15px 30px',borderRadius:'10px',fontSize:'15px',fontWeight:600,display:'inline-flex',alignItems:'center',gap:'9px',cursor:'pointer',fontFamily:'Inter,sans-serif'}}>
              💬 Get a free quote
            </a>
            <a href="mailto:info@oceanhealthtravel.com" style={{background:'transparent',color:'#085041',border:'1px solid #085041',padding:'15px 30px',borderRadius:'10px',fontSize:'15px',display:'inline-flex',alignItems:'center',gap:'9px',cursor:'pointer',fontFamily:'Inter,sans-serif'}}>
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
            <a href="mailto:info@oceanhealthtravel.com" style={{color:'rgba(255,255,255,.75)'}}>info@oceanhealthtravel.com</a> ·{' '}
            <a href="tel:+447441904858" style={{color:'rgba(255,255,255,.75)'}}>+44 7441 904858</a><br />
            Flights not included · Client money protected via Trust Account · Coordinator, not a medical provider · Elective procedures only<br />
            <em>Ocean Health &amp; Travel does not provide medical advice. All clinical decisions rest with your treating clinic. Not suitable for emergencies.</em>
          </div>
        </div>
      </footer>
    </>
  )
}
