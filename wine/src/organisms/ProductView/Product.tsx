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

const Product: React.FC = () => {
  return (
    <ProductLayoutContainer>
      <ProductLayoutGrid container spacing={4}>
        {/* Image Section */}
        <ProductImageSection size={{ xs: 12, md: 6 }}>
          <ProductImageBox>
            <ProductImageWrapper />
          </ProductImageBox>
        </ProductImageSection>

        {/* Details Section */}
        <ProductDetailsSection size={{ xs: 12, md: 6 }}>
          <ProductDetailsBox>
            <ProductDetails />
          </ProductDetailsBox>
        </ProductDetailsSection>
      </ProductLayoutGrid>
    </ProductLayoutContainer>
  );
};

export default Product;
