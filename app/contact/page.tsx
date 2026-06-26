import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Ocean Health & Travel',
  description: 'Get in touch with Ocean Health & Travel. WhatsApp, email, or send us a message. Free quote within 48 hours.',
}

const WA_URL = 'https://wa.me/447441904858?text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20treatment%20coordination'

export default function ContactPage() {
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
        .hero{background:linear-gradient(135deg,#042e22 0%,#085041 50%,#0d6b55 100%);padding:80px 0 60px;position:relative;overflow:hidden}
        .hero::before{content:'';position:absolute;width:400px;height:400px;border-radius:50%;background:radial-gradient(circle,rgba(29,158,117,.2) 0%,transparent 70%);top:-100px;right:-100px;pointer-events:none}
        .hero-inner{position:relative;z-index:1;max-width:640px}
        .kicker{font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#6ee7b7;margin-bottom:1rem}
        h1{font-family:'DM Serif Display',serif;font-size:clamp(32px,4vw,50px);line-height:1.1;letter-spacing:-.025em;color:#fff;margin-bottom:1rem;font-weight:400}
        h1 em{font-style:italic;color:#6ee7b7}
        .hero-sub{font-size:16px;color:rgba(255,255,255,.72);line-height:1.75;font-weight:300}
        .sec{padding:5rem 0}
        .sec.bg{background:#fafaf9}
        h2{font-family:'DM Serif Display',serif;font-size:clamp(22px,2.5vw,32px);font-weight:400;color:#1a1a1a;letter-spacing:-.02em;line-height:1.2;margin-bottom:1rem}
        .contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:3rem;align-items:start}
        .contact-method{background:#fff;border:1px solid #f0ede8;border-radius:16px;padding:1.75rem;margin-bottom:1rem;display:flex;align-items:flex-start;gap:1rem;transition:border-color .2s,transform .2s}
        .contact-method:hover{border-color:#1D9E75;transform:translateY(-2px)}
        .contact-method a{text-decoration:none;color:inherit;display:flex;align-items:flex-start;gap:1rem;width:100%}
        .method-icon{width:48px;height:48px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0}
        .method-icon.green{background:#E1F5EE}
        .method-icon.blue{background:#e3f2fd}
        .method-icon.dark{background:#f5f4f2}
        .method-t{font-size:15px;font-weight:600;color:#1a1a1a;margin-bottom:4px}
        .method-d{font-size:13px;color:#777;line-height:1.6;font-weight:300}
        .method-val{font-size:14px;color:#085041;font-weight:500;margin-top:6px}
        .office-grid{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:1.5rem}
        .office-card{background:#fff;border:1px solid #f0ede8;border-radius:14px;padding:1.5rem}
        .office-tag{font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#1D9E75;margin-bottom:.75rem}
        .office-city{font-size:16px;font-weight:500;color:#1a1a1a;margin-bottom:.5rem}
        .office-addr{font-size:13px;color:#777;line-height:1.7;font-weight:300}
        .hours-box{background:#f0faf5;border:1px solid #c6f0de;border-radius:12px;padding:1.25rem 1.5rem;margin-top:1.5rem}
        .hours-t{font-size:13px;font-weight:600;color:#085041;margin-bottom:.5rem}
        .hours-d{font-size:13px;color:#555;line-height:1.7;font-weight:300}
        .disclaimer{font-size:12px;color:#bbb;line-height:1.6;margin-top:1.5rem}
        .cta-box{background:linear-gradient(135deg,#042e22,#085041);border-radius:20px;padding:3rem;text-align:center;margin-top:3rem}
        .cta-box h2{color:#fff;margin-bottom:.75rem}
        .cta-box p{font-size:15px;color:rgba(255,255,255,.65);font-weight:300;line-height:1.7;margin-bottom:2rem;max-width:480px;margin-left:auto;margin-right:auto}
        .cta-btns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}
        .btn-wa{background:#1D9E75;color:#fff;border:none;padding:14px 28px;border-radius:10px;font-size:15px;font-weight:600;display:inline-flex;align-items:center;gap:8px;cursor:pointer;font-family:'Inter',sans-serif;transition:all .2s}
        .btn-wa:hover{background:#085041}
        .btn-email{background:transparent;color:rgba(255,255,255,.75);border:1px solid rgba(255,255,255,.3);padding:14px 28px;border-radius:10px;font-size:15px;display:inline-flex;align-items:center;gap:8px;cursor:pointer;font-family:'Inter',sans-serif;transition:all .2s}
        .btn-email:hover{background:rgba(255,255,255,.1);color:#fff}
        footer{background:#111;padding:3rem 0 2rem}
        .footer-legal{font-size:11.5px;color:#444;line-height:1.8}
        .footer-legal em{color:#333;font-style:normal;font-size:11px}
        @media(max-width:900px){.contact-grid{grid-template-columns:1fr}.office-grid{grid-template-columns:1fr}}
        @media(max-width:600px){.inner{padding:0 1.25rem}.hero{padding:60px 0 50px}.cta-btns{flex-direction:column;align-items:center}}
      `}</style>

      <nav>
        <div className="inner nav-inner">
          <a href="/" className="logo">Ocean Health &amp; Travel</a>
          <ul className="nav-links">
            <li><a href="/#compare">NHS vs OHT</a></li>
            <li><a href="/#services">Treatments</a></li>
            <li><a href="/about">About</a></li>
            <li><a href={WA_URL} target="_blank" className="btn-nav">Free quote</a></li>
          </ul>
        </div>
      </nav>

      <section className="hero">
        <div className="inner">
          <div className="hero-inner">
            <div className="kicker">Get in touch</div>
            <h1>We reply within<br /><em>the hour.</em></h1>
            <p className="hero-sub">
              WhatsApp is the fastest way to reach us. Send your treatment enquiry, clinical documents, or any questions — we respond promptly during working hours.
            </p>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="inner">
          <div className="contact-grid">
            <div>
              <h2>Contact methods</h2>
              <p style={{fontSize:'15px',color:'#666',lineHeight:1.7,fontWeight:300,marginBottom:'1.5rem'}}>
                WhatsApp is preferred for speed. For formal documents or clinical records, email is better.
              </p>

              <div className="contact-method">
                <a href={WA_URL} target="_blank" rel="noopener noreferrer">
                  <div className="method-icon green">💬</div>
                  <div>
                    <div className="method-t">WhatsApp</div>
                    <div className="method-d">Fastest response. Send your treatment enquiry, photos, or clinical documents directly.</div>
                    <div className="method-val">+44 7441 904858</div>
                  </div>
                </a>
              </div>

              <div className="contact-method">
                <a href="mailto:info@oceanhealthtravel.com">
                  <div className="method-icon blue">✉️</div>
                  <div>
                    <div className="method-t">Email</div>
                    <div className="method-d">For formal enquiries, clinical documents, and referral letters. We respond within 24 hours.</div>
                    <div className="method-val">info@oceanhealthtravel.com</div>
                  </div>
                </a>
              </div>

              <div className="contact-method">
                <a href="tel:+447441904858">
                  <div className="method-icon dark">📞</div>
                  <div>
                    <div className="method-t">Phone</div>
                    <div className="method-d">UK number. Available during working hours (GMT). For urgent enquiries only — WhatsApp preferred.</div>
                    <div className="method-val">+44 7441 904858</div>
                  </div>
                </a>
              </div>

              <div className="hours-box">
                <div className="hours-t">Response times</div>
                <div className="hours-d">
                  WhatsApp: within 1 hour (working hours)<br />
                  Email: within 24 hours<br />
                  Quote turnaround: within 48 hours of receiving clinical information<br />
                  Working hours: Monday–Saturday, 09:00–18:00 GMT
                </div>
              </div>
            </div>

            <div>
              <h2>Our offices</h2>
              <div className="office-grid">
                <div className="office-card">
                  <div className="office-tag">UK office</div>
                  <div className="office-city">London</div>
                  <div className="office-addr">
                    17 Green Lanes<br />
                    London<br />
                    N16 9BS<br />
                    United Kingdom
                  </div>
                </div>
                <div className="office-card">
                  <div className="office-tag">Turkey office</div>
                  <div className="office-city">Fethiye, Muğla</div>
                  <div className="office-addr">
                    Karagözler Mah.<br />
                    Fevzi Çakmak Cad.<br />
                    No:11/A<br />
                    Fethiye, Muğla, Turkey
                  </div>
                </div>
              </div>

              <div style={{marginTop:'2rem'}}>
                <h2>What to include in your enquiry</h2>
                <p style={{fontSize:'15px',color:'#666',lineHeight:1.7,fontWeight:300,marginBottom:'1rem'}}>
                  The more detail you provide, the faster we can get you an accurate quote.
                </p>
                {[
                  {icon:'🩺',t:'Treatment',d:'Which procedure(s) you are considering'},
                  {icon:'📅',t:'Preferred dates',d:'When you would like to travel to Istanbul'},
                  {icon:'📋',t:'Medical records',d:'Any relevant clinical documents, X-rays, or referral letters'},
                  {icon:'💷',t:'Budget',d:'Approximate budget helps us recommend the right package'},
                ].map(item => (
                  <div key={item.t} style={{display:'flex',alignItems:'flex-start',gap:'12px',padding:'.75rem 0',borderBottom:'1px solid #f5f4f2'}}>
                    <span style={{fontSize:'18px',flexShrink:0}}>{item.icon}</span>
                    <div>
                      <div style={{fontSize:'14px',fontWeight:500,marginBottom:'2px'}}>{item.t}</div>
                      <div style={{fontSize:'13px',color:'#777',fontWeight:300}}>{item.d}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="disclaimer">
                Ocean Health &amp; Travel is a coordinator, not a medical provider. We do not provide medical advice or clinical assessments. All clinical decisions rest with your treating physician. Flights not included. Client money protected via Trust Account.
              </div>
            </div>
          </div>

          <div className="cta-box">
            <h2>Ready to get started?</h2>
            <p>Send us your treatment and preferred dates. Full itemised quote within 48 hours — no obligation.</p>
            <div className="cta-btns">
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-wa">💬 WhatsApp us now</a>
              <a href="mailto:info@oceanhealthtravel.com" className="btn-email">✉️ Send an email</a>
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
            <em>Ocean Health &amp; Travel does not provide medical advice. All clinical decisions rest with your treating clinic. Not suitable for emergencies.</em>
          </div>
        </div>
      </footer>
    </>
  )
}
