import React from "react";
import { Container } from "./CategorySection.style";
import { CustomTitleSection } from "../../atoms";
import ProductCardSection from "./layout/ProductCard";
import { useNavigate } from "react-router-dom";

const CategorySection = () => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate("/productsList")}>
      <CustomTitleSection title={"Shop by Category"} subtitle={"Find your favorite by type."} />
      <ProductCardSection />
    </Container>
  );
};

export default CategorySection;
