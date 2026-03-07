'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const services = [
  { key: 'audit', href: '/services#audit', icon: '📋' },
  { key: 'integration', href: '/services#integration', icon: '⚡' },
  { key: 'agents', href: '/services#agents', icon: '🤖' },
  { key: 'training', href: '/services#training', icon: '📚' },
] as const;

export function ServicesSection() {
  const locale = useLocale();
  const t = useTranslations('services');
  const basePath = `/${locale}`;

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#1A1A2E] text-center mb-16"
        >
          {t('title')}
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-gray-200 p-6 hover:border-[#4F46E5]/50 hover:shadow-lg transition group"
            >
              <span className="text-3xl">{s.icon}</span>
              <h3 className="mt-4 text-lg font-semibold text-[#1A1A2E]">
                {t(`${s.key}.title`)}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                {t(`${s.key}.desc`)}
              </p>
              <Link
                href={`${basePath}${s.href}`}
                className="mt-4 inline-flex items-center text-sm font-medium text-[#4F46E5] group-hover:underline"
              >
                {t('learnMore')} →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
