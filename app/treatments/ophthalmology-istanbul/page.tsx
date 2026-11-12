import type { Metadata } from 'next'
import Nav from '@/app/components/Nav'
import TreatmentTheme from '@/app/components/TreatmentTheme'
import RelatedTreatments from '@/app/components/RelatedTreatments'
import YourTimeline from '@/app/components/YourTimeline'
import UKPatientInfo from '@/app/components/UKPatientInfo'
import Footer from '@/app/components/Footer'

export const metadata: Metadata = {
  alternates: { canonical: '/treatments/ophthalmology-istanbul' },
  title: 'Eye Surgery in Istanbul | Ocean Health & Travel',
  description: 'LASIK from £600 per eye, cataract surgery from £800, premium lens replacement from £1,200. Licensed ophthalmology centres in Istanbul. We aim to send a package quote within 48 hours.',
}

const WA_URL = 'https://wa.me/447441904858?text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20eye%20surgery%20in%20Istanbul'

const procedures = [
  {
    name: 'LASIK Laser Eye Surgery',
    slug: '/treatments/lasik-istanbul',
    price: 'from £600 per eye',
    uk: '£995 – £2,395',
    desc: 'Laser treatment intended to correct refractive error. Recovery times vary; the treating provider will advise.',
  },
  {
    name: 'LASEK / PRK',
    slug: '/treatments/lasik-istanbul',
    price: 'from £500 per eye',
    uk: '£995 – £1,800',
    desc: 'Flapless laser correction. Slower recovery than LASIK but suitable for thin corneas or contact sports.',
  },
  {
    name: 'SMILE',
    slug: '/treatments/lasik-istanbul',
    price: 'from £800 per eye',
    uk: '£1,500 – £2,950',
    desc: 'Small incision lenticule extraction. Minimal dry eye risk, suitable for high myopia. Newer flapless technique.',
  },
  {
    name: 'Cataract Surgery',
    slug: null,
    price: 'from £800 per eye',
    uk: '£2,000 – £3,500',
    desc: 'Removal of clouded natural lens and replacement with an artificial intraocular lens (IOL). Standard or premium IOL options.',
  },
  {
    name: 'Premium Lens Replacement',
    slug: null,
    price: 'from £1,200 per eye',
    uk: '£3,000 – £5,000',
    desc: 'Refractive lens exchange with multifocal or extended-depth-of-focus IOLs. Suitable for presbyopia or high prescriptions.',
  },
  {
    name: 'Eyelid Surgery (Blepharoplasty)',
    slug: null,
    price: 'from £1,800',
    uk: 'from £4,995',
    desc: 'Upper and/or lower eyelid correction for hooded lids, excess skin, or under-eye bags.',
  },
  {
    name: 'Strabismus (Squint) Surgery',
    slug: null,
    price: 'Contact us',
    uk: 'Variable',
    desc: 'Surgical correction of eye misalignment. Requires pre-operative orthoptic assessment.',
  },
  {
    name: 'Orbital Decompression',
    slug: null,
    price: 'Contact us',
    uk: 'Variable',
    desc: 'Surgical decompression of the orbit, most commonly for thyroid eye disease. Specialist referral required.',
  },
]

