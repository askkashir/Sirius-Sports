import Link from 'next/link';
import {ProductCard} from '@/components/product-card';
import {products} from '@/lib/products';
import {Button} from './ui/button';

export function ProductTeaserGrid() {
  const flagshipProducts = products.slice(0, 4);

  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto max-w-[1200px] px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {flagshipProducts.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild variant="link" className="text-lg">
            <Link href="/products">See All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
