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

export function ProductCard({title, price, image, imageHint}: Product) {
  return (
    <Card className="flex transform flex-col overflow-hidden bg-surface transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-black/40">
      <CardHeader className="p-0">
        <Image
          src={image}
          alt={title}
          width={600}
          height={600}
          className="h-auto w-full object-cover"
          data-ai-hint={imageHint}
        />
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
        <p className="mt-2 text-base font-semibold text-primary">${price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full active:scale-95" aria-label={`Add ${title} to cart`}>Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}
