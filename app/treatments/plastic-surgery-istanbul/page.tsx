import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Plastic Surgery in Istanbul | Ocean Health & Travel',
  description: 'Plastic and cosmetic surgery in Istanbul — rhinoplasty from £3,200, breast surgery from £6,000, liposuction from £2,500. JCI-accredited surgeons, physician-led coordination. Free quote in 48 hours.',
}

const WA_URL = 'https://wa.me/447441904858?text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20plastic%20surgery%20in%20Istanbul'

const procedures = [
  {
    name: 'Rhinoplasty (Nose Surgery)',
    slug: '/treatments/rhinoplasty-istanbul',
    price: 'from £3,200',
    uk: '£7,000 – £12,000',
    saving: '55–70%',
    desc: 'Reshaping of the nose for aesthetic or functional purposes. Primary, revision, and septoplasty procedures available.',
    stay: '7–10 days',
  },
  {
    name: 'Breast Augmentation',
    slug: null,
    price: 'from £6,000',
    uk: '£8,000 – £11,000',
    saving: '30–45%',
    desc: 'Implant-based breast enlargement. Round or anatomical implants, submuscular or subglandular placement.',
    stay: '5–7 days',
  },
  {
    name: 'Breast Reduction',
    slug: null,
    price: 'from £6,000',
    uk: '£8,000 – £10,000',
    saving: '25–40%',
    desc: 'Reduction of breast volume and lift. Often combined with nipple repositioning.',
    stay: '5–7 days',
  },
  {
    name: 'Mastopexy (Breast Lift)',
    slug: null,
    price: 'from £5,000',
    uk: '£7,000 – £9,000',
    saving: '30–45%',
    desc: 'Lifting and reshaping of the breast without implants. Can be combined with augmentation.',
    stay: '5–7 days',
  },
  {
    name: 'Liposuction',
    slug: null,
    price: 'from £2,500',
    uk: '£3,500 – £7,500',
    saving: '30–65%',
    desc: 'Fat removal from abdomen, flanks, thighs, arms, chin and other areas.',
    stay: '5–7 days',
  },
  {
    name: 'Tummy Tuck (Abdominoplasty)',
    slug: null,
    price: 'from £3,500',
    uk: '£5,000 – £9,000',
    saving: '30–60%',
    desc: 'Removal of excess skin and fat from the abdomen with muscle tightening. Full or mini abdominoplasty.',
    stay: '7–10 days',
  },
  {
    name: 'Facelift (Rhytidectomy)',
    slug: null,
    price: 'from £5,000',
    uk: '£8,000 – £15,000',
    saving: '40–65%',
    desc: 'Surgical rejuvenation of the face and neck. Full, mini, or SMAS facelift techniques.',
    stay: '7–10 days',
  },
  {
    name: 'BBL (Brazilian Butt Lift)',
    slug: null,
    price: 'from £4,000',
    uk: '£7,000 – £12,000',
    saving: '40–65%',
    desc: 'Fat transfer to the buttocks for volume and shape enhancement. Combines liposuction and fat grafting.',
    stay: '7–10 days',
  },
  {
    name: 'Brow Lift',
    slug: null,
    price: 'from £2,500',
    uk: '£4,000 – £7,000',
    saving: '40–65%',
    desc: 'Lifting of the forehead and brow for a more youthful, refreshed appearance.',
    stay: '5–7 days',
  },
  {
    name: 'Eyelid Surgery (Blepharoplasty)',
    slug: null,
    price: 'from £1,800',
    uk: '£3,000 – £5,000',
    saving: '40–65%',
    desc: 'Upper and/or lower eyelid correction for hooded lids, bags, or excess skin.',
    stay: '3–5 days',
  },
  {
    name: 'Otoplasty (Ear Surgery)',
    slug: null,
    price: 'from £1,500',
    uk: '£2,500 – £4,500',
    saving: '40–65%',
    desc: 'Correction of prominent or asymmetrical ears. Suitable for adults and children over 5.',
    stay: '3–5 days',
  },
  {
    name: 'Arm Lift (Brachioplasty)',
    slug: null,
    price: 'from £2,500',
    uk: '£4,000 – £6,500',
    saving: '40–60%',
    desc: 'Removal of excess skin from the upper arms following weight loss or ageing.',
    stay: '5–7 days',
  },
  {
    name: 'Thigh Lift',
    slug: null,
    price: 'from £3,000',
    uk: '£5,000 – £8,000',
    saving: '40–60%',
    desc: 'Removal of excess skin from the inner or outer thighs. Often combined with liposuction.',
    stay: '5–7 days',
  },
  {
    name: 'Labioplasty',
    slug: null,
    price: 'from £1,800',
    uk: '£2,500 – £4,500',
    saving: '40–60%',
    desc: 'Reduction or reshaping of the labia minora for aesthetic or functional reasons.',
    stay: '3–5 days',
  },
  {
    name: 'Vaginoplasty',
    slug: null,
    price: 'Contact us',
    uk: 'Variable',
    saving: null,
    desc: 'Surgical tightening of the vaginal canal. Often combined with labioplasty.',
    stay: '5–7 days',
  },
]

