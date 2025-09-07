// src/components/Brands/brands.hook.tsx
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { LandingPageData } from "../../constant/LandingPageData";

export interface BrandItem {
  id?: string;
  image?: string;
  Image?: string;
  brandId?: number;
  order?: number;
  [key: string]: any;
}

export interface BrandSectionData {
  title?: string;
  isVisible?: boolean | string;
  brands?: BrandItem[];
  [key: string]: any;
}

export const useBrands = () => {
  const navigate = useNavigate();

  const raw = (LandingPageData as any)?.brandSection as BrandSectionData | undefined;

  const title = raw?.title ?? "Featured Brands";

  const isVisible = useMemo(() => {
    if (raw?.isVisible === undefined) return true;
    if (typeof raw.isVisible === "boolean") return raw.isVisible;
    return String(raw.isVisible).toLowerCase() !== "false";
  }, [raw]);

  const brands: BrandItem[] = useMemo(() => {
    const arr = Array.isArray(raw?.brands) ? raw!.brands.slice() : [];
    arr.sort((a, b) => {
      const ao = typeof a.order === "number" ? a.order : Number.POSITIVE_INFINITY;
      const bo = typeof b.order === "number" ? b.order : Number.POSITIVE_INFINITY;
      return ao - bo;
    });
    return arr;
  }, [raw]);

  const brandImageSrc = (item: BrandItem) => {
    return item.image ?? item.Image ?? "";
  };

  const handleContainerClick = () => {
    navigate("/productsList");
  };

  return {
    title,
    isVisible,
    brands,
    brandImageSrc,
    handleContainerClick,
  } as const;
};

export default useBrands;
