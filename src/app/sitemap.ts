import { MetadataRoute } from 'next';

const SITE_URL = 'https://vailis.ai';
const locales = ['en', 'ka', 'ru'];
const pages = [
  '',
  '/case-studies',
  '/services',
  '/approach',
  '/about',
  '/insights',
  '/contact',
  '/roi-calculator',
  '/privacy',
  '/terms',
  '/case-studies/klarna-ai-customer-service',
  '/case-studies/duolingo-ai-content',
  '/case-studies/unilever-supply-chain',
  '/case-studies/american-express-customer-intelligence',
  '/case-studies/siemens-predictive-maintenance',
  '/case-studies/coca-cola-digital-transformation',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries = locales.flatMap((locale) =>
    pages.map((page) => ({
      url: `${SITE_URL}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: page === '' ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${SITE_URL}/${l}${page}`])
        ),
      },
    }))
  );
  return entries;
}
