import Link from 'next/link'

const ALL: Record<string, { title: string; desc: string }> = {
  'rhinoplasty-istanbul': { title: 'Rhinoplasty', desc: 'Nose surgery: primary and revision' },
  'plastic-surgery-istanbul': { title: 'Plastic & cosmetic surgery', desc: 'Breast, body contouring, facial procedures' },
  'hair-transplant-istanbul': { title: 'Hair transplant', desc: 'FUE and DHI techniques' },
  'dental-istanbul': { title: 'Dental treatment', desc: 'Crowns, veneers, smile design' },
  'dental-implants-turkey': { title: 'Dental implants', desc: 'Single implants to full arch' },
  'knee-replacement-turkey': { title: 'Knee replacement', desc: 'Orthopaedic joint surgery' },
  'lasik-istanbul': { title: 'LASIK', desc: 'Laser vision correction' },
  'ophthalmology-istanbul': { title: 'Eye surgery', desc: 'Cataract, lens replacement, LASIK' },
  'neurosurgery-istanbul': { title: 'Neurosurgery', desc: 'Spine, tumour and functional neurosurgery' },
  'deep-brain-stimulation-turkey': { title: 'Deep brain stimulation', desc: "For Parkinson's disease" },
  'urology-istanbul': { title: "Urology & men's health", desc: 'Specialist urological care' },
}

const RELATED: Record<string, string[]> = {
  'rhinoplasty-istanbul': ['plastic-surgery-istanbul', 'hair-transplant-istanbul', 'dental-istanbul'],
  'plastic-surgery-istanbul': ['rhinoplasty-istanbul', 'hair-transplant-istanbul', 'urology-istanbul'],
  'hair-transplant-istanbul': ['rhinoplasty-istanbul', 'plastic-surgery-istanbul', 'dental-istanbul'],
  'dental-istanbul': ['dental-implants-turkey', 'rhinoplasty-istanbul', 'hair-transplant-istanbul'],
  'dental-implants-turkey': ['dental-istanbul', 'knee-replacement-turkey', 'rhinoplasty-istanbul'],
  'knee-replacement-turkey': ['neurosurgery-istanbul', 'dental-implants-turkey', 'ophthalmology-istanbul'],
  'lasik-istanbul': ['ophthalmology-istanbul', 'dental-istanbul', 'rhinoplasty-istanbul'],
  'ophthalmology-istanbul': ['lasik-istanbul', 'knee-replacement-turkey', 'dental-istanbul'],
  'neurosurgery-istanbul': ['deep-brain-stimulation-turkey', 'knee-replacement-turkey', 'urology-istanbul'],
  'deep-brain-stimulation-turkey': ['neurosurgery-istanbul', 'knee-replacement-turkey', 'ophthalmology-istanbul'],
  'urology-istanbul': ['plastic-surgery-istanbul', 'neurosurgery-istanbul', 'hair-transplant-istanbul'],
}

export default function RelatedTreatments({ current }: { current: string }) {
  const slugs = RELATED[current] ?? []
  if (!slugs.length) return null
  return (
    <section className="rt">
      <style>{`
        .rt{padding:56px 0;background:var(--band,#F2EEE5)}
        .rt .rt-in{max-width:1280px;margin:0 auto;padding:0 2.5rem}
        .rt h2{font-size:24px;font-weight:500;color:var(--ink,#12202B);margin:0 0 1.25rem}
        .rt .rt-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
        .rt a.rt-card{display:block;background:#fff;border:1px solid var(--line,#E6E0D4);border-radius:14px;padding:20px 22px;text-decoration:none;color:inherit}
        .rt a.rt-card:hover{border-color:var(--green,#0B6B55)}
        .rt .rt-t{font-size:16px;font-weight:600;color:var(--ink,#12202B)}
        .rt .rt-d{font-size:14px;color:var(--muted,#5B6770);margin-top:4px}
        .rt .rt-more{margin-top:1.25rem;font-size:14px}
        .rt .rt-more a{color:var(--green,#0B6B55);text-decoration:underline}
        @media(max-width:900px){.rt .rt-grid{grid-template-columns:1fr}.rt .rt-in{padding:0 1.25rem}}
      `}</style>
      <div className="rt-in">
        <h2>Related treatments</h2>
        <div className="rt-grid">
          {slugs.map(s => (
            <Link key={s} href={`/treatments/${s}`} className="rt-card">
              <div className="rt-t">{ALL[s].title}</div>
              <div className="rt-d">{ALL[s].desc}</div>
            </Link>
          ))}
        </div>
        <div className="rt-more"><Link href="/#services">All treatments</Link> · <Link href="/faq">Frequently asked questions</Link></div>
      </div>
    </section>
  )
}
