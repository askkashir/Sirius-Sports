'use client';
import Link from 'next/link';
import {motion} from 'framer-motion';
import {Rocket, Code, Trophy, Handshake} from 'lucide-react';
import {Button} from '@/components/ui/button';

const stats = [
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    value: '2025',
    label: 'Year of Launch',
  },
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    value: '100% Focus',
    label: 'Devoted to Innovation',
  },
  {
    icon: <Trophy className="h-8 w-8 text-primary" />,
    value: 'Modern Stack',
    label: 'Built with Next-Gen Tech',
  },
  {
    icon: <Handshake className="h-8 w-8 text-primary" />,
    value: 'Open',
    label: 'For Collaboration & Ideas',
  },
];

const containerVariants = {
  hidden: {opacity: 0, y: 20},
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {opacity: 0, y: 20},
  visible: {opacity: 1, y: 0},
};

export function StatsHighlight() {
  return (
    <motion.section
      className="py-24 sm:py-32"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.3}}
    >
      <div className="container mx-auto max-w-[1200px] px-4">
        <div className="rounded-lg bg-secondary/40 p-8 md:p-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map(stat => (
              <motion.div
                key={stat.label}
                className="text-center"
                variants={itemVariants}
              >
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-background/70">
                    {stat.icon}
                  </div>
                </div>
                <p className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              At Sirius Sports, we don’t just produce clothing — we create
              partnerships built on trust. With a commitment to excellence and
              customer satisfaction, we aim to empower our clients and end-users
              with apparel that truly stands out.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="active:scale-95">
                <Link href="/products">Explore Collections</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
