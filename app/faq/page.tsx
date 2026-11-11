import type { Metadata } from 'next'
import Nav from '@/app/components/Nav'
import TreatmentTheme from '@/app/components/TreatmentTheme'
import Footer from '@/app/components/Footer'

export const metadata: Metadata = {
  alternates: { canonical: '/faq' },
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
        a: 'Contact us via WhatsApp (+44 7441 904858) or email (info@oceanhealthtravel.com) with your treatment, preferred dates, and any relevant medical information. We aim to provide your package quote within 48 hours of receiving your clinical information — no obligation.',
      },
      {
        q: 'How quickly can I have surgery?',
        a: 'Surgery dates depend on the surgeon and hospital availability. The time from first contact to treatment covers the quote (we aim to provide this within 48 hours of complete records), booking and travel arrangements, and varies by treatment and provider. Some complex procedures (e.g. neurosurgery) may require additional pre-operative assessment time, because the neurosurgeon first reviews your imaging and records.',
      },
      {
        q: 'Do I need a referral from my GP?',
        a: 'For most cosmetic, dental, and ophthalmological procedures, no GP referral is required. For complex procedures such as neurosurgery, orthopaedics, or deep brain stimulation, we ask for your imaging and clinical reports instead. The treating specialist reviews them and decides whether surgery is suitable. A letter from your GP or specialist is helpful if you have one.',
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
        a: 'Prices vary by procedure and by provider. Indicative "from" prices, alongside typical UK private ranges, are shown on our homepage. They are confirmed by the treating provider after clinical assessment, and your package quote depends on your specific case.',
      },
      {
        q: 'What is included in the price?',
        a: 'Your package quote states exactly what is included, and a breakdown is available on request. Typically: surgeon fee, anaesthesia, hospital stay, and standard post-operative care. Airport transfer, hotel, interpreter, and clinic liaison are included in your package. No coordination fee is charged directly to patients. Flights are never included.',
      },
      {
        q: 'Are there any hidden charges?',
        a: 'Your package quote is based on the information you give us about your health, dates and companions, and it states what is included. Everything in the package is provided at the quoted price. It is adjusted if you add extra nights or change your flight timing, and a travel companion\'s costs are quoted separately; these are agreed with you before you book. Small additional checks that arise after you arrive are usually covered within the package. If the information given for your quote turns out to be inaccurate or incomplete and significant additional tests or treatment are needed, an additional charge may apply (extra transfers or nights can follow); we discuss any additional cost with you. A breakdown is available on request. Ocean Health & Travel coordinates your care at no direct cost to you — our commercial arrangements are with partner hospitals, not with patients.',
      },
      {
        q: 'What happens to my hotel if I stay overnight in hospital?',
        a: 'If your procedure includes a night or more in hospital, we arrange your hotel check-out before surgery and your check-in again after discharge, for you and for any companion staying with you. If you would rather keep your room during the hospital stay, tell us and we will price it for you.',
      },
      {
        q: 'How do I pay?',
        a: 'Payment terms are specified in your coordination agreement. No coordination fee is charged to patients. We are paid by partner hospitals, which may influence which hospitals we work with. Full details are provided in our Medical Services Brokerage Agreement.',
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
        a: 'Treatment is delivered by licensed partner hospitals and providers in Istanbul. Some partner hospitals are JCI-accredited (Joint Commission International), for example for orthopaedic, neurosurgical and plastic-surgery procedures; accreditation depends on the treatment, and your coordinator will confirm which applies to yours. All procedures carry risks; these are discussed by the treating provider.',
      },
      {
        q: 'Which hospitals do you work with?',
        a: 'We work with licensed partner hospitals and providers in Istanbul. The hospital and surgeon are confirmed in writing before you pay for treatment, and you can then verify their licence and any accreditation that applies to your treatment. Our commercial arrangements with hospitals do not affect the independence of clinical decisions.',
      },
      {
        q: 'Are the surgeons qualified?',
        a: 'Cosmetic and plastic-surgery procedures are performed by board-certified plastic surgeons. For other specialties, your coordinator confirms the treating provider\'s credentials in writing before you pay.',
      },
      {
        q: 'What if something goes wrong?',
        a: 'Your treating provider has standard clinical governance and complaint procedures. Ocean Health & Travel has a formal Complaints Policy — available on our website — and will assist in coordinating communication with the hospital in the event of a concern. We are registered with the ICO and operate under UK consumer protection law.',
      },
      {
        q: 'Do I need travel insurance for treatment abroad?',
        a: 'Standard travel policies often exclude planned treatment and its complications, so check your cover and its exclusions before you travel. If you would like, we can introduce you to an FCA-authorised insurance provider offering medical-travel cover. We may receive a commission if you take out a policy. You are free to choose any provider, there is no obligation, and we do not give insurance advice.',
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
        a: 'Post-discharge documentation — including operative notes, discharge summary, and any laboratory results — is provided in English and forwarded to your UK GP on request. The treating provider remains responsible for its clinical treatment and agreed post-operative follow-up. Patients should seek urgent local medical care if required after returning home. Ocean Health & Travel does not provide post-operative medical care.',
      },
      {
        q: 'Is Ocean Health & Travel a medical provider?',
        a: 'No. We are a medical tourism coordination service. We do not employ surgeons, operate clinical facilities, or provide medical advice. All clinical decisions rest with the treating physician at our licensed partner hospitals.',
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
        a: 'British citizen passport holders can normally visit Turkey without a visa for up to 90 days in any 180-day period. Most EU passport holders can also enter visa-free. Patients should check the latest entry requirements on GOV.UK before travelling.',
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
        a: 'Yes. Ocean Health & Travel Ltd is registered in England & Wales (Companies House no. 16186647). We are registered with the ICO for UK GDPR compliance.',
      },
      {
        q: 'How long have you been operating?',
        a: 'Ocean Health & Travel Ltd is a UK-registered medical tourism coordinator. In Turkey we work through our licensed travel agency, Ocean Turizm Seyahat Acentası, which has 15 years of experience in the tourism sector.',
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
        .hero{background:linear-gradient(135deg,#0A2150 0%,#0559F0 50%,#0438A6 100%);padding:80px 0 60px;position:relative;overflow:hidden}
        .hero::before{content:'';position:absolute;width:400px;height:400px;border-radius:50%;background:radial-gradient(circle,rgba(5,89,240,.2) 0%,transparent 70%);top:-100px;right:-100px;pointer-events:none}
        .hero-inner{position:relative;z-index:1;max-width:640px}
        .kicker{font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#8FD8FF;margin-bottom:1rem}
        h1{font-family:'DM Serif Display',serif;font-size:clamp(32px,4vw,50px);line-height:1.1;letter-spacing:-.025em;color:#fff;margin-bottom:1rem;font-weight:400}
        h1 em{font-style:italic;color:#8FD8FF}
        .hero-sub{font-size:16px;color:rgba(255,255,255,.72);line-height:1.75;font-weight:300}
        .sec{padding:5rem 0}
        .faq-layout{display:grid;grid-template-columns:240px 1fr;gap:4rem;align-items:start}
        .faq-
.faq-nav-title{font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#475569;margin-bottom:1rem}
        .faq-nav-link{display:block;font-size:13px;color:#666;padding:.5rem 0;border-left:2px solid #DCE6F5;padding-left:.75rem;margin-bottom:.25rem;transition:all .2s;cursor:pointer}
        .faq-nav-link:hover{color:#0559F0;border-left-color:#0559F0}
        .faq-section{margin-bottom:3.5rem}
        .faq-section:last-child{margin-bottom:0}
        .section-title{font-family:'DM Serif Display',serif;font-size:22px;font-weight:400;color:#1a1a1a;letter-spacing:-.01em;margin-bottom:1.25rem;padding-bottom:.75rem;border-bottom:1px solid #DCE6F5}
        .faq-list{display:flex;flex-direction:column;border:1px solid #DCE6F5;border-radius:16px;overflow:hidden}
        .faq-item{border-bottom:1px solid #DCE6F5}
        .faq-item:last-child{border-bottom:none}
        .faq-q{width:100%;text-align:left;padding:1.1rem 1.5rem;background:#fff;border:none;cursor:pointer;font-family:'Inter',sans-serif;font-size:14px;font-weight:500;color:#1a1a1a;display:flex;justify-content:space-between;align-items:center;gap:1rem;transition:background .2s;line-height:1.5}
        .faq-q:hover{background:#F3F7FE}
        .faq-a{padding:0 1.5rem 1.1rem;font-size:13.5px;color:#666;line-height:1.75;font-weight:300}
        .faq-plus{font-size:18px;color:#0559F0;flex-shrink:0}
        .cta-strip{background:#F3F7FE;border:1px solid #CFE0FC;border-radius:16px;padding:2rem;text-align:center;margin-top:3rem}
        .cta-strip h3{font-family:'DM Serif Display',serif;font-size:22px;font-weight:400;color:#0559F0;margin-bottom:.5rem}
        .cta-strip p{font-size:14px;color:#555;font-weight:300;line-height:1.65;margin-bottom:1.25rem}
        .cta-btns{display:flex;gap:10px;justify-content:center;flex-wrap:wrap}
        .btn-wa{background:#0559F0;color:#fff;border:none;padding:12px 24px;border-radius:9px;font-size:14px;font-weight:500;display:inline-flex;align-items:center;gap:8px;cursor:pointer;font-family:'Inter',sans-serif;transition:all .2s}
        .btn-wa:hover{background:#0A2150}
        .btn-email{background:transparent;color:#0559F0;border:1px solid #0559F0;padding:12px 24px;border-radius:9px;font-size:14px;display:inline-flex;align-items:center;gap:8px;cursor:pointer;font-family:'Inter',sans-serif;transition:all .2s}
        .btn-email:hover{background:#0559F0;color:#fff}
        footer{background:#111;padding:3rem 0 2rem}
        .footer-legal{font-size:11.5px;color:#444;line-height:1.8}
        .footer-legal em{color:#333;font-style:normal;font-size:11px}
        @media(max-width:900px){.faq-layout{grid-template-columns:1fr}.faq-
}
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

      <Nav />

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
                <p>We reply on WhatsApp during working hours. Send us your question and we&apos;ll get straight back to you.</p>
                <div className="cta-btns">
                  <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-wa">Ask on WhatsApp</a>
                  <a href="mailto:info@oceanhealthtravel.com" className="btn-email">Email us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
