import React from "react";
import { VIPPriceText, PriceText } from "../ProductListGrid/ProductGridCard.style";
import AddToCart from "../../atoms/CustomButton/AddToCart";
import { SummaryCardWrapper, StockText, PriceContainer, StyledDivider } from "./SummaryCard.style";

interface Props {
  totalVipPrice: number;
  totalPrice: number;
}

const SummaryCard: React.FC<Props> = ({ totalVipPrice, totalPrice }) => {
  return (
    <SummaryCardWrapper>
      <StockText variant="body2">In Stock</StockText>

      <PriceContainer>
        <VIPPriceText>VIP: ${totalVipPrice?.toFixed(2)}</VIPPriceText>
        <StyledDivider orientation="vertical" flexItem />
        <PriceText>${totalPrice?.toFixed(2)}</PriceText>
      </PriceContainer>

      <AddToCart
        onClick={() => console.log("Added to cart")}
        label="Add to Cart"
        variantType="filled"
      />
    </SummaryCardWrapper>
  );
};

export default SummaryCard;
