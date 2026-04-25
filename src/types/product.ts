export type ProductCategory = "ROBA" | "TOCA" | "ESARFA";

export type ProductBadge = "BEST SELLER" | "NOU";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  originalPrice?: number;
  badge?: ProductBadge;
  image: string;
  description?: string;
  inStock: boolean;
}
