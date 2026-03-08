import Link from 'next/link';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { createAlternates } from '@/lib/alternates';

const phases = [
  {
    num: 1,
    key: 'discovery',
    duration: '2–4 weeks',
    investment: '$15K–$30K',
    bullets: [
      'Business process analysis and opportunity identification',
      'Data infrastructure and quality assessment',
      'Stakeholder interviews (CEO, CTO, COO, department heads)',
      'AI readiness scoring (proprietary framework)',
      'Technology landscape evaluation',
    ],
    deliverable: 'AI Opportunity Report with ROI projections and prioritized use-case roadmap',
  },
  {
    num: 2,
    key: 'design',
    duration: '2–6 weeks',
    investment: '$20K–$50K',
    bullets: [
      'Solution architecture and technology selection (model-agnostic)',
      'Integration planning with existing systems (ERP, CRM, data warehouse)',
      'Security and compliance framework definition',
      'Change management plan and team training roadmap',
      'Success metrics and KPI framework',
    ],
    deliverable: 'Technical Design Document + Implementation Roadmap + Change Management Plan',
  },
  {
    num: 3,
    key: 'deploy',
    duration: '4–12 weeks',
    investment: '$30K–$100K+',
    bullets: [
      'Agile development in 2-week sprints with demo at end of each sprint',
      'Continuous testing, validation, and safety guardrails',
      'Team training and parallel operation (human + AI side by side)',
      'Performance monitoring and optimization',
      'Gradual traffic/load shifting from legacy to AI-powered process',
    ],
    deliverable: 'Production-ready AI solution + training materials + runbook',
  },
  {
    num: 4,
    key: 'scale',
    duration: 'Ongoing',
    investment: 'Retainer model',
    bullets: [
      'Performance monitoring, model maintenance, drift detection',
      'Expansion to additional use cases based on Phase 1 roadmap',
      'Continuous optimization based on production data',
      'Quarterly business reviews with executive reporting',
      'AI Center of Excellence setup support',
    ],
    deliverable: 'Ongoing support + quarterly impact reports + expansion recommendations',
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return { alternates: createAlternates('/approach', locale) };
}

export default async function ApproachPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('methodology');
  const basePath = `/${locale}`;

  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#1A1A2E]">{t('title')}</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Our phased methodology ensures measurable results at every stage
          </p>
        </div>

        <div className="space-y-8">
          {phases.map((p) => (
            <div
              key={p.num}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              <div className="flex gap-6 items-start">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#4F46E5] text-white font-bold text-xl">
                  {p.num}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <h2 className="text-xl font-semibold text-[#1A1A2E]">
                      {t(`steps.${p.key}`)}
                    </h2>
                    <span className="text-sm text-gray-500">
                      {p.duration} | {p.investment}
                    </span>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    {p.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#059669] mt-0.5">✓</span> {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 rounded-lg bg-[#4F46E5]/5 border border-[#4F46E5]/20 p-4">
                    <p className="text-sm font-semibold text-[#1A1A2E]">Deliverable</p>
                    <p className="mt-1 text-gray-700">{p.deliverable}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-[#1A1A2E] p-12 text-center text-white">
          <h3 className="text-2xl font-bold">Ready to get started?</h3>
          <p className="mt-2 text-gray-300">Book a free AI audit to assess your readiness</p>
          <Link
            href={`${basePath}/contact`}
            className="mt-6 inline-flex rounded-lg bg-[#4F46E5] px-8 py-3 text-base font-semibold text-white hover:bg-[#4338CA] transition"
          >
            Book a Free AI Audit
          </Link>
        </div>
      </div>
    </div>
  );
}
