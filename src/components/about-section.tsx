'use client';
import {motion} from 'framer-motion';

const containerVariants = {
  hidden: {opacity: 0, y: 20},
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function AboutSection() {
  return (
    <motion.section
      className="py-24 sm:py-32"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.3}}
    >
      <div className="container mx-auto max-w-[1200px] px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Our Story
        </h2>
        <div className="prose prose-invert mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
          <p>
            Founded by athletes for athletes, Sirius Sports combines
            cutting-edge design, sustainable practices, and expert craftsmanship
            to deliver gear that elevates every performance.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
