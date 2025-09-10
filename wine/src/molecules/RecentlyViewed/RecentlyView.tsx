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
};

const RecentlyViewed: FC<RecentlyViewedProps> = ({
  onSlideChange,
  cardsPerSlide = 4,
  initialSlide = 0,
}) => {
  const rvData = (RecentlyViewedData as any) ?? {};
  const isVisible =
    rvData.isVisible === undefined ? true : String(rvData.isVisible).toLowerCase() !== "false";
  const titleText = rvData.title ?? "Recently Viewed";

  const {
    scrollRef,
    currentSlide,
    totalSlides,
    handleDotClick,
    handleAddToCart,
    handleToggleFavorite,
    wishlist,
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
              onAddToCart={() => handleAddToCart(product.id)}
              onToggleFavorite={() => handleToggleFavorite(product.id)}
              isRecentlyViewedCard
              isFavorite={wishlist.includes(product.id)}
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
