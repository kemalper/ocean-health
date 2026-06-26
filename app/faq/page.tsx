import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ | Ocean Health & Travel — Medical Coordination Istanbul',
  description: 'Frequently asked questions about medical treatment coordination in Istanbul. Costs, timelines, safety, what is included, and how to get started.',
}

const WA_URL = 'https://wa.me/447441904858?text=Hello%2C%20I%27d%20like%20to%20ask%20a%20question%20about%20treatment%20coordination'

const faqSections = [
  {
    title: 'Getting started',
    faqs: [
      {
        q: 'How do I get a quote?',
        a: 'Contact us via WhatsApp (+44 7441 904858) or email (info@oceanhealthtravel.com) with your treatment, preferred dates, and any relevant medical information. We provide a full itemised quote within 48 hours — no obligation.',
      },
      {
        q: 'How quickly can I have surgery?',
        a: 'Most patients can have surgery within 2–3 weeks of first contact. This covers quote, booking, and travel arrangement. Some complex procedures (e.g. neurosurgery) may require additional pre-operative assessment time.',
      },
      {
        q: 'Do I need a referral from my GP?',
        a: 'For most cosmetic, dental, and ophthalmological procedures, no GP referral is required. For complex procedures such as neurosurgery, orthopaedics, or deep brain stimulation, a specialist referral letter is required before coordination can begin.',
      },
      {
        q: 'What information should I include in my first message?',
        a: 'The more detail you provide, the faster we can quote. Ideally: which treatment(s) you are considering, preferred dates, approximate budget, and any relevant medical records or X-rays. Photos of the area of concern are helpful for cosmetic procedures.',
      },
    ],
  },
  {
    title: 'Costs & pricing',
    faqs: [
      {
        q: 'How much cheaper is treatment in Istanbul than the UK?',
        a: 'Savings vary by procedure. Dental implants are typically 80% lower than UK private rates. Rhinoplasty 55–70% lower. Knee replacement 70–75% lower. LASIK 60–75% lower. Deep brain stimulation 40–60% lower. All prices are indicative — exact quotes depend on your specific case.',
      },
      {
        q: 'What is included in the price?',
        a: 'Your itemised quote will specify exactly what is included. Typically: surgeon fee, anaesthesia, hospital stay, and standard post-operative care. Our coordination fee covers airport transfer, hotel, interpreter, and clinic liaison. Flights are never included.',
      },
      {
        q: 'Are there any hidden charges?',
        a: 'No. Our quotes are itemised and fixed before you travel. We do not add charges on arrival, and we do not receive referral commissions from clinics — our interests are aligned with yours.',
      },
      {
        q: 'How do I pay?',
        a: 'Payment terms are specified in your coordination agreement. Client money is protected via Trust Account before and during treatment. Full details are provided in our Medical Services Brokerage Agreement.',
      },
      {
        q: 'Are flights included?',
        a: 'No. Flights are not included in any package. We recommend booking flights once your surgery date is confirmed. We can advise on typical flight times from UK airports to Istanbul.',
      },
    ],
  },
  {
    title: 'Safety & accreditation',
    faqs: [
      {
        q: 'Is medical treatment in Istanbul safe?',
        a: 'Ocean Health & Travel coordinates exclusively with JCI (Joint Commission International) accredited hospitals in Istanbul. JCI is the international equivalent of CQC accreditation in the UK. All partner facilities meet international standards for surgical safety, infection control, and patient care.',
      },
      {
        q: 'Which hospitals do you work with?',
        a: 'We work with JCI-accredited hospitals in Istanbul, including Memorial Hospitals Group. We do not receive referral fees from hospitals — our partner clinics are selected based on clinical standards, not commercial arrangements.',
      },
      {
        q: 'Are the surgeons qualified?',
        a: 'All surgeons at our partner hospitals are board-certified in their specialty and trained at internationally recognised institutions. Surgeon credentials are provided in your treatment proposal. Ocean Health & Travel does not employ surgeons — all clinical decisions rest with the treating physician.',
      },
      {
        q: 'What if something goes wrong?',
        a: 'Your treating hospital has standard clinical governance and complaint procedures. Ocean Health & Travel has a formal Complaints Policy — available on our website — and will assist in coordinating communication with the hospital in the event of a concern. We are registered with the ICO and operate under UK consumer protection law.',
      },
    ],
  },
  {
    title: 'What we provide',
    faqs: [
      {
        q: 'What coordination services are included?',
        a: 'Every coordination package includes: airport transfer (arrival and departure), hotel accommodation near your clinic, professional medical interpreter at all appointments, and full clinic liaison throughout your stay. Post-discharge documentation is forwarded to your UK GP on request.',
      },
      {
        q: 'Do you provide an interpreter?',
        a: 'Yes. A professional medical interpreter is present at every clinical appointment — consultation, pre-operative assessment, surgery day, and post-operative check. You will never be left to communicate alone with clinical staff.',
      },
      {
        q: 'What happens after I return to the UK?',
        a: 'Post-discharge documentation — including operative notes, discharge summary, and any laboratory results — is provided in English and forwarded to your UK GP on request. Post-discharge medical management is the responsibility of your UK clinician. Ocean Health & Travel does not provide post-operative medical care.',
      },
      {
        q: 'Is Ocean Health & Travel a medical provider?',
        a: 'No. We are a medical tourism coordination service. We do not employ surgeons, operate clinical facilities, or provide medical advice. All clinical decisions rest with the treating physician at our JCI-accredited partner hospitals.',
      },
    ],
  },
  {
    title: 'Travel & logistics',
    faqs: [
      {
        q: 'How long do I need to stay in Istanbul?',
        a: 'Stay length varies by procedure. LASIK: 3–5 days. Hair transplant: 3–5 days. Dental treatment: 7–10 days. Rhinoplasty: 7–10 days. Knee replacement: 10–14 days. Deep brain stimulation: 2–3 weeks. Your coordinator will advise on the appropriate stay for your specific procedure.',
      },
      {
        q: 'Do I need a visa to travel to Turkey?',
        a: 'UK passport holders can obtain an e-Visa for Turkey online before travel (currently £20–£30). Most EU passport holders can enter Turkey visa-free or with a simple e-Visa. We recommend checking current requirements at the Turkish e-Visa website (evisa.gov.tr) before booking.',
      },
      {
        q: 'Can I bring a companion?',
        a: 'Yes, and we recommend it for most surgical procedures. We can arrange hotel accommodation for companions and include them in transfers. Companion costs are quoted separately.',
      },
      {
        q: 'When can I fly home after surgery?',
        a: 'Flying timelines depend on the procedure. LASIK: 2–3 days post-op. Dental: immediately after treatment in most cases. Rhinoplasty: 7–10 days. Knee replacement: 10–14 days (deep vein thrombosis risk must be managed). Your surgical team will advise on the appropriate time to fly based on your recovery.',
      },
    ],
  },
  {
    title: 'About Ocean Health & Travel',
    faqs: [
      {
        q: 'Is Ocean Health & Travel a UK registered company?',
        a: 'Yes. Ocean Health & Travel Ltd is registered in England & Wales (Companies House no. 16186647). We are registered with the ICO for UK GDPR compliance, and client money is protected via Trust Account.',
      },
      {
        q: 'How long have you been operating?',
        a: 'Ocean Health & Travel is the UK-registered brand of Ocean Travel, which has 15 years of experience in international health tourism coordination in Turkey.',
      },
      {
        q: 'Are you regulated?',
        a: 'We are registered with Companies House (no. 16186647), the ICO (UK GDPR), and are TÜRSAB authorised in Turkey. We hold a USHAS International Health Tourism Authorisation Certificate issued by the Turkish Ministry of Health. We operate under UK consumer protection law.',
      },
    ],
  },
]

