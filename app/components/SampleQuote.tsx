import styles from './SampleQuote.module.css'

const LINES: [string, string, string][] = [
  ['Treatment', 'Price set by the treating provider', '£ —'],
  ['Hotel', 'For the patient, near your clinic', 'Included'],
  ['Transfers', 'For the patient: airport, hotel and clinic', 'Included'],
  ['Interpreter', 'At your appointments', 'Included'],
  ['English discharge documents', 'Forwarded to your GP on request', 'On request'],
]

// Illustrative layout only: no real prices are shown.
export default function SampleQuote() {
  return (
    <section className={styles.card} aria-labelledby="sample-quote-title">
      <div className={styles.top}>
        <h2 id="sample-quote-title" className={styles.title}>What your itemised quote lists</h2>
        <span className={styles.tag}>Illustrative layout, not a quote</span>
      </div>
      <p className={styles.sub}>Prepared for you once we have reviewed your records.</p>
      <dl className={styles.list}>
        {LINES.map(([label, note, val]) => (
          <div key={label} className={styles.row}>
            <dt>{label}</dt>
            <dd className={styles.val}>{val}</dd>
            <dd className={styles.note}>{note}</dd>
          </div>
        ))}
      </dl>
      <div className={styles.fine}>
        <span><strong>Not included:</strong> flights.</span>
        <span>Prices are indicative until the treating provider has assessed your case. Hospital and surgeon are confirmed in writing before you pay.</span>
        <span>No coordination fee is charged to patients.</span>
      </div>
    </section>
  )
}
