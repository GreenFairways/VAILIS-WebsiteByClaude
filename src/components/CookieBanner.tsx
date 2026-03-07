'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const locale = useLocale();
  const basePath = `/${locale}`;

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#1A1A2E] text-white px-4 py-4 shadow-lg">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-300">
          We use cookies for site functionality and analytics. By continuing, you agree to our{' '}
          <Link href={`${basePath}/privacy`} className="underline hover:text-white">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={accept}
            className="rounded-lg bg-[#4F46E5] px-4 py-2 text-sm font-medium hover:bg-[#4338CA] transition"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
