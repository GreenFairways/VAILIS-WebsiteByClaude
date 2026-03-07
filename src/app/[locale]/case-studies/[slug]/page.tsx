import { notFound } from 'next/navigation';
import Link from 'next/link';
import { caseStudies } from '@/data/case-studies';
import { JsonLd } from '@/components/JsonLd';

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export default async function CaseStudyPage({ params }: Props) {
  const { locale, slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();

  const basePath = `/${locale}`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${cs.company}: AI Transformation — ${cs.metrics[0]?.value} ${cs.metrics[0]?.label}`,
    author: { '@type': 'Organization', name: 'VAILIS.ai' },
    datePublished: '2026-03-01',
    about: { '@type': 'Thing', name: cs.industry },
    mentions: [
      { '@type': 'Organization', name: cs.company },
      ...cs.techStack.slice(0, 2).map((t) => ({ '@type': 'Thing', name: t })),
    ],
  };

  return (
    <article className="py-16 sm:py-24">
      <JsonLd data={articleSchema} />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link
          href={`${basePath}/case-studies`}
          className="text-sm font-medium text-[#4F46E5] hover:underline"
        >
          ← Back to Case Studies
        </Link>
        <header className="mt-8">
          <span className="text-sm font-medium text-[#4F46E5]">{cs.industry}</span>
          <h1 className="mt-2 text-4xl font-bold text-[#1A1A2E]">{cs.company}</h1>
        </header>

        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          {cs.metrics.map((m, i) => (
            <div key={i} className="rounded-xl bg-gray-50 p-4">
              <p className="text-2xl font-bold text-[#059669]">{m.value}</p>
              <p className="text-sm text-gray-600">{m.label}</p>
            </div>
          ))}
        </div>

        <section className="mt-12 prose prose-lg max-w-none">
          <h2 className="text-xl font-semibold text-[#1A1A2E]">Challenge</h2>
          <p className="text-gray-700">{cs.challenge}</p>

          <h2 className="mt-8 text-xl font-semibold text-[#1A1A2E]">Solution</h2>
          <p className="text-gray-700">{cs.solution}</p>

          <h2 className="mt-8 text-xl font-semibold text-[#1A1A2E]">Key Results</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            {cs.results.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>

          <div className="mt-8 rounded-xl bg-[#4F46E5]/5 border border-[#4F46E5]/20 p-6">
            <h3 className="font-semibold text-[#1A1A2E]">Key Lesson</h3>
            <p className="mt-2 text-gray-700">{cs.keyLesson}</p>
          </div>

          <h2 className="mt-8 text-xl font-semibold text-[#1A1A2E]">Technology Stack</h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {cs.techStack.map((t) => (
              <span
                key={t}
                className="rounded-lg bg-gray-100 px-3 py-1 text-sm font-medium"
              >
                {t}
              </span>
            ))}
          </div>

          {(cs.ceoRelevance || cs.cfoRelevance || cs.ctoRelevance || cs.cooRelevance) && (
            <div className="mt-8 space-y-4">
              <h2 className="text-xl font-semibold text-[#1A1A2E]">Relevance by Role</h2>
              {cs.ceoRelevance && (
                <p><strong>CEO:</strong> {cs.ceoRelevance}</p>
              )}
              {cs.cfoRelevance && (
                <p><strong>CFO:</strong> {cs.cfoRelevance}</p>
              )}
              {cs.ctoRelevance && (
                <p><strong>CTO:</strong> {cs.ctoRelevance}</p>
              )}
              {cs.cooRelevance && (
                <p><strong>COO:</strong> {cs.cooRelevance}</p>
              )}
            </div>
          )}
        </section>

        <p className="mt-12 text-sm text-gray-500 italic">
          This case study is based on publicly available information and industry research.
          VAILIS.ai presents these as educational content demonstrating the transformative
          potential of AI integration across industries.
        </p>

        <div className="mt-12">
          <Link
            href={`${basePath}/contact`}
            className="inline-flex rounded-lg bg-[#4F46E5] px-6 py-3 text-sm font-semibold text-white hover:bg-[#4338CA] transition"
          >
            Book a Free AI Audit
          </Link>
        </div>
      </div>
    </article>
  );
}
