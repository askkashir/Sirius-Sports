import Link from 'next/link';
import {categories} from '@/lib/products';
import {Button} from './ui/button';
import {CategoryCard} from './category-card';

export function CategoriesTeaser() {
  const teaserCategories = categories.slice(0, 4);

  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto max-w-[1200px] px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Explore Our Collections
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teaserCategories.map(category => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild variant="link" className="text-lg">
            <Link href="/products">See All Categories</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
