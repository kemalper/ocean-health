import type { Metadata } from 'next'
import Nav from '@/app/components/Nav'

export const metadata: Metadata = {
  title: 'Dental Treatment in Istanbul | Ocean Health & Travel',
  description: 'Dental implants from £350, zirconium crowns from £150, veneers from £180, smile design from £1,200. JCI-accredited dental clinics in Istanbul. Free quote in 48 hours.',
}

const WA_URL = 'https://wa.me/447441904858?text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20dental%20treatment%20in%20Istanbul'

const procedures = [
  {
    name: 'Dental Implants',
    slug: '/treatments/dental-implants-turkey',
    price: 'from £350',
    uk: '£2,000 – £2,800',
    saving: '~80%',
    desc: 'Single or multiple tooth replacement using titanium implants. CE-marked systems from Straumann, Nobel Biocare, Osstem.',
  },
  {
    name: 'Zirconium Crowns',
    slug: null,
    price: 'from £150',
    uk: '£700 – £1,200',
    saving: '~75%',
    desc: 'Metal-free zirconium crowns for natural aesthetics and durability. Suitable for front and back teeth.',
  },
  {
    name: 'Porcelain Veneers',
    slug: null,
    price: 'from £180 per tooth',
    uk: '£600 – £1,000',
    saving: '~70%',
    desc: 'Thin porcelain shells bonded to the front surface of teeth to improve colour, shape, and size.',
  },
  {
    name: 'Smile Design',
    slug: null,
    price: 'from £1,200',
    uk: '£3,000 – £8,000',
    saving: '~65%',
    desc: 'Comprehensive aesthetic treatment combining veneers, crowns, whitening, and contouring for a full smile makeover.',
  },
  {
    name: 'Full-Arch Restoration (All-on-4 / All-on-6)',
    slug: null,
    price: 'from £4,500',
    uk: '£15,000 – £25,000',
    saving: '~70%',
    desc: 'Full arch dental implant-supported fixed bridge for patients with significant tooth loss. All-on-4 or All-on-6 configuration.',
  },
  {
    name: 'Orthodontics',
    slug: null,
    price: 'from £1,500',
    uk: '£2,500 – £5,500',
    saving: '~50%',
    desc: 'Fixed braces or clear aligner treatment for teeth straightening. Duration depends on complexity of case.',
  },
  {
    name: 'Root Canal Treatment',
    slug: null,
    price: 'from £100',
    uk: '£500 – £1,000',
    saving: '~80%',
    desc: 'Endodontic treatment to save infected or damaged teeth. Single or multi-visit depending on case complexity.',
  },
  {
    name: 'Teeth Whitening',
    slug: null,
    price: 'from £80',
    uk: '£300 – £700',
    saving: '~75%',
    desc: 'Professional in-clinic whitening for immediate results. Often combined with other cosmetic treatments.',
  },
]

const faqs = [
  {
    q: 'How much does dental treatment cost in Istanbul?',
    a: 'Dental treatment in Istanbul is typically 70–80% lower than UK private dental clinics. Single implants start from £350 (vs. £2,000–£2,800 in the UK), zirconium crowns from £150 (vs. £700–£1,200), and porcelain veneers from £180 per tooth (vs. £600–£1,000). Full-arch restorations start from £4,500 (vs. £15,000–£25,000). All prices are indicative — exact quotes depend on the number of teeth and complexity of treatment.'
  },
  {
    q: 'How long do I need to stay in Istanbul for dental treatment?',
    a: 'Most dental patients stay 7–10 days. This covers initial consultation, any preparatory work, main treatment, and fitting of temporary restorations. Final permanent crowns or veneers are typically fitted 3–6 months later once healing is complete — either during a second visit to Istanbul or with your UK dentist.'
  },
  {
    q: 'Can I combine multiple dental treatments in one visit?',
    a: 'Yes, and this is very common. Many patients combine implants with crowns, veneers, whitening, and smile design in a single trip. We coordinate comprehensive treatment plans — send us your goals and any existing dental records and we will provide a full itemised quote covering all planned work.'
  },
  {
    q: 'Which implant brands are used?',
    a: 'Our partner clinics use CE-marked implant systems from internationally recognised manufacturers including Straumann, Nobel Biocare, Osstem, and MegaGen. The specific system recommended depends on your bone density and treatment plan. All brands and models are specified in your itemised quote.'
  },
  {
    q: 'Do I need to bring any dental records?',
    a: 'Existing X-rays (OPG panoramic X-ray is ideal) and a summary of any recent dental treatment are helpful for providing an accurate initial quote. If you do not have recent X-rays, these will be taken at the clinic during your initial consultation in Istanbul.'
  },
]

