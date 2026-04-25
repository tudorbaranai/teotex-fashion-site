export type ProductSection = "FEMEI" | "BARBATI" | "CASA" | "ABSOLVIRE" | "NUNTI";

export type ProductCategory =
  | "ROBA" | "TOCA" | "ESARFA"             // absolvire
  | "ROCHIE" | "BLUZA" | "FUSTA"            // femei
  | "CAMASA" | "COSTUM"                     // barbati
  | "PIJAMA"                                // femei + barbati (use section to disambiguate)
  | "PERDEA" | "LENJERIE" | "FATA_MASA"     // casa
  | "ROCHIE_MIREASA" | "COSTUM_MIRE";       // nunti

export type ProductBadge = "BEST SELLER" | "NOU";

export interface Product {
  id: string;
  name: string;
  section: ProductSection;
  category: ProductCategory;
  price: number;
  originalPrice?: number;
  badge?: ProductBadge;
  image: string;
  description?: string;
  inStock: boolean;
}