const faqs = [
  {
    q: 'How much does plastic surgery cost in Istanbul?',
    a: 'Plastic surgery in Istanbul is typically 30–70% lower than UK private clinics. Rhinoplasty starts from £3,200 (vs. £7,000–£12,000 in the UK), breast augmentation from £6,000 (vs. £8,000–£11,000), and liposuction from £2,500 (vs. £3,500–£7,500). All prices are indicative — exact quotes depend on the specific procedure, complexity, and your individual anatomy.'
  },
  {
    q: 'How long do I need to stay in Istanbul?',
    a: 'Most plastic surgery patients stay in Istanbul for 5–10 days. Simpler procedures such as eyelid surgery or ear correction require 3–5 days; larger operations such as facelift, tummy tuck, or combined procedures require 7–10 days. Your surgeon will advise on the appropriate stay based on your specific procedure.'
  },
  {
    q: 'Can I combine multiple procedures in one visit?',
    a: 'Yes. Many patients combine procedures — for example, tummy tuck with liposuction, breast augmentation with lift, or rhinoplasty with eyelid surgery. Combining procedures can reduce overall recovery time and cost. Your surgeon will advise on what is safely achievable in a single session based on anaesthesia time and your health status.'
  },
  {
    q: 'Is plastic surgery in Turkey safe?',
    a: 'Ocean Health & Travel coordinates procedures exclusively at JCI-accredited hospitals and clinics with board-certified plastic surgeons. We do not provide medical advice — all clinical decisions rest with your treating surgeon. As with any surgical procedure, risks exist and will be discussed fully during your pre-operative consultation.'
  },
  {
    q: 'What documentation do I need?',
    a: 'For most cosmetic procedures, no prior medical referral is required. We ask for a brief health summary (current medications, significant medical history, allergies, BMI) to ensure your treating surgeon has the relevant context. Photos of the area(s) of concern help us provide an accurate initial quote.'
  },
]

