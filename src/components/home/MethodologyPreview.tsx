'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const steps = [
  { key: 'discovery', num: 1 },
  { key: 'design', num: 2 },
  { key: 'deploy', num: 3 },
  { key: 'scale', num: 4 },
] as const;

export function MethodologyPreview() {
  const locale = useLocale();
  const t = useTranslations('methodology');
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#4F46E5] text-white font-bold text-lg">
                {s.num}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#1A1A2E]">
                {t(`steps.${s.key}`)}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                {t(`steps.${s.key}Desc`)}
              </p>
              {i < 3 && (
                <div className="hidden lg:block absolute top-6 left-[calc(3rem+1rem)] w-full h-0.5 bg-gray-200" />
              )}
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            href={`${basePath}/approach`}
            className="inline-flex rounded-lg bg-[#4F46E5] px-8 py-3 text-base font-semibold text-white hover:bg-[#4338CA] transition"
          >
            {t('cta')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
