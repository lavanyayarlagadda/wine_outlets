import { useCallback, useEffect, useState } from "react";
import { deal_img3 } from "../../assets";
export type WishlistItem = {
  wishlistId: string;
  itemID: string;
  name: string;
  brand?: string;
  origin?: string;
  year?: number;
  size?: string;
  price: number;
  vipPrice?: number;
  imageUrl?: string;
};

export type WishlistResponse = {
  page: number;
  size: number;
  total: number;
  wishlist: WishlistItem[];
};

const MOCK_RESPONSE: WishlistResponse = {
  page: 1,
  size: 10,
  total: 2,
  wishlist: [
    {
      wishlistId: "W001",
      itemID: "P001",
      name: "Château Margaux - 2018",
      brand: "Château Margaux",
      origin: "California",
      year: 2018,
      size: "750ml - Standard",
      price: 16.53,
      vipPrice: 12.62,
      imageUrl: deal_img3,
    },
    {
      wishlistId: "W002",
      itemID: "P002",
      name: "Jim Bean Bourbon Whiskey",
      brand: "Jim Beam",
      origin: "California",
      year: 2021,
      size: "750ml - Standard",
      price: 16.53,
      vipPrice: 12.62,
      imageUrl: deal_img3,
    },
    {
      wishlistId: "W003",
      itemID: "P001",
      name: "Château Margaux - 2018",
      brand: "Château Margaux",
      origin: "California",
      year: 2018,
      size: "750ml - Standard",
      price: 16.53,
      vipPrice: 12.62,
      imageUrl: deal_img3,
    },
    {
      wishlistId: "W004",
      itemID: "P002",
      name: "Jim Bean Bourbon Whiskey",
      brand: "Jim Beam",
      origin: "California",
      year: 2021,
      size: "750ml - Standard",
      price: 16.53,
      vipPrice: 12.62,
      imageUrl: deal_img3,
    },
    {
      wishlistId: "W004",
      itemID: "P002",
      name: "Jim Bean Bourbon Whiskey",
      brand: "Jim Beam",
      origin: "California",
      year: 2021,
      size: "750ml - Standard",
      price: 16.53,
      vipPrice: 12.62,
      imageUrl: deal_img3,
    },
    {
      wishlistId: "W001",
      itemID: "P001",
      name: "Château Margaux - 2018",
      brand: "Château Margaux",
      origin: "California",
      year: 2018,
      size: "750ml - Standard",
      price: 16.53,
      vipPrice: 12.62,
      imageUrl: deal_img3,
    },
    {
      wishlistId: "W002",
      itemID: "P002",
      name: "Jim Bean Bourbon Whiskey",
      brand: "Jim Beam",
      origin: "California",
      year: 2021,
      size: "750ml - Standard",
      price: 16.53,
      vipPrice: 12.62,
      imageUrl: deal_img3,
    },
    {
      wishlistId: "W003",
      itemID: "P001",
      name: "Château Margaux - 2018",
      brand: "Château Margaux",
      origin: "California",
      year: 2018,
      size: "750ml - Standard",
      price: 16.53,
      vipPrice: 12.62,
      imageUrl: deal_img3,
    },
    {
      wishlistId: "W004",
      itemID: "P002",
      name: "Jim Bean Bourbon Whiskey",
      brand: "Jim Beam",
      origin: "California",
      year: 2021,
      size: "750ml - Standard",
      price: 16.53,
      vipPrice: 12.62,
      imageUrl: deal_img3,
    },
    {
      wishlistId: "W004",
      itemID: "P002",
      name: "Jim Bean Bourbon Whiskey",
      brand: "Jim Beam",
      origin: "California",
      year: 2021,
      size: "750ml - Standard",
      price: 16.53,
      vipPrice: 12.62,
      imageUrl: deal_img3,
    },
    {
      wishlistId: "W001",
      itemID: "P001",
      name: "Château Margaux - 2018",
      brand: "Château Margaux",
      origin: "California",
      year: 2018,
      size: "750ml - Standard",
      price: 16.53,
      vipPrice: 12.62,
      imageUrl: deal_img3,
    },
    {
      wishlistId: "W002",
      itemID: "P002",
      name: "Jim Bean Bourbon Whiskey",
      brand: "Jim Beam",
      origin: "California",
      year: 2021,
      size: "750ml - Standard",
      price: 16.53,
      vipPrice: 12.62,
      imageUrl: deal_img3,
    },
    {
      wishlistId: "W003",
      itemID: "P001",
      name: "Château Margaux - 2018",
      brand: "Château Margaux",
      origin: "California",
      year: 2018,
      size: "750ml - Standard",
      price: 16.53,
      vipPrice: 12.62,
      imageUrl: deal_img3,
    },
    {
      wishlistId: "W004",
      itemID: "P002",
      name: "Jim Bean Bourbon Whiskey",
      brand: "Jim Beam",
      origin: "California",
      year: 2021,
      size: "750ml - Standard",
      price: 16.53,
      vipPrice: 12.62,
      imageUrl: deal_img3,
    },
    {
      wishlistId: "W004",
      itemID: "P002",
      name: "Jim Bean Bourbon Whiskey",
      brand: "Jim Beam",
      origin: "California",
      year: 2021,
      size: "750ml - Standard",
      price: 16.53,
      vipPrice: 12.62,
      imageUrl: deal_img3,
    },
    {
      wishlistId: "W001",
      itemID: "P001",
      name: "Château Margaux - 2018",
      brand: "Château Margaux",
      origin: "California",
      year: 2018,
      size: "750ml - Standard",
      price: 16.53,
      vipPrice: 12.62,
      imageUrl: deal_img3,
    },
    {
      wishlistId: "W002",
      itemID: "P002",
      name: "Jim Bean Bourbon Whiskey",
      brand: "Jim Beam",
      origin: "California",
      year: 2021,
      size: "750ml - Standard",
      price: 16.53,
      vipPrice: 12.62,
      imageUrl: deal_img3,
    },
    {
      wishlistId: "W003",
      itemID: "P001",
      name: "Château Margaux - 2018",
      brand: "Château Margaux",
      origin: "California",
      year: 2018,
      size: "750ml - Standard",
      price: 16.53,
      vipPrice: 12.62,
      imageUrl: deal_img3,
    },
    {
      wishlistId: "W004",
      itemID: "P002",
      name: "Jim Bean Bourbon Whiskey",
      brand: "Jim Beam",
      origin: "California",
      year: 2021,
      size: "750ml - Standard",
      price: 16.53,
      vipPrice: 12.62,
      imageUrl: deal_img3,
    },
    {
      wishlistId: "W004",
      itemID: "P002",
      name: "Jim Bean Bourbon Whiskey",
      brand: "Jim Beam",
      origin: "California",
      year: 2021,
      size: "750ml - Standard",
      price: 16.53,
      vipPrice: 12.62,
      imageUrl: deal_img3,
    },
  ],
};

