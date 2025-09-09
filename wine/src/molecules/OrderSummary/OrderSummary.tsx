// import React from "react";
// import {
//   MainContainer,
//   ProductHeader,
//   HeaderTitle,
//   ProductContent,
//   ContentRow,
//   LabelText,
//   ValueText,
//   DividerLine,
// } from "./OrderSummary.style";

// import 

// const OrderSummary = () => {
//   return (
//     <MainContainer>
//       <ProductHeader>
//         <HeaderTitle>Order Summary</HeaderTitle>
//         <HeaderTitle>(1 Item)</HeaderTitle>
//       </ProductHeader>
//       <DividerLine />
//       <ProductContent>
//         <ContentRow>
//           <LabelText>Subtotal</LabelText>
//           <ValueText>$53.00</ValueText>
//         </ContentRow>

//         <ContentRow>
//           <LabelText>Estimated Tax</LabelText>
//           <ValueText>$4.45</ValueText>
//         </ContentRow>
//       </ProductContent>
//       <DividerLine />
//       <ContentRow>
//         <LabelText>Total</LabelText>
//         <ValueText>$57.45</ValueText>
//       </ContentRow>
//     </MainContainer>
//   );
// };

// export default OrderSummary;
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
} from "./OrderSummary.style";

interface SummaryItem {
  label: string;
  value: React.ReactNode;
}

interface OrderSummaryProps {
  title: string;
  itemCount: number;
  items: SummaryItem[];
  totalItem?: SummaryItem;
  vipCodeMessage?:string
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  title,
  itemCount,
  items,
  totalItem,
  vipCodeMessage
}) => {
  return (
    <MainContainer>
      <ProductHeader>
        <HeaderTitle>{title}</HeaderTitle>
        <HeaderTitle>({itemCount} Item{itemCount > 1 ? "s" : ""})</HeaderTitle>
      </ProductHeader>

      <DividerLine />

      <ProductContent>
        {items.map((item, index) => (
          <ContentRow key={index}>
            <LabelText>{item.label}</LabelText>
            <ValueText>{item.value}</ValueText>
          </ContentRow>
        ))}
      </ProductContent>

      {totalItem && (
        <>
          <DividerLine />
          <ProductContent>
          <ContentRow>
            <LabelText>{totalItem.label}</LabelText>
            <ValueText>{totalItem.value}</ValueText>
          </ContentRow>
       
          </ProductContent>
             <SavingContent>{vipCodeMessage}</SavingContent>
        </>
      )}
    </MainContainer>
  );
};

export default OrderSummary;
