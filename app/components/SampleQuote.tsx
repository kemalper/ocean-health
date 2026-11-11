import styles from './SampleQuote.module.css'

const LINES: [string, string, string][] = [
  ['Treatment, tests and hospital stay', 'Price set by the treating provider', '£ —'],
  ['Hotel', 'For the patient. Two or three options where available', 'Included'],
  ['Transfers', 'For the patient: airport, hotel and hospital', 'Included'],
  ['Interpreter', 'At your appointments', 'Included'],
  ['English discharge documents', 'Forwarded to your GP on request', 'On request'],
]

const CHANGES = [
  'Extra nights, or arriving earlier or leaving later to fit your flights',
  'Keeping your hotel room during a hospital stay, if you prefer',
  'Travelling with a companion: their costs are added to your quote',
  'Significant additional tests or treatment, if the information given for your quote proves untrue',
]

// Illustrative layout only: no real prices are shown.
export default function SampleQuote() {
  return (
    <section className={styles.card} aria-labelledby="sample-quote-title">
      <div className={styles.top}>
        <h2 id="sample-quote-title" className={styles.title}>What your package quote covers</h2>
        <span className={styles.tag}>Illustrative layout, not a quote</span>
      </div>
      <p className={styles.sub}>Based on the information you give us about your treatment, dates and travel companions.</p>
      <dl className={styles.list}>
        {LINES.map(([label, note, val]) => (
          <div key={label} className={styles.row}>
            <dt>{label}</dt>
            <dd className={styles.val}>{val}</dd>
            <dd className={styles.note}>{note}</dd>
          </div>
        ))}
      </dl>
      <div className={styles.change}>
        <p className={styles.changeTitle}>What can change your price</p>
        <ul>
          {CHANGES.map(c => <li key={c}>{c}</li>)}
        </ul>
      </div>
      <div className={styles.fine}>
        <span><strong>Not included:</strong> flights.</span>
        <span>A breakdown is available on request. Your quote is based on the information you give us and is confirmed once the treating provider has reviewed it. Hospital and surgeon are confirmed in writing before you pay.</span>
        <span>No coordination fee is charged to patients.</span>
      </div>
    </section>
  )
}
