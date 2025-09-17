import React from "react";
import { VIPPriceText, PriceText } from "../ProductListGrid/ProductGridCard.style";
import AddToCart from "../../atoms/CustomButton/AddToCart";
import { SummaryCardWrapper, StockText, PriceContainer, StyledDivider } from "./SummaryCard.style";

interface Props {
  totalVipPrice: number;
  totalPrice: number;
  onAddToCart?: () => void;
  isLoading?: string | null;
}

const SummaryCard: React.FC<Props> = ({ totalVipPrice, totalPrice, onAddToCart, isLoading }) => {
  return (
    <SummaryCardWrapper>
      <StockText variant="body2">In Stock</StockText>

      <PriceContainer>
        <VIPPriceText>VIP: ${totalVipPrice?.toFixed(2)}</VIPPriceText>
        <StyledDivider orientation="vertical" flexItem />
        <PriceText>${totalPrice?.toFixed(2)}</PriceText>
      </PriceContainer>
      <AddToCart
        onClick={() => {
          onAddToCart?.();
        }}
        id={0} // pass dummy id since your AddToCart requires it
        label="Add to Cart"
        variantType="filled"
        isLoading={isLoading}
      />
    </SummaryCardWrapper>
  );
};

export default SummaryCard;
