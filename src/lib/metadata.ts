const SITE_URL = 'https://vailis.ai';
const locales = ['en', 'ka', 'ru'] as const;

export function getAlternates(path: string) {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return {
    canonical: `${SITE_URL}/en${normalized === '/' ? '' : normalized}`,
    languages: {
      'x-default': `${SITE_URL}/en${normalized === '/' ? '' : normalized}`,
      en: `${SITE_URL}/en${normalized === '/' ? '' : normalized}`,
      ka: `${SITE_URL}/ka${normalized === '/' ? '' : normalized}`,
      ru: `${SITE_URL}/ru${normalized === '/' ? '' : normalized}`,
    },
  };
}
