'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { caseStudies } from '@/data/case-studies';

const industries = [...new Set(caseStudies.map((c) => c.industry))];

export default function CaseStudiesPage() {
  const [filter, setFilter] = useState<string | null>(null);
  const locale = useLocale();
  const t = useTranslations('caseStudies');
  const basePath = `/${locale}`;

  const filtered = filter
    ? caseStudies.filter((c) => c.industry === filter)
    : caseStudies;

  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#1A1A2E]">{t('title')}</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">{t('subtitle')}</p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-12">
          <button
            onClick={() => setFilter(null)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
              !filter ? 'bg-[#4F46E5] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All
          </button>
          {industries.map((ind) => (
            <button
              key={ind}
              onClick={() => setFilter(ind)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                filter === ind ? 'bg-[#4F46E5] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {ind}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((cs) => (
            <article
              key={cs.slug}
              className="rounded-2xl bg-white border border-gray-200 p-6 hover:shadow-lg transition"
            >
              <span className="text-xs font-medium text-[#4F46E5]">{cs.industry}</span>
              <h2 className="mt-2 text-xl font-semibold text-[#1A1A2E]">{cs.company}</h2>
              <p className="mt-2 text-2xl font-bold text-[#059669]">
                {cs.metrics[0]?.value} {cs.metrics[0]?.label}
              </p>
              <p className="mt-3 text-gray-600">{cs.challenge}</p>
              <Link
                href={`${basePath}/case-studies/${cs.slug}`}
                className="mt-4 inline-flex items-center text-sm font-medium text-[#4F46E5] hover:underline"
              >
                {t('readFull')} →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
