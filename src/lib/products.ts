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
  description: string;
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
    image: 'https://picsum.photos/seed/running/600/600',
    imageHint: 'athletic gear',
  },
  {
    id: 'winter-wear',
    name: 'Winter Wear',
    description: 'Insulated pieces for cold conditions.',
    image: 'https://picsum.photos/seed/snow/600/600',
    imageHint: 'winter clothing',
  },
  {
    id: 'street-wear',
    name: 'Street Wear',
    description: 'Urban-inspired everyday apparel.',
    image: 'https://picsum.photos/seed/city/600/600',
    imageHint: 'street fashion',
  },
  {
    id: 'summer-wear',
    name: 'Summer Wear',
    description: 'Lightweight styles for warm weather.',
    image: 'https://picsum.photos/seed/beach/600/600',
    imageHint: 'summer clothes',
  },
  {
    id: 'leisure-wear',
    name: 'Leisure Wear',
    description: 'Relaxed fits for downtime comfort.',
    image: 'https://picsum.photos/seed/relax/600/600',
    imageHint: 'casual clothing',
  },
  {
    id: 'gym-wear',
    name: 'Gym Wear',
    description: 'Durable clothing for training sessions.',
    image: 'https://picsum.photos/seed/weights/600/600',
    imageHint: 'gym workout',
  },
];

