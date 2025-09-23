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
    handleAddAllToCart,
    handleToggleFavorite,
    currentProducts,
    wishlist,
    wishListLoading,
    loadingProduct,
  } = usePeopleBought(suggestedProducts?.productDetails?.suggestedProducts);

  return (
    <PeopleBoughtWrapper>
      <HeaderRow>
        <HeaderTitle variant="h6">People bought it along with</HeaderTitle>
      </HeaderRow>

      <ProductsContainer>
        <ProductsWrapper>
          {currentProducts?.map((product, index) => (
            <ProductWithDivider
              key={product.itemId}
              product={{ ...product, itemId: String(product.itemId) }}
              showDivider={index < currentProducts.length - 1}
              // onAddToCart={() => handleAddToCart(product.itemId)}
              onToggleFavorite={() => handleToggleFavorite(product.itemId)}
              isFavorite={wishlist.includes(product.itemId)}
              wishListLoading={wishListLoading}
              isLoading={loadingProduct}
            />
          ))}
        </ProductsWrapper>

        <VerticalDivider orientation="vertical" flexItem />

        <SummaryCard
          totalVipPrice={suggestedProducts?.productDetails?.totalViPPrice}
          totalPrice={suggestedProducts?.productDetails?.totalPrice}
          onAddToCart={handleAddAllToCart}
          isLoading={loadingProduct}
        />
      </ProductsContainer>
    </PeopleBoughtWrapper>
  );
};

export default PeopleBought;
