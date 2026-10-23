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
    related: ['plastic-surgery-istanbul', 'tummy-tuck-istanbul', 'liposuction-istanbul'],
  },
  {
    slug: 'liposuction-istanbul',
    name: 'Liposuction',
    h1: 'Liposuction in Istanbul.',
    h1em: 'From £2,500.',
    metaTitle: 'Liposuction in Istanbul | From £2,500 | Ocean Health & Travel',
    metaDescription: `Liposuction in Istanbul from £2,500 — UK private typically ${UK_PRICES.liposuction.compact}, depending on areas treated. Board-certified surgeons at JCI-accredited hospitals, itemised quote within 48 hours.`,
    sub: 'Targeted fat removal at JCI-accredited hospitals, with an itemised quote that shows exactly which areas are treated.',
    price: { istanbul: 'from £2,500', uk: UK_PRICES.liposuction.range, saving: 'Varies by areas treated', stay: '5–7 days' },
    overview: [
      'Liposuction removes localised fat deposits that do not respond to diet and exercise, most often from the abdomen, flanks, thighs, upper arms, chin and back. The surgeon passes thin suction cannulas through small incisions and shapes the area as fat is removed. Some surgeons add energy-assisted techniques, which your surgeon will explain if they are part of your plan.',
      'Liposuction is a body-contouring procedure, not a treatment for obesity or a way to lose weight. The result depends on how elastic your skin is and on how much fat is removed. Where there is significant loose skin, a tummy tuck or other skin-removing procedure may suit better, and your surgeon will say so after reviewing your photographs.',
      'UK private prices depend heavily on how many areas are treated, so we show the Istanbul price as a starting point and list each area separately in your itemised quote. That lets you compare like for like with a UK quote.',
    ],
    suitability: [
      'Adults with localised fat deposits who are close to a stable, healthy weight',
      'Good skin elasticity in the area to be treated',
      'Good general health and realistic expectations about contour change rather than weight loss',
      'Non-smokers, or patients prepared to stop before and after surgery as advised',
    ],
    steps: [
      { t: 'Enquiry and quote', d: 'Tell us which areas concern you. You receive an itemised quote within 48 hours that names the hospital and surgeon.' },
      { t: 'Remote assessment', d: 'You complete a medical questionnaire and share photographs. Your surgeon confirms suitability and the areas that can be treated safely in one session.' },
      { t: 'Surgery in Istanbul', d: 'Surgery is usually under general anaesthesia and the time depends on the number of areas. You wear a compression garment afterwards.' },
      { t: 'Recovery and follow-up', d: 'You recover in Istanbul, attend post-operative checks and receive English-language operative notes and a discharge summary, sent to your UK GP on request.' },
    ],
    risks: [
      'Bruising and swelling that can take weeks to settle, with final contour appearing over several months',
      'Uneven contour, dimpling or asymmetry',
      'Fluid collection (seroma), infection and delayed healing',
      'Temporary or permanent numbness or altered sensation',
      'Loose skin after fat removal, particularly where elasticity is reduced',
      'Risks that rise with the volume removed or with several procedures at once, including fluid shifts and blood clots',
      'Rarely, fat embolism or injury to deeper structures',
      'Risks of general anaesthesia and of blood clots, including after flying',
    ],
    faqs: [
      { q: 'How much does liposuction cost in Istanbul compared with the UK?', a: 'Liposuction in Istanbul starts from £2,500. UK private clinics typically charge £3,000–£8,500, depending on how many areas are treated (published guide prices, collected October 2026). Because the price changes with each area, your itemised quote lists them separately and the difference you see depends on what you need.' },
      { q: 'Is liposuction a weight-loss treatment?', a: 'No. It reshapes areas of stubborn fat and works best close to your stable weight. Surgeons also limit how much fat they remove in one session for safety, so it cannot substitute for weight loss.' },
      { q: 'Will the fat come back?', a: 'Fat cells removed from the treated area do not regrow there. Remaining fat cells can still enlarge if you gain weight, which can change your shape, including in untreated areas.' },
      { q: 'What about loose skin?', a: 'Skin tightens variably after liposuction. If your skin is already loose, your surgeon may advise a procedure that removes skin instead of, or with, liposuction. This is one of the main things your remote assessment is for.' },
      { q: 'How long is recovery and when can I fly home?', a: 'Most patients stay in Istanbul for 5–7 days, subject to surgeon clearance, before flying home. You usually wear a compression garment for several weeks and avoid strenuous exercise as your surgeon advises. Compression stockings and moving regularly on the flight reduce clot risk.' },
      { q: 'What if I have a problem after I return?', a: 'Seek local medical care first if you need urgent help. The treating hospital remains responsible for agreed follow-up, and we help coordinate communication with them. We do not provide post-operative medical care. Ask before you commit whether revision procedures are covered and on what terms, and get the answer in writing.' },
    ],
    flying: 'Patients typically fly home 5–7 days after surgery, subject to surgeon clearance. Ask your surgeon about compression stockings and moving regularly on the flight.',
    related: ['plastic-surgery-istanbul', 'tummy-tuck-istanbul', 'bbl-istanbul'],
  },
  {
    slug: 'tummy-tuck-istanbul',
    name: 'Tummy tuck',
    h1: 'Tummy tuck in Istanbul.',
    h1em: 'From £3,500.',
    metaTitle: 'Tummy Tuck (Abdominoplasty) in Istanbul | From £3,500 | Ocean Health & Travel',
    metaDescription: 'Tummy tuck in Istanbul from £3,500 — UK private £7,200–£10,050 for mini to extended abdominoplasty. Board-certified surgeons at JCI-accredited hospitals, itemised quote within 48 hours.',
    sub: 'Abdominoplasty at JCI-accredited hospitals, with the type of tummy tuck and the price of each stage set out in your quote.',
    price: { istanbul: 'from £3,500', uk: '£7,200 – £10,050', saving: '~50–65%', stay: '7–10 days' },
    overview: [
      'A tummy tuck (abdominoplasty) removes excess skin and fat from the lower abdomen and can tighten the abdominal wall muscles, which often separate after pregnancy or large weight loss. A full abdominoplasty also repositions the navel. A mini abdominoplasty treats only the area below the navel, and an extended version continues around the flanks.',
      'Which type suits you depends on where the loose skin is, how much there is and whether the muscles need repair. Your surgeon reviews your photographs and medical history before you book travel. Liposuction is sometimes combined with it, and that changes the plan and the price.',
      'UK private clinics publish starting prices of about £7,200 for a mini, £9,200 for a full and £10,050 for an extended abdominoplasty. Your Istanbul quote states the type of procedure and what is included so you can compare directly.',
    ],
    suitability: [
      'Adults with loose abdominal skin or separated muscles after pregnancy or weight loss',
      'A stable weight, and no plans for further pregnancies or major weight change soon',
      'Good general health and realistic expectations about scarring',
      'Non-smokers, or patients prepared to stop well before and after surgery as advised',
    ],
    steps: [
      { t: 'Enquiry and quote', d: 'Tell us what you want to change. You receive an itemised quote within 48 hours that names the hospital and surgeon.' },
      { t: 'Remote assessment', d: 'You complete a medical questionnaire and share photographs. Your surgeon confirms the type of abdominoplasty and whether it is suitable.' },
      { t: 'Surgery in Istanbul', d: 'Surgery is under general anaesthesia and usually takes a few hours. You wake with a compression garment and may have surgical drains for a short time.' },
      { t: 'Recovery and follow-up', d: 'You recover in Istanbul, attend post-operative checks and receive English-language operative notes and a discharge summary, sent to your UK GP on request.' },
    ],
    risks: [
      'A permanent scar across the lower abdomen, which varies in how it heals',
      'Fluid collection (seroma), bleeding and infection',
      'Delayed wound healing or loss of skin at the wound edge, more likely in smokers',
      'Numbness of the lower abdomen, usually improving over time',
      'Contour irregularities, asymmetry or a need for revision',
      'Blood clots in the legs or lungs, which carry a higher risk after abdominoplasty and with long-haul travel',
      'Risks of general anaesthesia',
      'Tightness that limits standing fully upright for the first days',
    ],
    faqs: [
      { q: 'How much does a tummy tuck cost in Istanbul compared with the UK?', a: 'A tummy tuck in Istanbul starts from £3,500. UK private clinics publish starting prices of about £7,200 for a mini, £9,200 for a full and £10,050 for an extended abdominoplasty (collected October 2026). This is a saving of roughly 50–65% against the UK range, depending on the type of procedure. Your itemised quote names the type so you can compare like for like.' },
      { q: 'What is the difference between mini, full and extended?', a: 'A mini treats only the area below the navel. A full treats the whole abdomen and repositions the navel. An extended also continues around the sides. Your surgeon recommends one after reviewing your photographs, and the price changes with the type.' },
      { q: 'Can I have a tummy tuck if I plan another pregnancy?', a: 'Most surgeons advise waiting until you have finished having children, because pregnancy can undo the muscle repair and stretch the skin again. Your surgeon will discuss this with you.' },
      { q: 'How long is recovery and when can I fly home?', a: 'Most patients stay in Istanbul for 7–10 days, subject to surgeon clearance. You wear a compression garment for several weeks, walk gently from the first days and avoid strenuous exercise and heavy lifting as advised. Blood-clot prevention matters, including compression stockings and regular movement on the flight.' },
      { q: 'What are the scars like?', a: 'The scar sits low, usually along the bikini line, and extends further with a full or extended procedure. All scars mature over many months and vary between patients. Your surgeon will show you where yours will be.' },
      { q: 'What if I have a problem after I return?', a: 'Seek local medical care first if you need urgent help. The treating hospital remains responsible for agreed follow-up, and we help coordinate communication with them. We do not provide post-operative medical care. Ask before you commit whether revision surgery is covered and on what terms, and get the answer in writing.' },
    ],
    flying: 'Patients typically fly home 7–10 days after surgery, subject to surgeon clearance. Blood-clot prevention matters after abdominoplasty: ask your surgeon about compression stockings and moving regularly on the flight.',
    related: ['plastic-surgery-istanbul', 'liposuction-istanbul', 'breast-augmentation-istanbul'],
  },
  {
    slug: 'bbl-istanbul',
    name: 'Brazilian butt lift',
    h1: 'Brazilian butt lift in Istanbul.',
    h1em: 'From £4,000.',
    metaTitle: 'Brazilian Butt Lift (BBL) in Istanbul | From £4,000 | Ocean Health & Travel',
    metaDescription: 'Brazilian butt lift in Istanbul from £4,000 — UK private from £11,995. Safety-first guidance, board-certified surgeons at JCI-accredited hospitals, itemised quote within 48 hours.',
    sub: 'Fat transfer to the buttocks at JCI-accredited hospitals. This procedure carries higher risk than most cosmetic surgery, so we set out what to ask before you book.',
    price: { istanbul: 'from £4,000', uk: 'from £11,995', saving: '~65%', stay: '7–10 days' },
    overview: [
      'A Brazilian butt lift (BBL) uses liposuction to take fat from areas such as the abdomen, flanks or thighs, then injects the purified fat into the buttocks to add volume and shape. It combines two procedures in one operation, so the price and the recovery reflect both.',
      'BBL carries a higher risk of serious complications than most cosmetic surgery, in particular fat embolism, which can be fatal. Plastic surgery societies advise placing fat only in the layer under the skin and never in or below the muscle. Before you commit, ask your surgeon to confirm in writing how and where fat will be placed.',
      'Not all of the transferred fat survives, so the volume at the end of surgery is greater than the final result. Your surgeon will explain this and agree realistic expectations with you.',
    ],
    suitability: [
      'Adults with enough fat to harvest from other areas to achieve the result they want',
      'A stable weight and good general health',
      'Realistic expectations, including that some fat will be lost',
      'Non-smokers, or patients prepared to stop before and after surgery as advised',
    ],
    steps: [
      { t: 'Enquiry and quote', d: 'Tell us what you are hoping for. You receive an itemised quote within 48 hours that names the hospital and surgeon.' },
      { t: 'Remote assessment', d: 'You complete a medical questionnaire and share photographs. Your surgeon confirms suitability and the technique. Ask them to confirm in writing where the fat will be placed.' },
      { t: 'Surgery in Istanbul', d: 'Surgery is under general anaesthesia, with liposuction first and fat transfer second. You wear a compression garment afterwards.' },
      { t: 'Recovery and follow-up', d: 'You recover in Istanbul, avoid sitting or lying directly on the buttocks as instructed, attend post-operative checks and receive English-language notes for your GP.' },
    ],
    risks: [
      'Fat embolism, a rare but potentially fatal complication, which carries a higher risk in BBL than in most cosmetic procedures',
      'Loss of a proportion of the transferred fat, so volume can reduce in the months after surgery',
      'Contour irregularities, asymmetry and lumpiness, both at the donor and the treated areas',
      'Bruising, swelling, fluid collection and infection',
      'Pressure on the transferred fat can reduce its survival, so there are limits on sitting and lying for several weeks',
      'Numbness or altered sensation',
      'Blood clots in the legs or lungs, including after flying',
      'Risks of general anaesthesia',
    ],
    faqs: [
      { q: 'How much does a BBL cost in Istanbul compared with the UK?', a: 'A BBL in Istanbul starts from £4,000. One UK private clinic that publishes a price lists it from £11,995 (collected October 2026), which would make the saving about 65%. This is a single published source, so use it as a guide rather than a market average. Your itemised quote states the donor areas and what is included.' },
      { q: 'Is a BBL safe?', a: 'It carries more risk than most cosmetic procedures, mainly because of the risk of fat embolism if fat is placed in or below muscle. Surgeons reduce the risk by placing fat only in the layer under the skin. Ask your surgeon to confirm how they do this, in writing, and ask about their experience with the procedure. Do not choose a BBL on price alone.' },
      { q: 'How long do the results last?', a: 'A proportion of the transferred fat does not survive, so volume reduces over the first months. The fat that remains is long lasting, but your weight and body shape can still change the result. Your surgeon will explain what to expect.' },
      { q: 'How long is recovery and when can I fly home?', a: 'Most patients stay in Istanbul for 7–10 days, subject to surgeon clearance. You wear a compression garment, avoid sitting or lying directly on the buttocks for the time your surgeon specifies, and avoid strenuous exercise. Flying requires blood-clot precautions: ask about compression stockings and moving regularly.' },
      { q: 'Can I have a BBL if I do not have much fat to harvest?', a: 'Not always. If you do not have enough fat, your surgeon may advise a smaller change or a different approach, such as an implant. This is one of the main questions your remote assessment is for.' },
      { q: 'What if I have a problem after I return?', a: 'Seek local medical care first if you need urgent help. The treating hospital remains responsible for agreed follow-up, and we help coordinate communication with them. We do not provide post-operative medical care. Ask before you commit whether revision procedures are covered and on what terms, and get the answer in writing.' },
    ],
    flying: 'Patients typically fly home 7–10 days after surgery, subject to surgeon clearance. Blood-clot prevention matters after BBL: ask about compression stockings, moving regularly and how to sit on the flight.',
    related: ['plastic-surgery-istanbul', 'liposuction-istanbul', 'tummy-tuck-istanbul'],
  },
  {
    slug: 'mini-facelift-istanbul',
    name: 'Mini facelift',
    h1: 'Mini facelift in Istanbul.',
    h1em: 'From £5,000.',
    metaTitle: 'Mini Facelift in Istanbul | From £5,000 | Ocean Health & Travel',
    metaDescription: `Mini facelift in Istanbul from £5,000 — UK private typically ${UK_PRICES.facelift.compact}. Board-certified surgeons at JCI-accredited hospitals, itemised quote within 48 hours.`,
    sub: 'Lower-face and jowl rejuvenation at JCI-accredited hospitals. A full facelift or a face and neck lift is quoted individually.',
    price: { istanbul: 'from £5,000', uk: UK_PRICES.facelift.range, saving: '~15–40%', stay: '7–10 days' },
    overview: [
      'A mini facelift (also called a MACS or short-scar lift) lifts the lower face and jowls through shorter incisions, mostly around the ear, than a full facelift. It treats earlier signs of ageing in the lower face and does not usually address the neck or the upper face to the same extent.',
      'A full facelift or a face and neck lift treats more of the face and neck, takes longer and costs more, so the surgeon assesses which operation matches what you want. Your remote assessment is the place to ask whether a mini lift will give the change you expect or whether a fuller operation would.',
      'UK private prices for a mini facelift are typically £6,000–£8,500, while standard and deeper lifts are higher. Your Istanbul quote states which type of facelift is priced so you can compare the same operation.',
    ],
    suitability: [
      'Adults with early to moderate jowls and lower-face laxity and reasonable skin quality',
      'Good general health, including controlled blood pressure',
      'Realistic expectations: a facelift refreshes the face but does not stop ageing',
      'Non-smokers, or patients prepared to stop well before and after surgery as advised',
    ],
    steps: [
      { t: 'Enquiry and quote', d: 'Tell us what you want to change. You receive an itemised quote within 48 hours that names the hospital and surgeon.' },
      { t: 'Remote assessment', d: 'You complete a medical questionnaire and share photographs. Your surgeon confirms whether a mini lift is the right operation.' },
      { t: 'Surgery in Istanbul', d: 'Surgery is under general anaesthesia or sedation with local anaesthesia, as your surgeon advises, and usually takes a few hours.' },
      { t: 'Recovery and follow-up', d: 'You recover in Istanbul, attend post-operative checks and receive English-language operative notes and a discharge summary, sent to your UK GP on request.' },
    ],
    risks: [
      'Bruising and swelling that take weeks to settle',
      'Bleeding under the skin (haematoma), which is more common in facelifts than in most cosmetic procedures and sometimes needs further surgery',
      'Scarring around the ear and hairline, and hair thinning near the incisions',
      'Temporary or, rarely, permanent injury to the nerves that move the face',
      'Numbness or altered sensation, usually improving over time',
      'Delayed wound healing or loss of skin, particularly in smokers',
      'Asymmetry or an unsatisfactory result requiring revision',
      'Risks of anaesthesia and of blood clots, including after flying',
    ],
    faqs: [
      { q: 'How much does a mini facelift cost in Istanbul compared with the UK?', a: 'A mini facelift in Istanbul starts from £5,000. UK private clinics typically charge £6,000–£8,500 for a mini or MACS lift (published guide prices, collected October 2026), a saving of roughly 15–40%. Standard and deeper facelifts cost more in the UK. Your quote names which operation is priced so you can compare it directly.' },
      { q: 'What is the difference between a mini and a full facelift?', a: 'A mini lift uses shorter incisions and treats mainly the lower face and jowls. A full facelift treats more of the face and neck with longer incisions and a longer operation. Your surgeon advises which suits you.' },
      { q: 'How long do the results last?', a: 'Results vary with the technique, your skin and your age, and the face continues to age afterwards. Most surgeons describe a mini lift as refreshing the face by several years rather than stopping the clock. Your surgeon will give you an honest view.' },
      { q: 'How long is recovery and when can I fly home?', a: 'Most patients stay in Istanbul for 7–10 days, subject to surgeon clearance. Visible bruising and swelling typically need a couple of weeks to settle. You avoid strenuous exercise and follow your surgeon\'s instructions on positioning and activity. Moving regularly on the flight reduces clot risk.' },
      { q: 'What if I have a problem after I return?', a: 'Seek local medical care first if you need urgent help, for example for sudden swelling on one side of the face. The treating hospital remains responsible for agreed follow-up, and we help coordinate communication with them. We do not provide post-operative medical care. Ask before you commit whether revision procedures are covered and on what terms, and get the answer in writing.' },
    ],
    flying: 'Patients typically fly home 7–10 days after surgery, subject to surgeon clearance. Ask your surgeon about positioning and moving regularly on the flight.',
    related: ['plastic-surgery-istanbul', 'blepharoplasty-istanbul', 'rhinoplasty-istanbul'],
  },
  {
    slug: 'blepharoplasty-istanbul',
    name: 'Eyelid surgery',
    h1: 'Eyelid surgery in Istanbul.',
    h1em: 'From £1,800.',
    metaTitle: 'Eyelid Surgery (Blepharoplasty) in Istanbul | From £1,800 | Ocean Health & Travel',
    metaDescription: 'Eyelid surgery (blepharoplasty) in Istanbul from £1,800 — UK private from £4,995 for upper lids. Board-certified surgeons at JCI-accredited hospitals, itemised quote within 48 hours.',
    sub: 'Upper and lower eyelid correction at JCI-accredited hospitals, with a short stay and an itemised quote.',
    price: { istanbul: 'from £1,800', uk: 'from £4,995 (upper lids)', saving: '~60%', stay: '3–5 days' },
    overview: [
      'Blepharoplasty removes or repositions excess skin, and sometimes fat, from the upper eyelids, the lower eyelids or both. Upper lid surgery treats hooded or heavy lids. Lower lid surgery treats bags and loose skin. Some patients have a functional reason as well, such as lids that interfere with vision.',
      'The operation is usually shorter than other facial surgery and the stay in Istanbul is correspondingly short. Your surgeon decides, after reviewing your photographs, whether you need upper lids, lower lids or both, and whether a brow lift would suit better when the brow is low.',
      'UK private clinics publish about £4,995 for both upper lids, about £5,995 for both lower lids and about £9,395 for upper and lower together. Your Istanbul quote names which lids are priced.',
    ],
    suitability: [
      'Adults with excess upper lid skin, hooded lids or lower lid bags',
      'Good general health and healthy eyes. Tell your surgeon about dry eyes, glaucoma or thyroid eye disease',
      'Realistic expectations: surgery refreshes the eyes but does not change their shape or colour',
      'Non-smokers, or patients prepared to stop before and after surgery as advised',
    ],
    steps: [
      { t: 'Enquiry and quote', d: 'Tell us which lids concern you. You receive an itemised quote within 48 hours that names the hospital and surgeon.' },
      { t: 'Remote assessment', d: 'You complete a medical questionnaire, including any eye conditions, and share photographs. Your surgeon confirms the plan.' },
      { t: 'Surgery in Istanbul', d: 'Surgery is under local anaesthesia with sedation or general anaesthesia, as your surgeon advises, and usually takes one to two hours.' },
      { t: 'Recovery and follow-up', d: 'You attend post-operative checks, have sutures removed as planned and receive English-language operative notes for your UK GP.' },
    ],
    risks: [
      'Bruising and swelling that usually take one to two weeks to settle',
      'Dry, gritty or watering eyes, which can be temporary or persistent',
      'Asymmetry, or an unsatisfactory result requiring revision',
      'Difficulty fully closing the eyes, usually temporary',
      'Lower lid malposition, where the lid pulls down or away from the eye, which may need further surgery',
      'Scarring, which is usually discreet but varies between patients',
      'Infection and bleeding. Bleeding behind the eye is rare, but it is an emergency because it can threaten sight',
      'Risks of anaesthesia',
    ],
    faqs: [
      { q: 'How much does eyelid surgery cost in Istanbul compared with the UK?', a: 'Eyelid surgery in Istanbul starts from £1,800. UK private clinics publish about £4,995 for both upper lids, about £5,995 for both lower lids and about £9,395 for upper and lower together (collected October 2026). Against the UK upper-lid price this is a saving of roughly 60%. Your itemised quote states which lids are priced.' },
      { q: 'Do I need upper lids, lower lids or both?', a: 'Your surgeon decides after reviewing your photographs. Upper lids treat hooded or heavy lids, lower lids treat bags and loose skin, and many patients benefit from a combination. A low brow may need a brow lift instead of, or as well as, eyelid surgery.' },
      { q: 'How long is recovery and when can I fly home?', a: 'Most patients stay in Istanbul for 3–5 days, subject to surgeon clearance, for post-operative checks. Bruising and swelling usually take one to two weeks to settle. You avoid contact lenses, make-up and strenuous exercise for the period your surgeon specifies. Use lubricating drops as advised.' },
      { q: 'What if I have an eye problem after I return?', a: 'Seek urgent local medical care for a sudden change in vision, severe pain or rapid swelling around the eye. For other concerns the treating hospital remains responsible for agreed follow-up and we help coordinate communication with them. We do not provide post-operative medical care.' },
      { q: 'Can eyelid surgery be done with other procedures?', a: 'Often yes, for example with a brow lift or mini facelift. This changes the operation and the price, so your quote lists each component separately.' },
    ],
    flying: 'Patients typically fly home 3–5 days after surgery, subject to surgeon clearance. Ask your surgeon about lubricating drops and eye care on the flight.',
    related: ['plastic-surgery-istanbul', 'mini-facelift-istanbul', 'rhinoplasty-istanbul'],
  },
]

export const PROCEDURE_SLUGS = PROCEDURES.map(p => p.slug)
export const getProcedure = (slug: string) => PROCEDURES.find(p => p.slug === slug)