export const products: Product[] = [
  // Sportswear
  {
    id: 1,
    title: 'Velocity Running Tee',
    price: 49.99,
    category: 'Sportswear',
    image: 'https://picsum.photos/seed/runningshirt/600/600',
    imageHint: 'running shirt',
    description: 'A lightweight, breathable tee designed for peak performance. Wick away sweat and stay cool on the move.',
  },
  {
    id: 2,
    title: 'Apex Performance Shorts',
    price: 59.99,
    category: 'Sportswear',
    image: 'https://picsum.photos/seed/athleticshorts/600/600',
    imageHint: 'athletic shorts',
    description: 'Flexible and durable, these shorts offer a full range of motion for any athletic activity. Features secure zip pockets.',
  },
  {
    id: 3,
    title: 'Momentum Track Jacket',
    price: 129.99,
    category: 'Sportswear',
    image: 'https://picsum.photos/seed/trackjacket/600/600',
    imageHint: 'track jacket',
    description: 'A sleek, weather-resistant jacket perfect for warm-ups or cool-downs. Designed for athletes in motion.',
  },
  {
    id: 13,
    title: 'Stratus Windbreaker',
    price: 110.0,
    category: 'Sportswear',
    image: 'https://picsum.photos/seed/windbreaker/600/600',
    imageHint: 'windbreaker jacket',
    description: 'Ultralight and packable, this windbreaker provides essential protection without the bulk.',
  },

  // Winter Wear
  {
    id: 4,
    title: 'Arctic Expedition Parka',
    price: 399.99,
    category: 'Winter Wear',
    image: 'https://picsum.photos/seed/winterparka/600/600',
    imageHint: 'winter parka',
    description: 'Our warmest parka, engineered for extreme cold. Fully waterproof with 800-fill down insulation.',
  },
  {
    id: 5,
    title: 'Alpine Insulated Trousers',
    price: 179.99,
    category: 'Winter Wear',
    image: 'https://picsum.photos/seed/winterpants/600/600',
    imageHint: 'winter pants',
    description: 'Stay warm and dry on the slopes with these insulated, waterproof trousers. Features reinforced cuffs.',
  },
  {
    id: 6,
    title: 'Glacier Wool Beanie',
    price: 39.99,
    category: 'Winter Wear',
    image: 'https://picsum.photos/seed/beaniehat/600/600',
    imageHint: 'beanie hat',
    description: 'A classic beanie crafted from 100% merino wool for superior warmth and comfort.',
  },
  {
    id: 14,
    title: 'Thermal Base Layer',
    price: 85.0,
    category: 'Winter Wear',
    image: 'https://picsum.photos/seed/baselayer/600/600',
    imageHint: 'thermal shirt',
    description: 'The foundation of your winter kit. This moisture-wicking base layer keeps you warm and dry.',
  },

  // Street Wear
  {
    id: 7,
    title: 'Metro Graphic Hoodie',
    price: 99.99,
    category: 'Street Wear',
    image: 'https://picsum.photos/seed/hoodie/600/600',
    imageHint: 'hoodie sweatshirt',
    description: 'A comfortable, heavyweight hoodie with a minimalist graphic design. Perfect for everyday urban adventures.',
  },
  {
    id: 8,
    title: 'Urban Cargo Pants',
    price: 119.99,
    category: 'Street Wear',
    image: 'https://picsum.photos/seed/cargopants/600/600',
    imageHint: 'cargo pants',
    description: 'Durable and stylish cargo pants with ample storage. Made from ripstop cotton for a modern, functional fit.',
  },
  {
    id: 15,
    title: 'Oversized Tee',
    price: 55.0,
    category: 'Street Wear',
    image: 'https://picsum.photos/seed/oversizedtee/600/600',
    imageHint: 'oversized t-shirt',
    description: 'A premium oversized t-shirt with a structured feel, made from 100% organic cotton.',
  },
  {
    id: 16,
    title: 'Bomber Jacket',
    price: 189.99,
    category: 'Street Wear',
    image: 'https://picsum.photos/seed/bomberjacket/600/600',
    imageHint: 'bomber jacket',
    description: 'A timeless bomber jacket with a modern twist. Features a water-resistant shell and a quilted lining.',
  },

  // Summer Wear
  {
    id: 9,
    title: 'Breeze Linen Shirt',
    price: 79.99,
    category: 'Summer Wear',
    image: 'https://picsum.photos/seed/linenshirt/600/600',
    imageHint: 'linen shirt',
    description: 'Stay cool and stylish in our 100% linen shirt. Naturally breathable and effortlessly elegant.',
  },
  {
    id: 10,
    title: 'Oasis Hybrid Shorts',
    price: 69.99,
    category: 'Summer Wear',
    image: 'https://picsum.photos/seed/hybridshorts/600/600',
    imageHint: 'hybrid shorts',
    description: 'The only shorts you\'ll need. Quick-drying and stretchy for comfort in and out of the water.',
  },
  {
    id: 17,
    title: 'Classic Polo',
    price: 65.0,
    category: 'Summer Wear',
    image: 'https://picsum.photos/seed/poloshirt/600/600',
    imageHint: 'polo shirt',
    description: 'A modern take on a classic. Made from pima cotton for a soft, comfortable fit.',
  },

  // Leisure Wear
  {
    id: 11,
    title: 'Zenith Lounge Joggers',
    price: 89.99,
    category: 'Leisure Wear',
    image: 'https://picsum.photos/seed/joggers/600/600',
    imageHint: 'jogger pants',
    description: 'Unwind in style. These joggers are crafted from an ultra-soft fleece for ultimate comfort.',
  },
  {
    id: 18,
    title: 'Serenity Crewneck',
    price: 79.99,
    category: 'Leisure Wear',
    image: 'https://picsum.photos/seed/crewneck/600/600',
    imageHint: 'crewneck sweatshirt',
    description: 'A perfectly weighted crewneck sweatshirt for year-round comfort. Your go-to for relaxing days.',
  },
  {
    id: 19,
    title: 'Restore Henley',
    price: 69.99,
    category: 'Leisure Wear',
    image: 'https://picsum.photos/seed/henley/600/600',
    imageHint: 'henley shirt',
    description: 'A comfortable, stylish Henley made from a soft-touch waffle knit fabric.',
  },

  // Gym Wear
  {
    id: 12,
    title: 'PowerFlex Training Tee',
    price: 44.99,
    category: 'Gym Wear',
    image: 'https://picsum.photos/seed/trainingshirt/600/600',
    imageHint: 'training shirt',
    description: 'Engineered for tough workouts, this tee features moisture-wicking fabric and reinforced seams.',
  },
  {
    id: 20,
    title: 'Foundation Joggers',
    price: 95.0,
    category: 'Gym Wear',
    image: 'https://picsum.photos/seed/gymjoggers/600/600',
    imageHint: 'gym joggers',
    description: 'Tapered joggers designed for movement, featuring a secure waistband and zip pockets.',
  },
  {
    id: 21,
    title: 'Element Tank',
    price: 39.99,
    category: 'Gym Wear',
    image: 'https://picsum.photos/seed/tanktop/600/600',
    imageHint: 'tank top',
    description: 'A breathable tank with an athletic fit to keep you cool during intense training sessions.',
  },
];
