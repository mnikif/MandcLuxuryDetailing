import { MetadataRoute } from 'next'

const cities = [
  "beverly",
  "salem",
  "danvers",
  "peabody",
  "gloucester",
  "manchester",
  "marblehead",
  "swampscott",
  "hamilton",
  "wenham",
  "lynn",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const cityPages: MetadataRoute.Sitemap = cities.map((slug) => ({
    url: `https://www.mandcluxurydetailing.com/locations/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [
    {
      url: 'https://www.mandcluxurydetailing.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://www.mandcluxurydetailing.com/services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://www.mandcluxurydetailing.com/membership',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...cityPages,
    {
      url: 'https://www.mandcluxurydetailing.com/gallery',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://www.mandcluxurydetailing.com/reviews',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://www.mandcluxurydetailing.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://www.mandcluxurydetailing.com/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]
}
