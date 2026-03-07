'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export function CTASection() {
  const locale = useLocale();
  const t = useTranslations('cta');
  const basePath = `/${locale}`;

  return (
    <section className="py-24 bg-[#1A1A2E] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold sm:text-4xl"
        >
          {t('title')}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href={`${basePath}/contact`}
            className="rounded-lg bg-[#4F46E5] px-8 py-4 text-base font-semibold text-white hover:bg-[#4338CA] transition"
          >
            {t('primary')}
          </Link>
          <Link
            href={`${basePath}/contact?lead=checklist`}
            className="rounded-lg border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition"
          >
            {t('secondary')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
