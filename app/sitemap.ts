import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [{
    url: 'https://farocasino14.vercel.app/',
    lastModified: new Date('2026-09-25'),
    changeFrequency: 'weekly',
    priority: 1,
  }]
}
