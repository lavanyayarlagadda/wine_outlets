import type { ComponentType } from "react";
import {
  HeroBanner,
  TimeOfferCarousel,
  DealSection,
  CuratedPicks,
  EverydayCarousel,
  Brand,
  RecentlyView,
} from "../../molecules";

export const SECTION_REGISTRY: Record<string, ComponentType<any>> = {
  "hero-banner": HeroBanner,
  "banner-collection": TimeOfferCarousel, //LayoutType = "carousel" | "4-column-grid" | "3-column-grid";
  "product-collection": RecentlyView,
  "product-category-list": CuratedPicks,
  "custom-banner": EverydayCarousel,
  "product-collection-custom": DealSection,
  "featured-brand": Brand,
};
