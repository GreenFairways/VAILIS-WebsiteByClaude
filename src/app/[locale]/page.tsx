import type { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { ProblemSection } from '@/components/home/ProblemSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { CaseStudiesPreview } from '@/components/home/CaseStudiesPreview';
import { ROITeaser } from '@/components/home/ROITeaser';
import { TwitterFeed } from '@/components/home/TwitterFeed';
import { MethodologyPreview } from '@/components/home/MethodologyPreview';
import { TrustSection } from '@/components/home/TrustSection';
import { FAQSection } from '@/components/FAQSection';
import { CTASection } from '@/components/home/CTASection';
import { createAlternates } from '@/lib/alternates';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const alternates = createAlternates('', locale);
  return { alternates };
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <CaseStudiesPreview />
      <ROITeaser />
      <TwitterFeed />
      <MethodologyPreview />
      <TrustSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
