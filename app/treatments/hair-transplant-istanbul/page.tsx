import type { Metadata } from 'next'
import Nav from '@/app/components/Nav'

export const metadata: Metadata = {
  title: 'Hair Transplant in Istanbul | Ocean Health & Travel',
  description: 'Hair transplant in Istanbul — FUE and DHI techniques at JCI-accredited clinics. Physician-led coordination, fixed pricing, 2–3 day procedure. Free quote in 48 hours.',
}

const WA_URL = 'https://wa.me/447441904858?text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20hair%20transplant%20in%20Istanbul'

const faqs = [
  {
    q: 'How much does a hair transplant cost in Istanbul?',
    a: 'Hair transplant costs in Istanbul vary depending on the technique (FUE or DHI), the number of grafts required, and the clinic. Most patients require between 2,000 and 4,000 grafts. Contact us for a personalised quote based on your specific needs — we provide full itemised pricing within 48 hours.'
  },
  {
    q: 'What is the difference between FUE and DHI?',
    a: 'FUE (Follicular Unit Extraction) involves extracting individual hair follicles and implanting them into recipient sites created in advance. DHI (Direct Hair Implantation) uses a specialised pen (Choi implanter) to extract and implant follicles simultaneously, without pre-made channels. DHI typically allows higher density and more precise angle control, particularly for the hairline. Your surgeon will recommend the most appropriate technique based on your hair type, donor area, and goals.'
  },
  {
    q: 'How long does a hair transplant take?',
    a: 'Most hair transplant procedures take 6–8 hours and are completed in a single day. Larger sessions (4,000+ grafts) may require two consecutive days. Most patients stay in Istanbul for 3–5 days in total, including pre-operative consultation and post-operative check.'
  },
  {
    q: 'When will I see results?',
    a: 'Transplanted hair typically sheds within 2–6 weeks post-procedure (shock loss) — this is normal and expected. New growth begins at 3–4 months, with significant improvement visible at 6–9 months. Full results are typically seen at 12–18 months.'
  },
  {
    q: 'Is a hair transplant in Istanbul safe?',
    a: 'Ocean Health & Travel coordinates hair transplant procedures at JCI-accredited clinics with experienced trichological surgeons. We do not provide medical advice — all clinical decisions rest with your treating surgeon. As with any surgical procedure, risks exist and will be discussed during your pre-operative consultation.'
  },
  {
    q: 'What is included in the coordination package?',
    a: 'Our coordination package includes airport transfer, hotel accommodation, professional interpretation at all appointments, and clinic liaison. Post-procedure documentation is provided in English. Flights are not included. We are a coordinator, not a medical provider.'
  },
]

