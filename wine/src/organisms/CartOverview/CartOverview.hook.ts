import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setPlaceOrder } from "../../store/slices/CartOverView/CartOverView";
import {
  useCartProductDetailsQuery,
  useSlotDetailsQuery,
} from "../../store/apis/CartCheckOut/CartCheckOutAPI";
import { toast } from "react-toastify";
import { useWishListMutation } from "../../store/apis/ProductList/ProductListAPI";

export const useCartOverView = () => {
  const dispatch = useDispatch();
  const [wishListLoading, setWishListLoading] = useState<string | null>(null);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const today = new Date().toISOString().split("T")[0];
  const { data, isLoading, isError } = useCartProductDetailsQuery({
    cartId: 1,
    userId: 1,
    storeId: 1,
  });
  const cartDetails = data?.productListing?.[0];
  const [wishList] = useWishListMutation();
  const {
    data: slotData,
    isLoading: slotLoading,
    isError: slotError,
  } = useSlotDetailsQuery({ storeId: 1, date: today });

  useEffect(() => {
    if (isError) toast.error("Failed to load the Cart Product Details");
    if (slotError) toast.error("Failed to load the Slot Details");
  }, [isError, slotError]);

  useEffect(() => {
    dispatch(setPlaceOrder(false));
  }, []);

  const handleToggleFavorite = async (productId: string) => {
    console.log("ProductId", productId);

    const isAlreadyFavorite = wishlist.includes(productId);

    if (isAlreadyFavorite) {
      setWishlist((prev) => prev.filter((id) => id !== productId));
      toast.success("Removed from wishlist");
      return;
    }

    try {
      setWishListLoading(productId);

      const data = await wishList({ userId: 1, productId, storeId: 1 }).unwrap();

      if (data) {
        setWishlist((prev) => [...prev, productId]);
        toast.success("Added to wishlist");
      }
    } catch (err) {
      toast.error("Failed to update wishlist");
    } finally {
      setWishListLoading(null);
    }
  };

  useEffect(() => {
    if (cartDetails?.products) {
      const initialWishlist = cartDetails.products
        .filter((p: any) => p.isWishList)
        .map((p: any) => p.productId);

      setWishlist(initialWishlist);
    }
  }, [cartDetails]);

  return {
    cartDetails,
    isLoading,
    slotData,
    slotLoading,
    handleToggleFavorite,
    wishListLoading,
  };
};
