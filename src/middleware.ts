import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
import { routing } from './i18n/routing';

const LOCALE_MAP: Record<string, string> = {
  GE: 'ka',
  RU: 'ru',
  AM: 'ru',
  AZ: 'ru',
  BY: 'ru',
  KZ: 'ru',
  KG: 'ru',
  UZ: 'ru',
  TJ: 'ru',
  MD: 'ru',
  UA: 'ru',
};

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const hasLocale = /^\/(en|ka|ru)(\/|$)/.test(pathname);

  if (!hasLocale) {
    const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
    const locale =
      cookieLocale && routing.locales.includes(cookieLocale as 'en' | 'ka' | 'ru')
        ? cookieLocale
        : LOCALE_MAP[((request as { geo?: { country?: string } }).geo?.country || '').toUpperCase()] || routing.defaultLocale;
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${pathname || ''}`;
    return Response.redirect(url);
  }

  return createMiddleware(routing)(request);
}

export const config = {
  matcher: ['/', '/(en|ka|ru)/:path*'],
};
