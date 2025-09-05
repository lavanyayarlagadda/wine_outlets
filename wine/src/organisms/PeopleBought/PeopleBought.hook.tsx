import { useState } from "react";
import type { Product } from "../../constant/dealProduct";


export const usePeopleBought = (initialProducts: Product[]) => {
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [cartItems, setCartItems] = useState<string[]>([]);

  const handleAddToCart = (productId: string) => {
    setCartItems((prev) => (prev.includes(productId) ? prev : [...prev, productId]));
  };

  const handleToggleFavorite = (productId: string) => {
    setWishlist((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  return {
    wishlist,
    cartItems,
    handleAddToCart,
    handleToggleFavorite,
    currentProducts: initialProducts,
  };
};
