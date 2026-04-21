export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  stockCount: number;
  addedDate: Date;
  rating: number;
  imageUrl?: string;
}

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 1500,
    description: 'High-quality wireless headphones with noise cancellation.',
    stockCount: 5,
    addedDate: new Date(Date.now() - 1000 * 60 * 5), // 5 minutes ago
    rating: 0,
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80'
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 2500,
    description: 'Track your fitness and stay connected.',
    stockCount: 15,
    addedDate: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    rating: 0,
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80'
  },
  {
    id: 3,
    name: 'Mechanical Keyboard',
    price: 1200,
    description: 'RGB backlit mechanical keyboard with blue switches.',
    stockCount: 8,
    addedDate: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
    rating: 4,
    imageUrl: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500&q=80'
  },
  {
    id: 4,
    name: 'Gaming Mouse',
    price: 800,
    description: 'Ergonomic gaming mouse with adjustable DPI.',
    stockCount: 20,
    addedDate: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
    rating: 3,
    imageUrl: 'https://www.mchose.store/cdn/shop/files/mchose-official-mouse-mchose-l7-series-ultra-lightweight-wireless-gaming-mouse-1166639710.jpg?v=1754474342'
  },
  {
    id: 5,
    name: 'Portable SSD 1TB',
    price: 4500,
    description: 'Ultra-fast external storage for your files.',
    stockCount: 3,
    addedDate: new Date(Date.now() - 1000 * 60 * 10), // 10 minutes ago
    rating: 5,
    imageUrl: 'https://images-cdn.ubuy.co.in/6627b88a13046b5ecf751c4c-1-tb-ultra-high-speed-portable-ssd.jpg'
  },
  {
    id: 6,
    name: 'Bluetooth Speaker',
    price: 1800,
    description: 'Waterproof speaker with powerful bass.',
    stockCount: 12,
    addedDate: new Date(Date.now() - 1000 * 60 * 60 * 5), // 5 hours ago
    rating: 4,
    imageUrl: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80'
  },
  {
    id: 7,
    name: 'Laptop Stand',
    price: 450,
    description: 'Adjustable aluminum stand for better ergonomics.',
    stockCount: 25,
    addedDate: new Date(Date.now() - 1000 * 60 * 60 * 48), // 2 days ago
    rating: 4,
    imageUrl: 'https://www.galenleather.com/cdn/shop/files/wooden-laptop-stand-for-macbook-mahogany-5_2048x.jpg?v=1683416651'
  },
  {
    id: 8,
    name: 'Webcam 4K',
    price: 3200,
    description: 'Ultra HD webcam for professional video calls.',
    stockCount: 6,
    addedDate: new Date(Date.now() - 1000 * 60 * 15), // 15 minutes ago
    rating: 4,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7LimwTKN_GkT4eq9F-GGX6vRW1n5Tx-t9Lw&s'
  },
  {
    id: 9,
    name: 'USB-C Hub',
    price: 650,
    description: '7-in-1 hub for all your connectivity needs.',
    stockCount: 18,
    addedDate: new Date(Date.now() - 1000 * 60 * 60 * 12), // 12 hours ago
    rating: 3,
    imageUrl: 'https://m.media-amazon.com/images/I/61Nb935ZpsL.jpg'
  },
  {
    id: 10,
    name: 'Electric Kettle',
    price: 950,
    description: 'Fast boiling kettle with auto shut-off.',
    stockCount: 30,
    addedDate: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3), // 3 days ago
    rating: 5,
    imageUrl: 'https://myborosil.com/cdn/shop/files/BKE08_1.jpg'
  },
  {
    id: 11,
    name: 'Desk Lamp',
    price: 350,
    description: 'LED lamp with adjustable brightness and color.',
    stockCount: 5,
    addedDate: new Date(Date.now() - 1000 * 60 * 2), // 2 minutes ago
    rating: 4,
    imageUrl: 'https://i.etsystatic.com/14141678/r/il/236f3e/3500340992/il_570xN.3500340992_7c4k.jpg'
  },
  {
    id: 12,
    name: 'Coffee Maker',
    price: 5500,
    description: 'Espresso machine for the perfect morning brew.',
    stockCount: 2,
    addedDate: new Date(Date.now() - 1000 * 60 * 60 * 1), // 1 hour ago
    rating: 5,
    imageUrl: 'https://www.suranasons.in/cdn/shop/files/61x2BKrHBKL._SL1000.jpg?v=1736500986'
  },
  {
    id: 13,
    name: 'Curved Monitor 32"',
    price: 15000,
    description: 'Immersive curved display for gaming and work.',
    stockCount: 4,
    addedDate: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7), // 1 week ago
    rating: 4,
    imageUrl: 'https://thegadgetflow.com/wp-content/uploads/2021/12/Odyssey-G9-4-01.jpeg'
  },
  {
    id: 14,
    name: 'Noise Cancelling Earbuds',
    price: 1200,
    description: 'Compact earbuds with superior sound quality.',
    stockCount: 10,
    addedDate: new Date(Date.now() - 1000 * 60 * 8), // 8 minutes ago
    rating: 4,
    imageUrl: 'https://www.cnet.com/a/img/resize/1a4bb02c248711c4810de910a2d713c7d8653617/hub/2025/09/15/2b759599-8f38-4b99-9cc7-6db94c276db5/bose-quietcomfort-ultra-earbuds-2nd-gen-plum-1.jpg?auto=webp&height=500'
  },
  {
    id: 15,
    name: 'Tablet Stylus',
    price: 250,
    description: 'Pressure-sensitive pen for digital artists.',
    stockCount: 40,
    addedDate: new Date(Date.now() - 1000 * 60 * 60 * 3), // 3 hours ago
    rating: 3,
    imageUrl: 'https://xp-pen.co.in/cdn/shop/products/2.1.jpg?v=1694762816'
  },
  {
    id: 16,
    name: 'Smart Plug',
    price: 150,
    description: 'Control your appliances from your phone.',
    stockCount: 50,
    addedDate: new Date(Date.now() - 1000 * 60 * 5), // 5 minutes ago
    rating: 4,
    imageUrl: 'https://cdn.thewirecutter.com/wp-content/media/2025/06/smart-plug-2048px-2187-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp'
  }
];
