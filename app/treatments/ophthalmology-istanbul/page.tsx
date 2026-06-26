import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Eye Surgery in Istanbul | Ocean Health & Travel',
  description: 'LASIK from £600 per eye, cataract surgery from £800, premium lens replacement from £1,200. JCI-accredited ophthalmology centres in Istanbul. Free quote in 48 hours.',
}

const WA_URL = 'https://wa.me/447441904858?text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20eye%20surgery%20in%20Istanbul'

const procedures = [
  {
    name: 'LASIK Laser Eye Surgery',
    slug: '/treatments/lasik-istanbul',
    price: 'from £600 per eye',
    uk: '£1,500 – £2,500',
    saving: '60–75%',
    desc: 'Laser correction of myopia, hyperopia, and astigmatism. Fast recovery — improved vision within 24 hours.',
  },
  {
    name: 'LASEK / PRK',
    slug: '/treatments/lasik-istanbul',
    price: 'from £500 per eye',
    uk: '£1,200 – £2,000',
    saving: '60–75%',
    desc: 'Flapless laser correction. Slower recovery than LASIK but suitable for thin corneas or contact sports.',
  },
  {
    name: 'SMILE',
    slug: '/treatments/lasik-istanbul',
    price: 'from £800 per eye',
    uk: '£2,000 – £3,000',
    saving: '60–70%',
    desc: 'Small incision lenticule extraction. Minimal dry eye risk, suitable for high myopia. Newer flapless technique.',
  },
  {
    name: 'Cataract Surgery',
    slug: null,
    price: 'from £800 per eye',
    uk: '£2,000 – £3,500',
    saving: '~65%',
    desc: 'Removal of clouded natural lens and replacement with an artificial intraocular lens (IOL). Standard or premium IOL options.',
  },
  {
    name: 'Premium Lens Replacement',
    slug: null,
    price: 'from £1,200 per eye',
    uk: '£3,000 – £5,000',
    saving: '~65%',
    desc: 'Refractive lens exchange with multifocal or extended-depth-of-focus IOLs. Suitable for presbyopia or high prescriptions.',
  },
  {
    name: 'Eyelid Surgery (Blepharoplasty)',
    slug: null,
    price: 'from £1,800',
    uk: '£3,000 – £5,000',
    saving: '40–65%',
    desc: 'Upper and/or lower eyelid correction for hooded lids, excess skin, or under-eye bags.',
  },
  {
    name: 'Strabismus (Squint) Surgery',
    slug: null,
    price: 'Contact us',
    uk: 'Variable',
    saving: null,
    desc: 'Surgical correction of eye misalignment. Requires pre-operative orthoptic assessment.',
  },
  {
    name: 'Orbital Decompression',
    slug: null,
    price: 'Contact us',
    uk: 'Variable',
    saving: null,
    desc: 'Surgical decompression of the orbit, most commonly for thyroid eye disease. Specialist referral required.',
  },
]

const faqs = [
  {
    q: 'How much does LASIK cost in Istanbul?',
    a: 'LASIK laser eye surgery in Istanbul starts from £600 per eye, compared to £1,500–£2,500 per eye at UK private clinics — a saving of 60–75%. SMILE starts from £800 per eye, and LASEK/PRK from £500 per eye. Exact pricing depends on your prescription and the laser platform used.'
  },
  {
    q: 'How much does cataract surgery cost in Istanbul?',
    a: 'Cataract surgery in Istanbul starts from £800 per eye, compared to £2,000–£3,500 at UK private clinics. Premium lens replacement (multifocal IOLs) starts from £1,200 per eye, compared to £3,000–£5,000 in the UK.'
  },
  {
    q: 'How long do I need to stay in Istanbul for eye surgery?',
    a: 'LASIK, LASEK, and SMILE patients typically stay 3–5 days. Cataract and lens replacement patients stay 4–7 days. Eyelid surgery patients 3–5 days. Most patients are comfortable flying home 2–4 days after laser eye surgery, and 3–5 days after lens procedures, subject to their surgeon\'s clearance.'
  },
  {
    q: 'Am I suitable for LASIK?',
    a: 'LASIK suitability requires pre-operative assessment including corneal topography. Patients with thin corneas, dry eye syndrome, or certain prescriptions may be better suited to LASEK, PRK, or SMILE. Suitability is determined by your treating ophthalmologist — Ocean Health & Travel does not provide ophthalmic assessments.'
  },
  {
    q: 'What coordination services are included?',
    a: 'Our coordination package includes airport transfer, hotel accommodation, professional interpretation at all appointments, and clinic liaison. Post-procedure documentation is provided in English. Flights are not included. We are a coordinator, not a medical provider.'
  },
]

