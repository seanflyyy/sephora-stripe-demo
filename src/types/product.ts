export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  isNew?: boolean;
  isLimitedEdition?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}