import Image from 'next/image';
import {Button} from '@/components/ui/button';
import {Category} from '@/lib/products';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import Link from 'next/link';

export function CategoryCard({
  id,
  name,
  description,
  image,
  imageHint,
}: Category) {
  return (
    <Card className="group flex transform flex-col overflow-hidden bg-surface transition-all duration-300 hover:shadow-lg hover:shadow-black/40">
      <CardHeader className="overflow-hidden p-0">
        <Image
          src={image}
          alt={name}
          width={600}
          height={600}
          className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
          data-ai-hint={imageHint}
        />
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <CardTitle className="text-lg font-semibold">{name}</CardTitle>
        <CardDescription className="mt-2 text-sm">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          asChild
          size="sm"
          className="w-full active:scale-95"
          aria-label={`View products in ${name}`}
        >
          <Link href={`/products/${id}`}>View Products</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
