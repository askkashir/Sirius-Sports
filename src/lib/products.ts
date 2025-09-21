export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  imageHint: string;
  category: 'Sports' | 'Lifestyle' | 'Winter' | 'Street' | 'Gym';
};

export const products: Product[] = [
  {
    id: 1,
    title: 'AeroFlex Running Tee',
    price: 49.99,
    image: 'https://picsum.photos/seed/running-shirt/600/600',
    imageHint: 'running shirt',
    category: 'Sports',
  },
  {
    id: 2,
    title: 'Velocity Shorts',
    price: 59.99,
    image: 'https://picsum.photos/seed/running-shorts/600/600',
    imageHint: 'athletic shorts',
    category: 'Sports',
  },
  {
    id: 3,
    title: 'Urban Explorer Hoodie',
    price: 89.99,
    image: 'https://picsum.photos/seed/hoodie/600/600',
    imageHint: 'stylish hoodie',
    category: 'Street',
  },
  {
    id: 4,
    title: 'Stratus Windbreaker',
    price: 129.99,
    image: 'https://picsum.photos/seed/windbreaker/600/600',
    imageHint: 'light jacket',
    category: 'Sports',
  },
  {
    id: 5,
    title: 'Nova Joggers',
    price: 79.99,
    image: 'https://picsum.photos/seed/joggers/600/600',
    imageHint: 'black sweatpants',
    category: 'Street',
  },
  {
    id: 6,
    title: 'Apex Performance Socks',
    price: 19.99,
    image: 'https://picsum.photos/seed/socks/600/600',
    imageHint: 'athletic socks',
    category: 'Gym',
  },
  {
    id: 7,
    title: 'Zenith Casual Tee',
    price: 39.99,
    image: 'https://picsum.photos/seed/casual-tee/600/600',
    imageHint: 'plain t-shirt',
    category: 'Lifestyle',
  },
  {
    id: 8,
    title: 'Momentum Cap',
    price: 29.99,
    image: 'https://picsum.photos/seed/baseball-cap/600/600',
    imageHint: 'black cap',
    category: 'Lifestyle',
  },
  {
    id: 9,
    title: 'Alpine Thermal Jacket',
    price: 199.99,
    image: 'https://picsum.photos/seed/winter-jacket/600/600',
    imageHint: 'puffy jacket',
    category: 'Winter',
  },
  {
    id: 10,
    title: 'Everest Parka',
    price: 299.99,
    image: 'https://picsum.photos/seed/parka/600/600',
    imageHint: 'heavy coat',
    category: 'Winter',
  },
  {
    id: 11,
    title: 'FlexFit Gym Leggings',
    price: 69.99,
    image: 'https://picsum.photos/seed/leggings/600/600',
    imageHint: 'yoga pants',
    category: 'Gym',
  },
  {
    id: 12,
    title: 'Endurance Tank Top',
    price: 34.99,
    image: 'https://picsum.photos/seed/tank-top/600/600',
    imageHint: 'gym tank',
    category: 'Gym',
  },
];
