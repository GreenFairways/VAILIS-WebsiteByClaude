'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { caseStudies } from '@/data/case-studies';

const featured = caseStudies.slice(0, 3);

export function CaseStudiesPreview() {
  const locale = useLocale();
  const t = useTranslations('caseStudies');
  const basePath = `/${locale}`;

  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-[#1A1A2E]">{t('featured')}</h2>
          <p className="mt-2 text-gray-600">{t('subtitle')}</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((cs, i) => (
            <motion.article
              key={cs.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl bg-white p-6 shadow-lg border border-gray-100 hover:shadow-xl transition"
            >
              <span className="text-xs font-medium text-[#4F46E5]">{cs.industry}</span>
              <h3 className="mt-2 text-lg font-semibold text-[#1A1A2E]">{cs.company}</h3>
              <p className="mt-1 text-2xl font-bold text-[#059669]">
                {cs.metrics[0]?.value} {cs.metrics[0]?.label}
              </p>
              <p className="mt-2 text-gray-600 text-sm line-clamp-2">{cs.challenge}</p>
              <Link
                href={`${basePath}/case-studies/${cs.slug}`}
                className="mt-4 inline-flex items-center text-sm font-medium text-[#4F46E5] hover:underline"
              >
                {t('readFull')} →
              </Link>
            </motion.article>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href={`${basePath}/case-studies`}
            className="inline-flex rounded-lg bg-[#4F46E5] px-6 py-3 text-sm font-semibold text-white hover:bg-[#4338CA] transition"
          >
            View All Case Studies
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
