'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';

type Consent = { necessary: boolean; analytics: boolean; marketing: boolean };

function getConsent(): Consent | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(/cookie-consent=([^;]+)/);
  if (!match) return null;
  try {
    return JSON.parse(decodeURIComponent(match[1])) as Consent;
  } catch {
    return null;
  }
}

function setConsent(consent: Consent) {
  document.cookie = `cookie-consent=${encodeURIComponent(JSON.stringify(consent))};path=/;max-age=31536000`;
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [manageOpen, setManageOpen] = useState(false);
  const [prefs, setPrefs] = useState<Consent>({
    necessary: true,
    analytics: false,
    marketing: false,
  });
  const locale = useLocale();
  const basePath = `/${locale}`;

  useEffect(() => {
    if (getConsent() === null) setVisible(true);
  }, []);

  function acceptAll() {
    const consent = { necessary: true, analytics: true, marketing: true };
    setConsent(consent);
    setVisible(false);
    setManageOpen(false);
  }

  function savePreferences() {
    setConsent(prefs);
    setVisible(false);
    setManageOpen(false);
  }

  function rejectNonEssential() {
    const consent = { necessary: true, analytics: false, marketing: false };
    setConsent(consent);
    setVisible(false);
    setManageOpen(false);
  }

  if (!visible) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#1A1A2E] text-white px-4 py-4 shadow-lg">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm text-gray-300">
            We use cookies for site functionality and analytics. Read our{' '}
            <Link href={`${basePath}/privacy`} className="underline hover:text-white">
              Privacy Policy
            </Link>
            .
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              onClick={acceptAll}
              className="rounded-lg bg-[#4F46E5] px-4 py-2 text-sm font-medium hover:bg-[#4338CA] transition"
            >
              Accept All
            </button>
            <button
              onClick={() => setManageOpen(true)}
              className="rounded-lg border border-gray-500 px-4 py-2 text-sm font-medium hover:bg-gray-800 transition"
            >
              Manage Preferences
            </button>
            <button
              onClick={rejectNonEssential}
              className="rounded-lg px-4 py-2 text-sm text-gray-400 hover:text-white transition"
            >
              Necessary Only
            </button>
          </div>
        </div>
      </div>

      {manageOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4">
          <div className="max-w-md w-full rounded-2xl bg-[#1A1A2E] p-6 text-white shadow-xl">
            <h3 className="text-lg font-semibold">Cookie Preferences</h3>
            <p className="mt-2 text-sm text-gray-400">
              Choose which cookies you allow. Necessary cookies are required for the site to function.
            </p>
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Necessary</p>
                  <p className="text-xs text-gray-400">Required for site functionality</p>
                </div>
                <span className="text-gray-500 text-sm">Always on</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Analytics</p>
                  <p className="text-xs text-gray-400">Help us improve the site</p>
                </div>
                <button
                  onClick={() => setPrefs((p) => ({ ...p, analytics: !p.analytics }))}
                  className={`relative w-12 h-6 rounded-full transition ${
                    prefs.analytics ? 'bg-[#4F46E5]' : 'bg-gray-600'
                  }`}
                >
                  <span
                    className={`absolute top-1 w-4 h-4 rounded-full bg-white transition ${
                      prefs.analytics ? 'left-7' : 'left-1'
                    }`}
                  />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Marketing</p>
                  <p className="text-xs text-gray-400">Personalized content</p>
                </div>
                <button
                  onClick={() => setPrefs((p) => ({ ...p, marketing: !p.marketing }))}
                  className={`relative w-12 h-6 rounded-full transition ${
                    prefs.marketing ? 'bg-[#4F46E5]' : 'bg-gray-600'
                  }`}
                >
                  <span
                    className={`absolute top-1 w-4 h-4 rounded-full bg-white transition ${
                      prefs.marketing ? 'left-7' : 'left-1'
                    }`}
                  />
                </button>
              </div>
            </div>
            <div className="mt-6 flex gap-2">
              <button
                onClick={savePreferences}
                className="flex-1 rounded-lg bg-[#4F46E5] py-2 text-sm font-medium hover:bg-[#4338CA] transition"
              >
                Save Preferences
              </button>
              <button
                onClick={() => setManageOpen(false)}
                className="rounded-lg border border-gray-500 px-4 py-2 text-sm hover:bg-gray-800 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
