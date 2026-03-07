'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function ProblemSection() {
  const t = useTranslations('problem');

  const stats = [
    { value: t('stats.stat1'), label: t('stats.stat1Label'), source: t('stats.stat1Source') },
    { value: t('stats.stat2'), label: t('stats.stat2Label'), source: t('stats.stat2Source') },
    { value: t('stats.stat3'), label: t('stats.stat3Label'), source: t('stats.stat3Source') },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#1A1A2E] text-center mb-16"
        >
          {t('title')}
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={item}
              className="rounded-2xl bg-white p-8 shadow-lg border border-gray-100"
            >
              <p className="text-4xl font-bold text-[#4F46E5]">{stat.value}</p>
              <p className="mt-2 text-gray-900 font-medium">{stat.label}</p>
              <p className="mt-1 text-sm text-gray-500">{stat.source}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-xl text-center text-[#1A1A2E] font-semibold max-w-2xl mx-auto"
        >
          {t('positioning')}
        </motion.p>
      </div>
    </section>
  );
}
