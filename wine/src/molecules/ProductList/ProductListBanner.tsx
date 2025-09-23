import React from "react";
import {
  Container,
  CarouselSlide,
  SlideTitle,
  ContentSection,
  SlideDescription,
  DotsContainer,
  Dot,
} from "../EverydayCarousel/EverydayCarousel.style";
import { CustomButton } from "../../atoms";
import palette from "../../themes/palette";
import type { ProductListHookReturn } from "./ProductList.hook";

interface ProductListBannerProps {
  currentSlide: ProductListHookReturn["currentSlide"];
  slides: ProductListHookReturn["slides"];
  goToSlide: ProductListHookReturn["goToSlide"];
  current: ProductListHookReturn["current"];
}

const ProductListBanner: React.FC<ProductListBannerProps> = ({
  currentSlide,
  slides,
  goToSlide,
  current,
}) => {
  return (
    <Container backgroundColor={palette.white.main} padding="20px 20px">
      <CarouselSlide bgImage={current?.media?.url}>
        <ContentSection>
          {current?.title && <SlideTitle variant="h2">{current?.title}</SlideTitle>}
          {current?.description && <SlideDescription>{current?.description}</SlideDescription>}
        </ContentSection>
        {current?.action && (
          <CustomButton
            text={current?.action.label}
            bgColor={palette.white.main}
            onClick={() => (window.location.href = current?.action.url)}
            color={palette.primary.dark}
            border={palette.primary.dark}
            btnColor={palette.white.main}
            btnbgColor={palette.primary.dark}
          />
        )}
        <DotsContainer>
          {slides.map((_: any, index: number) => (
            <Dot key={index} active={index === currentSlide} onClick={() => goToSlide(index)} />
          ))}
        </DotsContainer>
      </CarouselSlide>
    </Container>
  );
};

export default ProductListBanner;
