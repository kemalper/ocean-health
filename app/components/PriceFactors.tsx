import styles from './PriceFactors.module.css'

const CHANGES = [
  'Extra nights, or arriving earlier or leaving later to fit your flights',
  'Keeping your hotel room during a hospital stay, if you prefer',
  'Travelling with a companion: their costs are added to your quote',
  'Significant additional tests or treatment, if the information given for your quote proves untrue',
]

export default function PriceFactors() {
  return (
    <section className={styles.box} aria-labelledby="price-factors-title">
      <div>
        <h3 id="price-factors-title" className={styles.title}>What can change your price</h3>
        <ul>
          {CHANGES.map(c => <li key={c}>{c}</li>)}
        </ul>
      </div>
      <div className={styles.side}>
        <p>Your package quote is based on the information you give us and is confirmed once the treating provider has reviewed it. A breakdown is available on request.</p>
        <p><strong>Not included:</strong> flights.</p>
      </div>
    </section>
  )
}
