import React from "react";
import { Container } from "./CategorySection.style";
import { CustomTitleSection } from "../../atoms";
import ProductCardSection from "./layout/ProductCard";

const CategorySection = () => {
  return (
    <Container>
      <CustomTitleSection title={"Shop by Category"} subtitle={"Find your favorite by type."} />
      <ProductCardSection />
    </Container>
  );
};

export default CategorySection;
