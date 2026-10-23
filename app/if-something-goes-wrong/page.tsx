import type { Metadata } from 'next'
import InfoPage from '@/app/components/InfoPage'

export const metadata: Metadata = {
  alternates: { canonical: '/if-something-goes-wrong' },
  title: 'If Something Goes Wrong After Surgery in Istanbul | Ocean Health & Travel',
  description: 'What to do in an emergency, who is responsible for your care, what we do and do not do, and the questions to ask in writing about complications and revision surgery before you travel.',
}

const faqs = [
  {
    q: 'Does Ocean Health & Travel pay for complications or revision surgery?',
    a: 'No. We are a coordinator, not a medical provider or an insurer. Whether the hospital covers revision surgery or complication costs depends on its own terms, which we ask the hospital to confirm in writing before you pay. Insurance is separate (see below).',
  },
  {
    q: 'Will the NHS treat me if I have a complication?',
    a: 'Emergency care is available in any UK emergency department. Non-urgent follow-up and corrective surgery for a procedure done abroad may be more limited, so plan for this before you travel and ask what the treating hospital will do.',
  },
  {
    q: 'What documents will my UK GP receive?',
    a: 'On request we send your GP the English-language operative notes and discharge summary supplied by the hospital. Ask for these before you leave Istanbul.',
  },
  {
    q: 'Who do I contact with a question about my recovery?',
    a: 'For anything urgent, use emergency services. For other questions, message us. We pass them to the treating team, return their answer and help with records and translation. We do not provide medical advice ourselves.',
  },
]

export default function Page() {
  return (
    <InfoPage
      slug="if-something-goes-wrong"
      crumb="If something goes wrong"
      kicker="Safety and responsibility"
      h1="If something goes wrong."
      h1em="Read this before you travel."
      sub="Every surgery carries risk. This page explains plainly what to do in an emergency, who is responsible for what, and the questions to ask in writing before you commit."
      faqs={faqs}
      ctaTitle="Questions about aftercare?"
      ctaText="Ask us before you commit. We will put your questions to the hospital and give you their answers in writing."
      waText="Hello, I'd like to ask about aftercare and complication arrangements"
      sections={[
        {
          title: 'In an emergency',
          paras: ['Do not wait to contact us. Call 999 in the UK or 112 in Turkey, or go to the nearest emergency department. Tell the staff what operation you had, where and when.'],
          bullets: [
            'Chest pain, shortness of breath, or a painful swollen calf',
            'Heavy or uncontrolled bleeding',
            'Fever with spreading redness, pus or severe worsening pain',
            'After spinal or neck surgery: new numbness between the legs, loss of bladder or bowel control, rapidly worsening weakness, difficulty breathing or swallowing, or rapidly increasing neck swelling',
          ],
          note: { label: 'Then tell us.', text: 'Once you are safe, message us so we can help obtain records from the hospital and communicate with the treating team.' },
        },
        {
          title: 'Who is responsible for what',
          alt: true,
          steps: [
            { t: 'The treating hospital and surgeon', d: 'Clinical care, agreed follow-up and the management of complications, under their consent forms and terms.' },
            { t: 'Ocean Health & Travel', d: 'Coordination: transfers, hotel, interpreter, communication with the hospital, obtaining records, and helping you raise concerns.' },
            { t: 'What we do not do', d: 'We do not give medical advice, provide post-operative medical care, guarantee outcomes, or sell or advise on insurance.' },
            { t: 'You', d: 'Follow the surgeon\'s instructions, attend post-operative checks before flying, and tell us promptly if something is wrong.' },
          ],
        },
        {
          title: 'While you are still in Istanbul',
          bullets: [
            'Post-operative checks take place at the hospital before you are cleared to fly.',
            'If a problem arises, the hospital manages your clinical care and we help with interpreting and communication.',
            'We help coordinate extra nights and travel changes. Who pays for them depends on the hospital\'s terms and any insurance you hold, so ask before you commit.',
          ],
        },
        {
          title: 'After you return to the UK',
          alt: true,
          bullets: [
            'For urgent problems, use NHS 111, your GP or an emergency department. Bring your English-language discharge summary and operative notes.',
            'Ask us to send these documents to your GP, and message us so we can contact the treating team.',
            'The NHS will treat emergencies, but may not be able to offer corrective surgery for a procedure done abroad, so agree the position on revision surgery in writing before you travel.',
          ],
        },
        {
          title: 'Ask these in writing before you commit',
          bullets: [
            'Is revision surgery offered, for how long, and which costs would remain (hospital stay, anaesthesia, surgeon, travel)?',
            'Who pays for an extended stay if you cannot fly on the planned date?',
            'What follow-up is included, and how does it work after you return home?',
            'Will you receive English-language operative notes and a discharge summary?',
            'What does the hospital\'s complication policy say, and which documents will you sign?',
          ],
          note: { label: 'Insurance.', text: 'Standard travel insurance often excludes complications of elective surgery. Check your policy wording. Specialist cover exists from FCA-authorised insurers. We do not sell or advise on insurance, but can introduce you to an FCA-authorised provider; we may receive a commission if you take out a policy, and you are free to choose any other.' },
        },
        {
          title: 'If you are unhappy with our service',
          alt: true,
          paras: ['Write to info@oceanhealthtravel.com. Our process is set out in our complaints policy. Concerns about clinical care are handled by the hospital under its own procedure, and we help you raise them and follow up.'],
          link: { href: '/complaints-policy', label: 'Read the complaints policy' },
                  },
      ]}
    />
  )
}
