'use client';

import { motion } from 'framer-motion';
import { tweets } from '@/data/tweets';

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export function TwitterFeed() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#1A1A2E] text-center mb-4"
        >
          AI Insights from the Field
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 mb-16"
        >
          Curated perspectives on AI implementation
        </motion.p>
        <div className="grid md:grid-cols-2 gap-6">
          {tweets.map((tweet, i) => (
            <motion.article
              key={tweet.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl bg-white p-6 shadow-lg border border-gray-200"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1A1A2E] text-white font-bold">
                  V
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-[#1A1A2E]">{tweet.author_name}</span>
                    <span className="text-gray-500 text-sm">{tweet.author_handle}</span>
                    <span className="text-gray-400 text-sm">·</span>
                    <time className="text-gray-400 text-sm">{formatDate(tweet.date)}</time>
                  </div>
                  <p className="mt-2 text-gray-700 leading-relaxed whitespace-pre-wrap">
                    {tweet.tweet_text}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-gray-400">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="text-xs">X</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
