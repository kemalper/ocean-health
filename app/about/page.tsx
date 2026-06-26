import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Ocean Health & Travel — UK-Registered Medical Coordinator',
  description: 'Ocean Health & Travel is a UK-registered medical tourism coordinator connecting international patients with JCI-accredited Istanbul clinics. Physician-led, 15 years of experience in health tourism.',
}

const WA_URL = 'https://wa.me/447441904858?text=Hello%2C%20I%27d%20like%20to%20find%20out%20more%20about%20Ocean%20Health%20%26%20Travel'

export default function AboutPage() {
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
        .hero-inner{position:relative;z-index:1;max-width:760px}
        .kicker{font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#6ee7b7;margin-bottom:1rem}
        h1{font-family:'DM Serif Display',serif;font-size:clamp(36px,4.5vw,58px);line-height:1.1;letter-spacing:-.025em;color:#fff;margin-bottom:1rem;font-weight:400}
        h1 em{font-style:italic;color:#6ee7b7}
        .hero-sub{font-size:17px;color:rgba(255,255,255,.72);line-height:1.75;font-weight:300;max-width:580px}
        .sec{padding:5rem 0}
        .sec.bg{background:#fafaf9}
        .sec.border{border-top:1px solid #f0ede8;border-bottom:1px solid #f0ede8}
        h2{font-family:'DM Serif Display',serif;font-size:clamp(26px,3vw,38px);font-weight:400;color:#1a1a1a;letter-spacing:-.02em;line-height:1.2;margin-bottom:1rem}
        h3{font-family:'DM Serif Display',serif;font-size:20px;font-weight:400;color:#1a1a1a;letter-spacing:-.01em;margin-bottom:.75rem}
        .prose p{font-size:15px;color:#444;line-height:1.85;margin-bottom:1.25rem;font-weight:300}
        .prose h3{margin-top:2.5rem;margin-bottom:.75rem}
        .two-col{display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:start}
        .stat-grid{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:2rem}
        .stat-card{background:#fff;border:1px solid #f0ede8;border-radius:16px;padding:1.5rem}
        .stat-n{font-family:'DM Serif Display',serif;font-size:36px;color:#085041;font-weight:400;line-height:1;margin-bottom:5px}
        .stat-l{font-size:13px;color:#777;font-weight:300}
        .value-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1rem;margin-top:2rem}
        .value-card{background:#fff;border:1px solid #f0ede8;border-radius:14px;padding:1.25rem}
        .value-icon{font-size:22px;margin-bottom:.75rem}
        .value-t{font-size:14px;font-weight:600;margin-bottom:.4rem}
        .value-d{font-size:13px;color:#777;line-height:1.65;font-weight:300}
        .credential-list{display:flex;flex-direction:column;gap:.75rem;margin-top:1.5rem}
        .cred-item{display:flex;align-items:flex-start;gap:12px;background:#fff;border:1px solid #f0ede8;border-radius:12px;padding:1rem 1.25rem}
        .cred-dot{width:8px;height:8px;border-radius:50%;background:#1D9E75;flex-shrink:0;margin-top:5px}
        .cred-t{font-size:14px;font-weight:500;color:#1a1a1a;margin-bottom:2px}
        .cred-d{font-size:12px;color:#888;font-weight:300}
        .disclaimer-box{background:#f0faf5;border:1px solid #c6f0de;border-radius:14px;padding:1.5rem;margin-top:2rem}
        .disclaimer-box p{font-size:13px;color:#085041;line-height:1.75;margin:0;font-weight:300}
        .cta-box{background:linear-gradient(135deg,#042e22,#085041);border-radius:20px;padding:3rem;text-align:center}
        .cta-box h2{color:#fff;margin-bottom:.75rem}
        .cta-box p{font-size:15px;color:rgba(255,255,255,.65);font-weight:300;line-height:1.7;margin-bottom:2rem;max-width:480px;margin-left:auto;margin-right:auto}
        .cta-btns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}
        .btn-cta-w{background:#fff;color:#085041;border:none;padding:14px 28px;border-radius:10px;font-size:15px;font-weight:600;display:inline-flex;align-items:center;gap:8px;cursor:pointer;font-family:'Inter',sans-serif;transition:all .2s}
        .btn-cta-w:hover{background:#E1F5EE}
        .btn-cta-o{background:transparent;color:rgba(255,255,255,.75);border:1px solid rgba(255,255,255,.3);padding:14px 28px;border-radius:10px;font-size:15px;display:inline-flex;align-items:center;gap:8px;cursor:pointer;font-family:'Inter',sans-serif;transition:all .2s}
        .btn-cta-o:hover{background:rgba(255,255,255,.1);color:#fff}
        footer{background:#111;padding:3rem 0 2rem}
        .footer-legal{font-size:11.5px;color:#444;line-height:1.8}
        .footer-legal em{color:#333;font-style:normal;font-size:11px}
        @media(max-width:900px){.two-col{grid-template-columns:1fr}.value-grid{grid-template-columns:1fr}}
        @media(max-width:600px){.inner{padding:0 1.25rem}.hero{padding:80px 0 60px}.stat-grid{grid-template-columns:1fr}.cta-btns{flex-direction:column;align-items:center}}
      `}</style>

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
        <div className="inner">
          <div className="hero-inner">
            <div className="kicker">About Ocean Health &amp; Travel</div>
            <h1>Medical coordination<br />you can <em>trust.</em></h1>
            <p className="hero-sub">
              We connect international patients with JCI-accredited hospitals and specialist physicians in Istanbul — combining 15 years of health tourism experience with physician-led, UK-registered coordination.
            </p>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="inner">
          <div className="two-col">
            <div>
              <div className="stat-grid">
                <div className="stat-card">
                  <div className="stat-n">15+</div>
                  <div className="stat-l">Years of health tourism experience</div>
                </div>
                <div className="stat-card">
                  <div className="stat-n">JCI</div>
                  <div className="stat-l">Accredited partner hospitals only</div>
                </div>
                <div className="stat-card">
                  <div className="stat-n">48h</div>
                  <div className="stat-l">Quote turnaround, guaranteed</div>
                </div>
                <div className="stat-card">
                  <div className="stat-n">UK</div>
                  <div className="stat-l">Registered · Companies House no. 16186647</div>
                </div>
              </div>
            </div>
            <div className="prose">
              <h2>Who we are</h2>
              <p>
                Ocean Health &amp; Travel is the UK-registered medical tourism coordination brand of Ocean Travel, operating under TÜRSAB authorisation in Turkey. We connect international patients — primarily from the United Kingdom and Europe — with distinguished hospitals and specialist physicians in Istanbul.
              </p>
              <p>
                We are a coordination service, not a medical provider. We do not employ surgeons or operate clinical facilities. Our role is to make the process of accessing high-quality elective medical care in Istanbul straightforward, transparent, and safe — handling every logistical step so that patients can focus on their treatment and recovery.
              </p>
              <p>
                What distinguishes us is physician-led coordination. Your case is reviewed and managed by a practising medical doctor, not a travel agent. This means clinical documentation is handled accurately, pre-operative questions are answered with medical knowledge, and communication with hospital teams is precise.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec bg border">
        <div className="inner">
          <div className="two-col">
            <div className="prose">
              <h2>Our mission</h2>
              <p>
                Our mission is to make world-class elective healthcare accessible to everyone — not just those who can afford UK private rates or who are willing to wait 12–18 months on an NHS waiting list.
              </p>
              <p>
                Turkey has invested significantly in its healthcare infrastructure. Istanbul&apos;s internationally accredited hospitals offer the same surgical standards, implant systems, and laser platforms as leading UK private clinics — at a fraction of the cost. The difference is not in quality but in cost structure: lower operating costs in Turkey translate directly to lower patient fees, not lower standards.
              </p>
              <p>
                Our role is to bridge the gap — ensuring that patients arrive in Istanbul with the right documentation, meet the right surgeon, and return home with complete clinical records. We handle everything in between.
              </p>

              <h3>What we are not</h3>
              <p>
                We are not a medical provider. We do not provide medical advice, clinical assessments, or surgical opinions. All clinical decisions rest with the treating physician and hospital team at our JCI-accredited partner facilities. We are transparent about this distinction and ensure it is reflected in all patient communications and legal documentation.
              </p>
            </div>
            <div>
              <h2>Our values</h2>
              <div className="value-grid">
                {[
                  {icon:'🎯',t:'Transparency',d:'Fixed, itemised pricing before you commit. No hidden charges on arrival, no upselling at the clinic.'},
                  {icon:'🩺',t:'Medical accuracy',d:'Physician-led coordination means clinical documentation is handled correctly from the start.'},
                  {icon:'🤝',t:'Patient-first',d:'One coordinator, one case. You deal with the same person from first enquiry to discharge.'},
                  {icon:'🛡️',t:'Accountability',d:'UK-registered, ICO compliant, client money protected via Trust Account. TÜRSAB authorised.'},
                ].map(v => (
                  <div key={v.t} className="value-card">
                    <div className="value-icon">{v.icon}</div>
                    <div className="value-t">{v.t}</div>
                    <div className="value-d">{v.d}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="inner">
          <h2>Credentials &amp; registrations</h2>
          <p style={{fontSize:'15px',color:'#666',lineHeight:1.7,fontWeight:300,maxWidth:'600px',marginBottom:'0'}}>
            Ocean Health &amp; Travel operates under full regulatory compliance in both the UK and Turkey.
          </p>
          <div className="credential-list">
            {[
              {t:'UK Companies House registration',d:'Ocean Health & Travel Ltd · Registered in England & Wales · Company no. 16186647'},
              {t:'ICO registration · UK GDPR compliance',d:'Registered with the Information Commissioner\'s Office for lawful processing of patient data under UK GDPR.'},
              {t:'Client money protection via Trust Account',d:'Patient funds are held in a protected Trust Account. Your money is secure before and during your treatment.'},
              {t:'TÜRSAB authorisation',d:'Authorised to conduct International Health Tourism Intermediary Services under Turkish law. TÜRSAB member.'},
              {t:'USHAS — International Health Tourism Authorisation Certificate',d:'Authorised under the Bye-Law on International Health Tourism and Tourist Health, pursuant to Decree Law No. 663.'},
              {t:'JCI-accredited partner hospitals only',d:'We coordinate exclusively with Joint Commission International accredited hospitals in Istanbul, including Memorial Hospitals Group.'},
            ].map(c => (
              <div key={c.t} className="cred-item">
                <div className="cred-dot"></div>
                <div>
                  <div className="cred-t">{c.t}</div>
                  <div className="cred-d">{c.d}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="disclaimer-box">
            <p>
              <strong>Medical disclaimer:</strong> Ocean Health &amp; Travel is a medical tourism coordination service and does not replace independent medical advice. We do not provide clinical assessments, diagnoses, or treatment recommendations. All clinical decisions rest with the treating physician at our partner hospital. This service covers elective procedures only and is not suitable for emergency medical situations. Post-discharge medical responsibility lies with your UK clinician.
            </p>
          </div>
        </div>
      </section>

      <section className="sec bg border">
        <div className="inner">
          <h2>Our offices</h2>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1.5rem',marginTop:'1.5rem'}}>
            <div style={{background:'#fff',border:'1px solid #f0ede8',borderRadius:'16px',padding:'1.5rem'}}>
              <div style={{fontSize:'12px',fontWeight:600,letterSpacing:'.08em',textTransform:'uppercase',color:'#1D9E75',marginBottom:'.75rem'}}>UK office</div>
              <div style={{fontSize:'15px',fontWeight:500,marginBottom:'.5rem'}}>London</div>
              <div style={{fontSize:'14px',color:'#666',lineHeight:1.7,fontWeight:300}}>
                17 Green Lanes<br />
                London<br />
                N16 9BS<br />
                United Kingdom
              </div>
              <a href="tel:+447441904858" style={{display:'inline-flex',alignItems:'center',gap:'6px',fontSize:'13px',color:'#085041',fontWeight:500,marginTop:'1rem'}}>
                +44 7441 904858
              </a>
            </div>
            <div style={{background:'#fff',border:'1px solid #f0ede8',borderRadius:'16px',padding:'1.5rem'}}>
              <div style={{fontSize:'12px',fontWeight:600,letterSpacing:'.08em',textTransform:'uppercase',color:'#1D9E75',marginBottom:'.75rem'}}>Turkey office</div>
              <div style={{fontSize:'15px',fontWeight:500,marginBottom:'.5rem'}}>Fethiye, Muğla</div>
              <div style={{fontSize:'14px',color:'#666',lineHeight:1.7,fontWeight:300}}>
                Karagözler Mah.<br />
                Fevzi Çakmak Cad. No:11/A<br />
                Fethiye, Muğla<br />
                Turkey
              </div>
              <a href="mailto:info@oceanhealthtravel.com" style={{display:'inline-flex',alignItems:'center',gap:'6px',fontSize:'13px',color:'#085041',fontWeight:500,marginTop:'1rem'}}>
                info@oceanhealthtravel.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="inner">
          <div className="cta-box">
            <h2>Ready to find out more?</h2>
            <p>Contact us via WhatsApp or email. We reply within the hour during working hours.</p>
            <div className="cta-btns">
              <a href={WA_URL} target="_blank" className="btn-cta-w">💬 WhatsApp us</a>
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
            <em>Ocean Health &amp; Travel does not provide medical advice. All clinical decisions rest with your treating clinic. Not suitable for emergencies.</em>
          </div>
        </div>
      </footer>
    </>
  )
}
