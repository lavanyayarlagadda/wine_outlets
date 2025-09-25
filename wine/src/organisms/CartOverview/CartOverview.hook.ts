import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setPlaceOrder } from "../../store/slices/CartOverView/CartOverView";
import {
  useCartProductDetailsMutation,
  useSlotDetailsMutation,
  useStoreOffDaysMutation
} from "../../store/apis/CartCheckOut/CartCheckOutAPI";
import { toast } from "react-toastify";
import { useWishListMutation } from "../../store/apis/ProductList/ProductListAPI";
import { useAddtoCartMutation, useRemoveFromCartMutation } from "../../store/apis/Home/HomeAPI";
import { getClientIdentifierForPayload } from "../../utils/useClientIdentifier";

export const useCartOverView = () => {
  const dispatch = useDispatch();
  const [wishListLoading, setWishListLoading] = useState<string | null>(null);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [loadingProduct, setLoadingProduct] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<{ [productId: number]: number }>({});
  const today = new Date().toISOString().split("T")[0];
  const storedId = localStorage.getItem("selectedStore");
  const [getCartProductDetails, { data, isLoading, isError }] = useCartProductDetailsMutation();
  const [getSlotDetails, { data: slotData, isLoading: slotLoading, isError: slotError }] =
    useSlotDetailsMutation();
    const [getOffDays, {data:offDaysData, isLoading:offDaysLoading, isError:offDaysError}] = useStoreOffDaysMutation()
  const cartOverview = data;
  const cartDetails = data?.productListing?.[0];
  const [wishList] = useWishListMutation();
  const [addToCart] = useAddtoCartMutation();
  const [removeFromCart] = useRemoveFromCartMutation();
  // const {
  //   data: slotData,
  //   isLoading: slotLoading,
  //   isError: slotError,
  // } = useSlotDetailsMutation({ storeId: Number(storedId) || 0, date: today });

  useEffect(() => {
    if (isError) toast.error("Failed to load the Cart Product Details");
    if (slotError) toast.error("Failed to load the Slot Details");
  }, [isError, slotError]);

  useEffect(() => {
    dispatch(setPlaceOrder(false));
  }, []);

  useEffect(() => {
    getCartProductDetails({
      ...getClientIdentifierForPayload(),
      storeId: Number(storedId) || 0,
      size: 10,
      page: 1,
    });
  }, [getCartProductDetails, storedId]);

  useEffect(() => {
    getSlotDetails({ storeId: Number(storedId) || 0, date: today });
  }, [getSlotDetails]);

  useEffect(() => {
    getOffDays({storeId: Number(storedId) || 0})
  }, [getOffDays])





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
        ...getClientIdentifierForPayload(),
        itemNumber: Number(productId),
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

  // useEffect(() => {
  //   if (cartDetails?.products) {
  //     const initialWishlist = cartDetails.products
  //       .filter((p: any) => p.isWishList)
  //       .map((p: any) => p.productId);

  //     setWishlist(initialWishlist);
  //   }
  // }, [cartDetails]);

  const handleAddToCart = async (productId: any, newValue?: any) => {
    try {
      if (!newValue) {
        setLoadingProduct(productId);
      }
      const newQuantity = (cartItems[productId] || 0) + 1;
      const payload = [
        {
          itemNumber: productId,
          quantity: newValue ? newValue : newQuantity,
          ...getClientIdentifierForPayload(),
          storeId: Number(storedId),
        },
      ];

      const response = await addToCart(payload).unwrap();
      setCartItems((prev) => ({
        ...prev,
        [productId]: newQuantity,
      }));
      toast.success(response.cartResponse.message);
    } catch (err) {
      toast.error("Failed to add to cart");
    } finally {
      setLoadingProduct(null);
    }
  };

  const handleRemoveFromCart = async (orderId: number, itemNumber: string) => {
    try {
      setLoadingProduct(itemNumber);

      const payload = {
        orderId,
        itemNumber,
      };

      const response = await removeFromCart(payload).unwrap();
      toast.success(response.message || "Removed from cart");

      // Optionally update local state to remove the item
      setCartItems((prev) => {
        const updated = { ...prev };
        delete updated[itemNumber as any]; // remove item from cartItems state
        return updated;
      });
    } catch (err) {
      toast.error("Failed to remove from cart");
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
    handleRemoveFromCart,
    cartOverview,
    offDaysData,
    offDaysLoading,
    offDaysError
  };
};
