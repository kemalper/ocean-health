// Content for individual procedure pages (rendered by app/components/ProcedurePage.tsx via app/treatments/[slug]).
// Clinical statements are deliberately general; the treating surgeon confirms specifics for each patient.
// UK prices must trace to docs/uk-price-sources.md.
import { UK_PRICES } from '@/app/lib/ukPrices'

export type Procedure = {
  slug: string
  name: string
  h1: string
  h1em: string
  metaTitle: string
  metaDescription: string
  sub: string
  price: { istanbul: string; uk: string; saving: string; stay: string }
  overview: string[]
  suitability: string[]
  steps: { t: string; d: string }[]
  risks: string[]
  faqs: { q: string; a: string }[]
  flying: string
  related: string[]
}

export const PROCEDURES: Procedure[] = [
  {
    slug: 'breast-augmentation-istanbul',
    name: 'Breast augmentation',
    h1: 'Breast augmentation in Istanbul.',
    h1em: 'From £6,000.',
    metaTitle: 'Breast Augmentation in Istanbul | From £6,000 | Ocean Health & Travel',
    metaDescription: `Breast augmentation in Istanbul from £6,000 — UK private typically ${UK_PRICES.breastAugmentation.compact}. Board-certified surgeons at JCI-accredited hospitals, itemised quote within 48 hours, hotel, transfers and interpreter included.`,
    sub: 'Implant-based breast enlargement at JCI-accredited hospitals, coordinated from first enquiry to discharge notes for your GP.',
    price: {
      istanbul: 'from £6,000',
      uk: UK_PRICES.breastAugmentation.typical,
      saving: 'Broadly comparable',
      stay: '5–7 days',
    },
    overview: [
      'Breast augmentation increases breast volume and can improve shape and symmetry. Most procedures use silicone gel or saline implants, placed through an incision under the breast fold, around the areola or in the armpit, and positioned behind the breast tissue or under the chest muscle. Fat transfer is a separate option for a more modest increase in volume.',
      'The surgeon agrees implant type, size, profile and placement with you after assessing your chest wall, breast tissue and skin quality. Your itemised quote names the hospital and surgeon and lists what is and is not included before you commit to anything.',
      'For breast augmentation the cost in Istanbul is broadly in line with UK private prices. Patients who travel usually do so for access to a surgeon and hospital they have checked, and for an all-in coordinated package, not for a large price difference.',
    ],
    suitability: [
      'Adults who want more breast volume or who have lost volume after pregnancy, breastfeeding or weight change',
      'Mild breast asymmetry',
      'Good general health, a stable weight and realistic expectations',
      'Non-smokers, or patients prepared to stop before and after surgery as advised',
    ],
    steps: [
      { t: 'Enquiry and quote', d: 'Tell us what you want. You receive an itemised quote within 48 hours that names the hospital and surgeon.' },
      { t: 'Remote assessment', d: 'You complete a medical questionnaire and share photographs. Your surgeon reviews them and confirms whether the procedure is suitable before you book travel.' },
      { t: 'Surgery in Istanbul', d: 'Surgery usually takes one to two hours under general anaesthesia. Your surgeon confirms implant details and agrees them with you in writing.' },
      { t: 'Recovery and follow-up', d: 'You recover in Istanbul, attend your post-operative checks and receive English-language operative notes and a discharge summary, forwarded to your UK GP on request.' },
    ],
    risks: [
      'Bleeding, infection and delayed wound healing',
      'Scarring, which varies between patients',
      'Capsular contracture: the scar tissue around an implant can tighten and may need further surgery',
      'Implant movement, rippling, asymmetry or an unwanted shape',
      'Temporary or permanent changes in nipple or breast sensation',
      'Implant rupture or leakage over time. Implants are not lifetime devices and many patients need revision or replacement',
      'Rarely, anaplastic large cell lymphoma associated with some textured implants',
      'Risks of general anaesthesia and of blood clots, including after flying',
    ],
    faqs: [
      {
        q: 'How much does breast augmentation cost in Istanbul compared with the UK?',
        a: 'Breast augmentation in Istanbul starts from £6,000. UK private clinics typically charge £5,500–£7,000 (published guide prices, collected October 2026). The cost is broadly comparable, so the case for travelling rests on the surgeon, the hospital and the coordinated package rather than on price alone. Your itemised quote states what is included, so you can compare it line by line with a UK quote.',
      },
      {
        q: 'Which implants are used?',
        a: 'Silicone gel and saline implants, round or anatomical, are the usual choices. Your surgeon discusses which suits your anatomy. Before surgery you should receive the manufacturer, model, size and batch number in writing, and an implant record to keep. Ask for this at the quote stage and bring it to your GP and to breast screening appointments.',
      },
      {
        q: 'How long is recovery and when can I fly home?',
        a: 'Most patients stay in Istanbul for 5–7 days, subject to surgeon clearance, then fly home. Many return to desk work within about a week. Strenuous exercise and heavy lifting are usually avoided for several weeks, and your surgeon will give you specific instructions, including how long to wear a supportive bra. Compression stockings and regular movement on the flight reduce the risk of blood clots.',
      },
      {
        q: 'What if I need revision surgery or have a problem after I return?',
        a: 'Ask before you commit whether revision surgery is covered, on what terms and for how long, and get the answer in writing. If you have a problem at home, seek local medical care first. The treating hospital remains responsible for agreed follow-up and we help coordinate communication with them, but we do not provide post-operative medical care. Our complaints policy is on this site.',
      },
      {
        q: 'Can breast augmentation be combined with a breast lift?',
        a: 'Often yes. If the breast has descended or lost skin tone, the surgeon may recommend a lift with or without an implant. This changes the operation and the price, so your quote will list it separately.',
      },
      {
        q: 'Do I need a referral from my GP?',
        a: 'No. We recommend telling your GP, and we forward your operative notes and discharge summary on request so that your records are complete. Standard travel insurance often excludes planned treatment and its complications, so check your cover before you travel.',
      },
    ],
    flying: 'Patients typically fly home 5–7 days after surgery, subject to surgeon clearance. Ask your surgeon about compression stockings and moving regularly on the flight.',
    related: ['plastic-surgery-istanbul', 'rhinoplasty-istanbul', 'hair-transplant-istanbul'],
  },
]

export const PROCEDURE_SLUGS = PROCEDURES.map(p => p.slug)
export const getProcedure = (slug: string) => PROCEDURES.find(p => p.slug === slug)
