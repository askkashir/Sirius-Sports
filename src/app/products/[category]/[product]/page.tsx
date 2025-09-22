import { Button } from '@/components/ui/button';
import { products } from '@/lib/products';
import { slugify } from '@/lib/utils';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductDetailsPage({
  params,
}: {
  params: { category: string; product: string };
}) {
  const product = products.find(p => slugify(p.title) === params.product);

  if (!product) {
    return (
      <div className="py-24 sm:py-32 text-center">
        <h1 className="text-3xl font-bold">Product not found</h1>
        <p className="text-muted-foreground mt-4">
          The product you are looking for does not exist.
        </p>
        <Button asChild className="mt-8">
          <Link href="/products">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="py-24 sm:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="overflow-hidden rounded-lg">
          <Image
            src={product.image}
            alt={product.title}
            width={800}
            height={800}
            className="w-full h-auto object-cover"
            data-ai-hint={product.imageHint}
          />
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {product.title}
            </h1>
            <p className="text-2xl text-primary font-semibold">
              ${product.price.toFixed(2)}
            </p>
          </div>
          <div className="prose prose-invert text-foreground max-w-none">
            <p>{product.description}</p>
          </div>
          <div className="flex gap-4">
            <Button size="lg" className="flex-1 active:scale-95">
              Add to Cart
            </Button>
            <Button size="lg" variant="outline" className="flex-1">
              Add to Wishlist
            </Button>
          </div>
          <div className="pt-4">
            <Button asChild variant="link" className="px-0">
               <Link href={`/products/${params.category}`}>
                 <ArrowLeft className="mr-2 h-4 w-4" />
                 Back to {product.category}
               </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
