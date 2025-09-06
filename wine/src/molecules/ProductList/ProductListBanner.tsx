import React from "react";
import { useTheme } from "@mui/material";
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
import { useProductList } from "./ProductList.hook";
import palette from "../../themes/palette";

const ProductListBanner: React.FC = () => {
  const theme = useTheme();
  const { currentSlide, slides, goToSlide, current } = useProductList();

  return (
    <Container backgroundColor={palette.white.main} padding="20px 20px">
      <CarouselSlide>
        <ContentSection>
          <SlideTitle variant="h2">{current.title}</SlideTitle>
          <SlideDescription>{current.description}</SlideDescription>
        </ContentSection>

        {current.action && (
          <CustomButton
            text={current.action.label}
            bgColor={theme.palette.white.main}
            onClick={() => (window.location.href = current.action.url)}
            color={palette.primary.dark}            
            border={palette.primary.dark}
            btnColor={theme.palette.white.main}
            btnbgColor={palette.primary.dark}             
          />
        )}

        <DotsContainer>
          {slides.map((_, index) => (
            <Dot
              key={index}
              active={index === currentSlide}
              onClick={() => goToSlide(index)}
            />
          ))}
        </DotsContainer>
      </CarouselSlide>
    </Container>
  );
};

export default ProductListBanner;