export function useWishlist() {
  const [items, setItems] = useState<WishlistItem[]>([]);
  const [page, setPage] = useState<number>(MOCK_RESPONSE.page);
  const [size] = useState<number>(MOCK_RESPONSE.size);
  const [total, setTotal] = useState<number>(MOCK_RESPONSE.total);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setLoading(true);
    // simulate API call
    const t = setTimeout(() => {
      setItems(MOCK_RESPONSE.wishlist);
      setPage(MOCK_RESPONSE.page);
      setTotal(MOCK_RESPONSE.total);
      setLoading(false);
    }, 200);

    return () => clearTimeout(t);
  }, []);

  const removeItem = useCallback((wishlistId: string) => {
    setItems((prev) => prev.filter((p) => p.wishlistId !== wishlistId));
    setTotal((prev) => Math.max(0, prev - 1));
  }, []);

  const addToCart = useCallback((wishlistId: string) => {
    // In real app: call API/store. For demo, remove from wishlist.
    setItems((prev) => prev.filter((p) => p.wishlistId !== wishlistId));
    setTotal((prev) => Math.max(0, prev - 1));
  }, []);

  const clearAll = useCallback(() => {
    setItems([]);
    setTotal(0);
  }, []);

  return {
    items,
    page,
    size,
    total,
    loading,
    error,
    removeItem,
    addToCart,
    clearAll,
    setError,
  };
}