export default function OphthalmologyPage() {
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
        .hero{background:linear-gradient(135deg,#0a0a1a 0%,#0d1b3e 50%,#1a237e 100%);padding:100px 0 80px;position:relative;overflow:hidden}
        .hero::before{content:'';position:absolute;width:500px;height:500px;border-radius:50%;background:radial-gradient(circle,rgba(100,181,246,.15) 0%,transparent 70%);top:-100px;right:-100px;pointer-events:none}
        .hero-inner{position:relative;z-index:1}
        .breadcrumb{font-size:12px;color:rgba(255,255,255,.5);margin-bottom:1.25rem}
        .breadcrumb a{color:rgba(255,255,255,.5)}
        .breadcrumb span{margin:0 6px}
        .kicker{font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#90caf9;margin-bottom:1rem}
        h1{font-family:'DM Serif Display',serif;font-size:clamp(34px,4.5vw,56px);line-height:1.1;letter-spacing:-.025em;color:#fff;margin-bottom:1rem;font-weight:400;max-width:700px}
        h1 em{font-style:italic;color:#90caf9}
        .hero-sub{font-size:16px;color:rgba(255,255,255,.72);line-height:1.75;margin-bottom:2rem;font-weight:300;max-width:560px}
        .hero-stats{display:flex;gap:2rem;flex-wrap:wrap;margin-bottom:2rem}
        .hero-stat-n{font-family:'DM Serif Display',serif;font-size:28px;color:#90caf9;font-weight:400;line-height:1}
        .hero-stat-l{font-size:12px;color:rgba(255,255,255,.6);margin-top:3px}
        .hero-actions{display:flex;gap:12px;flex-wrap:wrap}
        .btn-primary{background:#90caf9;color:#0d1b3e;border:none;padding:14px 26px;border-radius:10px;font-size:15px;font-weight:600;display:inline-flex;align-items:center;gap:8px;transition:transform .2s,box-shadow .2s;cursor:pointer;font-family:'Inter',sans-serif;box-shadow:0 4px 20px rgba(0,0,0,.2)}
        .btn-primary:hover{transform:translateY(-2px);box-shadow:0 8px 28px rgba(0,0,0,.3);background:#bbdefb}
        .btn-ghost{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.35);padding:14px 26px;border-radius:10px;font-size:15px;display:inline-flex;align-items:center;gap:8px;transition:all .2s;cursor:pointer;font-family:'Inter',sans-serif}
        .btn-ghost:hover{background:rgba(255,255,255,.1)}
        .trust-row{display:flex;gap:1.5rem;flex-wrap:wrap;margin-top:1.5rem}
        .trust-item{display:flex;align-items:center;gap:7px;font-size:12.5px;color:rgba(255,255,255,.75)}
        .trust-dot{width:7px;height:7px;border-radius:50%;background:#90caf9;flex-shrink:0}
        .sec{padding:5rem 0}
        .sec.bg{background:#fafaf9}
        .sec.border{border-top:1px solid #f0ede8;border-bottom:1px solid #f0ede8}
        h2{font-family:'DM Serif Display',serif;font-size:clamp(26px,3vw,38px);font-weight:400;color:#1a1a1a;letter-spacing:-.02em;line-height:1.2;margin-bottom:1rem}
        .proc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:2rem}
        .proc-card{background:#fff;border:1px solid #f0ede8;border-radius:16px;padding:1.5rem;display:flex;flex-direction:column;transition:transform .25s,box-shadow .25s,border-color .25s}
        .proc-card:hover{transform:translateY(-3px);box-shadow:0 10px 30px rgba(0,0,0,.08);border-color:#bbdefb}
        .proc-card.featured{border-color:#1565c0;background:#e3f2fd}
        .proc-name{font-size:15px;font-weight:600;color:#1a1a1a;margin-bottom:.4rem}
        .proc-desc{font-size:13px;color:#777;line-height:1.65;font-weight:300;margin-bottom:1rem;flex:1}
        .proc-footer{display:flex;justify-content:space-between;align-items:center;padding-top:.85rem;border-top:1px solid #f5f4f2;margin-top:auto}
        .proc-price{font-size:14px;font-weight:600;color:#1565c0}
        .proc-uk{font-size:11px;color:#aaa;margin-top:2px}
        .proc-saving{font-size:11px;background:#e3f2fd;color:#0d47a1;border-radius:20px;padding:3px 10px;font-weight:600}
        .proc-link{font-size:12px;color:#1565c0;font-weight:600;margin-top:.75rem;display:inline-flex;align-items:center;gap:4px}
        .faq-list{display:flex;flex-direction:column;border:1px solid #f0ede8;border-radius:16px;overflow:hidden;margin-top:2.5rem}
        .faq-item{border-bottom:1px solid #f0ede8}
        .faq-item:last-child{border-bottom:none}
        .faq-q{width:100%;text-align:left;padding:1.25rem 1.5rem;background:#fff;border:none;cursor:pointer;font-family:'Inter',sans-serif;font-size:15px;font-weight:500;color:#1a1a1a;display:flex;justify-content:space-between;align-items:center;gap:1rem;transition:background .2s}
        .faq-q:hover{background:#fafaf9}
        .faq-a{padding:0 1.5rem 1.25rem;font-size:14px;color:#666;line-height:1.75;font-weight:300}
        .cta-box{background:linear-gradient(135deg,#0a0a1a,#0d1b3e);border-radius:20px;padding:3rem;text-align:center}
        .cta-box h2{color:#fff;margin-bottom:.75rem}
        .cta-box p{font-size:15px;color:rgba(255,255,255,.6);font-weight:300;line-height:1.7;margin-bottom:2rem;max-width:480px;margin-left:auto;margin-right:auto}
        .cta-btns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}
        .btn-cta-w{background:#90caf9;color:#0d1b3e;border:none;padding:14px 28px;border-radius:10px;font-size:15px;font-weight:600;display:inline-flex;align-items:center;gap:8px;cursor:pointer;font-family:'Inter',sans-serif;transition:all .2s}
        .btn-cta-w:hover{background:#bbdefb}
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
            <li><a href={WA_URL} target="_blank" className="btn-nav">Free quote</a></li>
          </ul>
        </div>
      </nav>

      <section className="hero">
        <div className="inner hero-inner">
          <div className="breadcrumb">
            <a href="/">Home</a><span>›</span>
            <a href="/#services">Treatments</a><span>›</span>
            Eye Surgery Istanbul
          </div>
          <div className="kicker">Ophthalmology · Istanbul</div>
          <h1>Eye Surgery<br />in Istanbul.<br /><em>60–75% lower than UK.</em></h1>
          <p className="hero-sub">
            LASIK, cataract, lens replacement, and more. Advanced laser platforms at JCI-accredited ophthalmology centres. Physician-led coordination throughout.
          </p>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-n">£600</div>
              <div className="hero-stat-l">LASIK from, per eye</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-n">60–75%</div>
              <div className="hero-stat-l">lower than UK private</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-n">3–5</div>
              <div className="hero-stat-l">days typical stay</div>
            </div>
          </div>
          <div className="hero-actions">
            <a href={WA_URL} target="_blank" className="btn-primary">Get a free quote</a>
            <a href="#procedures" className="btn-ghost">View all procedures ↓</a>
          </div>
          <div className="trust-row">
            {['JCI-accredited clinics','Advanced laser platforms','Fixed, itemised pricing','3–7 day Istanbul stay'].map(t => (
              <div key={t} className="trust-item"><div className="trust-dot"></div>{t}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" id="procedures">
        <div className="inner">
          <div className="kicker">All procedures</div>
          <h2>Eye surgery in Istanbul</h2>
          <div className="proc-grid">
            {procedures.map(p => (
              <div key={p.name} className={`proc-card${p.slug ? ' featured' : ''}`}>
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
                  : <a href={WA_URL} target="_blank" className="proc-link">Get a quote →</a>
                }
              </div>
            ))}
          </div>
          <p style={{fontSize:'12px',color:'#bbb',marginTop:'1.5rem',lineHeight:1.6}}>
            Prices per eye where applicable. Coordination fee quoted separately. Flights not included. Ocean Health &amp; Travel is a coordinator, not a medical provider.
          </p>
        </div>
      </section>

      <section className="sec bg border" id="faq">
        <div className="inner">
          <div className="kicker">Common questions</div>
          <h2>Eye surgery Istanbul — FAQ</h2>
          <div className="faq-list">
            {faqs.map(f => (
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

      <section className="sec">
        <div className="inner">
          <div className="cta-box">
            <h2>Ready to find out what eye surgery costs?</h2>
            <p>Tell us your prescription or condition. Full itemised quote within 48 hours — no obligation.</p>
            <div className="cta-btns">
              <a href={WA_URL} target="_blank" className="btn-cta-w">💬 Get a free quote</a>
              <a href="mailto:info@oceanhealthtravel.com" className="btn-cta-o">✉️ Email us</a>
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
            <em>Ocean Health &amp; Travel does not provide medical advice. All clinical decisions rest with your treating ophthalmologist. Not suitable for emergencies.</em>
          </div>
        </div>
      </footer>
    </>
  )
}