export default function HairTransplantPage() {
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
        .hero{background:linear-gradient(135deg,#0a1a13 0%,#0a2e22 50%,#063d2f 100%);padding:100px 0 80px;position:relative;overflow:hidden}
        .hero::before{content:'';position:absolute;width:500px;height:500px;border-radius:50%;background:radial-gradient(circle,rgba(139,92,246,.2) 0%,transparent 70%);top:-100px;right:-100px;pointer-events:none}
        .hero-grid{display:grid;grid-template-columns:1.2fr 0.8fr;gap:3rem;align-items:center;position:relative;z-index:1}
        .breadcrumb{font-size:12px;color:rgba(255,255,255,.5);margin-bottom:1.25rem}
        .breadcrumb a{color:rgba(255,255,255,.5)}
        .breadcrumb span{margin:0 6px}
        .kicker{font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#b5fde3;margin-bottom:1rem}
        h1{font-family:'DM Serif Display',serif;font-size:clamp(34px,4vw,54px);line-height:1.1;letter-spacing:-.025em;color:#fff;margin-bottom:1rem;font-weight:400}
        h1 em{font-style:italic;color:#b5fde3}
        .hero-sub{font-size:16px;color:rgba(255,255,255,.72);line-height:1.75;margin-bottom:2rem;font-weight:300;max-width:500px}
        .hero-actions{display:flex;gap:12px;flex-wrap:wrap}
        .btn-primary{background:#fff;color:#0a2e22;border:none;padding:14px 26px;border-radius:10px;font-size:15px;font-weight:600;display:inline-flex;align-items:center;gap:8px;transition:transform .2s,box-shadow .2s;cursor:pointer;font-family:'Inter',sans-serif;box-shadow:0 4px 20px rgba(0,0,0,.2)}
        .btn-primary:hover{transform:translateY(-2px);box-shadow:0 8px 28px rgba(0,0,0,.3)}
        .btn-ghost{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.35);padding:14px 26px;border-radius:10px;font-size:15px;display:inline-flex;align-items:center;gap:8px;transition:all .2s;cursor:pointer;font-family:'Inter',sans-serif}
        .btn-ghost:hover{background:rgba(255,255,255,.1)}
        .hero-card{background:rgba(255,255,255,.08);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.12);border-radius:20px;padding:1.75rem}
        .price-row{display:flex;justify-content:space-between;align-items:flex-start;padding:.85rem 0;border-bottom:1px solid rgba(255,255,255,.08)}
        .price-row:last-child{border-bottom:none}
        .price-label{font-size:13px;color:rgba(255,255,255,.55)}
        .price-val{font-family:'DM Serif Display',serif;font-size:20px;color:#fff;font-weight:400}
        .price-val.accent{color:#b5fde3}
        .trust-row{display:flex;gap:1.5rem;flex-wrap:wrap;margin-top:1.5rem}
        .trust-item{display:flex;align-items:center;gap:7px;font-size:12.5px;color:rgba(255,255,255,.75)}
        .trust-dot{width:7px;height:7px;border-radius:50%;background:#b5fde3;flex-shrink:0}
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
        .prose ul li::before{content:'·';position:absolute;left:0;color:#085041;font-weight:700;font-size:18px}
        .technique-grid{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1.5rem 0}
        .technique-card{background:#fafaf9;border:1px solid #f0ede8;border-radius:12px;padding:1.25rem}
        .technique-card h4{font-size:15px;font-weight:600;color:#1a1a1a;margin-bottom:.5rem}
        .technique-card p{font-size:13px;color:#666;line-height:1.65;font-weight:300;margin:0}
        .technique-tag{display:inline-block;font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;background:#e9fef6;color:#08533f;border-radius:4px;padding:2px 8px;margin-bottom:.75rem}
        .timeline-list{display:flex;flex-direction:column;gap:0;margin:1.5rem 0}
        .timeline-item{display:flex;gap:1rem;padding-bottom:1.25rem;position:relative}
        .timeline-item:last-child{padding-bottom:0}
        .tl-left{display:flex;flex-direction:column;align-items:center;flex-shrink:0}
        .tl-dot{width:10px;height:10px;border-radius:50%;background:#085041;flex-shrink:0;margin-top:5px}
        .tl-line{width:1px;flex:1;background:#e9fef6;margin-top:4px}
        .timeline-item:last-child .tl-line{display:none}
        .tl-period{font-size:12px;font-weight:600;color:#085041;margin-bottom:2px}
        .tl-desc{font-size:14px;color:#444;line-height:1.6;font-weight:300}
        .disclaimer{background:#f3fffb;border:1px solid #d6feef;border-radius:12px;padding:1.25rem 1.5rem;font-size:13px;color:#063d2f;line-height:1.75;margin-top:1.5rem}
        .sidebar{position:sticky;top:80px}
        .sidebar-card{background:#fff;border:1px solid #f0ede8;border-radius:16px;padding:1.75rem;margin-bottom:1rem}
        .sidebar-card.dark{background:linear-gradient(135deg,#0a1a13,#0a2e22);border-color:transparent}
        .sidebar-title{font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:#bbb;margin-bottom:1.25rem}
        .sidebar-card.dark .sidebar-title{color:rgba(255,255,255,.45)}
        .sidebar-price-row{display:flex;justify-content:space-between;align-items:baseline;padding:.6rem 0;border-bottom:1px solid #f5f4f2}
        .sidebar-price-row:last-of-type{border-bottom:none}
        .sidebar-price-label{font-size:13px;color:#777}
        .sidebar-price-val{font-size:15px;font-weight:600;color:#0a2e22}
        .btn-full{width:100%;padding:14px;border-radius:10px;font-size:15px;font-weight:600;display:flex;align-items:center;justify-content:center;gap:8px;cursor:pointer;font-family:'Inter',sans-serif;transition:all .2s;margin-top:1rem;border:none}
        .btn-full.purple{background:#085041;color:#fff}
        .btn-full.purple:hover{background:#08533f}
        .btn-full.outline{background:rgba(255,255,255,.08);color:#fff;border:1px solid rgba(255,255,255,.2)}
        .check-item{display:flex;align-items:flex-start;gap:8px;padding:.5rem 0;border-bottom:1px solid #f5f4f2}
        .check-item:last-child{border-bottom:none}
        .check-dot{width:6px;height:6px;border-radius:50%;background:#085041;flex-shrink:0;margin-top:6px}
        .process-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:0;position:relative;margin-top:2.5rem}
        .process-grid::before{content:'';position:absolute;top:22px;left:10%;right:10%;height:1px;background:linear-gradient(90deg,transparent,#d6feef 20%,#d6feef 80%,transparent)}
        .proc-step{text-align:center;padding:0 .5rem;position:relative;z-index:1}
        .proc-circle{width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#0a1a13,#085041);display:flex;align-items:center;justify-content:center;margin:0 auto 1rem;font-size:15px;font-weight:600;color:#fff;box-shadow:0 4px 14px rgba(124,58,237,.3)}
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
        @media(max-width:900px){.hero-grid{grid-template-columns:1fr}.hero-card{display:none}.content-grid{grid-template-columns:1fr}.sidebar{position:static}.technique-grid{grid-template-columns:1fr}.process-grid{grid-template-columns:1fr 1fr;gap:1rem}.process-grid::before{display:none}}
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
                Hair Transplant Istanbul
              </div>
              <div className="kicker">Hair restoration · Istanbul</div>
              <h1>Hair Transplant<br />in Istanbul.<br /><em>FUE &amp; DHI.</em></h1>
              <p className="hero-sub">
                Experienced trichological surgeons. JCI-accredited clinics. Physician-led coordination from first enquiry through procedure and post-operative documentation.
              </p>
              <div className="hero-actions">
                <a href={WA_URL} target="_blank" className="btn-primary">Get a free quote</a>
                <a href="#techniques" className="btn-ghost">FUE vs DHI ↓</a>
              </div>
              <div className="trust-row">
                {['JCI-accredited clinics','FUE & DHI techniques','Fixed, itemised pricing','3–5 day Istanbul stay'].map(t => (
                  <div key={t} className="trust-item"><div className="trust-dot"></div>{t}</div>
                ))}
              </div>
            </div>
            <div className="hero-card">
              <div className="sidebar-title" style={{color:'rgba(255,255,255,.45)'}}>At a glance</div>
              <div className="price-row">
                <div>
                  <div className="price-label">Techniques</div>
                  <div className="price-val accent">FUE &amp; DHI</div>
                </div>
              </div>
              <div className="price-row">
                <div>
                  <div className="price-label">Typical grafts</div>
                  <div className="price-val" style={{fontSize:'17px'}}>2,000 – 4,000</div>
                </div>
              </div>
              <div className="price-row">
                <div>
                  <div className="price-label">Procedure time</div>
                  <div className="price-val" style={{fontSize:'17px'}}>6 – 8 hours</div>
                </div>
              </div>
              <div className="price-row">
                <div>
                  <div className="price-label">Istanbul stay</div>
                  <div className="price-val" style={{fontSize:'17px'}}>3 – 5 days</div>
                </div>
              </div>
              <div className="price-row">
                <div>
                  <div className="price-label">Full results</div>
                  <div className="price-val accent">12 – 18 months</div>
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
              <h2>Hair transplant in Istanbul — what to expect</h2>
              <p>
                Istanbul has established itself as one of the world&apos;s leading destinations for hair transplant surgery, with highly experienced surgeons, modern facilities, and a streamlined patient experience. Ocean Health &amp; Travel coordinates hair transplant procedures at JCI-accredited clinics with experienced trichological surgical teams.
              </p>
              <p>
                We are a coordination service — not a medical provider. All clinical decisions, including technique selection, graft count, and post-operative management, rest with your treating surgeon.
              </p>

              <h3 id="techniques">FUE vs. DHI — which technique?</h3>
              <div className="technique-grid">
                <div className="technique-card">
                  <div className="technique-tag">FUE</div>
                  <h4>Follicular Unit Extraction</h4>
                  <p>Individual follicles extracted from donor area and implanted into pre-made recipient channels. Suitable for larger sessions and full coverage. Slightly faster healing of donor area.</p>
                </div>
                <div className="technique-card">
                  <div className="technique-tag">DHI</div>
                  <h4>Direct Hair Implantation</h4>
                  <p>Follicles extracted and implanted simultaneously using a Choi implanter pen. Greater density and angle precision, particularly for hairline work. Shorter time outside the body.</p>
                </div>
              </div>
              <p>
                The most appropriate technique will be determined by your surgeon based on your hair type, donor area density, degree of hair loss, and aesthetic goals. Both techniques are available at our partner clinics.
              </p>

              <h3>What does a hair transplant involve?</h3>
              <p>
                Hair transplant procedures are performed under local anaesthesia and typically take 6–8 hours, completed in a single day. Larger sessions (4,000+ grafts) may be split across two consecutive days.
              </p>
              <ul>
                <li>Pre-operative consultation and hairline design</li>
                <li>Local anaesthesia applied to donor and recipient areas</li>
                <li>Follicle extraction from donor area (typically back and sides of scalp)</li>
                <li>Implantation into recipient areas</li>
                <li>Post-operative care instructions and medication provided</li>
              </ul>

              <h3>Results timeline</h3>
              <div className="timeline-list">
                {[
                  {period:'Weeks 2–6',desc:'Transplanted hair sheds (shock loss) — this is normal and expected'},
                  {period:'Months 3–4',desc:'New growth begins from transplanted follicles'},
                  {period:'Months 6–9',desc:'Significant improvement visible, density increasing'},
                  {period:'Months 12–18',desc:'Full results achieved as hair matures and thickens'},
                ].map(t => (
                  <div key={t.period} className="timeline-item">
                    <div className="tl-left">
                      <div className="tl-dot"></div>
                      <div className="tl-line"></div>
                    </div>
                    <div>
                      <div className="tl-period">{t.period}</div>
                      <div className="tl-desc">{t.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <h3>Why Istanbul for hair transplants?</h3>
              <ul>
                <li>High-volume, experienced surgeons performing thousands of procedures annually</li>
                <li>JCI-accredited and internationally certified clinics</li>
                <li>Significantly lower cost than UK and Western Europe</li>
                <li>3–5 day Istanbul stay — efficient, minimal time away from home</li>
                <li>English-speaking coordinators and interpreters throughout</li>
              </ul>

              <div className="disclaimer">
                <strong>Note:</strong> Ocean Health &amp; Travel is a medical coordination service, not a medical provider. We do not provide trichological assessments or clinical opinions. All clinical decisions rest with your treating surgeon. This information is for general guidance only and does not constitute medical advice.
              </div>
            </div>

            <div className="sidebar">
              <div className="sidebar-card dark">
                <div className="sidebar-title">Get a free quote</div>
                <p style={{fontSize:'14px',color:'rgba(255,255,255,.65)',lineHeight:1.65,marginBottom:'1.25rem',fontWeight:300}}>
                  Tell us about your hair loss pattern and goals. Full itemised quote within 48 hours.
                </p>
                <a href={WA_URL} target="_blank" className="btn-full purple">WhatsApp us</a>
                <a href="mailto:info@oceanhealthtravel.com" className="btn-full outline" style={{marginTop:'8px'}}>Email us</a>
              </div>

              <div className="sidebar-card">
                <div className="sidebar-title">At a glance</div>
                <div className="sidebar-price-row">
                  <span className="sidebar-price-label">Techniques</span>
                  <span className="sidebar-price-val">FUE &amp; DHI</span>
                </div>
                <div className="sidebar-price-row">
                  <span className="sidebar-price-label">Typical grafts</span>
                  <span className="sidebar-price-val">2,000–4,000</span>
                </div>
                <div className="sidebar-price-row">
                  <span className="sidebar-price-label">Procedure time</span>
                  <span className="sidebar-price-val">6–8 hours</span>
                </div>
                <div className="sidebar-price-row">
                  <span className="sidebar-price-label">Istanbul stay</span>
                  <span className="sidebar-price-val">3–5 days</span>
                </div>
                <div className="sidebar-price-row">
                  <span className="sidebar-price-label">Full results</span>
                  <span className="sidebar-price-val">12–18 months</span>
                </div>
                <p style={{fontSize:'11px',color:'#bbb',marginTop:'1rem',lineHeight:1.6}}>Pricing on request. Coordination fee quoted separately. Flights not included.</p>
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
              {n:'1',t:'Enquiry',d:'Tell us about your hair loss and goals'},
              {n:'2',t:'Quote',d:'Itemised proposal within 48 hours'},
              {n:'3',t:'Booking',d:'Clinic, hotel, and transfers confirmed'},
              {n:'4',t:'Procedure',d:'FUE or DHI with interpreter present'},
              {n:'5',t:'Aftercare',d:'Post-procedure docs provided in English'},
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
          <h2>Hair transplant Istanbul — FAQ</h2>
          <div className="faq-list">
            {faqs.map((f) => (
              <details key={f.q} className="faq-item">
                <summary className="faq-q">
                  {f.q}
                  <span style={{fontSize:'18px',color:'#085041',flexShrink:0}}>+</span>
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
          <h2>Ready to find out more?</h2>
          <p style={{fontSize:'16px',color:'#666',lineHeight:1.7,fontWeight:300,maxWidth:'500px',margin:'0 auto 2rem'}}>
            Tell us about your hair loss pattern and goals. Full itemised quote within 48 hours — no obligation.
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
