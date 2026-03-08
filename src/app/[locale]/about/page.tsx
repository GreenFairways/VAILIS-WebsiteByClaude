import Link from 'next/link';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { createAlternates } from '@/lib/alternates';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return { alternates: createAlternates('/about', locale) };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('nav');
  const basePath = `/${locale}`;

  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#1A1A2E]">About VAILIS</h1>
        <p className="mt-6 text-xl text-gray-600">
          VAILIS is an AI Execution Partner — we turn AI strategies into business results.
          We combine deep technical expertise with proven implementation methodologies to help
          enterprises navigate the AI adoption journey.
        </p>
        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-[#1A1A2E]">Our Mission</h2>
            <p className="mt-2 text-gray-700">
              To bridge the gap between AI promise and AI delivery. 95% of AI pilots fail to
              deliver ROI — we exist to change that by focusing on execution, change management,
              and measurable outcomes.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-[#1A1A2E]">Our Values</h2>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>• <strong>Proof over promises</strong> — Every claim backed by data</li>
              <li>• <strong>Transparency</strong> — Honest about what works and what doesn&apos;t</li>
              <li>• <strong>Partnership</strong> — We succeed when our clients succeed</li>
              <li>• <strong>Execution focus</strong> — Strategy without execution is just theory</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-[#1A1A2E]">Technology Partners</h2>
            <p className="mt-2 text-gray-700">
              We work with industry-leading platforms: OpenAI, Anthropic, AWS, Google Cloud,
              Microsoft Azure. We evaluate the best fit for each use case — no vendor lock-in.
            </p>
          </section>
        </div>
        <div className="mt-16">
          <Link
            href={`${basePath}/contact`}
            className="inline-flex rounded-lg bg-[#4F46E5] px-8 py-3 text-base font-semibold text-white hover:bg-[#4338CA] transition"
          >
            {t('bookAudit')}
          </Link>
        </div>
      </div>
    </div>
  );
}

