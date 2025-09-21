import {CategoryCard} from '@/components/category-card';
import {categories} from '@/lib/products';

export default function CategoriesPage() {
  return (
    <div className="py-24 sm:py-32">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Categories
        </h1>
        <p className="text-lg text-muted-foreground">
          Discover our curated collections designed for every athletic pursuit.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map(category => (
          <CategoryCard key={category.id} {...category} />
        ))}
      </div>
    </div>
  );
}
