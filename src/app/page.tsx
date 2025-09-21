import {HeroSection} from '@/components/hero-section';
import {ProductTeaserGrid} from '@/components/product-teaser-grid';
import {WhyPeakWear} from '@/components/why-peakwear';

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyPeakWear />
      <ProductTeaserGrid />
    </>
  );
}
