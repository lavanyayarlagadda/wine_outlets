import type { FC } from "react";
import React from "react";
import { RecentlyViewedData } from "../../constant/LandingPageData";
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
  const rvData = (RecentlyViewedData as any) ?? {};
  const isVisible = rvData.isVisible === undefined ? true : String(rvData.isVisible).toLowerCase() !== "false";
  const titleText = rvData.title ?? "Recently Viewed";

  
  const {
    scrollRef,
    currentSlide,
    totalSlides,
    handleDotClick,
    handleAddToCart,
    handleToggleFavorite,
  } = useRecentlyViewed({
    items: Array.isArray(rvData.products) ? rvData.products : [],
    cardsPerSlide,
    initialSlide,
    onSlideChange,
  });
  if (!isVisible) return null;

  return (
    <Container>
      <HeaderWrapper>
        <Title>{titleText}</Title>
      </HeaderWrapper>

      <CarouselWrapper ref={scrollRef}>
        {(rvData.products ?? []).map((product: any) => (
          <ProductBox key={product.id ?? product.name ?? Math.random()}>
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
