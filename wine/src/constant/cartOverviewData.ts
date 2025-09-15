import { deal_img2, deal_img3 } from "../assets";

export interface UnitPrice {
  original: string;
  discounted: string;
}


export interface CartItem {
  id: string;
  name: string;
  origin: string;
  brand: string;
  size: string;
  year: string;
  imageUrl: string;
  quantity: number;
  unitPrice: UnitPrice;
  favorite: boolean;
}

export interface CartSummary {
  itemCount: number;
  subtotal: string;
  estimatedTax: string;
  total: string;
  vipCodeMessage: string;
}

export interface PickupInfo {
  storeName: string;
  address: string;
  hours: string;
  phone: string;
}

export interface PickupDateTime {
  date: string;
  timeRange: string;
}

export interface CartOverviewDataResponse {
  cartSummary: CartSummary;
  items: CartItem[];
  pickupInfo: PickupInfo;
  pickupDateTime: PickupDateTime;
}

const cartOverviewData: CartOverviewDataResponse = {
  cartSummary: {
    itemCount: 2,
    subtotal: "$48.55",
    estimatedTax: "$4.45",
    total: "$53.00",
    vipCodeMessage: "You can't have VIP Code",
  },
  items: [
    {
      id: "1",
      name: "Château Margaux - 2018",
      origin: "California",
      brand: "Château Margaux",
      size: "750ml - Standard",
      year: "2021",
      imageUrl: deal_img2,
      quantity: 1,
      unitPrice: {
        original: "$18.53",
        discounted: "$16.53",
      },
      favorite: false,
    },
    {
      id: "2",
      name: "Jim Beam Bourbon Whiskey",
      origin: "California",
      brand: "Jim Beam",
      size: "750ml - Standard",
      year: "N/A",
      imageUrl: deal_img3,
      quantity: 2,
      unitPrice: {
        original: "$18.53",
        discounted: "$16.53",
      },
      favorite: false,
    },
  ],
  pickupInfo: {
    storeName: "Oceanview Spirits & Liquors",
    address: "1234 Coastal Blvd, Ocean City, NJ 08226",
    hours: "9:00 a.m - 10:00 p.m",
    phone: "827-377-72512",
  },
  pickupDateTime: {
    date: "Jan 21, 2025",
    timeRange: "02:00 pm - 03:00 pm",
  },
};

export default cartOverviewData;
