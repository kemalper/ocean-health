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
    'knee-replacement-turkey',n    'about',
  ]

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...treatments.map(slug => ({
      url: slug === 'about' ? `${baseUrl}/about` : `${baseUrl}/treatments/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
