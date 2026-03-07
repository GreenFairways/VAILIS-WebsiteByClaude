'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

export function Footer() {
  const locale = useLocale();
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const basePath = `/${locale}`;

  return (
    <footer className="bg-[#1A1A2E] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold text-white">VAILIS.ai</h3>
            <p className="mt-2 text-sm text-gray-400">
              AI Execution Partner
            </p>
            <p className="mt-1 text-sm text-gray-400">
              We turn AI into business results
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">{t('company')}</h4>
            <ul className="mt-4 space-y-3">
              <li><Link href={`${basePath}/about`} className="text-gray-300 hover:text-white transition">{tNav('about')}</Link></li>
              <li><Link href={`${basePath}/contact`} className="text-gray-300 hover:text-white transition">{tNav('contact')}</Link></li>
              <li><Link href={`${basePath}/insights`} className="text-gray-300 hover:text-white transition">{tNav('insights')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">{t('services')}</h4>
            <ul className="mt-4 space-y-3">
              <li><Link href={`${basePath}/services`} className="text-gray-300 hover:text-white transition">{tNav('services')}</Link></li>
              <li><Link href={`${basePath}/case-studies`} className="text-gray-300 hover:text-white transition">{tNav('caseStudies')}</Link></li>
              <li><Link href={`${basePath}/roi-calculator`} className="text-gray-300 hover:text-white transition">{tNav('roiCalculator')}</Link></li>
              <li><Link href={`${basePath}/approach`} className="text-gray-300 hover:text-white transition">{tNav('approach')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">{t('legal')}</h4>
            <ul className="mt-4 space-y-3">
              <li><Link href={`${basePath}/privacy`} className="text-gray-300 hover:text-white transition">{t('privacy')}</Link></li>
              <li><Link href={`${basePath}/terms`} className="text-gray-300 hover:text-white transition">{t('terms')}</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          {t('copyright', { year: new Date().getFullYear() })}
        </div>
      </div>
    </footer>
  );
}