const faqs = [
  {
    q: 'How much does LASIK cost in Istanbul?',
    a: 'LASIK laser eye surgery in Istanbul starts from £600 per eye, compared to £995–£2,395 per eye at UK private clinics. SMILE starts from £800 per eye, and LASEK/PRK from £500 per eye. Exact pricing depends on your prescription and the laser platform used.'
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
    <div className="tp">
      <TreatmentTheme />
      <style>{`
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth;-webkit-font-smoothing:antialiased}
        body{font-family:'Inter',sans-serif;color:#1a1a1a;background:#fff}
        a{text-decoration:none;color:inherit}
        .inner{max-width:1160px;margin:0 auto;padding:0 2.5rem}
.nav-links a:hover{color:#0559F0}
        .btn-
.btn-nav:hover{background:#0559F0;color:#fff!important}
        .hero{background:linear-gradient(135deg,#0A2150 0%,#0A2150 50%,#0A2150 100%);padding:100px 0 80px;position:relative;overflow:hidden}
        .hero::before{content:'';position:absolute;width:500px;height:500px;border-radius:50%;background:radial-gradient(circle,rgba(100,181,246,.15) 0%,transparent 70%);top:-100px;right:-100px;pointer-events:none}
        .hero-inner{position:relative;z-index:1}
        .breadcrumb{font-size:12px;color:rgba(255,255,255,.5);margin-bottom:1.25rem}
        .breadcrumb a{color:rgba(255,255,255,.5)}
        .breadcrumb span{margin:0 6px}
        .kicker{font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#8FD8FF;margin-bottom:1rem}
        h1{font-family:'DM Serif Display',serif;font-size:clamp(34px,4.5vw,56px);line-height:1.1;letter-spacing:-.025em;color:#fff;margin-bottom:1rem;font-weight:400;max-width:700px}
        h1 em{font-style:italic;color:#8FD8FF}
        .hero-sub{font-size:16px;color:rgba(255,255,255,.72);line-height:1.75;margin-bottom:2rem;font-weight:300;max-width:560px}
        .hero-stats{display:flex;gap:2rem;flex-wrap:wrap;margin-bottom:2rem}
        .hero-stat-n{font-family:'DM Serif Display',serif;font-size:28px;color:#8FD8FF;font-weight:400;line-height:1}
        .hero-stat-l{font-size:12px;color:rgba(255,255,255,.6);margin-top:3px}
        .hero-actions{display:flex;gap:12px;flex-wrap:wrap}
        .btn-primary{background:#8FD8FF;color:#0A2150;border:none;padding:14px 26px;border-radius:10px;font-size:15px;font-weight:600;display:inline-flex;align-items:center;gap:8px;transition:transform .2s,box-shadow .2s;cursor:pointer;font-family:'Inter',sans-serif;box-shadow:0 4px 20px rgba(0,0,0,.2)}
        .btn-primary:hover{transform:translateY(-2px);box-shadow:0 8px 28px rgba(0,0,0,.3);background:#8FD8FF}
        .btn-ghost{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.35);padding:14px 26px;border-radius:10px;font-size:15px;display:inline-flex;align-items:center;gap:8px;transition:all .2s;cursor:pointer;font-family:'Inter',sans-serif}
        .btn-ghost:hover{background:rgba(255,255,255,.1)}
        .trust-row{display:flex;gap:1.5rem;flex-wrap:wrap;margin-top:1.5rem}
        .trust-item{display:flex;align-items:center;gap:7px;font-size:12.5px;color:rgba(255,255,255,.75)}
        .trust-dot{width:7px;height:7px;border-radius:50%;background:#8FD8FF;flex-shrink:0}
        .sec{padding:5rem 0}
        .sec.bg{background:#F3F7FE}
        .sec.border{border-top:1px solid #DCE6F5;border-bottom:1px solid #DCE6F5}
        h2{font-family:'DM Serif Display',serif;font-size:clamp(26px,3vw,38px);font-weight:400;color:#1a1a1a;letter-spacing:-.02em;line-height:1.2;margin-bottom:1rem}
        .proc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:2rem}
        .proc-card{background:#fff;border:1px solid #DCE6F5;border-radius:16px;padding:1.5rem;display:flex;flex-direction:column;transition:transform .25s,box-shadow .25s,border-color .25s}
        .proc-card:hover{transform:translateY(-3px);box-shadow:0 10px 30px rgba(0,0,0,.08);border-color:#8FD8FF}
        .proc-card.featured{border-color:#0559F0;background:#E6EFFE}
        .proc-name{font-size:15px;font-weight:600;color:#1a1a1a;margin-bottom:.4rem}
        .proc-desc{font-size:13px;color:#777;line-height:1.65;font-weight:300;margin-bottom:1rem;flex:1}
        .proc-footer{display:flex;justify-content:space-between;align-items:center;padding-top:.85rem;border-top:1px solid #F3F7FE;margin-top:auto}
        .proc-price{font-size:14px;font-weight:600;color:#0559F0}
        .proc-uk{font-size:11px;color:#aaa;margin-top:2px}
        .proc-link{font-size:12px;color:#0559F0;font-weight:600;margin-top:.75rem;display:inline-flex;align-items:center;gap:4px}
        .faq-list{display:flex;flex-direction:column;border:1px solid #DCE6F5;border-radius:16px;overflow:hidden;margin-top:2.5rem}
        .faq-item{border-bottom:1px solid #DCE6F5}
        .faq-item:last-child{border-bottom:none}
        .faq-q{width:100%;text-align:left;padding:1.25rem 1.5rem;background:#fff;border:none;cursor:pointer;font-family:'Inter',sans-serif;font-size:15px;font-weight:500;color:#1a1a1a;display:flex;justify-content:space-between;align-items:center;gap:1rem;transition:background .2s}
        .faq-q:hover{background:#F3F7FE}
        .faq-a{padding:0 1.5rem 1.25rem;font-size:14px;color:#666;line-height:1.75;font-weight:300}
        .cta-box{background:linear-gradient(135deg,#0A2150,#0A2150);border-radius:20px;padding:3rem;text-align:center}
        .cta-box h2{color:#fff;margin-bottom:.75rem}
        .cta-box p{font-size:15px;color:rgba(255,255,255,.6);font-weight:300;line-height:1.7;margin-bottom:2rem;max-width:480px;margin-left:auto;margin-right:auto}
        .cta-btns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}
        .btn-cta-w{background:#8FD8FF;color:#0A2150;border:none;padding:14px 28px;border-radius:10px;font-size:15px;font-weight:600;display:inline-flex;align-items:center;gap:8px;cursor:pointer;font-family:'Inter',sans-serif;transition:all .2s}
        .btn-cta-w:hover{background:#8FD8FF}
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

      <Nav />

      <section className="hero">
        <div className="inner hero-inner">
          <div className="breadcrumb">
            <a href="/">Home</a><span>›</span>
            <a href="/#services">Treatments</a><span>›</span>
            Eye Surgery Istanbul
          </div>
          <div className="kicker">Ophthalmology · Istanbul</div>
          <h1>Eye Surgery<br />in Istanbul.<br /><em>Package quotes before you travel.</em></h1>
          <p className="hero-sub">
            LASIK, cataract, lens replacement, and more. Advanced laser platforms at licensed ophthalmology centres. Dedicated coordination throughout.
          </p>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-n">£600</div>
              <div className="hero-stat-l">LASIK from, per eye</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-n">£500</div>
              <div className="hero-stat-l">LASEK/PRK from, per eye</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-n">3–5</div>
              <div className="hero-stat-l">days typical stay</div>
            </div>
          </div>
          <div className="hero-actions">
            <a href={WA_URL} target="_blank" className="btn-primary">Request your package quote</a>
            <a href="#procedures" className="btn-ghost">View all procedures ↓</a>
          </div>
          <div className="trust-row">
            {['Licensed partner clinics','Advanced laser platforms','Clear package pricing','3–7 day Istanbul stay'].map(t => (
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
                    {p.uk && <div className="proc-uk">UK: {p.uk}</div>}
                  </div>
                </div>
                {p.slug
                  ? <a href={p.slug} className="proc-link">Full procedure guide →</a>
                  : <a href={WA_URL} target="_blank" className="proc-link">Get a quote →</a>
                }
              </div>
            ))}
          </div>
          <p style={{fontSize:'12px',color:'#bbb',marginTop:'1.5rem',lineHeight:1.6}}>
            Prices per eye where applicable. No coordination fee is charged to patients. Flights not included. Ocean Health &amp; Travel is a coordinator, not a medical provider.
          </p>
        </div>
      </section>

      <section className="sec" id="whats-included" style={{paddingTop:0}}>
        <div className="inner">
          <div className="proc-grid" style={{gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',marginTop:0}}>
            <div className="proc-card">
              <h3 style={{fontFamily:"'DM Serif Display',serif",fontSize:'20px',fontWeight:400,margin:'0 0 .75rem',color:'#1a1a1a'}}>A typical package</h3>
              <ul style={{listStyle:'disc',paddingLeft:'1.2rem',display:'flex',flexDirection:'column',gap:'.45rem',fontSize:'13.5px',color:'#555',lineHeight:1.65,fontWeight:300}}>
                <li>Airport transfers in Istanbul</li>
                <li>Hotel accommodation near the hospital</li>
                <li>A professional interpreter at your appointments</li>
                <li>Coordination with the hospital from enquiry to discharge</li>
                <li>English-language discharge documentation, sent to your GP on request</li>
              </ul>
            </div>
            <div className="proc-card">
              <h3 style={{fontFamily:"'DM Serif Display',serif",fontSize:'20px',fontWeight:400,margin:'0 0 .75rem',color:'#1a1a1a'}}>What can change your price</h3>
              <ul style={{listStyle:'disc',paddingLeft:'1.2rem',display:'flex',flexDirection:'column',gap:'.45rem',fontSize:'13.5px',color:'#555',lineHeight:1.65,fontWeight:300}}>
                <li>Extra nights, or arriving earlier or leaving later to fit your flights</li>
                <li>A travel companion: their costs are added to your quote</li>
                <li>Significant additional tests or treatment, if the information given for your quote proves untrue</li>
              </ul>
            </div>
          </div>
          <p style={{fontSize:'12px',color:'#475569',marginTop:'1rem',lineHeight:1.6}}>
            Flights are not included. Your package quote states what is included, and a breakdown is available on request.
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
                  <span style={{fontSize:'18px',color:'#0559F0',flexShrink:0}}>+</span>
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
            <p>Tell us your prescription or condition. We aim to send a full package quote within 48 hours — no obligation.</p>
            <div className="cta-btns">
              <a href={WA_URL} target="_blank" className="btn-cta-w">Request your package quote</a>
              <a href="mailto:info@oceanhealthtravel.com" className="btn-cta-o">Email us</a>
            </div>
          </div>
        </div>
      </section>

      <YourTimeline stay="3–7 days" />
      <UKPatientInfo current="ophthalmology-istanbul" />
      <RelatedTreatments current="ophthalmology-istanbul" />
      <Footer />
    </div>
  )
}
