import type { Metadata } from 'next';
import { createAlternates } from '@/lib/alternates';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return { alternates: createAlternates('/insights', locale) };
}

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
