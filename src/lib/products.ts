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

export const products: Product[] = [
  {
    id: 1,
    title: 'Velocity Running Tee',
    price: 49.99,
    category: 'Sportswear',
    image: 'https://picsum.photos/seed/product1/600/600',
    imageHint: 'running shirt',
  },
  {
    id: 2,
    title: 'Apex Performance Shorts',
    price: 59.99,
    category: 'Sportswear',
    image: 'https://picsum.photos/seed/product2/600/600',
    imageHint: 'athletic shorts',
  },
  {
    id: 3,
    title: 'Momentum Track Jacket',
    price: 129.99,
    category: 'Sportswear',
    image: 'https://picsum.photos/seed/product3/600/600',
    imageHint: 'track jacket',
  },
  {
    id: 4,
    title: 'Arctic Expedition Parka',
    price: 399.99,
    category: 'Winter Wear',
    image: 'https://picsum.photos/seed/product4/600/600',
    imageHint: 'winter parka',
  },
  {
    id: 5,
    title: 'Alpine Insulated Trousers',
    price: 179.99,
    category: 'Winter Wear',
    image: 'https://picsum.photos/seed/product5/600/600',
    imageHint: 'winter pants',
  },
  {
    id: 6,
    title: 'Glacier Wool Beanie',
    price: 39.99,
    category: 'Winter Wear',
    image: 'https://picsum.photos/seed/product6/600/600',
    imageHint: 'beanie hat',
  },
  {
    id: 7,
    title: 'Metro Graphic Hoodie',
    price: 99.99,
    category: 'Street Wear',
    image: 'https://picsum.photos/seed/product7/600/600',
    imageHint: 'hoodie sweatshirt',
  },
  {
    id: 8,
    title: 'Urban Cargo Pants',
    price: 119.99,
    category: 'Street Wear',
    image: 'https://picsum.photos/seed/product8/600/600',
    imageHint: 'cargo pants',
  },
  {
    id: 9,
    title: 'Breeze Linen Shirt',
    price: 79.99,
    category: 'Summer Wear',
    image: 'https://picsum.photos/seed/product9/600/600',
    imageHint: 'linen shirt',
  },
  {
    id: 10,
    title: 'Oasis Hybrid Shorts',
    price: 69.99,
    category: 'Summer Wear',
    image: 'https://picsum.photos/seed/product10/600/600',
    imageHint: 'hybrid shorts',
  },
  {
    id: 11,
    title: 'Zenith Lounge Joggers',
    price: 89.99,
    category: 'Leisure Wear',
    image: 'https://picsum.photos/seed/product11/600/600',
    imageHint: 'jogger pants',
  },
  {
    id: 12,
    title: 'PowerFlex Training Tee',
    price: 44.99,
    category: 'Gym Wear',
    image: 'https://picsum.photos/seed/product12/600/600',
    imageHint: 'training shirt',
  },
];
