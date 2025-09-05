import type React from "react";
import { useState } from "react";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { useTheme } from "@mui/material";
import {
  Container,
  CarouselSlide,
  SlideTitle,
  ContentSection,
  SlideDescription,
  PriceButton,
  DotsContainer,
  Dot,
  IconWrapper,
} from "../EverydayCarousel/EverydayCarousel.style";
import { BannerData as bannerData } from "../../constant/curatedData";

const ProductListBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const theme = useTheme();
  const slides = bannerData.banners;

  const current = slides[currentSlide];

  return (
    <Container backgroundColor="white" padding="20px 20px">
      <CarouselSlide>
        <ContentSection>
          <SlideTitle variant="h2">{current.title}</SlideTitle>
          <SlideDescription>{current.description}</SlideDescription>
        </ContentSection>

        {current.action && (
          <PriceButton
            variant="contained"
            onClick={() => current.action && (window.location.href = current.action.url)}
          >
            {current.action.label}
            <IconWrapper>
              <NorthEastIcon fontSize="small" className="arrow-icon" />
            </IconWrapper>
          </PriceButton>
        )}

        <DotsContainer>
          {slides.map((_, index) => (
            <Dot
              key={index}
              active={index === currentSlide}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </DotsContainer>
      </CarouselSlide>
    </Container>
  );
};

export default ProductListBanner;
