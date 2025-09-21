import Link from 'next/link';
import {Button} from '@/components/ui/button';
import {ArrowDown} from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative flex h-screen min-h-[700px] items-center justify-center">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[#121212] bg-[radial-gradient(#1e1e1e_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="absolute inset-0 -z-20 h-full w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,255,240,0.1),rgba(255,255,255,0))]"></div>

      <div className="container mx-auto max-w-[1200px] px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
          Elevate Your Performance
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground md:text-xl">
          Luxury athletic wear engineered for peak results.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
          <Button asChild size="lg" className="active:scale-95">
            <Link href="/products">Explore Products</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="active:scale-95">
            <Link href="#">Learn More</Link>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 animate-fade-in">
        <ArrowDown className="h-6 w-6 text-foreground/50" />
      </div>
    </section>
  );
}
