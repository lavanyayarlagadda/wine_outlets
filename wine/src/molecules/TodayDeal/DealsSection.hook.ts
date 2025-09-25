import { useEffect, useMemo, useRef, useState } from "react";
import useProductCard from "../ProductCard/ProductCard.hook";
import { toast } from "react-toastify";
import { useWishListMutation } from "../../store/apis/ProductList/ProductListAPI";
import { getClientIdentifierForPayload } from "../../utils/useClientIdentifier";
const storedId = localStorage.getItem("selectedStore");
export const useDealsSection = (sectionData?: {
  showTimer?: boolean;
  endTimeIso?: string;
  sideButtons?: { tag: string; label: string }[];
  content?: any[];
}) => {
  const dealsSectionData = sectionData ?? {
    showTimer: false,
    endTimeIso: undefined,
    sideButtons: [],
    content: [],
  };
  const [wishList] = useWishListMutation();
  const { counts, add, increment, decrement, isLoading: cartLoading } = useProductCard();
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [wishListLoading, setWishListLoading] = useState<string | null>(null);
  const { showTimer, endTimeIso, sideButtons, content } = dealsSectionData;
  const timerConfig = endTimeIso;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeFilter, setActiveFilter] = useState<string>((() => sideButtons?.[0]?.tag ?? "")());

  // timer remaining ms initial calc
  const [remainingMs, setRemainingMs] = useState<number | null>(() => {
    if (!timerConfig) return null;
    const ms = Date.parse(timerConfig) - Date.now();
    return Number.isFinite(ms) ? Math.max(0, ms) : null;
  });

  const filterButtonsRef = useRef<HTMLDivElement | null>(null);
  const productCardsRef = useRef<HTMLDivElement | null>(null);

  const productsForActiveFilter = content?.filter((item) => {
    return item.tags?.includes(activeFilter);
  });
  const totalSlides = Math.max(1, Math.ceil((productsForActiveFilter?.length ?? 0) / 4));

  const timeParts = useMemo(() => {
    if (remainingMs === null) return { hours: 0, minutes: 0, seconds: 0 };
    return {
      hours: Math.floor(remainingMs / (1000 * 60 * 60)),
      minutes: Math.floor((remainingMs % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((remainingMs % (1000 * 60)) / 1000),
    };
  }, [remainingMs]);

  // Drag scrolling implementation (keeps functions local to hook)
  useEffect(() => {
    const enableDragScroll = (element: HTMLDivElement | null) => {
      if (!element) return;
      let isDown = false;
      let startX = 0;
      let scrollLeft = 0;

      const onMouseDown = (e: MouseEvent) => {
        isDown = true;
        startX = e.pageX - element.offsetLeft;
        scrollLeft = element.scrollLeft;
        element.style.cursor = "grabbing";
        element.style.userSelect = "none";
      };
      const onMouseLeave = () => {
        isDown = false;
        element.style.cursor = "grab";
        element.style.userSelect = "auto";
      };
      const onMouseUp = () => {
        isDown = false;
        element.style.cursor = "grab";
        element.style.userSelect = "auto";
      };
      const onMouseMove = (e: MouseEvent) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - element.offsetLeft;
        const walk = (x - startX) * 2;
        element.scrollLeft = scrollLeft - walk;
      };
      // touch
      const onTouchStart = (e: TouchEvent) => {
        isDown = true;
        startX = e.touches[0].pageX - element.offsetLeft;
        scrollLeft = element.scrollLeft;
      };
      const onTouchEnd = () => {
        isDown = false;
      };
      const onTouchMove = (e: TouchEvent) => {
        if (!isDown) return;
        const x = e.touches[0].pageX - element.offsetLeft;
        const walk = (x - startX) * 2;
        element.scrollLeft = scrollLeft - walk;
      };

      element.addEventListener("mousedown", onMouseDown);
      element.addEventListener("mouseleave", onMouseLeave);
      element.addEventListener("mouseup", onMouseUp);
      element.addEventListener("mousemove", onMouseMove);
      element.addEventListener("touchstart", onTouchStart, { passive: true });
      element.addEventListener("touchend", onTouchEnd);
      element.addEventListener("touchmove", onTouchMove, { passive: true });

      return () => {
        element.removeEventListener("mousedown", onMouseDown);
        element.removeEventListener("mouseleave", onMouseLeave);
        element.removeEventListener("mouseup", onMouseUp);
        element.removeEventListener("mousemove", onMouseMove);
        element.removeEventListener("touchstart", onTouchStart);
        element.removeEventListener("touchend", onTouchEnd);
        element.removeEventListener("touchmove", onTouchMove);
      };
    };

    const cleanups: Array<() => void> = [];
    if (filterButtonsRef.current) {
      const c = enableDragScroll(filterButtonsRef.current);
      if (c) cleanups.push(c);
    }
    if (productCardsRef.current) {
      const c = enableDragScroll(productCardsRef.current);
      if (c) cleanups.push(c);
    }

    return () => cleanups.forEach((fn) => fn && fn());
  }, [filterButtonsRef, productCardsRef]);

  // timer tick
  useEffect(() => {
    if (!showTimer || remainingMs === null) return;
    const tick = () => {
      setRemainingMs((prev) => {
        if (prev === null) return null;
        const next = prev - 1000;
        return next >= 0 ? next : 0;
      });
    };
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [showTimer, remainingMs]);

  // handlers (exposed)
  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
    if (productCardsRef.current) {
      const container = productCardsRef.current;
      const containerWidth = container.clientWidth;
      container.scrollTo({ left: index * containerWidth, behavior: "smooth" });
    }
  };

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
        ...getClientIdentifierForPayload(),
        itemNumber: Number(productId),
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
  // expose everything UI needs
  return {
    showTimer: !!showTimer,
    sideButtons,
    timeParts,
    content,
    activeFilter,
    setActiveFilter,
    productsForActiveFilter,
    productCardsRef,
    filterButtonsRef,
    handleDotClick,
    currentSlide,
    totalSlides,
    handleAddToCart,
    handleToggleFavorite,
    wishlist,

    counts,
    increment,
    decrement,
    cartLoading,
    wishListLoading,
  };
};

export default useDealsSection;
