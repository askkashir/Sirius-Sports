import {Award, RefreshCw, Zap} from 'lucide-react';
import {Card, CardHeader, CardTitle, CardDescription} from '@/components/ui/card';

const features = [
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: 'Peak Performance',
    description: 'Engineered for optimal comfort and performance.',
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: 'Premium Quality',
    description: 'Crafted from the finest materials for durability.',
  },
  {
    icon: <RefreshCw className="h-8 w-8 text-primary" />,
    title: 'Modern Design',
    description: 'Sleek, minimalist aesthetics for the modern era.',
  },
];

export function FeatureGrid() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 text-center md:grid-cols-3">
        {features.map(feature => (
          <Card key={feature.title} className="bg-secondary/50">
            <CardHeader className="items-center">
              {feature.icon}
              <CardTitle className="mt-4 text-xl">{feature.title}</CardTitle>
              <CardDescription className="mt-2 text-base">
                {feature.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
