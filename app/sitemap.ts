import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.oceanhealthtravel.com'

  const treatments = [
    'plastic-surgery-istanbul',
    'rhinoplasty-istanbul',
    'neurosurgery-istanbul',
    'deep-brain-stimulation-turkey',
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
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    ...treatments.map(slug => ({
      url: `${baseUrl}/treatments/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    {
      url: `${baseUrl}/pre-operative-assessment`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    ...legal.map(slug => ({
      url: `${baseUrl}/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    })),
  ]
}
