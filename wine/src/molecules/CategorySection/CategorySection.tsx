import React from "react";
import { Container } from "./CategorySection.style";
import { CustomTitleSection } from "../../atoms";
import ProductCardSection from "./layout/ProductCard";
import { LandingPageData } from "../../constant/LandingPageData";
import { useNavigate } from "react-router-dom";

export interface ShopCategory {
  id: number | string;
  productName?: string;
  media?: { type?: string; url?: string };
  productCount?: number;
  categoryAction?: string;
}

interface ShopByCategorySection {
  isVisible?: boolean;
  title?: string;
  subtitle?: string;
  categories?: ShopCategory[];
}


  const shopSection: ShopByCategorySection = LandingPageData?.shopByCategory ?? {};
  const title = shopSection.title ?? "Shop by Category";
  const subtitle = shopSection.subtitle ?? "Find your favorite by type.";
  const categories = shopSection.categories ?? [];

const CategorySection = () => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate("/productsList")}>
      <CustomTitleSection title={title} subtitle={subtitle} />
      <ProductCardSection categories={categories} />
    </Container>
  );
};

export default CategorySection;
