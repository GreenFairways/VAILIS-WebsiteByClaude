'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

export default function ROICalculatorPage() {
  const [employees, setEmployees] = useState(100);
  const [automation, setAutomation] = useState(20);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const locale = useLocale();
  const t = useTranslations('roi');
  const basePath = `/${locale}`;

  const savings = Math.round(employees * (automation / 100) * 2500);
  const monthly = Math.round(savings / 12);

  async function handleExport(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#1A1A2E]">ROI Calculator</h1>
        <p className="mt-4 text-xl text-gray-600">
          Estimate potential savings from AI integration
        </p>

        <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
          <div className="space-y-8">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {t('employees')}
              </label>
              <input
                type="number"
                min="10"
                max="100000"
                value={employees}
                onChange={(e) => setEmployees(Math.max(10, Number(e.target.value)))}
                className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                % of tasks automatable (10–50%)
              </label>
              <input
                type="range"
                min="10"
                max="50"
                value={automation}
                onChange={(e) => setAutomation(Number(e.target.value))}
                className="mt-2 block w-full"
              />
              <p className="mt-1 text-sm text-gray-500">{automation}%</p>
            </div>
          </div>

          <div className="mt-10 rounded-xl bg-[#059669]/10 border border-[#059669]/20 p-6">
            <h3 className="font-semibold text-[#1A1A2E]">Estimated Annual Savings</h3>
            <p className="mt-2 text-3xl font-bold text-[#059669]">
              ${(savings / 1000).toFixed(0)}K – ${(savings / 500).toFixed(0)}K
            </p>
            <p className="mt-1 text-gray-600">~${(monthly / 1000).toFixed(1)}K/month</p>
          </div>

          {!submitted ? (
            <form onSubmit={handleExport} className="mt-10">
              <label className="block text-sm font-medium text-gray-700">
                Email to receive full ROI report (PDF)
              </label>
              <div className="mt-2 flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  required
                  className="flex-1 rounded-lg border border-gray-300 px-4 py-3"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-[#4F46E5] px-6 py-3 text-sm font-semibold text-white hover:bg-[#4338CA] transition"
                >
                  {t('cta')}
                </button>
              </div>
            </form>
          ) : (
            <p className="mt-6 text-[#059669] font-medium">
              Report will be sent to your email. Check your inbox.
            </p>
          )}
        </div>

        <div className="mt-12 text-center">
          <Link
            href={`${basePath}/contact`}
            className="inline-flex items-center text-[#4F46E5] font-medium hover:underline"
          >
            Schedule a custom analysis →
          </Link>
        </div>
      </div>
    </div>
  );
}
