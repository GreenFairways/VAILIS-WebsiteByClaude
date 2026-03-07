import { HeroSection } from '@/components/home/HeroSection';
import { ProblemSection } from '@/components/home/ProblemSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { CaseStudiesPreview } from '@/components/home/CaseStudiesPreview';
import { ROITeaser } from '@/components/home/ROITeaser';
import { TwitterFeed } from '@/components/home/TwitterFeed';
import { MethodologyPreview } from '@/components/home/MethodologyPreview';
import { TrustSection } from '@/components/home/TrustSection';
import { CTASection } from '@/components/home/CTASection';

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
      <CTASection />
    </>
  );
}
