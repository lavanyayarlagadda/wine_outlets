import { useCallback, useEffect, useState } from "react";
import {
  useGetWishListMutation,
  useRemoveWishlistMutation,
} from "../../store/apis/CartCheckOut/CartCheckOutAPI";
import { toast } from "react-toastify";
import { getClientIdentifierForPayload } from "../../utils/useClientIdentifier";
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

export function useWishlist() {
  const [items, setItems] = useState<WishlistItem[]>([]);
  const [page, setPage] = useState<number>(1);
  const [size] = useState<number>(10);
  const [total, setTotal] = useState<number>(0);
  const [error, setError] = useState<string>("");
  const storedId = localStorage.getItem("selectedStore");
  const [getWishList, { isLoading, isError }] = useGetWishListMutation();
  const [removeWishlist] = useRemoveWishlistMutation();
  const [wishlist, setWishList] = useState<boolean>(true);
  useEffect(() => {
    getWishList({
      ...getClientIdentifierForPayload(),
      page: 1,
      size: 10,
    })
      .unwrap()
      .then((res: any) => {
        setItems(res.wishlist);
        setPage(res.page);
        setTotal(res.total);
      })
      .catch((err: any) => {
        console.error("Failed to fetch wishlist:", err);
      });
  }, []);

  useEffect(() => {
    if (isError) {
      toast.error("Failed to load Wishlist");
    }
  }, [isError]);

  const addToCart = useCallback((wishlistId: string) => {
    setItems((prev) => prev.filter((p) => p.wishlistId !== wishlistId));
    setTotal((prev) => Math.max(0, prev - 1));
  }, []);

  const clearAll = useCallback(() => {
    setItems([]);
    setTotal(0);
  }, []);

  const handleRemoveFavorite = useCallback(
    async (wishlistId: string) => {
      setWishList(true);
      try {
        const payload = {
          ...getClientIdentifierForPayload(),
          itemNumber: wishlistId,
          storeId: storedId,
        };
        await removeWishlist(payload).unwrap();
        toast.success("Item removed from wishlist");
        const wishlistRes = await getWishList({
          ...getClientIdentifierForPayload(),
          page: 1,
          size: 10,
        }).unwrap();

        setItems(wishlistRes.wishlist);
        setPage(wishlistRes.page);
        setTotal(wishlistRes.total);
      } catch (err: any) {
        console.error("Failed to remove item:", err);
        toast.error("Failed to remove item from wishlist");
      }
    },
    [removeWishlist, getWishList]
  );

  return {
    items,
    page,
    size,
    total,
    isLoading,
    error,
    addToCart,
    clearAll,
    setError,
    handleRemoveFavorite,
    wishlist,
  };
}
