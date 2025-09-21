'use client';
import Link from 'next/link';
import {motion} from 'framer-motion';
import {categories} from '@/lib/products';
import {Button} from './ui/button';
import {CategoryCard} from './category-card';

const containerVariants = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function CategoriesTeaser() {
  const teaserCategories = categories.slice(0, 4);

  return (
    <motion.section
      className="py-24 sm:py-32"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{once: true, amount: 0.2}}
    >
      <div className="container mx-auto max-w-[1200px] px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Explore Our Collections
          </h2>
        </div>
        <motion.div
          className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
        >
          {teaserCategories.map(category => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </motion.div>
        <div className="mt-12 text-center">
          <Button asChild variant="link" className="text-lg">
            <Link href="/products">See All Categories</Link>
          </Button>
        </div>
      </div>
    </motion.section>
  );
}
