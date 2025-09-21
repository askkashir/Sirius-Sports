import Image from 'next/image';
import {Button} from '@/components/ui/button';
import {Leaf, Scissors, Zap} from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: 'Cutting-Edge Fabrics',
    description: 'Engineered for elite performance.',
  },
  {
    icon: <Scissors className="h-6 w-6 text-primary" />,
    title: 'Precision Fit',
    description: 'Tailored to your physique.',
  },
  {
    icon: <Leaf className="h-6 w-6 text-primary" />,
    title: 'Sustainable Impact',
    description: 'Built for the planet.',
  },
];

export function WhyPeakWear() {
  return (
    <section className="bg-secondary/30 py-24 sm:py-32">
      <div className="container mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
        <div className="h-full max-h-[600px] w-full overflow-hidden rounded-lg">
          <Image
            src="https://picsum.photos/seed/fabric-close-up/800/1200"
            alt="Close-up of high-tech fabric"
            width={800}
            height={1200}
            className="h-full w-full object-cover"
            data-ai-hint="fabric close-up"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Why PeakWear?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We fuse performance, precision, and sustainability into every piece.
          </p>
          <div className="mt-10 space-y-8">
            {features.map(feature => (
              <div key={feature.title} className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondary">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-1 text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Button size="lg" className="active:scale-95">
              Discover Our Materials
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
