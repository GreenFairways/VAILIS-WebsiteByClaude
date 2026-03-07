import type { Metadata } from 'next';
import '../globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CookieBanner } from '@/components/CookieBanner';
import { routing } from '@/i18n/routing';

export const metadata: Metadata = {
  title: 'VAILIS.ai | AI Execution Partner',
  description:
    'We turn AI into business results. Execution partner for AI integration. Measurable ROI. Proven methodologies.',
  openGraph: {
    title: 'VAILIS.ai | AI Execution Partner',
    description: 'We turn AI into business results. Execution partner for AI integration.',
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
          <CookieBanner />
        </NextIntlClientProvider>
  );
}
