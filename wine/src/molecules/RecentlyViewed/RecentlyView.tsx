import type { FC } from "react";
// import type { RecentlyViewedSection } from "../../store/Interfaces/LandingPageInterface/HomePageSectionsDataInterface";
// import { useGetRecentlyViewedQuery } from "../../store/apis/Home/HomeAPI";
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
import { SITE_SETTING_DEMO_DATA, type ProductCollectionSection } from "../../constant/LandingPageData";

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
  // const {
  //   data: recentlyViewedResp,
  //   // isLoading: rvLoading,
  //   // isError: rvError,
  // } = useGetRecentlyViewedQuery({ userId: 1, limit: 10 });
  const rvData = SITE_SETTING_DEMO_DATA.pageSections.find((s) => s.id === "product-collection-custom-2") as ProductCollectionSection;
  // const rvResp: RecentlyViewedSection | undefined = recentlyViewedResp;
  // const rvData = rvResp?.recentlyViewed;
  const isVisible = rvData?.isVisible ;
  const titleText = rvData?.title

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
    items: Array.isArray(rvData?.content) ? rvData?.content : [],
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
        {(rvData?.content ?? []).map((product: any) => (
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
