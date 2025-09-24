import type { FC } from "react";
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
  content?: any[];
  title?: string;
  isVisible?: boolean;
  cardsPerSlide?: number;
  initialSlide?: number;
};

const RecentlyViewed: FC<RecentlyViewedProps> = ({
  onSlideChange,
  cardsPerSlide = 4,
  initialSlide = 0,
  content = [],
  title,
  isVisible = true,
}) => {
  const {
    scrollRef,
    currentSlide,
    totalSlides,
    handleDotClick,
    handleAddToCart,
    handleToggleFavorite,
    wishlist,
    counts,
  } = useRecentlyViewed({
    items: Array.isArray(content) ? content : [],
    cardsPerSlide,
    initialSlide,
    onSlideChange,
  });
  if (!isVisible) return null;

  return (
    <Container>
      <HeaderWrapper>
        <Title>{title}</Title>
      </HeaderWrapper>

      <CarouselWrapper ref={scrollRef}>
        {content.map((product: any) => (
          <ProductBox key={product.id ?? product.name ?? Math.random()}>
            <ProductCard
              product={product}
              onAddToCart={() => handleAddToCart(product.id)}
              onToggleFavorite={() => handleToggleFavorite(product.id)}
              isRecentlyViewedCard
              isFavorite={wishlist.includes(product.id)}
              cartCount={counts[product.id] ?? 0}
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
