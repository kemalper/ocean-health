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
} as const
