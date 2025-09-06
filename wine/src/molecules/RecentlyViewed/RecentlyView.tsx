import type { FC } from "react";
import React from "react";
import { DEAL_PRODUCT } from "../../constant/dealProduct";
import ProductCard from "../ProductCard/ProductCard";
import {
  Container,
  HeaderWrapper,
  Title,
  CarouselWrapper,
  ProductBox,
  DotsWrapper,
  Dot,
} from "./RecentlyView.style";
import { useRecentlyViewed } from "./RecentlyView.hook";

type RecentlyViewedProps = {
  onSlideChange?: (index: number) => void;
  cardsPerSlide?: number;
  initialSlide?: number;
  onAddToCart?: (productId: string) => void;
  onToggleFavorite?: (productId: string) => void;
};

const RecentlyViewed: FC<RecentlyViewedProps> = ({
  onSlideChange,
  cardsPerSlide = 4,
  initialSlide = 0,
  onAddToCart,
  onToggleFavorite,
}) => {
  const {
    scrollRef,
    currentSlide,
    totalSlides,
    handleDotClick,
    handleAddToCart,
    handleToggleFavorite,
  } = useRecentlyViewed({
    items: DEAL_PRODUCT,
    cardsPerSlide,
    initialSlide,
    onSlideChange,
  });

  return (
    <Container>
      <HeaderWrapper>
        <Title>Recently Viewed</Title>
      </HeaderWrapper>

      <CarouselWrapper ref={scrollRef}>
        {DEAL_PRODUCT.map((product) => (
          <ProductBox key={product.id}>
            <ProductCard
              product={product}
              onAddToCart={(id) => handleAddToCart(id, onAddToCart)}
              onToggleFavorite={(id) => handleToggleFavorite(id, onToggleFavorite)}
              isRecentlyViewedCard
            />
          </ProductBox>
        ))}
      </CarouselWrapper>

      <DotsWrapper>
        {Array.from({ length: totalSlides }).map((_, index) => (
          <Dot key={index} active={currentSlide === index} onClick={() => handleDotClick(index)} />
        ))}
      </DotsWrapper>
    </Container>
  );
};

export default RecentlyViewed;
