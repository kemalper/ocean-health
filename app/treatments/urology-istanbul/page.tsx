import type { Metadata } from 'next'
import Nav from '@/app/components/Nav'

export const metadata: Metadata = {
  title: 'Urology & Men\'s Health in Istanbul | Ocean Health & Travel',
  description: 'Urology and men\'s health treatment coordination in Istanbul. Penile aesthetics, erectile dysfunction, P-Shot, ESWT, SVF stem cell therapy. JCI-accredited clinics. Free quote in 48 hours.',
}

const WA_URL = 'https://wa.me/447441904858?text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20urology%20treatment%20in%20Istanbul'

const procedures = [
  {
    name: 'Penile Aesthetics / Penoplasty',
    price: 'Contact us',
    uk: 'Variable',
    saving: null,
    desc: 'Surgical enhancement of penile length or girth. Techniques include ligament release, fat transfer, or dermal filler augmentation depending on the approach recommended by your surgeon.',
  },
  {
    name: 'Penile Prosthesis / Implant',
    price: 'Contact us',
    uk: 'Variable',
    saving: null,
    desc: 'Surgical implantation of an inflatable or semi-rigid penile prosthesis for severe erectile dysfunction not responsive to other treatments. Highly effective with high patient satisfaction rates.',
  },
  {
    name: 'Erectile Dysfunction (ED) Treatment',
    price: 'Contact us',
    uk: 'Variable',
    saving: null,
    desc: 'Comprehensive evaluation and treatment of erectile dysfunction. Options include ESWT (low-intensity shockwave therapy), P-Shot (PRP injection), SVF stem cell therapy, or surgical implant depending on severity.',
  },
  {
    name: 'P-Shot (Priapus Shot)',
    price: 'Contact us',
    uk: 'Variable',
    saving: null,
    desc: 'Platelet-rich plasma (PRP) injection into penile tissue to improve blood flow, sensitivity, and erectile function. Non-surgical, minimal downtime.',
  },
  {
    name: 'ESWT (Extracorporeal Shockwave Therapy)',
    price: 'Contact us',
    uk: 'Variable',
    saving: null,
    desc: 'Low-intensity shockwave therapy to stimulate new blood vessel growth in penile tissue. Non-invasive treatment for vasculogenic erectile dysfunction. Typically 6–12 sessions.',
  },
  {
    name: 'SVF Stem Cell Therapy',
    price: 'Contact us',
    uk: 'Variable',
    saving: null,
    desc: 'Stromal vascular fraction (SVF) derived from the patient\'s own adipose tissue, used to promote tissue regeneration in urological conditions. An emerging therapy — clinical evidence is developing.',
  },
  {
    name: 'Penile Curvature (Peyronie\'s Disease)',
    price: 'Contact us',
    uk: 'Variable',
    saving: null,
    desc: 'Surgical or non-surgical treatment of Peyronie\'s disease causing penile curvature. Options include plaque excision with grafting, Nesbit procedure, or collagenase injection depending on severity.',
  },
]

const faqs = [
  {
    q: 'Is urology treatment in Istanbul confidential?',
    a: 'Yes. All patient information is handled in strict confidence under UK GDPR and our Privacy Policy. Your medical information is shared only with the treating clinical team and is not disclosed to any third party without your explicit consent. Our coordination team treats all urological enquiries with complete discretion.',
  },
  {
    q: 'Do I need a referral for urology treatment?',
    a: 'For most urological procedures coordinated by Ocean Health & Travel, a GP referral is not mandatory — though a summary of your symptoms, current medications, and relevant medical history is helpful for obtaining an accurate quote. For surgical procedures (penile prosthesis, penoplasty), a pre-operative assessment will be required.',
  },
  {
    q: 'How do I get a quote?',
    a: 'Contact us via WhatsApp or email with the treatment you are interested in and a brief description of your situation. All enquiries are handled discreetly. We will provide an outline of available options and pricing within 48 hours.',
  },
  {
    q: 'How long do I need to stay in Istanbul?',
    a: 'Stay length depends on the procedure. Non-surgical treatments (P-Shot, ESWT, SVF) typically require 3–5 days. Surgical procedures (penoplasty, penile prosthesis) typically require 5–10 days. Your coordinator will advise on the appropriate stay for your specific treatment.',
  },
  {
    q: 'Are these treatments available on the NHS?',
    a: 'Most aesthetic and enhancement procedures are not available on the NHS. Some ED treatments (including penile prosthesis for severe ED) may be available through NHS urology, but waiting times can be lengthy. ESWT and P-Shot are not routinely available on the NHS.',
  },
  {
    q: 'What coordination services are included?',
    a: 'Every package includes airport transfer, hotel accommodation, professional interpretation at all appointments, and full clinic liaison. All enquiries and documentation are handled with complete discretion. Flights are not included. We are a coordinator, not a medical provider.',
  },
]

