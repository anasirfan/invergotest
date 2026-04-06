const BASE_URL = 'https://www.invergodesign.com';

export default function sitemap() {
  const staticPages = [
    { url: `${BASE_URL}`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/packages`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/portfolio`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ];

  const servicePages = [
    'graphic-design',
    'video-editing',
    'web-development',
    'mobile-apps',
    'ecommerce',
    'va-consultation',
    'seo',
    'social-media',
    'lead-generation',
    'ebooks',
  ].map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const caseStudyPages = [
    'amh', 'billcamp', 'costa', 'dafinger', 'divine',
    'ringed', 'sous', 'stairparts', 'strategic',
  ].map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...caseStudyPages];
}
