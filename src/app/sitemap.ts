import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.klainerhealth.co.il'

  const staticPages = [
    '',
    '/about',
    '/services',
    '/patients',
    '/workshops',
    '/contact',
    '/blog',
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.8,
  }))

  const blogPosts = [
    'bariatric-five-things',
    'bariatric-preparation-importance',
    'bariatric-post-surgery-followup',
    'bariatric-supplements-essentials',
    'bariatric-preoperative-nutrition',
    'emotional-eating',
    'esg-review',
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...blogPosts]
}