export default function UrologyPage() {
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
        .hero{background:linear-gradient(135deg,#1a2a1a 0%,#1f3d2e 50%,#2d5a40 100%);padding:100px 0 80px;position:relative;overflow:hidden}
        .hero::before{content:'';position:absolute;width:500px;height:500px;border-radius:50%;background:radial-gradient(circle,rgba(45,90,64,.3) 0%,transparent 70%);top:-100px;right:-100px;pointer-events:none}
        .hero-inner{position:relative;z-index:1;max-width:700px}
        .breadcrumb{font-size:12px;color:rgba(255,255,255,.5);margin-bottom:1.25rem}
        .breadcrumb a{color:rgba(255,255,255,.5)}
        .breadcrumb span{margin:0 6px}
        .kicker{font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#86efac;margin-bottom:1rem}
        .privacy-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(134,239,172,.15);border:1px solid rgba(134,239,172,.3);border-radius:100px;padding:6px 14px;font-size:12px;font-weight:500;color:#86efac;margin-bottom:1.25rem}
        h1{font-family:'DM Serif Display',serif;font-size:clamp(34px,4.5vw,56px);line-height:1.1;letter-spacing:-.025em;color:#fff;margin-bottom:1rem;font-weight:400}
        h1 em{font-style:italic;color:#86efac}
        .hero-sub{font-size:16px;color:rgba(255,255,255,.72);line-height:1.75;margin-bottom:2rem;font-weight:300;max-width:540px}
        .hero-actions{display:flex;gap:12px;flex-wrap:wrap}
        .btn-primary{background:#fff;color:#1f3d2e;border:none;padding:14px 26px;border-radius:10px;font-size:15px;font-weight:600;display:inline-flex;align-items:center;gap:8px;transition:transform .2s,box-shadow .2s;cursor:pointer;font-family:'Inter',sans-serif;box-shadow:0 4px 20px rgba(0,0,0,.2)}
        .btn-primary:hover{transform:translateY(-2px);box-shadow:0 8px 28px rgba(0,0,0,.3)}
        .btn-ghost{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.35);padding:14px 26px;border-radius:10px;font-size:15px;display:inline-flex;align-items:center;gap:8px;transition:all .2s;cursor:pointer;font-family:'Inter',sans-serif}
        .btn-ghost:hover{background:rgba(255,255,255,.1)}
        .trust-row{display:flex;gap:1.5rem;flex-wrap:wrap;margin-top:1.5rem}
        .trust-item{display:flex;align-items:center;gap:7px;font-size:12.5px;color:rgba(255,255,255,.75)}
        .trust-dot{width:7px;height:7px;border-radius:50%;background:#86efac;flex-shrink:0}
        .sec{padding:5rem 0}
        .sec.bg{background:#fafaf9}
        .sec.border{border-top:1px solid #f0ede8;border-bottom:1px solid #f0ede8}
        h2{font-family:'DM Serif Display',serif;font-size:clamp(26px,3vw,38px);font-weight:400;color:#1a1a1a;letter-spacing:-.02em;line-height:1.2;margin-bottom:1rem}
        .proc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:2rem}
        .proc-card{background:#fff;border:1px solid #f0ede8;border-radius:16px;padding:1.5rem;display:flex;flex-direction:column;transition:transform .25s,box-shadow .25s,border-color .25s}
        .proc-card:hover{transform:translateY(-3px);box-shadow:0 10px 30px rgba(0,0,0,.08);border-color:#bbf7d0}
        .proc-name{font-size:15px;font-weight:600;color:#1a1a1a;margin-bottom:.4rem}
        .proc-desc{font-size:13px;color:#777;line-height:1.65;font-weight:300;flex:1;margin-bottom:1rem}
        .proc-price{font-size:13px;font-weight:500;color:#1f3d2e;padding-top:.85rem;border-top:1px solid #f5f4f2;margin-top:auto}
        .proc-link{font-size:12px;color:#1f3d2e;font-weight:600;margin-top:.75rem;display:inline-flex;align-items:center;gap:4px}
        .privacy-box{background:#f0faf5;border:1px solid #c6f0de;border-radius:14px;padding:1.5rem;margin-top:2rem}
        .privacy-box p{font-size:14px;color:#085041;line-height:1.7;margin:0;font-weight:300}
        .faq-list{display:flex;flex-direction:column;border:1px solid #f0ede8;border-radius:16px;overflow:hidden;margin-top:2.5rem}
        .faq-item{border-bottom:1px solid #f0ede8}
        .faq-item:last-child{border-bottom:none}
        .faq-q{width:100%;text-align:left;padding:1.25rem 1.5rem;background:#fff;border:none;cursor:pointer;font-family:'Inter',sans-serif;font-size:15px;font-weight:500;color:#1a1a1a;display:flex;justify-content:space-between;align-items:center;gap:1rem;transition:background .2s}
        .faq-q:hover{background:#fafaf9}
        .faq-a{padding:0 1.5rem 1.25rem;font-size:14px;color:#666;line-height:1.75;font-weight:300}
        .cta-box{background:linear-gradient(135deg,#1a2a1a,#1f3d2e);border-radius:20px;padding:3rem;text-align:center}
        .cta-box h2{color:#fff;margin-bottom:.75rem}
        .cta-box p{font-size:15px;color:rgba(255,255,255,.65);font-weight:300;line-height:1.7;margin-bottom:2rem;max-width:480px;margin-left:auto;margin-right:auto}
        .cta-btns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}
        .btn-cta-w{background:#86efac;color:#1a2a1a;border:none;padding:14px 28px;border-radius:10px;font-size:15px;font-weight:600;display:inline-flex;align-items:center;gap:8px;cursor:pointer;font-family:'Inter',sans-serif;transition:all .2s}
        .btn-cta-w:hover{background:#bbf7d0}
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
        <div className="inner">
          <div className="hero-inner">
            <div className="breadcrumb">
              <a href="/">Home</a><span>›</span>
              <a href="/#services">Treatments</a><span>›</span>
              Urology Istanbul
            </div>
            <div className="privacy-badge">🔒 All enquiries handled in strict confidence</div>
            <div className="kicker">Urology &amp; men&apos;s health · Istanbul</div>
            <h1>Urology &amp; Men&apos;s Health<br />in Istanbul.<br /><em>Discreet. Expert. Coordinated.</em></h1>
            <p className="hero-sub">
              Physician-led coordination for urological procedures at JCI-accredited clinics in Istanbul. All enquiries are handled with complete confidentiality.
            </p>
            <div className="hero-actions">
              <a href={WA_URL} target="_blank" className="btn-primary">Enquire confidentially</a>
              <a href="#faq" className="btn-ghost">Read FAQs ↓</a>
            </div>
            <div className="trust-row">
              {['Complete confidentiality','JCI-accredited clinics','No GP referral required','Fixed, itemised pricing'].map(t => (
                <div key={t} className="trust-item"><div className="trust-dot"></div>{t}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sec" id="procedures">
        <div className="inner">
          <div className="kicker">Treatments coordinated</div>
          <h2>Urology &amp; men&apos;s health in Istanbul</h2>
          <p style={{fontSize:'15px',color:'#666',lineHeight:1.7,fontWeight:300,maxWidth:'600px',marginBottom:'0'}}>
            All enquiries are handled in strict confidence. Contact us via WhatsApp or email for a discreet, personalised quote.
          </p>
          <div className="proc-grid">
            {procedures.map(p => (
              <div key={p.name} className="proc-card">
                <div className="proc-name">{p.name}</div>
                <div className="proc-desc">{p.desc}</div>
                <div className="proc-price">{p.price}</div>
                <a href={WA_URL} target="_blank" className="proc-link">Enquire confidentially →</a>
              </div>
            ))}
          </div>
          <div className="privacy-box">
            <p>🔒 <strong>Confidentiality:</strong> All urological enquiries are handled with complete discretion. Your information is shared only with the treating clinical team and is never disclosed to third parties without your explicit consent. We are registered with the ICO and operate under UK GDPR.</p>
          </div>
          <p style={{fontSize:'12px',color:'#bbb',marginTop:'1rem',lineHeight:1.6}}>
            Prices on request. Coordination fee quoted separately. Flights not included. Ocean Health &amp; Travel is a coordinator, not a medical provider. All clinical decisions rest with your treating urologist.
          </p>
        </div>
      </section>

      <section className="sec bg border" id="faq">
        <div className="inner">
          <div className="kicker">Common questions</div>
          <h2>Urology Istanbul — FAQ</h2>
          <div className="faq-list">
            {faqs.map(f => (
              <details key={f.q} className="faq-item">
                <summary className="faq-q">
                  {f.q}
                  <span style={{fontSize:'18px',color:'#1f3d2e',flexShrink:0}}>+</span>
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
            <h2>Enquire confidentially</h2>
            <p>All enquiries are handled in strict confidence. WhatsApp is the most discreet option — messages are end-to-end encrypted.</p>
            <div className="cta-btns">
              <a href={WA_URL} target="_blank" className="btn-cta-w">💬 WhatsApp (confidential)</a>
              <a href="mailto:info@oceanhealthtravel.com" className="btn-cta-o">✉️ Email us</a>
            </div>
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
            <em>Ocean Health &amp; Travel does not provide medical advice. All clinical decisions rest with your treating urologist. Not suitable for emergencies.</em>
          </div>
        </div>
      </footer>
    </>
  )
}
