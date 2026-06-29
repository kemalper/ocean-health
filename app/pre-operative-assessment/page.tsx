import type { Metadata } from 'next'
import Nav from '@/app/components/Nav'

export const metadata: Metadata = {
  title: 'Pre-Operative Risk Assessment | Ocean Health & Travel',
  description: 'Complete your structured pre-operative risk assessment before plastic surgery in Istanbul. Powered by SurgiCheck — Montgomery-aligned risk screening and informed consent.',
}

const WA_URL = 'https://wa.me/447441904858?text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20pre-operative%20assessment'

export default function PreOpAssessmentPage() {
  return (
    <>
      <style>{`
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth;-webkit-font-smoothing:antialiased}
        body{font-family:'Inter',sans-serif;color:#1a1a1a;background:#fff}
        a{text-decoration:none;color:inherit}
        .inner{max-width:1160px;margin:0 auto;padding:0 2.5rem}
        .hero{background:linear-gradient(135deg,#042e22 0%,#085041 50%,#0d6b55 100%);padding:80px 0 60px;position:relative;overflow:hidden}
        .hero::before{content:'';position:absolute;width:400px;height:400px;border-radius:50%;background:radial-gradient(circle,rgba(29,158,117,.2) 0%,transparent 70%);top:-100px;right:-100px;pointer-events:none}
        .hero-inner{position:relative;z-index:1;max-width:700px}
        .kicker{font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#6ee7b7;margin-bottom:1rem}
        h1{font-family:'DM Serif Display',serif;font-size:clamp(30px,4vw,48px);line-height:1.1;letter-spacing:-.025em;color:#fff;margin-bottom:1rem;font-weight:400}
        h1 em{font-style:italic;color:#6ee7b7}
        .hero-sub{font-size:16px;color:rgba(255,255,255,.72);line-height:1.75;font-weight:300;max-width:560px;margin-bottom:2rem}
        .trust-row{display:flex;gap:1.5rem;flex-wrap:wrap}
        .trust-item{display:flex;align-items:center;gap:7px;font-size:12.5px;color:rgba(255,255,255,.75)}
        .trust-dot{width:7px;height:7px;border-radius:50%;background:#6ee7b7;flex-shrink:0}
        .sec{padding:5rem 0}
        .sec.bg{background:#fafaf9}
        h2{font-family:'DM Serif Display',serif;font-size:clamp(24px,3vw,36px);font-weight:400;color:#1a1a1a;letter-spacing:-.02em;line-height:1.2;margin-bottom:1rem}
        h3{font-family:'DM Serif Display',serif;font-size:20px;font-weight:400;color:#1a1a1a;margin-bottom:.75rem}
        .two-col{display:grid;grid-template-columns:1fr 1fr;gap:3rem;align-items:start}
        .prose p{font-size:15px;color:#444;line-height:1.85;margin-bottom:1.25rem;font-weight:300}
        .prose h3{margin-top:2rem;margin-bottom:.75rem}
        .feature-list{display:flex;flex-direction:column;gap:.75rem;margin-top:1.5rem}
        .feature-item{display:flex;align-items:flex-start;gap:12px;padding:1rem 1.25rem;background:#fff;border:1px solid #f0ede8;border-radius:12px}
        .feature-icon{width:36px;height:36px;border-radius:9px;background:#E1F5EE;display:flex;align-items:center;justify-content:center;flex-shrink:0;color:#085041}
        .feature-t{font-size:14px;font-weight:600;color:#1a1a1a;margin-bottom:3px}
        .feature-d{font-size:13px;color:#777;line-height:1.6;font-weight:300}
        .cta-card{background:linear-gradient(135deg,#042e22,#085041);border-radius:20px;padding:2.5rem;text-align:center}
        .cta-card h2{color:#fff;margin-bottom:.75rem}
        .cta-card p{font-size:15px;color:rgba(255,255,255,.65);font-weight:300;line-height:1.7;margin-bottom:2rem;max-width:480px;margin-left:auto;margin-right:auto}
        .btn-start{background:#fff;color:#085041;border:none;padding:15px 32px;border-radius:10px;font-size:15px;font-weight:600;display:inline-flex;align-items:center;gap:9px;cursor:pointer;font-family:'Inter',sans-serif;transition:all .2s;text-decoration:none}
        .btn-start:hover{background:#E1F5EE;transform:translateY(-2px)}
        .surgicheck-box{background:#fff;border:1px solid #f0ede8;border-radius:16px;padding:2rem;margin-top:2rem}
        .surgicheck-logo{display:flex;align-items:center;gap:10px;margin-bottom:1.25rem}
        .surgicheck-name{font-family:'DM Serif Display',serif;font-size:20px;color:#0d1b2a;font-weight:400}
        .surgicheck-tag{font-size:11px;font-weight:600;letter-spacing:.07em;text-transform:uppercase;color:#085041;background:#E1F5EE;border-radius:4px;padding:3px 8px}
        .disclaimer{background:#fffbeb;border:1px solid #fde68a;border-radius:12px;padding:1.25rem 1.5rem;font-size:13px;color:#92400e;line-height:1.75;margin-top:1.5rem}
        footer{background:#111;padding:3rem 0 2rem}
        .footer-legal{font-size:11.5px;color:#444;line-height:1.8}
        .footer-legal em{color:#333;font-style:normal;font-size:11px}
        @media(max-width:900px){.two-col{grid-template-columns:1fr}}
        @media(max-width:600px){.inner{padding:0 1.25rem}.hero{padding:60px 0 50px}}
      `}</style>

      <Nav />

      <section className="hero">
        <div className="inner">
          <div className="hero-inner">
            <div className="kicker">Pre-operative assessment</div>
            <h1>Know your risk<br /><em>before you travel.</em></h1>
            <p className="hero-sub">
              Ocean Health &amp; Travel has partnered with SurgiCheck to offer structured pre-operative risk screening for patients planning plastic surgery in Istanbul. Complete your assessment before your consultation — at no charge.
            </p>
            <div className="trust-row">
              {['Montgomery-aligned','GDPR compliant','No login required','Results in under 3 minutes'].map(t => (
                <div key={t} className="trust-item"><div className="trust-dot"></div>{t}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="inner">
          <div className="two-col">
            <div className="prose">
              <h2>Why pre-operative risk screening matters</h2>
              <p>
                UK patients travelling abroad for plastic surgery are subject to the same consumer protection and complaint pathways as domestic patients. When things go wrong, the standard applied is often the UK one — including the <strong>Montgomery v Lanarkshire (2015)</strong> duty to disclose material risks based on the individual patient's circumstances.
              </p>
              <p>
                A structured pre-operative assessment identifies risk signals before you travel — giving you and your surgeon the information needed to make a fully informed decision, and ensuring that your consent process is documented and defensible.
              </p>

              <h3>What the assessment covers</h3>
              <div className="feature-list">
                {[
                  {
                    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="2"/><path d="M9 12h6M9 16h4"/></svg>,
                    t: 'Medical history & medications',
                    d: 'Current medications, supplements, allergies, and relevant medical conditions — including GLP-1 agonists, anticoagulants, and hormonal therapy.'
                  },
                  {
                    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
                    t: 'Risk flag generation',
                    d: 'Standardised rule engine identifies HARD and SOFT risk signals — each grounded in published clinical guidelines (ASA, ISAPS, BAPRAS, RCOG).'
                  },
                  {
                    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/></svg>,
                    t: 'Montgomery-aligned consent preparation',
                    d: 'Your risk profile is used to generate procedure-specific informed consent documentation — personalised to your individual circumstances.'
                  },
                  {
                    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>,
                    t: 'Results in under 3 minutes',
                    d: 'The structured patient form takes under 3 minutes to complete. Your results are reviewed by our physician coordinator before your consultation.'
                  },
                ].map(f => (
                  <div key={f.t} className="feature-item">
                    <div className="feature-icon">{f.icon}</div>
                    <div>
                      <div className="feature-t">{f.t}</div>
                      <div className="feature-d">{f.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="surgicheck-box">
                <div className="surgicheck-logo">
                  <div className="surgicheck-name">SurgiCheck</div>
                  <div className="surgicheck-tag">Powered by</div>
                </div>
                <p style={{fontSize:'14px',color:'#666',lineHeight:1.75,fontWeight:300,marginBottom:'1.25rem'}}>
                  SurgiCheck is a perioperative risk governance platform developed by a physician and university professor of physiology. It provides structured pre-operative screening, Montgomery-aligned informed consent, and post-operative follow-up in a single auditable platform.
                </p>
                <p style={{fontSize:'14px',color:'#666',lineHeight:1.75,fontWeight:300,marginBottom:'1.5rem'}}>
                  The assessment is free for Ocean Health &amp; Travel patients. Your results are shared with our physician coordinator and, with your consent, forwarded to your treating surgeon in Istanbul.
                </p>
                <a href="https://surgicheck.net/patient.html?lang=en" target="_blank" rel="noopener noreferrer" style={{display:'inline-flex',alignItems:'center',gap:'8px',background:'#085041',color:'#fff',padding:'13px 24px',borderRadius:'10px',fontSize:'14px',fontWeight:600,fontFamily:'Inter,sans-serif',transition:'all .2s'}}>
                  Start assessment &rarr;
                </a>
                <div className="disclaimer">
                  <strong>Important:</strong> SurgiCheck is a Clinical Decision Support System — a guidance tool only. It does not diagnose, prescribe, or make surgical decisions. All clinical responsibility remains with your treating surgeon. Ocean Health &amp; Travel does not provide medical advice.
                </div>
              </div>

              <div style={{background:'#fafaf9',border:'1px solid #f0ede8',borderRadius:'16px',padding:'1.75rem',marginTop:'1rem'}}>
                <div style={{fontSize:'13px',fontWeight:600,textTransform:'uppercase',letterSpacing:'.07em',color:'#bbb',marginBottom:'1rem'}}>Have questions first?</div>
                <p style={{fontSize:'14px',color:'#666',lineHeight:1.7,fontWeight:300,marginBottom:'1.25rem'}}>
                  Our physician coordinator is happy to discuss your medical history before you complete the assessment.
                </p>
                <a href={WA_URL} target="_blank" rel="noopener noreferrer" style={{display:'inline-flex',alignItems:'center',gap:'8px',background:'transparent',color:'#085041',border:'1px solid #085041',padding:'11px 20px',borderRadius:'9px',fontSize:'13px',fontWeight:500,fontFamily:'Inter,sans-serif'}}>
                  💬 Ask via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec bg">
        <div className="inner">
          <div className="cta-card">
            <h2>Ready to start your assessment?</h2>
            <p>Free for all Ocean Health &amp; Travel patients. Takes under 3 minutes. Results reviewed by our physician coordinator before your consultation.</p>
            <a href="https://surgicheck.net/patient.html?lang=en" target="_blank" rel="noopener noreferrer" className="btn-start">
              Start pre-operative assessment &rarr;
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
            <em>Ocean Health &amp; Travel does not provide medical advice. All clinical decisions rest with your treating surgeon. SurgiCheck is a Clinical Decision Support System — not a medical device.</em>
          </div>
        </div>
      </footer>
    </>
  )
}
