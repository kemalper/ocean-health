import { MetadataRoute } from 'next'
import { headers } from 'next/headers'

// The same deployment serves www.oceanhealthtravel.com and dbs.surgicheck.net.
// Each host must advertise only its own sitemap.
export default async function robots(): Promise<MetadataRoute.Robots> {
  const host = (await headers()).get('host') ?? ''
  if (host.includes('surgicheck.net')) {
    // The SurgiCheck page is noindex; keep it crawlable so the noindex is seen, and publish no sitemap.
    return { rules: { userAgent: '*', allow: '/' } }
  }
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://www.oceanhealthtravel.com/sitemap.xml',
  }
}
