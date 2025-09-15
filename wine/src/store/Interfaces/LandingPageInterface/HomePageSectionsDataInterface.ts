// common types
export type ID = string | number;
export type MediaType = "image" | "video" | string; // allow unknown types but prefer "image" | "video"

export interface Media {
  type: MediaType;
  url: string;
}

export interface LinkAction {
  // your payload uses "Action", "action", "btnAction", "categoryAction", "offerAction" etc.
  // make a reusable type and mark most fields optional
  id?: ID;
  url?: string; // normalized URL
  btnText?: string;
  btnAction?: string; // maps to actual navigation path in payload
  categoryAction?: string;
  offerAction?: string;
  Action?: string; // keep original-capitalized variants if needed
  action?: {
    id?: ID;
    btnText?: string;
    btnAction?: string;
  };
}

// --- Hero Section ---
export interface HeroSlide {
  id: ID;
  order?: number;
  backgroundMedia?: Media;
  Action?: string;
}

export interface HeroSection {
  isVisible: boolean;
  slides: HeroSlide[];
}

// --- Limited Time Offer ---
export interface OfferItem {
  id: ID;
  media: Media;
  offerAction?: string;
}

export interface LimitedTimeOfferSection {
  isVisible: boolean;
  title?: string;
  subtitle?: string;
  offers: OfferItem[];
}

// --- Value Section ---
export interface ValueCard {
  id: ID;
  media?: Media;
  Action?: string;
  title?: string;
  description?: string;
  btnText?: string;
  btnAction?: string;
  action?: {
    id?: ID;
    btnText?: string;
    btnAction?: string;
  };
}

export interface ValueSection {
  isVisible?: boolean;
  mainCard?: {
    id: ID;
    media?: Media;
    Action?: string;
  };
  cards?: ValueCard[];
}

// --- Curated Picks ---
export interface CuratedCategory {
  id: ID;
  category: string;
  media: Media;
  categoryAction?: string;
}

export interface CuratedPicksSection {
  isVisible?: boolean;
  title?: string;
  subtitle?: string;
  categories?: CuratedCategory[];
}

// --- Everyday Slides ---
export interface EverydaySlide {
  id: ID;
  order?: number;
  Action?: string;
  media: Media;
}

export interface EverydaySlidesSection {
  isVisibl?: boolean;
  slides?: EverydaySlide[];
}

// --- Shop By Category ---
export interface ShopCategory {
  id: ID;
  productName?: string;
  media: Media;
  productCount?: number;
  categoryAction?: string;
}

export interface ShopByCategorySection {
  isVisible?: boolean;
  title?: string;
  subtitle?: string;
  categories?: ShopCategory[];
}

// --- Deal Section ---
export interface DealProduct {
  id: ID;
  name: string;
  media: Media;
  year?: number;
  region?: string;
  size?: string;
  rating?: number;
  price?: number;
  vipPrice?: number;
  salePrice?: number;
  tag?: string;
  isWishlisted?: boolean;
}

export interface DealTimer {
  endTime: string; // ISO string in payload
  format?: string;
}

export interface DealProps {
  showTimer?: boolean;
  timer?: DealTimer;
  filterButtons?: Array<{ id: string; label: string }>;
}

export interface DealProducts {
  trending?: DealProduct[];
  staff?: DealProduct[];
  popular?: DealProduct[];
  justforyou?: DealProduct[];
  // allow other bucket keys
  [bucket: string]: DealProduct[] | undefined;
}

export interface DealSection {
  isVisible?: boolean | string;
  title?: string;
  props?: DealProps;
  dealProducts?: DealProducts;
}

// --- Brand Section ---
export interface BrandItem {
  id: ID;
  image?: string;
  Image?: string; // payload has both lower- and upper-case keys
  brandId?: number;
  order?: number;
}

export interface BrandSection {
  title?: string;
  isVisible?: boolean | string;
  brands?: BrandItem[];
}

// --- top-level sections container ---
export interface Sections {
  heroSection?: HeroSection;
  limitedTimeOffer?: LimitedTimeOfferSection;
  valueSection?: ValueSection;
  curatedPicks?: CuratedPicksSection;
  everyDaySlides?: EverydaySlidesSection;
  shopByCategory?: ShopByCategorySection;
  dealSection?: DealSection;
  brandSection?: BrandSection;
  // keep open for future sections
  [key: string]: any;
}

export interface LandingPageResponse {
  sections: Sections;
}

export interface RecentlyViewedSection {
  recentlyViewed: {
    title: string;
    isVisible: boolean;
    products: DealProducts[];
  };
}
