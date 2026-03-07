'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { JsonLd } from './JsonLd';
import { faqSchema } from '@/lib/schema';

const faqs = [
  {
    q: 'What does an AI Execution Partner do?',
    a: 'An AI Execution Partner takes AI from strategy to production. Unlike traditional consultants who deliver a report and leave, we own the full lifecycle: readiness audit, solution design, development, deployment, change management, and ongoing optimization. We ensure AI actually works in your business — not just in a demo.',
  },
  {
    q: 'How long does AI integration typically take?',
    a: 'Our phased approach delivers first results in 8–16 weeks. Phase 1 (Discovery) takes 2–4 weeks, Phase 2 (Design) takes 2–6 weeks, and Phase 3 (Deploy) takes 4–12 weeks depending on complexity. We emphasize fast time-to-value with measurable results at each stage.',
  },
  {
    q: 'What ROI can we expect from AI integration?',
    a: "ROI varies by use case, but industry data is compelling: 74% of executives report achieving ROI within the first year. Common results include 25–70% cost reduction in automated processes, 20–50% productivity gains, and 82% faster resolution times. Our ROI Calculator can provide an estimate tailored to your business.",
  },
  {
    q: 'Do you work with specific AI models or platforms?',
    a: 'We are model-agnostic and platform-flexible. We work with OpenAI (GPT-4), Anthropic (Claude), open-source models (Llama, Mistral), and cloud platforms (AWS, Azure, Google Cloud). We select the optimal architecture for each use case, ensuring no vendor lock-in and maximum flexibility for the future.',
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 bg-gray-50">
      <JsonLd data={faqSchema} />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#1A1A2E] text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl bg-white border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-6 py-4 text-left flex justify-between items-center font-semibold text-[#1A1A2E] hover:bg-gray-50 transition"
              >
                {faq.q}
                <span className="text-[#4F46E5] shrink-0 ml-2">
                  {open === i ? '−' : '+'}
                </span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-600">{faq.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
