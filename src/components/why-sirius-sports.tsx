'use client';
import {motion} from 'framer-motion';
import {Badge} from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {Bolt, Star, Target, Leaf, Palette, Rocket} from 'lucide-react';

const features = [
  {
    icon: <Bolt className="h-8 w-8 text-black" />,
    badge: 'Peak Tech',
    title: 'PERFORMANCE ENGINEERED',
    description:
      'Precision-engineered fabrics and designs for maximum agility, endurance, and athletic excellence.',
  },
  {
    icon: <Star className="h-8 w-8 text-black" />,
    badge: 'Athlete Tested',
    title: 'CHAMPIONSHIP QUALITY',
    description:
      'Built for athletes who demand the best. Our designs are crafted for peak performance conditions.',
  },
  {
    icon: <Target className="h-8 w-8 text-black" />,
    badge: 'Perfect Fit',
    title: 'PRECISION CRAFTSMANSHIP',
    description:
      'Every stitch, seam, and design element is meticulously crafted for uncompromising quality and comfort.',
  },
  {
    icon: <Leaf className="h-8 w-8 text-black" />,
    badge: 'Eco-Smart',
    title: 'SUSTAINABLE INNOVATION',
    description:
      "Eco-conscious materials and processes that don't compromise on performance or style.",
  },
  {
    icon: <Palette className="h-8 w-8 text-black" />,
    badge: 'Personalized',
    title: 'MODERN DESIGN',
    description:
      'Contemporary aesthetics meet functional innovation. Sportswear that performs and inspires.',
  },
  {
    icon: <Rocket className="h-8 w-8 text-black" />,
    badge: 'Fast Track',
    title: 'PROJECT ACCELERATION',
    description:
      'Rapid development and innovation cycles bringing next-generation sportswear to market.',
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
      className="pt-16 sm:pt-24"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{once: true, amount: 0.2}}
    >
      <motion.div
        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
      >
        {features.map(feature => (
          <motion.div key={feature.title} variants={cardVariants}>
            <Card className="group relative h-full transform text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_#00fff0] bg-[#242424] border-white/10 text-white">
              <Badge className="absolute top-4 right-4 bg-[#00fff0] text-black hover:bg-[#00fff0]">
                {feature.badge}
              </Badge>
              <CardHeader>
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-[#00fff0]">
                  {feature.icon}
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl font-bold uppercase">
                  {feature.title}
                </CardTitle>
                <p className="mt-2 text-[#e0e0e0]">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
