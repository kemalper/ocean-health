import type { Metadata } from 'next'
import { Suspense } from 'react'
import { headers } from 'next/headers'
import Nav from '@/app/components/Nav'
import DbsForm from './DbsForm'

export const metadata: Metadata = {
  title: 'DBS Pre-Assessment | Free | Ocean Health & Travel',
  description: 'Free pre-assessment for deep brain stimulation (DBS) in Istanbul. Complete the form and have your case reviewed by the neurosurgical team. Reply typically within 48 hours.',
  robots: { index: true, follow: true },
}

export default async function DbsAssessmentPage() {
  const host = (await headers()).get('host') || ''
  const isSurgiCheck = host.includes('surgicheck.net')
  const brand: 'oht' | 'surgicheck' = isSurgiCheck ? 'surgicheck' : 'oht'
  return (
    <>
      <style>{`
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth;-webkit-font-smoothing:antialiased}
        body{font-family:'Inter',sans-serif;color:#1a1a1a;background:#fafaf9}
        a{text-decoration:none;color:inherit}
        .inner{max-width:1160px;margin:0 auto;padding:0 2.5rem}

        .hero{background:linear-gradient(135deg,#042e22 0%,#085041 50%,#0d6b55 100%);padding:70px 0 110px;position:relative;overflow:hidden}
        .hero::before{content:'';position:absolute;width:400px;height:400px;border-radius:50%;background:radial-gradient(circle,rgba(29,158,117,.2) 0%,transparent 70%);top:-100px;right:-100px;pointer-events:none}
        .hero-inner{position:relative;z-index:1;max-width:680px}
        .kicker{font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#6ee7b7;margin-bottom:1rem}
        h1{font-family:'DM Serif Display',serif;font-size:clamp(30px,4vw,46px);line-height:1.1;letter-spacing:-.025em;color:#fff;margin-bottom:1rem;font-weight:400}
        .hero-sub{font-size:15px;color:rgba(255,255,255,.72);line-height:1.75;font-weight:300;max-width:600px}
        .free-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(110,231,183,.14);border:1px solid rgba(110,231,183,.35);border-radius:100px;padding:6px 14px;font-size:12px;font-weight:600;color:#6ee7b7;margin-bottom:1.25rem;letter-spacing:.02em}

        .form-wrap{max-width:720px;margin:-60px auto 0;padding:0 1.25rem 5rem;position:relative;z-index:2}
        .card{background:#fff;border:1px solid #f0ede8;border-radius:16px;padding:2rem;box-shadow:0 8px 32px rgba(8,80,65,.08)}
        .card h2{font-family:'DM Serif Display',serif;font-size:22px;font-weight:400;color:#1a1a1a;letter-spacing:-.02em;margin-bottom:1.5rem}

        .progress{display:flex;gap:0;margin-bottom:1.5rem;position:relative;padding-bottom:8px}
        .p-step{flex:1;display:flex;flex-direction:column;align-items:center;gap:6px;position:relative;z-index:1}
        .p-dot{width:32px;height:32px;border-radius:50%;background:#fff;border:2px solid #d8d5cf;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:600;color:#999;transition:all .2s}
        .p-step.cur .p-dot{border-color:#085041;color:#085041;box-shadow:0 0 0 4px rgba(8,80,65,.12)}
        .p-step.done .p-dot{background:#085041;border-color:#085041;color:#fff}
        .p-label{font-size:11px;font-weight:500;color:rgba(255,255,255,.85)}
        .p-bar{position:absolute;top:16px;left:10%;right:10%;height:2px;background:rgba(255,255,255,.25);z-index:0}
        .p-fill{height:100%;background:#6ee7b7;transition:width .3s}

        .grid2{display:grid;grid-template-columns:1fr 1fr;gap:1rem 1.25rem}
        .field{margin-bottom:1.15rem}
        .field label{display:block;font-size:13px;font-weight:600;color:#333;margin-bottom:6px}
        .req{color:#c0392b;margin-left:3px}
        .field input,.field select,.field textarea{width:100%;padding:11px 13px;border:1px solid #d8d5cf;border-radius:10px;font-size:15px;font-family:'Inter',sans-serif;color:#1a1a1a;background:#fff;transition:border-color .15s,box-shadow .15s}
        .field input:focus,.field select:focus,.field textarea:focus{outline:none;border-color:#085041;box-shadow:0 0 0 3px rgba(8,80,65,.12)}
        .field input.field-err,.field select.field-err{border-color:#c0392b}
        .field.field-err .chip-row{outline:1px solid #c0392b;outline-offset:4px;border-radius:8px}
        .field-msg{font-size:12px;color:#c0392b;margin-top:5px}
        .field textarea{resize:vertical;min-height:76px}

        .chip-row{display:flex;flex-wrap:wrap;gap:8px}
        .chip{padding:9px 15px;border:1px solid #d8d5cf;border-radius:100px;background:#fff;font-size:13.5px;font-family:'Inter',sans-serif;color:#444;cursor:pointer;transition:all .15s}
        .chip:hover{border-color:#085041;color:#085041}
        .chip.on{background:#085041;border-color:#085041;color:#fff}
        .chip:focus-visible{outline:2px solid #085041;outline-offset:2px}

        .dropzone{border:2px dashed #d8d5cf;border-radius:12px;padding:1.75rem 1.25rem;text-align:center;font-size:14px;color:#444;cursor:pointer;transition:all .15s;background:#fafaf9}
        .dropzone:hover,.dropzone.over{border-color:#085041;background:#e8faf3}
        .dropzone:focus-visible{outline:2px solid #085041;outline-offset:2px}
        .dropzone svg{margin-bottom:8px}
        .drop-hint{font-size:12px;color:#888;margin-top:5px}
        .file-list{list-style:none;margin-top:10px;display:flex;flex-direction:column;gap:6px}
        .file-list li{display:flex;align-items:center;gap:10px;padding:8px 12px;background:#fafaf9;border:1px solid #f0ede8;border-radius:8px;font-size:13px}
        .file-name{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
        .file-size{color:#888;font-size:12px;flex-shrink:0}
        .file-list button{background:none;border:none;font-size:18px;color:#c0392b;cursor:pointer;line-height:1;padding:2px 6px}

        .consent{margin:1.25rem 0 .5rem;padding:1rem 1.15rem;background:#fafaf9;border:1px solid #f0ede8;border-radius:12px}
        .consent.field-err{border-color:#c0392b}
        .consent-label{display:flex;gap:11px;align-items:flex-start;font-size:13px;color:#444;line-height:1.65;cursor:pointer}
        .consent-label input{width:17px;height:17px;margin-top:2px;flex-shrink:0;accent-color:#085041}
        .consent-label a{color:#085041;font-weight:600;text-decoration:underline}

        .step-msg,.submit-err{margin-top:1rem;padding:10px 14px;background:#fdf0ee;border:1px solid #f2c9c2;border-radius:10px;font-size:13px;color:#c0392b}
        .wiz-nav{display:flex;justify-content:space-between;align-items:center;margin-top:1.75rem;gap:1rem}
        .btn-back{background:none;border:1px solid #d8d5cf;padding:13px 22px;border-radius:10px;font-size:14px;font-weight:500;font-family:'Inter',sans-serif;color:#444;cursor:pointer;transition:all .15s}
        .btn-back:hover{border-color:#085041;color:#085041}
        .btn-submit{background:#085041;color:#fff;border:none;padding:14px 26px;border-radius:10px;font-size:15px;font-weight:600;font-family:'Inter',sans-serif;cursor:pointer;display:inline-flex;align-items:center;gap:9px;transition:transform .15s,box-shadow .15s;box-shadow:0 4px 14px rgba(8,80,65,.25)}
        .btn-submit:hover{transform:translateY(-1px);box-shadow:0 6px 20px rgba(8,80,65,.3)}
        .btn-submit:disabled{opacity:.6;cursor:not-allowed;transform:none}
        .btn-submit:focus-visible,.btn-back:focus-visible{outline:2px solid #085041;outline-offset:2px}
        .btn-submit.wa{background:#25D366;box-shadow:0 4px 14px rgba(37,211,102,.3);margin-top:1.5rem}

        .success{text-align:center;padding:3rem 2rem}
        .success-icon{width:56px;height:56px;border-radius:50%;background:#E1F5EE;display:flex;align-items:center;justify-content:center;margin:0 auto 1.25rem}
        .success h2{margin-bottom:.75rem}
        .success-body{font-size:14.5px;color:#444;line-height:1.75;max-width:440px;margin:0 auto 1.75rem;font-weight:300}
        .ref-label{font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#888;margin-bottom:6px}
        .ref-code{font-family:'DM Serif Display',serif;font-size:36px;letter-spacing:.12em;color:#085041}

        .lang-toggle{position:absolute;top:-46px;right:1.25rem;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.35);color:#fff;padding:6px 14px;border-radius:100px;font-size:12px;font-weight:600;font-family:'Inter',sans-serif;cursor:pointer;letter-spacing:.05em;transition:background .15s;z-index:3}
        .lang-toggle:hover{background:rgba(255,255,255,.25)}

        .sc-header{background:#fff;border-bottom:1px solid #eee;padding:0}
        .sc-header-inner{max-width:1160px;margin:0 auto;padding:0 2.5rem;height:66px;display:flex;align-items:center}

        footer{background:#111;padding:3rem 0 2rem}
        .footer-legal{font-size:11.5px;color:#444;line-height:1.8}
        .footer-legal em{color:#333;font-style:normal;font-size:11px}

        @media(max-width:640px){
          .inner{padding:0 1.25rem}
          .hero{padding:56px 0 100px}
          .grid2{grid-template-columns:1fr}
          .card{padding:1.4rem 1.15rem}
          .p-label{display:none}
          .form-wrap{padding:0 .85rem 4rem}
          .sc-header-inner{padding:0 1.25rem}
        }
      `}</style>

      {isSurgiCheck ? (
        <header className="sc-header">
          <div className="sc-header-inner">
            <img src="/surgicheck-logo.png" alt="SurgiCheck" style={{height:'32px',width:'auto',display:'block'}} />
          </div>
        </header>
      ) : (
        <Nav />
      )}

      <section className="hero">
        <div className="inner hero-inner">
          <div className="free-badge">Free · No coordination fee</div>
          <div className="kicker">Neurosurgery · Istanbul</div>
          <h1>DBS Pre-Assessment</h1>
          <p className="hero-sub">
            Complete this form to have your case reviewed by the neurosurgical team at a JCI-accredited Istanbul hospital.
            Your information is coordinated and forwarded for specialist review — all clinical decisions rest with the treating physicians.
          </p>
        </div>
      </section>

      <Suspense fallback={<div className="form-wrap"><div className="card" style={{minHeight:'320px'}} /></div>}>
        <DbsForm brand={brand} />
      </Suspense>

      {isSurgiCheck ? (
        <footer>
          <div className="inner">
            <div className="footer-legal">
              © {new Date().getFullYear()} SurgiCheck ·{' '}
              <a href="https://www.surgicheck.net/privacy-en.html" target="_blank" rel="noopener" style={{color:'#555'}}>Privacy Notice</a> ·{' '}
              surgicheck.net<br />
              <em>SurgiCheck is a Clinical Decision Support System. It does not diagnose, prescribe, or make surgical decisions. This form is not a medical consultation. All clinical responsibility remains with the treating clinician. Not suitable for emergencies.</em>
            </div>
          </div>
        </footer>
      ) : (
        <footer>
          <div className="inner">
            <div className="footer-legal">
              © {new Date().getFullYear()} Ocean Health &amp; Travel Ltd · Registered in England &amp; Wales · Company no. 16186647<br />
              London: 17 Green Lanes, N16 9BS · Fethiye: Karagözler Mah., Fevzi Çakmak Cad. No:11/A, Muğla ·{' '}
              <a href="mailto:info@oceanhealthtravel.com" style={{color:'#555'}}>info@oceanhealthtravel.com</a> ·{' '}
              <a href="tel:+447441904858" style={{color:'#555'}}>+44 7441 904858</a><br />
              Flights not included · Client payments held in a designated client account · Coordinator, not a medical provider · Elective procedures only<br />
              <em>Ocean Health &amp; Travel does not provide medical advice. This form is not a medical consultation. All clinical decisions rest with the treating neurosurgical team. Not suitable for emergencies.</em>
            </div>
          </div>
        </footer>
      )}
    </>
  )
}