export default function PlasticSurgeryPage() {
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
        .hero{background:linear-gradient(135deg,#042e22 0%,#085041 45%,#0d6b55 100%);padding:100px 0 80px;position:relative;overflow:hidden}
        .hero::before{content:'';position:absolute;width:500px;height:500px;border-radius:50%;background:radial-gradient(circle,rgba(29,158,117,.2) 0%,transparent 70%);top:-100px;right:-100px;pointer-events:none}
        .hero-inner{position:relative;z-index:1}
        .breadcrumb{font-size:12px;color:rgba(255,255,255,.5);margin-bottom:1.25rem}
        .breadcrumb a{color:rgba(255,255,255,.5)}
        .breadcrumb span{margin:0 6px}
        .kicker{font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#6ee7b7;margin-bottom:1rem}
        h1{font-family:'DM Serif Display',serif;font-size:clamp(36px,4.5vw,58px);line-height:1.1;letter-spacing:-.025em;color:#fff;margin-bottom:1rem;font-weight:400;max-width:700px}
        h1 em{font-style:italic;color:#6ee7b7}
        .hero-sub{font-size:16px;color:rgba(255,255,255,.72);line-height:1.75;margin-bottom:2rem;font-weight:300;max-width:560px}
        .hero-stats{display:flex;gap:2rem;flex-wrap:wrap;margin-bottom:2rem}
        .hero-stat{text-align:left}
        .hero-stat-n{font-family:'DM Serif Display',serif;font-size:28px;color:#6ee7b7;font-weight:400;line-height:1}
        .hero-stat-l{font-size:12px;color:rgba(255,255,255,.6);margin-top:3px}
        .hero-actions{display:flex;gap:12px;flex-wrap:wrap}
        .btn-primary{background:#fff;color:#085041;border:none;padding:14px 26px;border-radius:10px;font-size:15px;font-weight:600;display:inline-flex;align-items:center;gap:8px;transition:transform .2s,box-shadow .2s;cursor:pointer;font-family:'Inter',sans-serif;box-shadow:0 4px 20px rgba(0,0,0,.15)}
        .btn-primary:hover{transform:translateY(-2px);box-shadow:0 8px 28px rgba(0,0,0,.2)}
        .btn-ghost{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.35);padding:14px 26px;border-radius:10px;font-size:15px;display:inline-flex;align-items:center;gap:8px;transition:all .2s;cursor:pointer;font-family:'Inter',sans-serif}
        .btn-ghost:hover{background:rgba(255,255,255,.1)}
        .trust-row{display:flex;gap:1.5rem;flex-wrap:wrap;margin-top:1.5rem}
        .trust-item{display:flex;align-items:center;gap:7px;font-size:12.5px;color:rgba(255,255,255,.75)}
        .trust-dot{width:7px;height:7px;border-radius:50%;background:#6ee7b7;flex-shrink:0}
        .sec{padding:5rem 0}
        .sec.bg{background:#fafaf9}
        .sec.border{border-top:1px solid #f0ede8;border-bottom:1px solid #f0ede8}
        h2{font-family:'DM Serif Display',serif;font-size:clamp(26px,3vw,38px);font-weight:400;color:#1a1a1a;letter-spacing:-.02em;line-height:1.2;margin-bottom:1rem}
        h3{font-family:'DM Serif Display',serif;font-size:20px;font-weight:400;color:#1a1a1a;letter-spacing:-.01em;margin-bottom:.5rem}
        .proc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:2rem}
        .proc-card{background:#fff;border:1px solid #f0ede8;border-radius:16px;padding:1.5rem;transition:transform .25s,box-shadow .25s,border-color .25s;display:flex;flex-direction:column}
        .proc-card:hover{transform:translateY(-3px);box-shadow:0 10px 30px rgba(0,0,0,.08);border-color:#d1f5e8}
        .proc-card.featured{border-color:#1D9E75;background:#f0faf5}
        .proc-name{font-size:15px;font-weight:600;color:#1a1a1a;margin-bottom:.4rem}
        .proc-desc{font-size:13px;color:#777;line-height:1.65;font-weight:300;margin-bottom:1rem;flex:1}
        .proc-footer{display:flex;justify-content:space-between;align-items:center;padding-top:.85rem;border-top:1px solid #f5f4f2;margin-top:auto}
        .proc-price{font-size:14px;font-weight:600;color:#085041}
        .proc-saving{font-size:11px;background:#E1F5EE;color:#085041;border-radius:20px;padding:3px 10px;font-weight:600}
        .proc-stay{font-size:11px;color:#bbb;margin-top:4px}
        .proc-link{font-size:12px;color:#085041;font-weight:600;margin-top:.75rem;display:inline-flex;align-items:center;gap:4px}
        .faq-list{display:flex;flex-direction:column;border:1px solid #f0ede8;border-radius:16px;overflow:hidden;margin-top:2.5rem}
        .faq-item{border-bottom:1px solid #f0ede8}
        .faq-item:last-child{border-bottom:none}
        .faq-q{width:100%;text-align:left;padding:1.25rem 1.5rem;background:#fff;border:none;cursor:pointer;font-family:'Inter',sans-serif;font-size:15px;font-weight:500;color:#1a1a1a;display:flex;justify-content:space-between;align-items:center;gap:1rem;transition:background .2s}
        .faq-q:hover{background:#fafaf9}
        .faq-a{padding:0 1.5rem 1.25rem;font-size:14px;color:#666;line-height:1.75;font-weight:300}
        .cta-box{background:linear-gradient(135deg,#042e22,#085041);border-radius:20px;padding:3rem;text-align:center}
        .cta-box h2{color:#fff;margin-bottom:.75rem}
        .cta-box p{font-size:15px;color:rgba(255,255,255,.65);font-weight:300;line-height:1.7;margin-bottom:2rem;max-width:480px;margin-left:auto;margin-right:auto}
        .cta-btns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}
        .btn-cta-w{background:#fff;color:#085041;border:none;padding:14px 28px;border-radius:10px;font-size:15px;font-weight:600;display:inline-flex;align-items:center;gap:8px;cursor:pointer;font-family:'Inter',sans-serif;transition:all .2s}
        .btn-cta-w:hover{background:#E1F5EE}
        .btn-cta-o{background:transparent;color:rgba(255,255,255,.8);border:1px solid rgba(255,255,255,.3);padding:14px 28px;border-radius:10px;font-size:15px;display:inline-flex;align-items:center;gap:8px;cursor:pointer;font-family:'Inter',sans-serif;transition:all .2s}
        .btn-cta-o:hover{background:rgba(255,255,255,.1);color:#fff}
        footer{background:#111;padding:3rem 0 2rem}
        .footer-legal{font-size:11.5px;color:#444;line-height:1.8}
        .footer-legal em{color:#333;font-style:normal;font-size:11px}
        @media(max-width:900px){.proc-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:600px){.proc-grid{grid-template-columns:1fr}.inner{padding:0 1.25rem}.hero{padding:80px 0 60px}.hero-stats{gap:1.5rem}.cta-btns{flex-direction:column;align-items:center}}
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
        <div className="inner hero-inner">
          <div className="breadcrumb">
            <a href="/">Home</a><span>›</span>
            <a href="/#services">Treatments</a><span>›</span>
            Plastic Surgery Istanbul
          </div>
          <div className="kicker">Plastic &amp; cosmetic surgery · Istanbul</div>
          <h1>Plastic Surgery in Istanbul.<br /><em>30–70% lower than UK private.</em></h1>
          <p className="hero-sub">
            Board-certified plastic surgeons. JCI-accredited hospitals. Physician-led coordination from first enquiry through discharge and GP documentation.
          </p>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-n">15+</div>
              <div className="hero-stat-l">procedures coordinated</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-n">30–70%</div>
              <div className="hero-stat-l">lower than UK private</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-n">48h</div>
              <div className="hero-stat-l">quote turnaround</div>
            </div>
          </div>
          <div className="hero-actions">
            <a href={WA_URL} target="_blank" className="btn-primary">Get a free quote</a>
            <a href="#procedures" className="btn-ghost">View all procedures ↓</a>
          </div>
          <div className="trust-row">
            {['JCI-accredited hospitals','Board-certified surgeons','Fixed, itemised pricing','GP documentation included'].map(t => (
              <div key={t} className="trust-item"><div className="trust-dot"></div>{t}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" id="procedures">
        <div className="inner">
          <div className="kicker">All procedures</div>
          <h2>Plastic &amp; cosmetic surgery in Istanbul</h2>
          <p style={{fontSize:'15px',color:'#666',lineHeight:1.7,fontWeight:300,maxWidth:'600px',marginBottom:'0'}}>
            All prices are indicative and subject to individual assessment. Contact us for a personalised quote within 48 hours.
          </p>
          <div className="proc-grid">
            {procedures.map(p => (
              <div key={p.name} className={`proc-card${p.slug ? ' featured' : ''}`}>
                <div className="proc-name">{p.name}</div>
                <div className="proc-desc">{p.desc}</div>
                <div className="proc-stay">Typical stay: {p.stay}</div>
                <div className="proc-footer">
                  <div>
                    <div className="proc-price">{p.price}</div>
                    <div style={{fontSize:'11px',color:'#aaa',marginTop:'2px'}}>UK: {p.uk}</div>
                  </div>
                  {p.saving && <span className="proc-saving">{p.saving} saving</span>}
                </div>
                {p.slug
                  ? <a href={p.slug} className="proc-link">Full procedure guide →</a>
                  : <a href={WA_URL} target="_blank" className="proc-link">Get a quote →</a>
                }
              </div>
            ))}
          </div>
          <p style={{fontSize:'12px',color:'#bbb',marginTop:'1.5rem',lineHeight:1.6}}>
            Prices indicative. Coordination fee quoted separately. Flights not included. Ocean Health &amp; Travel is a coordinator, not a medical provider. All clinical decisions rest with your treating surgeon.
          </p>
        </div>
      </section>

      <section className="sec bg border" id="faq">
        <div className="inner">
          <div className="kicker">Common questions</div>
          <h2>Plastic surgery Istanbul — FAQ</h2>
          <div className="faq-list">
            {faqs.map(f => (
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

      <section className="sec">
        <div className="inner">
          <div className="cta-box">
            <h2>Ready to find out what your procedure costs?</h2>
            <p>Tell us which procedure you&apos;re interested in and we&apos;ll have a full itemised quote within 48 hours — no obligation.</p>
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
            <em>Ocean Health &amp; Travel does not provide medical advice. All clinical decisions rest with your treating surgeon. Not suitable for emergencies.</em>
          </div>
        </div>
      </footer>
    </>
  )
}
