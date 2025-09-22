import {AboutSection} from '@/components/about-section';
import {CategoriesTeaser} from '@/components/categories-teaser';
import {ContactSection} from '@/components/contact-section';
import {DevelopmentProcess} from '@/components/development-process';
import {HeroSection} from '@/components/hero-section';
import {StatsHighlight} from '@/components/stats-highlight';
import {WhySiriusSports} from '@/components/why-sirius-sports';

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="bg-gradient-to-b from-[#0a1e33] to-[#121212] py-24 sm:py-32">
        <div className="container mx-auto max-w-[1200px] px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
              Why Choose Sirius Sports
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-[#9e9e9e]">
              We don't just design sportswear – we elevate your performance.
              Every piece reflects our commitment to innovation, sustainability,
              and the future of athletic excellence.
            </p>
          </div>
          <WhySiriusSports />
        </div>
      </div>
      <AboutSection />
      <CategoriesTeaser />
      <DevelopmentProcess />
      <StatsHighlight />
      <ContactSection />
    </>
  );
}
