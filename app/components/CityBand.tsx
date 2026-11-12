import Image from 'next/image'
import styles from './CityBand.module.css'

export default function CityBand() {
  return (
    <div className={styles.band}>
      <Image
        src="/hero.jpg"
        alt="Illustrative image: the Bosphorus Bridge lit in red and blue at dusk, Istanbul"
        fill
        sizes="(min-width:1280px) 1200px, 100vw"
        className={styles.img}
      />
    </div>
  )
}
