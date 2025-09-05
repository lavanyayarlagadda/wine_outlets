import React from "react";
import { suggestedProducts } from "../../constant/dealProduct";
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

const PeopleBought: React.FC = () => {
  const { wishlist, cartItems, handleAddToCart, handleToggleFavorite, currentProducts } =
    usePeopleBought(suggestedProducts.products);

  return (
    <PeopleBoughtWrapper>
      <HeaderRow>
        <HeaderTitle variant="h6">People bought it along with</HeaderTitle>
      </HeaderRow>

      <ProductsContainer>
        <ProductsWrapper>
          {currentProducts.map((product, index) => (
            <ProductWithDivider
              key={product.id}
              product={{ ...product, id: String(product.id) }}
              showDivider={index < currentProducts.length - 1}
              onAddToCart={() => handleAddToCart(product.id)}
              onToggleFavorite={() => handleToggleFavorite(product.id)}
            />
          ))}
        </ProductsWrapper>

        <VerticalDivider orientation="vertical" flexItem />

        <SummaryCard
          totalVipPrice={suggestedProducts.totalVipPrice}
          totalPrice={suggestedProducts.totalPrice}
        />
      </ProductsContainer>
    </PeopleBoughtWrapper>
  );
};

export default PeopleBought;
