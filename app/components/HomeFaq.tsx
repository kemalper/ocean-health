import Link from 'next/link'
import styles from './HomeFaq.module.css'

const ITEMS: { q: string; a: React.ReactNode }[] = [
  {
    q: 'Is treatment in Istanbul safe?',
    a: <p>Treatment is delivered by licensed partner hospitals and providers in Istanbul. All procedures carry risks; these are discussed by the treating provider. We confirm the surgeon&apos;s credentials with you in writing before you pay.</p>,
  },
  {
    q: 'What if something goes wrong after surgery?',
    a: (
      <>
        <p>The treating hospital and surgeon are responsible for clinical care, agreed follow-up and the management of complications. We coordinate: communication with the hospital, records for your GP, and helping you raise concerns. We ask the hospital to confirm its aftercare terms in writing before you pay.</p>
        <p><Link href="/if-something-goes-wrong">Read: if something goes wrong</Link></p>
      </>
    ),
  },
  {
    q: 'Who do I pay, and is there a coordination fee?',
    a: (
      <>
        <p>You pay the treating hospital directly. Ocean Health &amp; Travel does not receive or hold patient payments and charges patients no coordination fee; we are paid by our partner hospitals.</p>
        <p><Link href="/brokerage-agreement">Read our brokerage agreement</Link></p>
      </>
    ),
  },
  {
    q: 'How long will I stay in Istanbul?',
    a: <p>It depends on the procedure: our treatment pages show a typical stay. Extra nights, or arriving earlier or leaving later to fit your flights, can be added to your package quote.</p>,
  },
]

export default function HomeFaq() {
  return (
    <>
      <div className={styles.list}>
        {ITEMS.map(i => (
          <details key={i.q} className={styles.item}>
            <summary>{i.q}<span className={styles.chev} aria-hidden="true" /></summary>
            <div className={styles.answer}>{i.a}</div>
          </details>
        ))}
      </div>
      <p className={styles.links}>
        <Link href="/faq">All questions</Link>
        <Link href="/patient-charter">Our patient charter</Link>
        <Link href="/if-something-goes-wrong">If something goes wrong</Link>
      </p>
    </>
  )
}
