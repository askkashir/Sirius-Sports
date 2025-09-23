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
      <div className="py-24 sm:py-32">
        <div className="container mx-auto max-w-[1200px] px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl">
              Why Choose Sirius Sports
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
              Sirius Sports delivers precision-crafted, athlete-tested apparel
              that blends performance, modern design, and sustainable innovation
              built to fit perfectly, perform relentlessly, and inspire
              confidence worldwide.
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
