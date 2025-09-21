'use client';
import {motion} from 'framer-motion';
import {Award, Leaf, Rocket, Shield} from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const features = [
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: 'Peak Performance',
    description: 'Precision-engineered for agility and endurance.',
  },
  {
    icon: <Leaf className="h-8 w-8 text-primary" />,
    title: 'Eco-Conscious',
    description: 'Sustainable fabrics for a lighter footprint.',
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: 'Premium Quality',
    description: 'Durable construction meets luxurious comfort.',
  },
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: 'Rapid Delivery',
    description: 'Fast shipping to keep you in the game.',
  },
];

const containerVariants = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {opacity: 0, y: 20},
  visible: {
    opacity: 1,
    y: 0,
  },
};

export function WhySiriusSports() {
  return (
    <motion.section
      className="bg-secondary/30 py-24 sm:py-32"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{once: true, amount: 0.2}}
    >
      <div className="container mx-auto max-w-[1200px] px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Why Sirius Sports?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            At Sirius Sports, we craft high-performance apparel using
            eco-friendly materials and precision engineering—so you can focus on
            your game, not your gear.
          </p>
        </div>
        <motion.div
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
        >
          {features.map(feature => (
            <motion.div key={feature.title} variants={cardVariants}>
              <Card className="transform text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-black/40">
                <CardHeader className="items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                    {feature.icon}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl font-semibold">
                    {feature.title}
                  </CardTitle>
                  <p className="mt-2 text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
