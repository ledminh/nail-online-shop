export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  inStock: boolean;
  colors?: string[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedColor?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}
