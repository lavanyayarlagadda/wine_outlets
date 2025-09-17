import React from "react";
import { Rating } from "@mui/material";
import { starIcon, groupIcon, sizeIcon, originIcon } from "../../assets";
import SimpleDropdown from "../../atoms/CustomDropdown/SimpleDropdown";
import CustomCounter from "../../atoms/CustomCounter/CustomCounter";
import CustomWishlist from "../../atoms/CustomWishlist/CustomWhisList";
import AddToCart from "../../atoms/CustomButton/AddToCart";
import ProductDetailsBlock from "../../molecules/ProductView/ProductDetailsBlock";

import {
  DetailsContainer,
  ProductTitle,
  ProductInfoRow,
  PriceRow,
  StyledChip,
  RatingBox,
  RatingTypography,
  InfoValues,
  PricingBox,
  VipPriceText,
  RegularPriceText,
  DescriptionText,
  StyledDivider,
  InfoIcon,
} from "../../molecules/ProductView/ProductView.style";
import ProductHighlights from "../../molecules/ProductView/ProductHighlights";
import palette from "../../themes/palette";
import type { ProductViewHookReturn } from "./UseProductView.hook";

interface InfoItemProps {
  icon?: React.ReactNode;
  label: string;
  value: React.ReactNode;
}

interface PricingProps {
  price: number;
  vipPrice?: number;
}

const Pricing: React.FC<PricingProps> = ({ vipPrice, price }) => {
  return (
    <RatingBox>
      <VipPriceText>VIP: ${vipPrice}</VipPriceText>
      <StyledDivider orientation="vertical" flexItem />
      <RegularPriceText>${price}</RegularPriceText>
    </RatingBox>
  );
};

export const InfoItem: React.FC<InfoItemProps> = ({ icon, label, value }) => (
  <RatingBox>
    {icon}
    <RatingTypography as="span">
      {label} <InfoValues as="span">{value}</InfoValues>
    </RatingTypography>
  </RatingBox>
);

interface ProductDetailsProps {
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

const ProductDetails: React.FC<ProductDetailsProps> = ({
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
  if (!productViewData) return null;

  const { product } = productViewData;

  const sizeOptions = data?.bottleSizes?.map((size: any) => ({
    value: size,
    label: size,
  }));
  const vintageOptions = vintageYearData?.map((size: any) => ({
    value: size,
    label: size,
  }));
  return (
    <DetailsContainer>
      <ProductTitle>{product.name}</ProductTitle>
      <ProductInfoRow>
        <RatingBox>
          <Rating value={Number(product.rating)} precision={0.5} readOnly />
          <RatingTypography>({product.review_count} Reviews)</RatingTypography>
        </RatingBox>
      </ProductInfoRow>
      <ProductInfoRow>
        <InfoItem
          icon={<InfoIcon src={originIcon} alt="origin" />}
          label="Origin:"
          value={product.origin}
        />
        <InfoItem
          icon={<InfoIcon src={starIcon} alt="brand" />}
          label="Brand:"
          value={product.brand}
        />
      </ProductInfoRow>
      <ProductInfoRow>
        <InfoItem
          icon={<InfoIcon src={sizeIcon} alt="size" />}
          label="Size:"
          value={product.size}
        />
        <InfoItem
          // icon={<img src={groupIcon} alt="alcohol" width={18} />}
          label="Alcohol by Volume:"
          value={<span style={{ color: palette.primary.dark }}>{product.alcoholByVolume}</span>}
        />
      </ProductInfoRow>
      <ProductInfoRow>
        <InfoItem
          icon={<InfoIcon src={groupIcon} alt="alcohol" />}
          label="Grape Composition:"
          value={<StyledChip label={product.grapheComposition} />}
        />
      </ProductInfoRow>
      <ProductInfoRow>
        <SimpleDropdown
          label="Bottle Size"
          value={selectedSize?.toLowerCase()}
          onChange={setSelectedSize}
          options={sizeOptions}
          placeholder="Select size"
        />
        <SimpleDropdown
          label="Other Vintages"
          value={selectedVintage}
          onChange={setSelectedVintage}
          options={vintageOptions}
          placeholder="Select vintage"
        />
      </ProductInfoRow>
      {/* Price and Rating */}
      <PriceRow>
        <CustomCounter
          value={count === 0 ? 1 : count}
          onChange={(newValue) => {
            setCount(newValue); // update state
            handleAddToCart(productId, newValue); // call your API with productId + qty
          }}
        />
        <CustomWishlist
          onToggle={() => handleToggleFavorite(productId)}
          isLoading={wishListLoading}
          id={productId}
          defaultSelected={product.isWishlisted}
        />

        <PricingBox>
          <Pricing vipPrice={product?.pricing.vipPrice} price={product.pricing.price} />
        </PricingBox>
      </PriceRow>

      <AddToCart
        onClick={() => handleAddToCart(Number(productId))}
        label="Add to Cart"
        variantType="filled"
        isLoading={loadingProduct}
        id={Number(productId)}
      />

      <DescriptionText>{product.description}</DescriptionText>
      <ProductHighlights title="Product Highlights" highlights={product.highlights} />
      <ProductDetailsBlock
        title="Product Details"
        details={Object.entries(product.details).map(([label, value]) => ({ label, value }))}
      />
      <ProductHighlights title="Food Pairings" highlights={product.foodPairings} />
    </DetailsContainer>
  );
};

export default ProductDetails;
