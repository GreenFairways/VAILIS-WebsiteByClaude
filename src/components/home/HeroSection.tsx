'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const trustLogos = ['OpenAI', 'Anthropic', 'AWS', 'Google Cloud', 'Microsoft Azure'];

export function HeroSection() {
  const locale = useLocale();
  const t = useTranslations('hero');
  const basePath = `/${locale}`;

  return (
    <section className="relative overflow-hidden bg-[#1A1A2E] text-white">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4F46E5]/30 via-transparent to-transparent" />
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-[#4F46E5]/20 blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-[#059669]/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#4F46E5]/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-[#4F46E5]/10 rounded-full" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {t('headline')}
          </h1>
          <p className="mt-6 text-lg text-gray-300 sm:text-xl">
            {t('subhead')}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`${basePath}/contact`}
              className="rounded-lg bg-[#4F46E5] px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-[#4338CA] transition"
            >
              {t('ctaPrimary')}
            </Link>
            <Link
              href={`${basePath}/case-studies`}
              className="rounded-lg border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition"
            >
              {t('ctaSecondary')}
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-16 pt-16 border-t border-white/10"
        >
          <p className="text-center text-sm text-gray-400 mb-8">{t('trustBar')}</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-80">
            {trustLogos.map((logo) => (
              <span
                key={logo}
                className="text-lg font-medium text-gray-400"
              >
                {logo}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
