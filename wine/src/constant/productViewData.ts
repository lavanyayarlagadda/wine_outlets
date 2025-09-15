export interface Media {
  type: "image" | "video";
  url: string;
}

export interface BottleSize {
  label: string;
  id: string;
}

export interface vintage {
  year: string;
  in_stock: boolean;
  pricing: Pricing;
}

export interface Pricing {
  price: number;
  vipPrice?: number;
  salePrice?: number;
  tag?: string;
}

export interface ProductDetails {
  id: string;
  itemId: string;
  name: string;
  rating: number;
  review_count: number;
  brand: string;
  origin: string;
  size: string;
  alcoholByVolume: string;
  grapheComposition: string;
  bottle_size: BottleSize[];
  other_vintages: vintage[];
  pricing: Pricing;
  isWishlisted: boolean;
  cartQunatity: number;
  description: string;
  highlights: string;
  details: {
    color: string;
    aroma: string;
    taste: string;
    seasons: string;
    occasions: string;
  };
  foodPairings: string;
  in_stock: boolean;
  images: Media[];
}

export interface ProfessionalRating {
  title: string;
  score: number;
  description: string;
}

export interface TastingNote {
  title: string;
  description: string;
}

export interface SuggestedProduct {
  id: number;
  name: string;
  year: number;
  region: string;
  size: string;
  rating: number;
  price: number;
  vipPrice?: number;
  salePrice?: number;
  tag?: string;
  isWishlisted?: boolean;
  description?: string;
  media: Media;
}

export interface SuggestedProductsSection {
  totalViPPrice?: string;
  totalPrice?: string;
  products: SuggestedProduct[];
}

export interface ProductViewResponse {
  productDetails: any;
  product: ProductDetails;
  professionalRating: ProfessionalRating[];
  tastingNotes: TastingNote[];
  suggestedProducts: (SuggestedProduct | { totalViPPrice?: string; totalPrice?: string })[];
}
