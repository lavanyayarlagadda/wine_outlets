import React, { useState } from "react";
import type { UnitPrice } from "../../constant/cartOverviewData";
import {
  CardContainer,
  ProductImage,
  ProductTitle,
  ProductInfoRow,
  RatingBox,
  RatingTypography,
  InfoValues,
  InfoIcon,
  IconRow,
  BackspaceIcon,
  PricingBox,
  VipPriceText,
  RegularPriceText,
  BackSpaceIcon,
  CounterWrapper,
  WishlistPriceAndCartContainer
} from "./CartProduct.style";
import { starIcon, sizeIcon, originIcon } from "../../assets";
import calendarIcon from "../../assets/icons/calendar.svg";
import CustomCounter from "../../atoms/CustomCounter/CustomCounter";
import CustomWishlist from "../../atoms/CustomWishlist/CustomWhisList";
import { Box } from "@mui/material";
import AddToCart from "../../atoms/CustomButton/AddToCart";
interface CartProductProps {
  imageUrl: string;
  name: string;
  origin: string;
  brand: string;
  size: string;
  year: string;
  unitPrice: UnitPrice;
  quantity: number;
  component?: string;
}
interface InfoItemProps {
  icon?: React.ReactNode;
  label: string;
  value: React.ReactNode;
}
const InfoItem: React.FC<InfoItemProps> = ({ icon, label, value }) => (
  <RatingBox>
    {icon}
    <RatingTypography as="span">
      {label} <InfoValues as="span">{value}</InfoValues>
    </RatingTypography>
  </RatingBox>
);
interface PricingProps {
  price: string;
  vipPrice?: string;
  component?: string;
}

const Pricing: React.FC<PricingProps> = ({ vipPrice, price }) => {
  return (
    <RatingBox>
      {/* <StyledDivide orientation="vertical" flexItem /> */}
      <RegularPriceText>{vipPrice}</RegularPriceText>
      <VipPriceText>{price}</VipPriceText>
    </RatingBox>
  );
};

const WishListPricingLayout: React.FC<PricingProps> = ({ vipPrice, price }) => {
  return (
    <RatingBox>
      
       <VipPriceText sx={{mr:3}}>VIP: ${price} </VipPriceText>
       <RegularPriceText componentType="WISHLIST">$ {vipPrice}</RegularPriceText>
     
    </RatingBox>
  );
};

const CartProduct: React.FC<CartProductProps> = ({
  imageUrl,
  name,
  origin,
  brand,
  size,
  year,
  quantity,
  unitPrice,
  component = ""
}) => {
  const [customQuantity, setCustomQuantity] = useState(quantity);

  const handleQuantityChange = (newQuantity: number) => {
    setCustomQuantity(newQuantity);
    console.log("Updated Quantity:", newQuantity);
  };
  return (
    <CardContainer>
      <ProductImage src={imageUrl} alt={name} />

      <ProductInfoRow>
        <ProductTitle>{name}</ProductTitle>

        <IconRow>
          <CustomWishlist />
          <BackspaceIcon>
            <BackSpaceIcon />
          </BackspaceIcon>
        </IconRow>
        <InfoItem
          icon={<InfoIcon src={originIcon} alt="origin" />}
          label="Origin:"
          value={origin}
        />
        <InfoItem icon={<InfoIcon src={starIcon} alt="brand" />} label="Brand:" value={brand} />
        <InfoItem icon={<InfoIcon src={sizeIcon} alt="size" />} label="size:" value={size} />
        <InfoItem icon={<InfoIcon src={calendarIcon} alt="year" />} label="Year:" value={year} />
        {component == "WISHLIST" ? (
          <WishlistPriceAndCartContainer>
            <PricingBox componentType={component}>
              <WishListPricingLayout vipPrice={unitPrice.original} price={unitPrice.discounted} />
            </PricingBox>
            <CounterWrapper>
              <AddToCart label="Add to Cart" variantType="filled" />
            </CounterWrapper>
          </WishlistPriceAndCartContainer>
        ) : (
          <>
            <CounterWrapper>
              <CustomCounter value={customQuantity} onChange={handleQuantityChange} />
            </CounterWrapper>
            <PricingBox>
              <Pricing vipPrice={unitPrice.original} price={unitPrice.discounted} />
            </PricingBox>
          </>
        )}
      </ProductInfoRow>
    </CardContainer>
  );
};
export default CartProduct;
