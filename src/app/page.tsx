import {AboutSection} from '@/components/about-section';
import {CategoriesTeaser} from '@/components/categories-teaser';
import {ContactSection} from '@/components/contact-section';
import {HeroSection} from '@/components/hero-section';
import {StatsHighlight} from '@/components/stats-highlight';
import {WhySiriusSports} from '@/components/why-sirius-sports';

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhySiriusSports />
      <AboutSection />
      <CategoriesTeaser />
      <StatsHighlight />
      <ContactSection />
    </>
  );
}
