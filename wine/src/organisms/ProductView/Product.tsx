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
import type { ProductViewHookReturn } from "./UseProductView.hook";
interface ProductProps {
  productViewData: ProductViewHookReturn["productViewData"];
  selectedSize: ProductViewHookReturn["selectedSize"];
  setSelectedSize: ProductViewHookReturn["setSelectedSize"];
  selectedVintage: ProductViewHookReturn["selectedVintage"];
  setSelectedVintage: ProductViewHookReturn["setSelectedVintage"];
  count: ProductViewHookReturn["count"];
  setCount: ProductViewHookReturn["setCount"];
  handleAddToCart: ProductViewHookReturn["handleAddToCart"];
  handleToggleFavorite: ProductViewHookReturn["handleToggleFavorite"];
  loadingProduct: ProductViewHookReturn["loadingProduct"];
  wishListLoading: ProductViewHookReturn["wishListLoading"];
  vintageYearData: ProductViewHookReturn["vintageYearData"];
  data: ProductViewHookReturn["data"];
  productId: ProductViewHookReturn["productId"];
}

const Product: React.FC<ProductProps> = ({
  productViewData,
  selectedSize,
  setSelectedSize,
  selectedVintage,
  setSelectedVintage,
  count,
  setCount,
  handleAddToCart,
  handleToggleFavorite,
  wishListLoading,
  loadingProduct,
  data,
  productId,
  vintageYearData,
}) => {
  return (
    <ProductLayoutContainer>
      <ProductLayoutGrid container spacing={4}>
        <ProductImageSection size={{ xs: 12, md: 6 }}>
          <ProductImageBox>
            <ProductImageWrapper productViewData={productViewData} />
          </ProductImageBox>
        </ProductImageSection>

        <ProductDetailsSection size={{ xs: 12, md: 6 }}>
          <ProductDetailsBox>
            <ProductDetails
              productViewData={productViewData}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
              selectedVintage={selectedVintage}
              setSelectedVintage={setSelectedVintage}
              count={count}
              setCount={setCount}
              handleAddToCart={handleAddToCart}
              handleToggleFavorite={handleToggleFavorite}
              wishListLoading={wishListLoading}
              loadingProduct={loadingProduct}
              data={data}
              productId={productId}
              vintageYearData={vintageYearData}
            />
          </ProductDetailsBox>
        </ProductDetailsSection>
      </ProductLayoutGrid>
    </ProductLayoutContainer>
  );
};

export default Product;
