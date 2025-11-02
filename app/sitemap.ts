import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const base = 'https://dev.hugo-nannucci.com'
    const now = new Date()
    return [
        { url: `${base}/`, lastModified: now, changeFrequency: 'monthly', priority: 1 },
        { url: `${base}/presentation`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${base}/apprentissage`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    ]
}


