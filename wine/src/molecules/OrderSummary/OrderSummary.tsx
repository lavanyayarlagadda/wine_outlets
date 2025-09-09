import React from "react";
import {
  MainContainer,
  ProductHeader,
  HeaderTitle,
  ProductContent,
  ContentRow,
  LabelText,
  ValueText,
  DividerLine,
  SavingContent,
  StyledChip,
} from "./OrderSummary.style";

interface SummaryItem {
  label: string;
  value: React.ReactNode;
}

interface OrderSummaryProps {
  title: string;
  itemCount?: number;
  items: SummaryItem[];
  totalItem?: SummaryItem;
  vipCodeMessage?: string;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  title,
  itemCount,
  items,
  totalItem,
  vipCodeMessage,
}) => {
  return (
    <MainContainer>
      {/* ---- Header ---- */}
      <ProductHeader>
        <HeaderTitle>{title}</HeaderTitle>
        {itemCount && (
          <HeaderTitle>
            ({itemCount} Item{itemCount > 1 ? "s" : ""})
          </HeaderTitle>
        )}
      </ProductHeader>

      <DividerLine />

      {/* ---- Items ---- */}
      <ProductContent>
        {items.map((item, index) => (
          <ContentRow key={index}>
            <LabelText>{item.label}</LabelText>
            {item.label === "Order Number" ? (
              <StyledChip label={item.value} variant="filled" />
            ) : (
              <ValueText>{item.value}</ValueText>
            )}
          </ContentRow>
        ))}
      </ProductContent>

      {/* ---- Total + VIP Message ---- */}
      {totalItem && (
        <>
          <DividerLine />
          <ProductContent>
            <ContentRow>
              <LabelText>{totalItem.label}</LabelText>
              <ValueText>{totalItem.value}</ValueText>
            </ContentRow>
          </ProductContent>
          {vipCodeMessage && <SavingContent>{vipCodeMessage}</SavingContent>}
        </>
      )}
    </MainContainer>
  );
};

export default OrderSummary;
