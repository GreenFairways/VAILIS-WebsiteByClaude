const SITE = 'https://vailis.ai';

export function createAlternates(path: string, locale: string) {
  const p = path && !path.startsWith('/') ? `/${path}` : path || '';
  return {
    canonical: `${SITE}/${locale}${p}`,
    languages: {
      'x-default': `${SITE}/en${p}`,
      en: `${SITE}/en${p}`,
      ka: `${SITE}/ka${p}`,
      ru: `${SITE}/ru${p}`,
    },
  };
}
