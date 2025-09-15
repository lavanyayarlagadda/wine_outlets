import { useCallback, useEffect, useRef, useState } from "react";
import useProductCard from "../ProductCard/ProductCard.hook";
import { toast } from "react-toastify";
import { useWishListMutation } from "../../store/apis/ProductList/ProductListAPI";

type UseRecentlyViewedArgs<T> = {
  items: readonly T[];
  cardsPerSlide?: number;
  initialSlide?: number;
  onSlideChange?: (index: number) => void;
};
const storedId = localStorage.getItem("selectedStore");

export function useRecentlyViewed<T>({
  items,
  cardsPerSlide = 4,
  initialSlide = 0,
  onSlideChange,
}: UseRecentlyViewedArgs<T>) {
  const {
    counts,
    add,
    increment,
    decrement,
    isLoading: cartLoading,
  } = useProductCard({ userId: 1 });
  const [wishList] = useWishListMutation();
  const [wishListLoading, setWishListLoading] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastIndexRef = useRef<number>(initialSlide);
  // const [cartItems, setCartItems] = useState<string[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);

  const [currentSlide, setCurrentSlide] = useState<number>(initialSlide);

  const totalSlides = Math.max(1, Math.ceil(items.length / cardsPerSlide));

  const computeIndexFromScroll = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return 0;
    const scrollLeft = container.scrollLeft;
    const containerWidth = container.clientWidth || 1;
    const pageIndex = Math.round(scrollLeft / containerWidth);
    return Math.max(0, Math.min(pageIndex, totalSlides - 1));
  }, [totalSlides]);

  const onScroll = useCallback(() => {
    if (rafRef.current !== null) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      const idx = computeIndexFromScroll();
      if (idx !== lastIndexRef.current) {
        lastIndexRef.current = idx;
        setCurrentSlide(idx);
        onSlideChange?.(idx);
      }
    });
  }, [computeIndexFromScroll, onSlideChange]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return undefined;

    el.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      el.removeEventListener("scroll", onScroll);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [onScroll]);

  const scrollToSlide = useCallback(
    (index: number, behavior: "auto" | "instant" | "smooth" = "smooth") => {
      const clamped = Math.max(0, Math.min(index, totalSlides - 1));
      const container = scrollRef.current;
      if (!container) {
        lastIndexRef.current = clamped;
        setCurrentSlide(clamped);
        onSlideChange?.(clamped);
        return;
      }

      const containerWidth = container.clientWidth || 1;
      const left = clamped * containerWidth;
      container.scrollTo({ left, behavior });

      lastIndexRef.current = clamped;
      setCurrentSlide(clamped);
      onSlideChange?.(clamped);
    },
    [totalSlides, onSlideChange]
  );

  // dot click wrapper
  const handleDotClick = useCallback(
    (index: number) => {
      scrollToSlide(index, "smooth");
    },
    [scrollToSlide]
  );

  const handleAddToCart = async (productId: string) => {
    await add(productId, 1);
  };

  const handleToggleFavorite = async (productId: string) => {
    const isAlreadyFavorite = wishlist.includes(productId);
    if (isAlreadyFavorite) {
      setWishlist((prev) =>
        prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
      );
      toast.success("Removed from wishlist");
      return;
    }
    try {
      setWishListLoading(productId);

      const data = await wishList({
        userId: 1,
        productId,
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

  useEffect(() => {
    if (initialSlide && initialSlide >= 0 && initialSlide !== currentSlide) {
      scrollToSlide(initialSlide, "auto");
    }
  }, [initialSlide, scrollToSlide, currentSlide]);

  // cleanup rAF on unmount
  useEffect(() => {
    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, []);

  return {
    scrollRef,
    currentSlide,
    totalSlides,
    handleDotClick,
    handleAddToCart,
    handleToggleFavorite,
    scrollToSlide,
    // cartItems,
    wishlist,
    counts,
    add,
    increment,
    decrement,
    cartLoading,
    wishListLoading,
  } as const;
}
