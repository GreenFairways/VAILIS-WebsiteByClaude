'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', labelKey: 'home' },
  { href: '/case-studies', labelKey: 'caseStudies' },
  { href: '/services', labelKey: 'services' },
  { href: '/approach', labelKey: 'approach' },
  { href: '/about', labelKey: 'about' },
  { href: '/insights', labelKey: 'insights' },
  { href: '/roi-calculator', labelKey: 'roiCalculator' },
  { href: '/contact', labelKey: 'contact' },
] as const;

const locales = [
  { code: 'en' as const, label: 'EN', flag: '🇬🇧' },
  { code: 'ka' as const, label: 'KA', flag: '🇬🇪' },
  { code: 'ru' as const, label: 'RU', flag: '🇷🇺' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations('nav');
  const basePath = `/${locale}`;

  const isActive = (href: string) => {
    if (href === '/') return pathname === basePath || pathname === `/${locale}`;
    return pathname.startsWith(`${basePath}${href}`);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href={basePath} className="text-xl font-bold text-[#1A1A2E]">
            VAILIS<span className="text-[#4F46E5]">.ai</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.slice(0, 6).map((link) => (
              <Link
                key={link.href}
                href={`${basePath}${link.href}`}
                className={`text-sm font-medium transition ${
                  isActive(link.href)
                    ? 'text-[#4F46E5]'
                    : 'text-gray-600 hover:text-[#1A1A2E]'
                }`}
              >
                {t(link.labelKey)}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-1 rounded-lg border border-gray-200 p-1">
              {locales.map((l) => (
                <Link
                  key={l.code}
                  href={pathname.replace(`/${locale}`, `/${l.code}`)}
                  className={`rounded-md px-2 py-1 text-xs font-medium ${
                    locale === l.code ? 'bg-[#4F46E5] text-white' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <Link
              href={`${basePath}/contact`}
              className="rounded-lg bg-[#4F46E5] px-4 py-2 text-sm font-semibold text-white hover:bg-[#4338CA] transition"
            >
              {t('bookAudit')}
            </Link>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-100"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={`${basePath}${link.href}`}
                    onClick={() => setMobileOpen(false)}
                    className={`block py-2 text-sm font-medium ${
                      isActive(link.href) ? 'text-[#4F46E5]' : 'text-gray-600'
                    }`}
                  >
                    {t(link.labelKey)}
                  </Link>
                ))}
                <div className="flex gap-2 pt-4">
                  {locales.map((l) => (
                    <Link
                      key={l.code}
                      href={pathname.replace(`/${locale}`, `/${l.code}`)}
                      className={`rounded-md px-3 py-1 text-sm ${
                        locale === l.code ? 'bg-[#4F46E5] text-white' : 'bg-gray-100'
                      }`}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
                <Link
                  href={`${basePath}/contact`}
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 block rounded-lg bg-[#4F46E5] px-4 py-3 text-center font-semibold text-white"
                >
                  {t('bookAudit')}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
