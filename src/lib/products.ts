export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  imageHint: string;
  category:
    | 'Sportswear'
    | 'Winter Wear'
    | 'Street Wear'
    | 'Summer Wear'
    | 'Leisure Wear'
    | 'Gym Wear';
};

export type Category = {
  id: string;
  name:
    | 'Sportswear'
    | 'Winter Wear'
    | 'Street Wear'
    | 'Summer Wear'
    | 'Leisure Wear'
    | 'Gym Wear';
  description: string;
  image: string;
  imageHint: string;
};

export const categories: Category[] = [
  {
    id: 'sportswear',
    name: 'Sportswear',
    description: 'High-performance gear for champions.',
    image: 'https://picsum.photos/seed/sportswear/600/600',
    imageHint: 'athletic gear',
  },
  {
    id: 'winter-wear',
    name: 'Winter Wear',
    description: 'Insulated pieces for cold conditions.',
    image: 'https://picsum.photos/seed/winter/600/600',
    imageHint: 'winter clothing',
  },
  {
    id: 'street-wear',
    name: 'Street Wear',
    description: 'Urban-inspired everyday apparel.',
    image: 'https://picsum.photos/seed/streetwear/600/600',
    imageHint: 'street fashion',
  },
  {
    id: 'summer-wear',
    name: 'Summer Wear',
    description: 'Lightweight styles for warm weather.',
    image: 'https://picsum.photos/seed/summer/600/600',
    imageHint: 'summer clothes',
  },
  {
    id: 'leisure-wear',
    name: 'Leisure Wear',
    description: 'Relaxed fits for downtime comfort.',
    image: 'https://picsum.photos/seed/leisure/600/600',
    imageHint: 'casual clothing',
  },
  {
    id: 'gym-wear',
    name: 'Gym Wear',
    description: 'Durable clothing for training sessions.',
    image: 'https://picsum.photos/seed/gym/600/600',
    imageHint: 'gym workout',
  },
];
