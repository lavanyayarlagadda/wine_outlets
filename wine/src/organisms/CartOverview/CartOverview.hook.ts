import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setPlaceOrder } from "../../store/slices/CartOverView/CartOverView";
import {
  useCartProductDetailsQuery,
  useSlotDetailsQuery,
} from "../../store/apis/CartCheckOut/CartCheckOutAPI";
import { toast } from "react-toastify";
import { useWishListMutation } from "../../store/apis/ProductList/ProductListAPI";
import { useAddtoCartMutation } from "../../store/apis/Home/HomeAPI";

export const useCartOverView = () => {
  const dispatch = useDispatch();
  const [wishListLoading, setWishListLoading] = useState<string | null>(null);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [loadingProduct, setLoadingProduct] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<{ [productId: number]: number }>({});
  const today = new Date().toISOString().split("T")[0];
  const storedId = localStorage.getItem("selectedStore");

  const { data, isLoading, isError } = useCartProductDetailsQuery({
    cartId: 1,
    userId: 1,
    storeId: Number(storedId) || 0,
  });
  const cartDetails = data?.productListing?.[0];
  const [wishList] = useWishListMutation();
  const [addToCart] = useAddtoCartMutation();
  const {
    data: slotData,
    isLoading: slotLoading,
    isError: slotError,
  } = useSlotDetailsQuery({ storeId: Number(storedId) || 0, date: today });

  useEffect(() => {
    if (isError) toast.error("Failed to load the Cart Product Details");
    if (slotError) toast.error("Failed to load the Slot Details");
  }, [isError, slotError]);

  useEffect(() => {
    dispatch(setPlaceOrder(false));
  }, []);

  const handleToggleFavorite = async (productId: string) => {
  

    const isAlreadyFavorite = wishlist.includes(productId);

    if (isAlreadyFavorite) {
      setWishlist((prev) => prev.filter((id) => id !== productId));
      toast.success("Removed from wishlist");
      return;
    }

    try {
      setWishListLoading(productId);

      const data = await wishList({
        userId: 1,
        productId,
        storeId: storedId || undefined,
      }).unwrap();

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
    console.log("cartDetails", cartDetails);
    if (cartDetails?.products) {
      const initialWishlist = cartDetails.products
        .filter((p: any) => p.isWishList)
        .map((p: any) => p.productId);

      setWishlist(initialWishlist);
    }
  }, [cartDetails]);

  const handleAddToCart = async (productId: any, newValue?: any) => {
    try {
      if (!newValue) {
        setLoadingProduct(productId);
      }
      const newQuantity = (cartItems[productId] || 0) + 1;
      const payload = {
        productId,
        quantity: newValue ? newValue : newQuantity,
        userId: 1,
      };

      const response = await addToCart(payload).unwrap();
      setCartItems((prev) => ({
        ...prev,
        [productId]: newQuantity,
      }));
      toast.success(response.cartResponse);
    } catch (err) {
      toast.error("Failed to add to cart");
    } finally {
      setLoadingProduct(null);
    }
  };

  return {
    cartDetails,
    isLoading,
    slotData,
    slotLoading,
    handleToggleFavorite,
    wishListLoading,
    handleAddToCart,
    loadingProduct,
  };
};
