import {ProductCard} from '@/components/product-card';
import {categories, products} from '@/lib/products';
import type {Category} from '@/lib/products';

export default function CategoryPage({
  params,
}: {
  params: {category: string};
}) {
  const category = categories.find(
    c => c.id === params.category
  ) as Category;
  const categoryProducts = products.filter(
    p => p.category === category.name
  );

  return (
    <div className="py-24 sm:py-32">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          {category.name}
        </h1>
        <p className="text-lg text-muted-foreground">{category.description}</p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {categoryProducts.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
