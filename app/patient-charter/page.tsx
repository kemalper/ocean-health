import type { Metadata } from 'next'
import InfoPage from '@/app/components/InfoPage'

export const metadata: Metadata = {
  alternates: { canonical: '/patient-charter' },
  title: 'Patient Charter: What We Do and Do Not Do | Ocean Health & Travel',
  description: 'Our scope as a medical tourism coordinator: what we do, what we do not do, how we are paid, when you learn who your surgeon is, and how we handle your records.',
}

const faqs = [
  {
    q: 'Are you a medical provider?',
    a: 'No. Ocean Health & Travel Ltd coordinates your treatment. The treating hospital and surgeon provide all medical care and make all clinical decisions.',
  },
  {
    q: 'Do you charge patients a fee?',
    a: 'No coordination fee is charged to patients. We are paid by the hospital you are treated at, which may influence which hospitals we work with. Your itemised quote shows what you pay and what it includes.',
  },
  {
    q: 'When will I know who my surgeon is?',
    a: 'We confirm the hospital and surgeon in writing before you pay for treatment. Surgeon allocation depends on your procedure, your records and your dates, so we confirm it per patient rather than publish a fixed list.',
  },
]

export default function Page() {
  return (
    <InfoPage
      slug="patient-charter"
      crumb="Patient charter"
      kicker="Our commitments"
      h1="What you can expect from us."
      h1em="In writing."
      sub="A plain statement of our role: what we do, what we do not do, how we are paid and what we confirm before you pay for treatment."
      faqs={faqs}
      ctaTitle="Ready to start?"
      ctaText="Tell us what you are considering. You receive an itemised quote once we have the information we need."
      waText="Hello, I'd like to ask about treatment coordination"
      sections={[
        {
          title: 'What we do',
          bullets: [
            'Give you an itemised quote, normally within 48 hours of receiving the information we need.',
            'Arrange treatment at JCI-accredited hospitals in Istanbul.',
            'Coordinate airport transfers, hotel accommodation near the hospital and an interpreter at your appointments.',
            'Give you one coordinator from enquiry to discharge.',
            'Send English-language discharge documentation to your UK GP on request.',
            'Help you communicate with the treating team after you return home.',
          ],
        },
        {
          title: 'What we do not do',
          alt: true,
          bullets: [
            'We do not give medical advice or diagnoses. Clinical decisions rest with the treating surgeon.',
            'We do not guarantee outcomes.',
            'We do not provide post-operative medical care.',
            'We do not sell or advise on insurance.',
            'We do not book flights; they are not included.',
          ],
        },
        {
          title: 'How we are paid',
          paras: [
            'No coordination fee is charged to patients. We are paid by the hospital you are treated at, and this may influence which hospitals we work with. Your itemised quote shows what you pay and what it includes.',
          ],
        },
        {
          title: 'What we confirm before you pay',
          alt: true,
          bullets: [
            'The hospital and surgeon, in writing.',
            'The surgeon\'s specialist qualification and the hospital\'s accreditation.',
            'What the price includes and excludes.',
            'The hospital\'s terms on deposits, cancellation and revision surgery.',
          ],
          note: { label: 'Why we do not publish surgeon names.', text: 'Surgeon allocation depends on your procedure, your records and your dates, so we confirm it for each patient rather than publish a fixed list.' },
        },
        {
          title: 'Your records',
          paras: [
            'Your medical records are special category data. We share them only with the hospital and clinicians involved in assessing your case, and we handle them under UK GDPR. You can ask us to delete them, subject to legal retention duties.',
          ],
          link: { href: '/privacy-policy', label: 'Read the privacy policy' },
        },
        {
          title: 'If something goes wrong',
          alt: true,
          paras: ['Emergencies, responsibility and the questions to ask before you commit are set out on one page.'],
          link: { href: '/if-something-goes-wrong', label: 'If something goes wrong' },
        },
      ]}
    />
  )
}