export default function FAQPage() {
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
        .hero{background:linear-gradient(135deg,#042e22 0%,#085041 50%,#0d6b55 100%);padding:80px 0 60px;position:relative;overflow:hidden}
        .hero::before{content:'';position:absolute;width:400px;height:400px;border-radius:50%;background:radial-gradient(circle,rgba(29,158,117,.2) 0%,transparent 70%);top:-100px;right:-100px;pointer-events:none}
        .hero-inner{position:relative;z-index:1;max-width:640px}
        .kicker{font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#6ee7b7;margin-bottom:1rem}
        h1{font-family:'DM Serif Display',serif;font-size:clamp(32px,4vw,50px);line-height:1.1;letter-spacing:-.025em;color:#fff;margin-bottom:1rem;font-weight:400}
        h1 em{font-style:italic;color:#6ee7b7}
        .hero-sub{font-size:16px;color:rgba(255,255,255,.72);line-height:1.75;font-weight:300}
        .sec{padding:5rem 0}
        .faq-layout{display:grid;grid-template-columns:240px 1fr;gap:4rem;align-items:start}
        .faq-nav{position:sticky;top:80px}
        .faq-nav-title{font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#bbb;margin-bottom:1rem}
        .faq-nav-link{display:block;font-size:13px;color:#666;padding:.5rem 0;border-left:2px solid #f0ede8;padding-left:.75rem;margin-bottom:.25rem;transition:all .2s;cursor:pointer}
        .faq-nav-link:hover{color:#085041;border-left-color:#085041}
        .faq-section{margin-bottom:3.5rem}
        .faq-section:last-child{margin-bottom:0}
        .section-title{font-family:'DM Serif Display',serif;font-size:22px;font-weight:400;color:#1a1a1a;letter-spacing:-.01em;margin-bottom:1.25rem;padding-bottom:.75rem;border-bottom:1px solid #f0ede8}
        .faq-list{display:flex;flex-direction:column;border:1px solid #f0ede8;border-radius:16px;overflow:hidden}
        .faq-item{border-bottom:1px solid #f0ede8}
        .faq-item:last-child{border-bottom:none}
        .faq-q{width:100%;text-align:left;padding:1.1rem 1.5rem;background:#fff;border:none;cursor:pointer;font-family:'Inter',sans-serif;font-size:14px;font-weight:500;color:#1a1a1a;display:flex;justify-content:space-between;align-items:center;gap:1rem;transition:background .2s;line-height:1.5}
        .faq-q:hover{background:#fafaf9}
        .faq-a{padding:0 1.5rem 1.1rem;font-size:13.5px;color:#666;line-height:1.75;font-weight:300}
        .faq-plus{font-size:18px;color:#1D9E75;flex-shrink:0}
        .cta-strip{background:#f0faf5;border:1px solid #c6f0de;border-radius:16px;padding:2rem;text-align:center;margin-top:3rem}
        .cta-strip h3{font-family:'DM Serif Display',serif;font-size:22px;font-weight:400;color:#085041;margin-bottom:.5rem}
        .cta-strip p{font-size:14px;color:#555;font-weight:300;line-height:1.65;margin-bottom:1.25rem}
        .cta-btns{display:flex;gap:10px;justify-content:center;flex-wrap:wrap}
        .btn-wa{background:#085041;color:#fff;border:none;padding:12px 24px;border-radius:9px;font-size:14px;font-weight:500;display:inline-flex;align-items:center;gap:8px;cursor:pointer;font-family:'Inter',sans-serif;transition:all .2s}
        .btn-wa:hover{background:#042e22}
        .btn-email{background:transparent;color:#085041;border:1px solid #085041;padding:12px 24px;border-radius:9px;font-size:14px;display:inline-flex;align-items:center;gap:8px;cursor:pointer;font-family:'Inter',sans-serif;transition:all .2s}
        .btn-email:hover{background:#085041;color:#fff}
        footer{background:#111;padding:3rem 0 2rem}
        .footer-legal{font-size:11.5px;color:#444;line-height:1.8}
        .footer-legal em{color:#333;font-style:normal;font-size:11px}
        @media(max-width:900px){.faq-layout{grid-template-columns:1fr}.faq-nav{display:none}}
        @media(max-width:600px){.inner{padding:0 1.25rem}.hero{padding:60px 0 50px}}
      `}</style>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqSections.flatMap(s => s.faqs.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a }
        })))
      })}} />

      <nav>
        <div className="inner nav-inner">
          <a href="/" className="logo"><img src="/logo.png" alt="Ocean Health &amp; Travel" style={{height:"44px",width:"auto",display:"block"}} /></a>
          <ul className="nav-links">
            <li><a href="/#compare">NHS vs OHT</a></li>
            <li><a href="/#services">Treatments</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href={WA_URL} target="_blank" className="btn-nav">Free quote</a></li>
          </ul>
        </div>
      </nav>

      <section className="hero">
        <div className="inner">
          <div className="hero-inner">
            <div className="kicker">Frequently asked questions</div>
            <h1>Everything you need<br />to <em>know.</em></h1>
            <p className="hero-sub">
              Answers to the most common questions about medical treatment coordination in Istanbul — costs, timelines, safety, and what to expect.
            </p>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="inner">
          <div className="faq-layout">
            <div className="faq-nav">
              <div className="faq-nav-title">Jump to section</div>
              {faqSections.map(s => (
                <a key={s.title} href={`#${s.title.toLowerCase().replace(/\s+/g,'-').replace(/[^a-z0-9-]/g,'')}`} className="faq-nav-link">
                  {s.title}
                </a>
              ))}
            </div>
            <div>
              {faqSections.map(s => (
                <div key={s.title} className="faq-section" id={s.title.toLowerCase().replace(/\s+/g,'-').replace(/[^a-z0-9-]/g,'')}>
                  <div className="section-title">{s.title}</div>
                  <div className="faq-list">
                    {s.faqs.map(f => (
                      <details key={f.q} className="faq-item">
                        <summary className="faq-q">
                          {f.q}
                          <span className="faq-plus">+</span>
                        </summary>
                        <div className="faq-a">{f.a}</div>
                      </details>
                    ))}
                  </div>
                </div>
              ))}

              <div className="cta-strip">
                <h3>Still have questions?</h3>
                <p>We reply within the hour on WhatsApp. Send us your question and we&apos;ll get straight back to you.</p>
                <div className="cta-btns">
                  <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-wa">💬 Ask on WhatsApp</a>
                  <a href="mailto:info@oceanhealthtravel.com" className="btn-email">✉️ Email us</a>
                </div>
              </div>
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
