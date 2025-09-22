import Image from 'next/image';
import {Button} from '@/components/ui/button';
import {Product} from '@/lib/products';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import { slugify } from '@/lib/utils';

export function ProductCard({
  title,
  price,
  image,
  imageHint,
  category,
}: Product) {
  const categoryId = category.toLowerCase().replace(' ', '-');
  return (
    <Card className="group flex transform flex-col overflow-hidden bg-surface transition-all duration-300 hover:shadow-lg hover:shadow-black/40">
      <CardHeader className="overflow-hidden p-0">
        <Image
          src={image}
          alt={title}
          width={600}
          height={600}
          className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
          data-ai-hint={imageHint}
        />
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        <p className="mt-2 text-base font-semibold text-primary">
          ${price.toFixed(2)}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          asChild
          size="sm"
          className="w-full active:scale-95"
          aria-label={`View details for ${title}`}
        >
          <Link href={`/products/${categoryId}/${slugify(title)}`}>
            View Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
