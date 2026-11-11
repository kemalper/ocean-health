import Link from 'next/link'
import styles from './Footer.module.css'
import CookieSettingsButton from './CookieSettingsButton'

const treatments: [string, string][] = [
  ['/treatments/plastic-surgery-istanbul', 'Plastic & cosmetic surgery'],
  ['/treatments/rhinoplasty-istanbul', 'Rhinoplasty'],
  ['/treatments/breast-augmentation-istanbul', 'Breast augmentation'],
  ['/treatments/liposuction-istanbul', 'Liposuction'],
  ['/treatments/tummy-tuck-istanbul', 'Tummy tuck'],
  ['/treatments/bbl-istanbul', 'Brazilian butt lift'],
  ['/treatments/mini-facelift-istanbul', 'Mini facelift'],
  ['/treatments/blepharoplasty-istanbul', 'Eyelid surgery'],
  ['/treatments/lumbar-disc-istanbul', 'Lumbar disc surgery'],
  ['/treatments/cervical-disc-istanbul', 'Cervical disc surgery'],
  ['/treatments/dental-istanbul', 'Dental'],
  ['/treatments/dental-implants-turkey', 'Dental implants'],
  ['/treatments/ophthalmology-istanbul', 'Ophthalmology'],
  ['/treatments/lasik-istanbul', 'LASIK'],
  ['/treatments/knee-replacement-turkey', 'Knee replacement'],
  ['/treatments/neurosurgery-istanbul', 'Neurosurgery'],
  ['/treatments/deep-brain-stimulation-turkey', 'Deep brain stimulation'],
  ['/treatments/hair-transplant-istanbul', 'Hair transplantation'],
  ['/treatments/urology-istanbul', 'Urology & men’s health'],
]

export default function Footer({ note }: { note?: string }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <p className={styles.name}>Ocean Health &amp; Travel Ltd</p>
            <p>UK-registered medical tourism coordinator. We are an intermediary, not a healthcare provider: all treatment is delivered by licensed partner providers in Istanbul.</p>
          </div>
          <div className={styles.cols}>
            <nav aria-label="Treatments" className={styles.treat}>
              <h2>Treatments</h2>
              <div className={styles.tlist}>
                {treatments.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}
              </div>
            </nav>
            <nav aria-label="Company">
              <h2>Company</h2>
              <Link href="/about">About us</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/patient-charter">Patient charter</Link>
              <Link href="/if-something-goes-wrong">If something goes wrong</Link>
              <Link href="/contact">Contact</Link>
            </nav>
            <nav aria-label="Legal">
              <h2>Legal</h2>
              <Link href="/privacy-policy">Privacy policy</Link>
              <Link href="/cookie-policy">Cookie policy</Link>
              <CookieSettingsButton />
              <Link href="/complaints-policy">Complaints policy</Link>
              <Link href="/brokerage-agreement">Brokerage agreement</Link>
            </nav>
          </div>
        </div>
        <p className={styles.legal}>
          © {new Date().getFullYear()} Ocean Health &amp; Travel Ltd · Registered in England &amp; Wales · Company no. 16186647 (Companies House) · ICO registered<br />
          London: 17 Green Lanes, N16 9BS · Fethiye: Karagözler Mah., Fevzi Çakmak Cad. No:11/A, Muğla ·{' '}
          <a href="mailto:info@oceanhealthtravel.com">info@oceanhealthtravel.com</a> · <a href="tel:+447441904858">+44 7441 904858</a><br />
          Flights not included · No coordination fee charged to patients · Planned (non-emergency) treatment only<br />
          Ocean Health &amp; Travel is an intermediary and coordinator, not a healthcare provider. It does not provide medical advice; all clinical decisions rest with your treating provider. Not suitable for emergencies. Patients should seek urgent local medical care if required after returning home.
          {note ? <><br />{note}</> : null}
        </p>
      </div>
    </footer>
  )
}
