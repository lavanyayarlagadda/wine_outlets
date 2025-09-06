import React from "react";
import type { ProductViewResponse } from "../../constant/productViewData";
import ProductImage from "../../molecules/ProductView/ProductImage";
import ProductDetails from "./ProductDetails";

import {
  ProductLayoutContainer,
  ProductLayoutGrid,
  ProductImageSection,
  ProductImageBox,
  ProductDetailsSection,
  ProductDetailsBox,
} from "./ProductView.style";

// import { ProductLayoutContainer } from './ProductView.style';

interface ProductDetailsProps {
  productViewData: ProductViewResponse;
}

const Product: React.FC<ProductDetailsProps> = ({ productViewData }) => {
  return (
    <ProductLayoutContainer>
      <ProductLayoutGrid container spacing={4}>
        {/* Image Section */}
        <ProductImageSection size={{ xs: 12, md: 6 }}>
          <ProductImageBox>
            <ProductImage productViewData={productViewData} />
          </ProductImageBox>
        </ProductImageSection>

        {/* Details Section */}
        <ProductDetailsSection size={{ xs: 12, md: 6 }}>
          <ProductDetailsBox>
            <ProductDetails productViewData={productViewData} />
          </ProductDetailsBox>
        </ProductDetailsSection>
      </ProductLayoutGrid>
    </ProductLayoutContainer>
  );
};

export default Product;
