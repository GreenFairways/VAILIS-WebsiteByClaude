'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const locale = useLocale();
  const t = useTranslations('nav');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    setLoading(false);
  }

  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#1A1A2E]">Contact Us</h1>
        <p className="mt-4 text-xl text-gray-600">
          Book a free AI audit or get in touch with our team
        </p>

        <div className="mt-12 grid lg:grid-cols-2 gap-12">
          <div>
        {submitted ? (
          <div className="mt-12 rounded-2xl bg-[#059669]/10 border border-[#059669]/30 p-8 text-center">
            <p className="text-lg font-semibold text-[#059669]">Thank you!</p>
            <p className="mt-2 text-gray-700">
              We&apos;ve received your message and will get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-12 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:border-[#4F46E5] focus:ring-[#4F46E5]"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Work Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:border-[#4F46E5] focus:ring-[#4F46E5]"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:border-[#4F46E5] focus:ring-[#4F46E5]"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 shadow-sm focus:border-[#4F46E5] focus:ring-[#4F46E5]"
                placeholder="Tell us about your AI goals and challenges..."
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-[#4F46E5] px-6 py-4 text-base font-semibold text-white hover:bg-[#4338CA] transition disabled:opacity-70"
            >
              {loading ? 'Sending...' : t('bookAudit')}
            </button>
          </form>
        )}
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#1A1A2E]">Or book a meeting</h3>
            <p className="mt-2 text-gray-600 text-sm">Schedule a call at your convenience</p>
            <div className="mt-4 rounded-xl border border-gray-200 bg-gray-50 aspect-[4/3] flex items-center justify-center">
              <p className="text-gray-500 text-sm">Calendly or Cal.com embed — add your booking URL</p>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500">We respond within 4 business hours • Tbilisi, Georgia</p>
          <p className="mt-1 text-sm text-gray-500">Or email: hello@vailis.ai</p>
        </div>
      </div>
    </div>
  );
}
