import { useEffect, useState } from "react";
import type { Product } from "../../constant/dealProduct";
import { useAddtoCartMutation } from "../../store/apis/Home/HomeAPI";
import { toast } from "react-toastify";
import { useWishListMutation } from "../../store/apis/ProductList/ProductListAPI";
import { getClientIdentifierForPayload } from "../../utils/useClientIdentifier";

export const usePeopleBought = (initialProducts: Product[]) => {
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [cartItems, setCartItems] = useState<{ itemNumber: string; quantity: number }[]>([]);
  const [loadingProduct, setLoadingProduct] = useState<string | null>(null);
  const [wishListLoading, setWishListLoading] = useState<string | null>(null);

  const [addToCart] = useAddtoCartMutation();
  const [wishList] = useWishListMutation();
  const storedId = localStorage.getItem("selectedStore");

  // always keep one entry per product with quantity = 1
  useEffect(() => {
    if (initialProducts?.length) {
      const items = initialProducts.map((p) => ({
        itemNumber: p.itemId,
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
        ...getClientIdentifierForPayload(),
        storeId: Number(storedId),
      }));

      const response = await addToCart(payload).unwrap();
      toast.success(response.cartResponse.message);
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
        ...getClientIdentifierForPayload(),
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
