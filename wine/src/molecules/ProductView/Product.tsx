import React from 'react';
import { Grid, Box } from '@mui/material';
// import { productViewData } from '../../constant/productViewData';
import ProductImage from './ProductImage';
import ProductDetails from './ProductDetails';
import type { ProductViewResponse } from '../../constant/productViewData';

import {
  LayoutContainer,
  LayoutGrid,
  ImageSection,
  ImageBox,
  DetailsSection,
  DetailsBox,
} from './ProductView.style';

interface ProductDetailsProps {
    productViewData: ProductViewResponse;
}

const Product: React.FC<ProductDetailsProps> = ({ productViewData }) => {
  return (
    <LayoutContainer>
      <LayoutGrid container spacing={4}>
        {/* Image Section */}
        <ImageSection size={{ xs: 12, md: 6 }} >
          <ImageBox>
            <ProductImage productViewData={productViewData} />
          </ImageBox>
        </ImageSection>

        {/* Details Section */}
        <DetailsSection size={{ xs: 12, md: 6 }} >
          <DetailsBox>
            <ProductDetails productViewData={productViewData} />
          </DetailsBox>
        </DetailsSection>
      </LayoutGrid>
    </LayoutContainer>
  );
}

export default Product;