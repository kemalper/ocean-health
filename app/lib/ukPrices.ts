// Single source of truth for UK private price ranges shown on the site.
// Basis: published UK private provider prices, collected 22 Oct 2026 (web search summary supplied by the owner).
// Keep the underlying provider URLs and dates in an internal log so claims can be substantiated on request.
// Prose mentions (FAQ/meta) repeat these numbers as text: when you change a range here, search the repo for the old figures.

export const UK_PRICES = {
  rhinoplasty: {
    range: '£4,000 – £15,000',
    typical: '£6,000 – £10,000',
    compact: '£6,000–£10,000',
  },
  breastAugmentation: {
    range: '£3,500 – £8,000',
    typical: '£5,500 – £7,000',
    compact: '£5,500–£7,000',
  },
  liposuction: {
    range: '£3,000 – £8,500',
    typical: '£3,000 – £8,500',
    compact: '£3,000–£8,500',
  },
  // Mini / MACS facelift (matches the OHT "from £5,000" offer). Other UK types seen: standard SMAS £7,295–£12,000; face and neck lift £10,000–£15,000+; deep plane £13,000–£30,000+.
  // Sources (22 Oct 2026): berkshiregrovehospital.co.uk/articles/how-much-does-a-facelift-cost-in-the-uk, cckat.com/blog/how-much-does-a-facelift-cost-uk,
  // nhs.uk cosmetic facelift page, cadoganclinic.com facelift-cost, bellavou.co.uk facelift cost, noranugent.co.uk deep plane cost.
  facelift: {
    range: '£6,000 – £8,500',
    typical: '£6,000 – £8,500',
    compact: '£6,000–£8,500',
  },
} as const
