import { MetadataRoute } from 'next'
import { headers } from 'next/headers'

// Update when page content changes materially. A constant (not new Date()) so lastmod stays trustworthy.
const LAST_MODIFIED = new Date('2026-10-22')

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const host = (await headers()).get('host') ?? ''
  if (host.includes('surgicheck.net')) return [] // noindex property: no sitemap
  const baseUrl = 'https://www.oceanhealthtravel.com'

  const treatments = [
    'plastic-surgery-istanbul',
    'rhinoplasty-istanbul',
    'neurosurgery-istanbul',
    'deep-brain-stimulation-turkey',
    'dbs-assessment',
    'dental-istanbul',
    'dental-implants-turkey',
    'ophthalmology-istanbul',
    'lasik-istanbul',
    'hair-transplant-istanbul',
    'knee-replacement-turkey',
    'urology-istanbul',
  ]

  const legal = [
    'privacy-policy',
    'complaints-policy',
    'cookie-policy',
    'brokerage-agreement',
  ]

  return [
    {
      url: baseUrl,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    ...treatments.map(slug => ({
      url: `${baseUrl}/treatments/${slug}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    {
      url: `${baseUrl}/pre-operative-assessment`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    ...legal.map(slug => ({
      url: `${baseUrl}/${slug}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    })),
  ]
}