export default function DentalIstanbulPage() {
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
        .hero-inner{position:relative;z-index:1}
        .breadcrumb{font-size:12px;color:rgba(255,255,255,.5);margin-bottom:1.25rem}
        .breadcrumb a{color:rgba(255,255,255,.5)}
        .breadcrumb span{margin:0 6px}
        .kicker{font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#aed6f1;margin-bottom:1rem}
        h1{font-family:'DM Serif Display',serif;font-size:clamp(34px,4.5vw,56px);line-height:1.1;letter-spacing:-.025em;color:#fff;margin-bottom:1rem;font-weight:400;max-width:700px}
        h1 em{font-style:italic;color:#aed6f1}
        .hero-sub{font-size:16px;color:rgba(255,255,255,.72);line-height:1.75;margin-bottom:2rem;font-weight:300;max-width:560px}
        .hero-stats{display:flex;gap:2rem;flex-wrap:wrap;margin-bottom:2rem}
        .hero-stat-n{font-family:'DM Serif Display',serif;font-size:28px;color:#aed6f1;font-weight:400;line-height:1}
        .hero-stat-l{font-size:12px;color:rgba(255,255,255,.6);margin-top:3px}
        .hero-actions{display:flex;gap:12px;flex-wrap:wrap}
        .btn-primary{background:#fff;color:#1e3a5f;border:none;padding:14px 26px;border-radius:10px;font-size:15px;font-weight:600;display:inline-flex;align-items:center;gap:8px;transition:transform .2s,box-shadow .2s;cursor:pointer;font-family:'Inter',sans-serif;box-shadow:0 4px 20px rgba(0,0,0,.2)}
        .btn-primary:hover{transform:translateY(-2px);box-shadow:0 8px 28px rgba(0,0,0,.3)}
        .btn-ghost{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.35);padding:14px 26px;border-radius:10px;font-size:15px;display:inline-flex;align-items:center;gap:8px;transition:all .2s;cursor:pointer;font-family:'Inter',sans-serif}
        .btn-ghost:hover{background:rgba(255,255,255,.1)}
        .trust-row{display:flex;gap:1.5rem;flex-wrap:wrap;margin-top:1.5rem}
        .trust-item{display:flex;align-items:center;gap:7px;font-size:12.5px;color:rgba(255,255,255,.75)}
        .trust-dot{width:7px;height:7px;border-radius:50%;background:#aed6f1;flex-shrink:0}
        .sec{padding:5rem 0}
        .sec.bg{background:#fafaf9}
        .sec.border{border-top:1px solid #f0ede8;border-bottom:1px solid #f0ede8}
        h2{font-family:'DM Serif Display',serif;font-size:clamp(26px,3vw,38px);font-weight:400;color:#1a1a1a;letter-spacing:-.02em;line-height:1.2;margin-bottom:1rem}
        .proc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:2rem}
        .proc-card{background:#fff;border:1px solid #f0ede8;border-radius:16px;padding:1.5rem;display:flex;flex-direction:column;transition:transform .25s,box-shadow .25s,border-color .25s}
        .proc-card:hover{transform:translateY(-3px);box-shadow:0 10px 30px rgba(0,0,0,.08);border-color:#bae6fd}
        .proc-card.featured{border-color:#1a5276;background:#f0f9ff}
        .proc-name{font-size:15px;font-weight:600;color:#1a1a1a;margin-bottom:.4rem}
        .proc-desc{font-size:13px;color:#777;line-height:1.65;font-weight:300;margin-bottom:1rem;flex:1}
        .proc-footer{display:flex;justify-content:space-between;align-items:center;padding-top:.85rem;border-top:1px solid #f5f4f2;margin-top:auto}
        .proc-price{font-size:14px;font-weight:600;color:#1a5276}
        .proc-uk{font-size:11px;color:#aaa;margin-top:2px}
        .proc-saving{font-size:11px;background:#dbeafe;color:#1e3a5f;border-radius:20px;padding:3px 10px;font-weight:600}
        .proc-link{font-size:12px;color:#1a5276;font-weight:600;margin-top:.75rem;display:inline-flex;align-items:center;gap:4px}
        .faq-list{display:flex;flex-direction:column;border:1px solid #f0ede8;border-radius:16px;overflow:hidden;margin-top:2.5rem}
        .faq-item{border-bottom:1px solid #f0ede8}
        .faq-item:last-child{border-bottom:none}
        .faq-q{width:100%;text-align:left;padding:1.25rem 1.5rem;background:#fff;border:none;cursor:pointer;font-family:'Inter',sans-serif;font-size:15px;font-weight:500;color:#1a1a1a;display:flex;justify-content:space-between;align-items:center;gap:1rem;transition:background .2s}
        .faq-q:hover{background:#fafaf9}
        .faq-a{padding:0 1.5rem 1.25rem;font-size:14px;color:#666;line-height:1.75;font-weight:300}
        .cta-box{background:linear-gradient(135deg,#1e3a5f,#117a8b);border-radius:20px;padding:3rem;text-align:center}
        .cta-box h2{color:#fff;margin-bottom:.75rem}
        .cta-box p{font-size:15px;color:rgba(255,255,255,.65);font-weight:300;line-height:1.7;margin-bottom:2rem;max-width:480px;margin-left:auto;margin-right:auto}
        .cta-btns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}
        .btn-cta-w{background:#fff;color:#1e3a5f;border:none;padding:14px 28px;border-radius:10px;font-size:15px;font-weight:600;display:inline-flex;align-items:center;gap:8px;cursor:pointer;font-family:'Inter',sans-serif;transition:all .2s}
        .btn-cta-w:hover{background:#dbeafe}
        .btn-cta-o{background:transparent;color:rgba(255,255,255,.75);border:1px solid rgba(255,255,255,.3);padding:14px 28px;border-radius:10px;font-size:15px;display:inline-flex;align-items:center;gap:8px;cursor:pointer;font-family:'Inter',sans-serif;transition:all .2s}
        .btn-cta-o:hover{background:rgba(255,255,255,.1);color:#fff}
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
            Dental Istanbul
          </div>
          <div className="kicker">Dental treatment · Istanbul</div>
          <h1>Dental Treatment<br />in Istanbul.<br /><em>Up to 80% lower than UK.</em></h1>
          <p className="hero-sub">
            CE-marked implants, zirconium crowns, veneers, smile design and more. JCI-accredited dental clinics. Physician-led coordination from first enquiry through treatment.
          </p>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-n">£350</div>
              <div className="hero-stat-l">single implant from</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-n">~80%</div>
              <div className="hero-stat-l">lower than UK private</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-n">7–10</div>
              <div className="hero-stat-l">days typical stay</div>
            </div>
          </div>
          <div className="hero-actions">
            <a href={WA_URL} target="_blank" className="btn-primary">Get a free quote</a>
            <a href="#procedures" className="btn-ghost">View all treatments ↓</a>
          </div>
          <div className="trust-row">
            {['JCI-accredited clinics','CE-marked implant systems','Fixed, itemised pricing','7–10 day treatment timeline'].map(t => (
              <div key={t} className="trust-item"><div className="trust-dot"></div>{t}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" id="procedures">
        <div className="inner">
          <div className="kicker">All treatments</div>
          <h2>Dental treatments in Istanbul</h2>
          <p style={{fontSize:'15px',color:'#666',lineHeight:1.7,fontWeight:300,maxWidth:'600px',marginBottom:'0'}}>
            Many patients combine multiple treatments in a single visit. Contact us for a comprehensive quote.
          </p>
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
                  ? <a href={p.slug} className="proc-link">Full treatment guide →</a>
                  : <a href={WA_URL} target="_blank" className="proc-link">Get a quote →</a>
                }
              </div>
            ))}
          </div>
          <p style={{fontSize:'12px',color:'#bbb',marginTop:'1.5rem',lineHeight:1.6}}>
            Prices indicative. Coordination fee quoted separately. Flights not included. Ocean Health &amp; Travel is a coordinator, not a dental provider.
          </p>
        </div>
      </section>

      <section className="sec bg border" id="faq">
        <div className="inner">
          <div className="kicker">Common questions</div>
          <h2>Dental treatment Istanbul — FAQ</h2>
          <div className="faq-list">
            {faqs.map(f => (
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

      <section className="sec">
        <div className="inner">
          <div className="cta-box">
            <h2>Ready to find out what your dental treatment costs?</h2>
            <p>Tell us what you need — implants, crowns, veneers, or a full smile makeover. Full itemised quote within 48 hours.</p>
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
            Flights not included · Client money protected via Trust Account · Coordinator, not a dental provider · Elective procedures only<br />
            <em>Ocean Health &amp; Travel does not provide dental or medical advice. All clinical decisions rest with your treating dentist. Not suitable for emergencies.</em>
          </div>
        </div>
      </footer>
    </>
  )
}
