'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

type Scenario = 'conservative' | 'moderate' | 'optimistic';

const industries = [
  'Professional Services',
  'Financial',
  'Healthcare',
  'Retail',
  'Manufacturing',
  'Other',
];

const revenueOptions = [
  { value: '<$1M', label: '<$1M' },
  { value: '$1M-$5M', label: '$1M–$5M' },
  { value: '$5M-$25M', label: '$5M–$25M' },
  { value: '$25M-$100M', label: '$25M–$100M' },
  { value: '$100M+', label: '$100M+' },
];

const multipliers: Record<Scenario, number> = {
  conservative: 0.6,
  moderate: 1.0,
  optimistic: 1.5,
};

export default function ROICalculatorPage() {
  const [industry, setIndustry] = useState('Professional Services');
  const [employees, setEmployees] = useState(100);
  const [revenue, setRevenue] = useState('$5M-$25M');
  const [interactions, setInteractions] = useState(5000);
  const [dataHours, setDataHours] = useState(40);
  const [errorRate, setErrorRate] = useState(5);
  const [scenario, setScenario] = useState<Scenario>('moderate');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const locale = useLocale();
  const t = useTranslations('roi');
  const basePath = `/${locale}`;

  const baseSavings = Math.round(
    employees * 0.15 * 2500 +
    (interactions / 1000) * 500 +
    dataHours * 12 * 50 +
    employees * (errorRate / 100) * 800
  );
  const mult = multipliers[scenario];
  const annualSavings = Math.round(baseSavings * mult);
  const timeSavings = Math.round((dataHours * 0.3 * 52 * mult) / 10) * 10;
  const errorReduction = Math.round((errorRate * 0.6 * mult) * 10) / 10;
  const productivityGain = Math.round((15 * mult + (employees < 100 ? 5 : 0)) * 10) / 10;

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
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Industry</label>
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3"
              >
                {industries.map((ind) => (
                  <option key={ind} value={ind}>{ind}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">{t('employees')}</label>
              <input
                type="number"
                min="10"
                max="50000"
                value={employees}
                onChange={(e) => setEmployees(Math.max(10, Math.min(50000, Number(e.target.value))))}
                className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Annual Revenue</label>
              <select
                value={revenue}
                onChange={(e) => setRevenue(e.target.value)}
                className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3"
              >
                {revenueOptions.map((r) => (
                  <option key={r.value} value={r.value}>{r.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Customer Interactions/mo</label>
              <input
                type="number"
                min="0"
                max="1000000"
                value={interactions}
                onChange={(e) => setInteractions(Math.max(0, Number(e.target.value)))}
                className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Manual Data Processing hrs/wk</label>
              <input
                type="range"
                min="0"
                max="500"
                value={dataHours}
                onChange={(e) => setDataHours(Number(e.target.value))}
                className="mt-2 block w-full"
              />
              <p className="mt-1 text-sm text-gray-500">{dataHours} hrs</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Error/Rework Rate (%)</label>
              <input
                type="range"
                min="0"
                max="30"
                value={errorRate}
                onChange={(e) => setErrorRate(Number(e.target.value))}
                className="mt-2 block w-full"
              />
              <p className="mt-1 text-sm text-gray-500">{errorRate}%</p>
            </div>
          </div>

          <div className="mt-8 flex gap-2">
            {(['conservative', 'moderate', 'optimistic'] as const).map((s) => (
              <button
                key={s}
                onClick={() => setScenario(s)}
                className={`flex-1 rounded-lg px-4 py-2 text-sm font-medium capitalize transition ${
                  scenario === s
                    ? 'bg-[#4F46E5] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl bg-[#059669]/10 border border-[#059669]/20 p-4">
              <p className="text-sm font-medium text-gray-600">Estimated Annual Savings</p>
              <p className="text-2xl font-bold text-[#059669]">
                ${(annualSavings / 1000).toFixed(0)}K – ${(annualSavings / 500).toFixed(0)}K
              </p>
            </div>
            <div className="rounded-xl bg-gray-50 border border-gray-200 p-4">
              <p className="text-sm font-medium text-gray-600">Time Savings</p>
              <p className="text-2xl font-bold text-[#1A1A2E]">{timeSavings}+ hrs/year</p>
            </div>
            <div className="rounded-xl bg-gray-50 border border-gray-200 p-4">
              <p className="text-sm font-medium text-gray-600">Error Reduction</p>
              <p className="text-2xl font-bold text-[#1A1A2E]">~{errorReduction}%</p>
            </div>
            <div className="rounded-xl bg-gray-50 border border-gray-200 p-4">
              <p className="text-sm font-medium text-gray-600">Productivity Gain</p>
              <p className="text-2xl font-bold text-[#1A1A2E]">~{productivityGain}%</p>
            </div>
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
