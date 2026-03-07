import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

const steps = [
  {
    num: 1,
    title: 'Discovery',
    desc: 'Assess AI readiness, map opportunities, prioritize use cases. Data quality and infrastructure audit.',
  },
  {
    num: 2,
    title: 'Design',
    desc: 'Architecture and roadmap. Define success metrics, technology stack, and implementation timeline.',
  },
  {
    num: 3,
    title: 'Deploy',
    desc: 'Implementation, integration, testing. Phased rollout with change management support.',
  },
  {
    num: 4,
    title: 'Scale',
    desc: 'Optimization, expansion, governance. Continuous improvement and ROI tracking.',
  },
];

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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#1A1A2E]">{t('title')}</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Our phased methodology ensures measurable results at every stage
          </p>
        </div>

        <div className="space-y-12">
          {steps.map((s) => (
            <div
              key={s.num}
              className="flex gap-8 items-start rounded-2xl border border-gray-200 bg-white p-8"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#4F46E5] text-white font-bold text-xl">
                {s.num}
              </div>
              <div>
                <h2 className="text-xl font-semibold text-[#1A1A2E]">
                  {t(`steps.${s.num === 1 ? 'discovery' : s.num === 2 ? 'design' : s.num === 3 ? 'deploy' : 'scale'}`)}
                </h2>
                <p className="mt-2 text-gray-600">{s.desc}</p>
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
