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

export const MOCK_PRODUCTS: Product[] = [];
