import Link from 'next/link'

// Flying guidance mirrors the figures already published on /faq and on each treatment page.
const FLYING: Record<string, string> = {
  'rhinoplasty-istanbul': 'Patients typically fly home 7–10 days after surgery, subject to surgeon clearance.',
  'knee-replacement-turkey': 'Patients typically fly home 10–14 days after surgery. Deep vein thrombosis risk is managed with your surgical team before you travel.',
  'lasik-istanbul': 'Most patients are comfortable flying home 2–3 days after surgery, subject to surgeon clearance.',
  'dental-istanbul': 'In most cases you can fly immediately after treatment. Your dentist will confirm after more complex procedures.',
  'dental-implants-turkey': 'In most cases you can fly immediately after treatment. Your dentist will confirm after more complex procedures.',
  'deep-brain-stimulation-turkey': 'Most patients remain in Istanbul for 2–3 weeks before flying home, subject to surgical team clearance.',
}
const FLYING_DEFAULT = 'Timing depends on the procedure and your recovery. Your surgical team confirms when it is safe to fly before you book your return.'

export default function UKPatientInfo({ current }: { current: string }) {
  const flying = FLYING[current] ?? FLYING_DEFAULT
  return (
    <section className="ukp">
      <style>{`
        .ukp{padding:64px 0;background:var(--bg,#FAF8F4)}
        .ukp .ukp-in{max-width:1280px;margin:0 auto;padding:0 2.5rem}
        .ukp h2{font-size:26px;font-weight:500;color:var(--ink,#12202B);margin:0 0 .5rem}
        .ukp .ukp-sub{font-size:15px;color:var(--muted,#5B6770);margin:0 0 1.5rem;max-width:640px}
        .ukp .ukp-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
        .ukp .ukp-card{background:#fff;border:1px solid var(--line,#E6E0D4);border-radius:14px;padding:22px 24px}
        .ukp h3{font-size:16px;font-weight:600;color:var(--ink,#12202B);margin:0 0 8px}
        .ukp p{font-size:14.5px;line-height:1.7;color:var(--muted,#5B6770);margin:0}
        .ukp a{color:var(--green,#0B6B55);text-decoration:underline}
        @media(max-width:900px){.ukp .ukp-grid{grid-template-columns:1fr}.ukp .ukp-in{padding:0 1.25rem}}
      `}</style>
      <div className="ukp-in">
        <h2>Information for UK patients</h2>
        <p className="ukp-sub">What to know before you travel and after you return.</p>
        <div className="ukp-grid">
          <div className="ukp-card">
            <h3>Flying home</h3>
            <p>{flying} Ask your surgeon about compression stockings and moving regularly on the flight.</p>
          </div>
          <div className="ukp-card">
            <h3>After you return</h3>
            <p>Operative notes, the discharge summary and any results are provided in English and forwarded to your UK GP on request. The treating hospital remains responsible for agreed follow-up. If you need urgent care at home, seek local medical help straight away. We can help coordinate communication with the hospital, but we do not provide post-operative medical care.</p>
          </div>
          <div className="ukp-card">
            <h3>Payment and cancellation</h3>
            <p>We charge patients no coordination fee; partner hospitals pay us. Deposits, payment schedules and refund terms are set by the hospital and confirmed in writing in your quote before you pay anything. Cancellation terms are in your coordination agreement — see the <Link href="/brokerage-agreement">brokerage agreement</Link>.</p>
          </div>
          <div className="ukp-card">
            <h3>Travel insurance</h3>
            <p>Standard travel policies often exclude planned treatment and its complications, so check your cover and its exclusions before you travel. If you would like, we can introduce you to an FCA-authorised insurance provider offering medical-travel cover. We may receive a commission if you take out a policy. You are free to choose any provider, there is no obligation, and we do not give insurance advice.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
