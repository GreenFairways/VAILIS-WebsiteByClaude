import Link from 'next/link';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { createAlternates } from '@/lib/alternates';
import { JsonLd } from '@/components/JsonLd';
import { serviceSchemas, faqSchema } from '@/lib/schema';
import { FAQSection } from '@/components/FAQSection';

const services = [
  {
    id: 'audit',
    icon: '📋',
    titleKey: 'audit.title',
    descKey: 'audit.desc',
    features: [
      'AI readiness assessment framework',
      'Opportunity mapping and prioritization',
      'ROI projection and business case development',
      'Technology stack evaluation',
      'Data quality and infrastructure audit',
    ],
    persona: 'CEO, CFO',
  },
  {
    id: 'integration',
    icon: '⚡',
    titleKey: 'integration.title',
    descKey: 'integration.desc',
    features: [
      'Custom LLM-powered solutions',
      'API integration and workflow automation',
      'RAG and retrieval systems',
      'Multi-model orchestration',
    ],
    persona: 'CTO, CIO',
  },
  {
    id: 'agents',
    icon: '🤖',
    titleKey: 'agents.title',
    descKey: 'agents.desc',
    features: [
      'Autonomous agents for customer service',
      'Operations and marketing automation',
      'Human-in-the-loop design',
      'Agent monitoring and optimization',
    ],
    persona: 'COO, CMO',
  },
  {
    id: 'training',
    icon: '📚',
    titleKey: 'training.title',
    descKey: 'training.desc',
    features: [
      'Team upskilling and AI literacy',
      'Process redesign for AI adoption',
      'Change management support',
      'Adoption metrics and governance',
    ],
    persona: 'All C-level',
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return { alternates: createAlternates('/services', locale) };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('services');
  const basePath = `/${locale}`;

  return (
    <div className="py-16 sm:py-24">
      {serviceSchemas.map((s, i) => (
        <JsonLd key={i} data={s} />
      ))}
      <JsonLd data={faqSchema} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#1A1A2E]">{t('title')}</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            End-to-end AI integration services from strategy to deployment
          </p>
        </div>

        <div className="space-y-16">
          {services.map((s) => (
            <section
              key={s.id}
              id={s.id}
              className="scroll-mt-24 rounded-2xl border border-gray-200 bg-white p-8 md:p-12"
            >
              <div className="flex items-start gap-6">
                <span className="text-4xl">{s.icon}</span>
                <div>
                  <h2 className="text-2xl font-bold text-[#1A1A2E]">{t(s.titleKey)}</h2>
                  <p className="mt-2 text-gray-600">{t(s.descKey)}</p>
                  <p className="mt-2 text-sm text-[#4F46E5]">Target: {s.persona}</p>
                  <ul className="mt-6 space-y-2">
                    {s.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700">
                        <span className="text-[#059669]">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`${basePath}/contact?service=${s.id}`}
                    className="mt-6 inline-flex rounded-lg bg-[#4F46E5] px-6 py-3 text-sm font-semibold text-white hover:bg-[#4338CA] transition"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </section>
          ))}
        </div>
        <div className="mt-24">
          <FAQSection />
        </div>
      </div>
    </div>
  );
}
