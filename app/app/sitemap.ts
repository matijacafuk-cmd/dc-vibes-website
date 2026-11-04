
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://dcvibes.hr',
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://dcvibes.hr/privatnost',
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://dcvibes.hr/prigovori',
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
