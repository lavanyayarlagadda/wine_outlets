import React from "react";
import ProductDetails from "./ProductDetails";
import ProductImageWrapper from "./ProductImage";
import {
  ProductLayoutContainer,
  ProductLayoutGrid,
  ProductImageSection,
  ProductImageBox,
  ProductDetailsSection,
  ProductDetailsBox,
} from "./ProductView.style";
import { UseProductView } from "./UseProductView.hook";
import { StyledSkeletonRect } from "../Filter/FilterPanel.style";

const Product: React.FC = () => {
  const { productDetailLoading } = UseProductView();

  return (
    <ProductLayoutContainer>
      <ProductLayoutGrid container spacing={4}>
        <ProductImageSection size={{ xs: 12, md: 6 }}>
          <ProductImageBox>
            {productDetailLoading ? <StyledSkeletonRect /> : <ProductImageWrapper />}
          </ProductImageBox>
        </ProductImageSection>

        <ProductDetailsSection size={{ xs: 12, md: 6 }}>
          <ProductDetailsBox>
            {productDetailLoading ? <StyledSkeletonRect /> : <ProductDetails />}
          </ProductDetailsBox>
        </ProductDetailsSection>
      </ProductLayoutGrid>
    </ProductLayoutContainer>
  );
};

export default Product;
