import React from "react";
import { ProductWithDivider, SummaryCard } from "../../molecules";
import {
  PeopleBoughtWrapper,
  HeaderRow,
  HeaderTitle,
  ProductsContainer,
  ProductsWrapper,
  VerticalDivider,
} from "./PeopleBought.style";
import { usePeopleBought } from "./PeopleBought.hook";

interface PeopleProps {
  suggestedProducts: any;
}

const PeopleBought: React.FC<PeopleProps> = ({ suggestedProducts }) => {
  const {
    handleAddToCart,
    handleToggleFavorite,
    currentProducts,
    wishlist,
    wishListLoading,
    loadingProduct,
  } = usePeopleBought(suggestedProducts?.productDetails?.suggestedProducts);

  console.log(suggestedProducts, "SUGGESTEDPROUCTS");

  return (
    <PeopleBoughtWrapper>
      <HeaderRow>
        <HeaderTitle variant="h6">People bought it along with</HeaderTitle>
      </HeaderRow>

      <ProductsContainer>
        <ProductsWrapper>
          {currentProducts?.map((product, index) => (
            <ProductWithDivider
              key={product.id}
              product={{ ...product, id: String(product.id) }}
              showDivider={index < currentProducts.length - 1}
              onAddToCart={() => handleAddToCart(product.id)}
              onToggleFavorite={() => handleToggleFavorite(product.id)}
              isFavorite={wishlist.includes(product.id)}
              wishListLoading={wishListLoading}
              isLoading={loadingProduct}
            />
          ))}
        </ProductsWrapper>

        <VerticalDivider orientation="vertical" flexItem />

        <SummaryCard
          totalVipPrice={suggestedProducts?.productDetails?.totalViPPrice}
          totalPrice={suggestedProducts?.productDetails?.totalPrice}
        />
      </ProductsContainer>
    </PeopleBoughtWrapper>
  );
};

export default PeopleBought;
