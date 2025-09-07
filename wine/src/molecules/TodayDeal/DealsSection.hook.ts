import { useEffect, useMemo, useRef, useState } from "react";
import { LandingPageData } from "../../constant/LandingPageData";
import type { Product } from "../ProductCard/ProductCard";

interface TimerConfig { endTime: string; format?: string; }
interface DealFilterBtn { id: string; label: string; }
interface DealProductsGroup { [key: string]: Product[] | undefined; }
interface DealSectionFromData {
  isVisible?: boolean | string;
  title?: string;
  props?: { showTimer?: boolean; timer?: TimerConfig; filterButtons?: DealFilterBtn[]; };
  dealProducts?: DealProductsGroup;
}

export const useDealsSection = () => {
  const dealSection = (LandingPageData as any)?.dealSection ?? ({} as DealSectionFromData);
  const title = dealSection.title ?? "Today's Deal for you!";
  const sectionProps = dealSection.props ?? {};
  const timerConfig = sectionProps?.timer;
  const filterButtonsFromData: DealFilterBtn[] = sectionProps?.filterButtons ?? [{ id: "trending", label: "Trending" }];
  const dealProducts: DealProductsGroup = (dealSection.dealProducts as DealProductsGroup) ?? {};

  // UI state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeFilter, setActiveFilter] = useState<string>(filterButtonsFromData[0]?.id ?? "trending");

  // timer remaining ms initial calc
  const [remainingMs, setRemainingMs] = useState<number | null>(() => {
    if (!timerConfig?.endTime) return null;
    const ms = Date.parse(timerConfig.endTime) - Date.now();
    return Number.isFinite(ms) ? Math.max(0, ms) : null;
  });

  // refs for drag scrolling
  const filterButtonsRef = useRef<HTMLDivElement | null>(null);
  const productCardsRef = useRef<HTMLDivElement | null>(null);

  // computed products & slides
  const productsForActiveFilter: Product[] = (dealProducts[activeFilter] ?? []) as Product[];
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
      const onTouchEnd = () => { isDown = false; };
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
    if (!sectionProps?.showTimer || remainingMs === null) return;
    const tick = () => {
      setRemainingMs((prev) => {
        if (prev === null) return null;
        const next = prev - 1000;
        return next >= 0 ? next : 0;
      });
    };
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [sectionProps?.showTimer, remainingMs]);

  // handlers (exposed)
  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
    if (productCardsRef.current) {
      const container = productCardsRef.current;
      const containerWidth = container.clientWidth;
      container.scrollTo({ left: index * containerWidth, behavior: "smooth" });
    }
  };

  const handleAddToCart = (productId: string) => {
    console.log("Add to cart:", productId);
  };

  const handleToggleFavorite = (productId: string) => {
    console.log("Toggle favorite:", productId);
  };

  // expose everything UI needs
  return {
    title,
    showTimer: !!sectionProps?.showTimer,
    timeParts,
    filterButtonsFromData,
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
  };
};

export default useDealsSection;
