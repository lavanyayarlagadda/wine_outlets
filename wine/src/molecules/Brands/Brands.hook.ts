// src/components/Brands/brands.hook.tsx
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import type {
  BrandSection,
  BrandItem,
} from "../../store/Interfaces/LandingPageInterface/HomePageSectionsDataInterface";
import { useGetHomeSectionsQuery } from "../../store/apis/Home/HomeAPI";

export const useBrands = () => {
  const { data: sections } = useGetHomeSectionsQuery();
  const navigate = useNavigate();

  const raw = useMemo<BrandSection>(() => {
    return sections?.sections?.brandSection || {};
  }, [sections?.sections?.brandSection]);

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
