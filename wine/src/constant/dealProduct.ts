import { deal_img2, deal_img3, deal_img4 } from "../assets";

export interface Product {
  itemId: string;
  name: string; // required
  year: number; // required
  region: string; // required
  size: string; // required
  rating: number; // required
  price: number; // required
  vipPrice?: number;
  salePrice?: number;
  tag?: string;
  isWishlisted?: boolean;
  description?: string;
  media: {
    type: "image" | "video";
    url: string;
  };
}

export interface SuggestedProducts {
  totalVipPrice: number;
  totalPrice: number;
  products: Product[];
}

export const DEAL_PRODUCT: Product[] = [
  {
    itemId: "1",
    name: "Meiomi Pinot Noir",
    year: 2021,
    region: "California",
    size: "750ML",
    rating: 4.8,
    price: 16.53,
    vipPrice: 12.62,
    salePrice: 11.45,
    tag: "Best Seller",
    isWishlisted: true,
    description:
      "Elegant, fresh, and finely balanced, showcasing the purity of California's terroir with aromas of cherry, raspberry, and subtle oak notes.",
    media: {
      type: "image",
      url: deal_img4,
    },
  },
  {
    itemId: "2",
    name: "Josh Cellars Cabernet",
    year: 2020,
    region: "Napa Valley",
    size: "750ML",
    rating: 4.7,
    price: 24.99,
    vipPrice: 19.99,
    salePrice: 17.99,
    tag: "New Arrival",
    isWishlisted: false,
    description:
      "Rich and full-bodied Cabernet with dark fruit flavors, smooth tannins, and a long, satisfying finish.",
    media: {
      type: "image",
      url: deal_img2,
    },
  },
  {
    itemId: "3",
    name: "Jim Beam Bourbon Whiskey",
    year: 2022,
    region: "Kentucky",
    size: "750ML",
    rating: 4.6,
    price: 22.99,
    vipPrice: 18.49,
    salePrice: 16.99,
    tag: "Limited Edition",
    isWishlisted: false,
    description:
      "Classic Kentucky bourbon with notes of vanilla, oak, and caramel, aged to perfection for a smooth finish.",
    media: {
      type: "image",
      url: deal_img3,
    },
  },
  {
    itemId: "4",
    name: "La Marca Prosecco Sparkling",
    year: 2023,
    region: "Veneto",
    size: "750ML",
    rating: 4.5,
    price: 19.99,
    vipPrice: 15.99,
    salePrice: 14.49,
    tag: "Popular",
    isWishlisted: true,
    description:
      "Fresh and crisp Italian sparkling wine with bright citrus notes and fine bubbles, perfect for celebrations.",
    media: {
      type: "image",
      url: deal_img2,
    },
  },
  {
    itemId: "5",
    name: "Kendall Jackson Chardonnay",
    year: 2021,
    region: "Sonoma County",
    size: "750ML",
    rating: 4.4,
    price: 18.99,
    vipPrice: 14.99,
    salePrice: 13.49,
    tag: "Best Seller",
    isWishlisted: false,
    description:
      "Buttery Chardonnay with tropical fruit flavors and a hint of oak, beautifully balanced and refreshing.",
    media: {
      type: "image",
      url: deal_img4,
    },
  },
  {
    itemId: "6",
    name: "Patron Silver Tequila",
    year: 2022,
    region: "Jalisco",
    size: "750ML",
    rating: 4.9,
    price: 49.99,
    vipPrice: 42.99,
    salePrice: 39.99,
    tag: "Premium",
    isWishlisted: true,
    description:
      "Ultra-premium silver tequila with smooth agave flavor and crisp, clean finish, perfect for sipping or cocktails.",
    media: {
      type: "image",
      url: deal_img3,
    },
  },
  {
    itemId: "7",
    name: "Barefoot Moscato",
    year: 2023,
    region: "California",
    size: "750ML",
    rating: 4.3,
    price: 9.99,
    vipPrice: 7.99,
    salePrice: 6.99,
    tag: "Value Pick",
    isWishlisted: false,
    description:
      "Sweet and fruity Moscato with peach and honey notes, light and refreshing for any occasion.",
    media: {
      type: "image",
      url: deal_img2,
    },
  },
  {
    itemId: "8",
    name: "Grey Goose Vodka",
    year: 2022,
    region: "France",
    size: "750ML",
    rating: 4.8,
    price: 32.99,
    vipPrice: 27.99,
    salePrice: 25.99,
    tag: "Premium",
    isWishlisted: true,
    description:
      "Premium French vodka known for its smoothness and crisp, clean taste with subtle wheat character.",
    media: {
      type: "image",
      url: deal_img4,
    },
  },
  {
    itemId: "9",
    name: "19 Crimes Red Blend",
    year: 2021,
    region: "Australia",
    size: "750ML",
    rating: 4.6,
    price: 15.99,
    vipPrice: 12.99,
    salePrice: 11.99,
    tag: "Fan Favorite",
    isWishlisted: false,
    description:
      "Bold Australian red blend with dark fruit flavors, spice notes, and a smooth, lingering finish.",
    media: {
      type: "image",
      url: deal_img3,
    },
  },
  {
    itemId: "10",
    name: "Moët & Chandon Imperial",
    year: 2019,
    region: "Champagne",
    size: "750ML",
    rating: 4.9,
    price: 59.99,
    vipPrice: 49.99,
    salePrice: 45.99,
    tag: "Luxury",
    isWishlisted: true,
    description:
      "Iconic Champagne with vibrant fruitiness, elegant maturity, and bright acidity, perfect for special occasions.",
    media: {
      type: "image",
      url: deal_img2,
    },
  },
];
export const suggestedProducts: SuggestedProducts = {
  totalVipPrice: 200,
  totalPrice: 400,
  products: [
    {
      itemId: "1",
      name: "Kim Crawford Wine",
      year: 2021,
      region: "California",
      size: "750ML",
      rating: 4.8,
      price: 16.53,
      vipPrice: 12.62,
      salePrice: 11.45,
      tag: "tagText",
      isWishlisted: true,
      description: "This 2018 vintage represents",
      media: {
        type: "image",
        url: deal_img2,
      },
    },
    {
      itemId: "2",
      name: "Wine",
      year: 2021,
      region: "California",
      size: "750ML",
      rating: 4.8,
      price: 16.53,
      vipPrice: 12.62,
      salePrice: 11.45,
      tag: "tagText",
      isWishlisted: true,
      description: "This 2018 vintage represents",
      media: {
        type: "image",
        url: deal_img4,
      },
    },
  ],
};

export const ratingBreakDown = {
  average_rating: 4.8,
  satisfaction_percentage: "95% of buyers are satisfied", // need to discuss
  rating_count: "98 rating",
  review_count: "125 reviews",
  ratings_distribution: {
    "5_star": 136,
    "4_star": 100,
    "3_star": 90,
    "2_star": 25,
    "1_star": 5,
  },

  sample_reviews: [
    {
      rating: 5,
      title: "His favorite drink",
      vintage: 2015,
      size: "L",
      text: "This is such a versatile wine. I had it at a weekend dinner with friends, and everyone loved it. The subtle spice and mocha undertones gave it a rich depth, but it still felt approachable and smooth.",
    },
    {
      rating: 5,
      title: "Cool as a cucumber",
      vintage: 2025,
      size: "L",
      text: "I really enjoyed this wine! The deep ruby color was beautiful in the glass, and the aroma of dark berries and cocoa was inviting.",
    },
  ],
};
