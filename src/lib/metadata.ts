const SITE_URL = 'https://vailis.ai';
const locales = ['en', 'ka', 'ru'] as const;

export function getAlternates(path: string, locale: string = 'en') {
  const normalized = path ? (path.startsWith('/') ? path : `/${path}`) : '';
  const pathPart = normalized === '/' ? '' : normalized;
  return {
    canonical: `${SITE_URL}/${locale}${pathPart}`,
    languages: {
      'x-default': `${SITE_URL}/en${pathPart}`,
      en: `${SITE_URL}/en${pathPart}`,
      ka: `${SITE_URL}/ka${pathPart}`,
      ru: `${SITE_URL}/ru${pathPart}`,
    },
  };
}
