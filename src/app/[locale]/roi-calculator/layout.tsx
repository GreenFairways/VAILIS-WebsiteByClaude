import type { Metadata } from 'next';
import { createAlternates } from '@/lib/alternates';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return { alternates: createAlternates('/roi-calculator', locale) };
}

export default function ROILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
