'use client';

import { motion } from 'framer-motion';
import { CountUp } from '@/components/CountUp';

const partners = ['OpenAI', 'Anthropic', 'AWS', 'Google Cloud', 'Microsoft Azure'];
const badges = ['GDPR Compliant', 'SOC 2 Ready', 'ISO Aligned'];
const stats = [
  { value: 500, suffix: '+', label: 'AI projects researched' },
  { value: 4.4, suffix: 'T', prefix: '$', label: 'Projected AI economic impact' },
];

export function TrustSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-[#1A1A2E]">Trusted Technology Partners</h2>
          <div className="mt-10 flex flex-wrap justify-center gap-8 md:gap-12 text-gray-500">
            {partners.map((p) => (
              <span key={p} className="text-lg font-medium">
                {p}
              </span>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {badges.map((b) => (
              <span
                key={b}
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-[#059669] border border-[#059669]/30"
              >
                {b}
              </span>
            ))}
          </div>
          <div className="mt-16 grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <p className="text-4xl font-bold text-[#4F46E5]">
                  <CountUp end={s.value} prefix={s.prefix} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-gray-600">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
