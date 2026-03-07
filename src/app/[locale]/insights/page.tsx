import Link from 'next/link';
import { useLocale } from 'next-intl';
import { tweets } from '@/data/tweets';

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export default async function InsightsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const basePath = `/${locale}`;

  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#1A1A2E]">Insights & Thought Leadership</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Curated perspectives on AI implementation, industry trends, and practical guidance
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-semibold text-[#1A1A2E] mb-8">From Our Feed</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {tweets.map((tweet) => (
              <article
                key={tweet.id}
                className="rounded-2xl bg-white border border-gray-200 p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-[#1A1A2E] flex items-center justify-center text-white font-bold">
                    V
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1A2E]">{tweet.author_name}</p>
                    <p className="text-sm text-gray-500">{tweet.author_handle} · {formatDate(tweet.date)}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{tweet.tweet_text}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="mt-16 rounded-2xl bg-gray-50 border border-gray-200 p-12 text-center">
          <h3 className="text-xl font-semibold text-[#1A1A2E]">Stay updated</h3>
          <p className="mt-2 text-gray-600">Follow our insights and industry analysis</p>
          <Link
            href={`${basePath}/contact`}
            className="mt-6 inline-flex rounded-lg bg-[#4F46E5] px-6 py-3 text-sm font-semibold text-white hover:bg-[#4338CA] transition"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
