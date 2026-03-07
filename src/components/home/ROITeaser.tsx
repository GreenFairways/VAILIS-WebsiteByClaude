'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export function ROITeaser() {
  const [employees, setEmployees] = useState(100);
  const locale = useLocale();
  const t = useTranslations('roi');
  const basePath = `/${locale}`;

  const estimate = Math.round(employees * 2500);

  return (
    <section className="py-24 bg-[#1A1A2E] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold">{t('title')}</h2>
          <div className="mt-10 rounded-2xl bg-white/5 border border-white/10 p-8">
            <label className="block text-left text-sm font-medium text-gray-300 mb-2">
              {t('employees')}
            </label>
            <input
              type="range"
              min="10"
              max="10000"
              value={employees}
              onChange={(e) => setEmployees(Number(e.target.value))}
              className="w-full h-3 rounded-lg appearance-none cursor-pointer bg-white/20 accent-[#4F46E5]"
            />
            <div className="mt-4 flex justify-between text-sm text-gray-400">
              <span>10</span>
              <span className="font-semibold text-white">{employees.toLocaleString()}</span>
              <span>10,000</span>
            </div>
            <p className="mt-6 text-2xl font-bold text-[#059669]">
              {t('estimate')}: ~${(estimate / 1000).toFixed(0)}K–${(estimate / 500).toFixed(0)}K/year
            </p>
            <Link
              href={`${basePath}/roi-calculator`}
              className="mt-8 inline-flex rounded-lg bg-[#4F46E5] px-8 py-3 text-base font-semibold text-white hover:bg-[#4338CA] transition"
            >
              {t('cta')}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
