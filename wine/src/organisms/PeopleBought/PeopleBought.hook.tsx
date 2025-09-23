import { useEffect, useState } from "react";
import type { Product } from "../../constant/dealProduct";
import { useAddtoCartMutation } from "../../store/apis/Home/HomeAPI";
import { toast } from "react-toastify";
import { useWishListMutation } from "../../store/apis/ProductList/ProductListAPI";

export const usePeopleBought = (initialProducts: Product[]) => {
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [cartItems, setCartItems] = useState<{ itemNumber: number; quantity: number }[]>([]);
  const [loadingProduct, setLoadingProduct] = useState<string | null>(null);
  const [wishListLoading, setWishListLoading] = useState<string | null>(null);

  const [addToCart] = useAddtoCartMutation();
  const [wishList] = useWishListMutation();

  const userId = localStorage.getItem("userId");
  const storedId = localStorage.getItem("selectedStore");

  // always keep one entry per product with quantity = 1
  useEffect(() => {
    if (initialProducts?.length) {
      const items = initialProducts.map((p) => ({
        itemNumber: Number(p.itemId),
        quantity: 1,
      }));
      setCartItems(items);
    }
  }, [initialProducts]);

  const handleAddAllToCart = async () => {
    try {
      setLoadingProduct("all");
      const payload = cartItems.map((item) => ({
        ...item,
        userId: Number(userId),
      }));

      const response = await addToCart(payload).unwrap();
      toast.success(response.cartResponse);
    } catch (err) {
      toast.error("Failed to add to cart");
    } finally {
      setLoadingProduct(null);
    }
  };

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
        userId: Number(userId),
        itemNumber: productId,
        storeId: Number(storedId) || 0,
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

  return {
    wishlist,
    cartItems,
    handleAddAllToCart,
    handleToggleFavorite,
    currentProducts: initialProducts,
    loadingProduct,
    wishListLoading,
  };
};
