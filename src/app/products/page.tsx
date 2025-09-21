'use client';
import {useState} from 'react';
import {ProductCard} from '@/components/product-card';
import {Tabs, TabsList, TabsTrigger} from '@/components/ui/tabs';
import {products} from '@/lib/products';

const filters = ['All', 'Sports', 'Lifestyle', 'Winter', 'Street', 'Gym'];

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProducts =
    activeFilter === 'All'
      ? products
      : products.filter(p => p.category === activeFilter);

  return (
    <div className="py-24 sm:py-32">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Our Products
        </h1>
        <p className="text-lg text-muted-foreground">
          Browse our collection of high-performance gear.
        </p>
      </div>

      <div className="mt-8 flex justify-center">
        <Tabs
          defaultValue={activeFilter}
          onValueChange={setActiveFilter}
          className="w-auto"
        >
          <TabsList className="flex-wrap h-auto">
            {filters.map(filter => (
              <TabsTrigger key={filter} value={filter}>
                {filter}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
