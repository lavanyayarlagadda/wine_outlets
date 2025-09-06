import React from "react";
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
} from "./EverydayCarousel.style";
import { LandingPageData } from "../../constant/LandingPageData";
// import { EVERYDAY_SLIDES as slides } from "../../constant/curatedData";
import { useNavigate } from "react-router-dom";

interface EverydaySlide {
  id: number | string;
  title?: string;
  description?: string;
  btnText?: string;
  btnAction?: string;
  media?: {
    type?: string;
    url?: string;
  };
  order?: number;
}

interface EveryDaySlidesSection {
  isVisible?: boolean;
  slides?: EverydaySlide[];
}


const everyDaySection: EveryDaySlidesSection = LandingPageData?.everyDaySlides ?? {};
const slides = everyDaySection.slides ?? [];


const WineCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Container>
      <CarouselSlide>
        <ContentSection>
          <SlideTitle variant="h2">{slides[currentSlide].title}</SlideTitle>
          <SlideDescription>{slides[currentSlide].description}</SlideDescription>
        </ContentSection>
        <PriceButton variant="contained" onClick={() => navigate("/productsList")}>
          {slides[currentSlide].btnText}
          <IconWrapper>
            <NorthEastIcon fontSize="small" sx={{ color: theme.palette.white.main }} />
          </IconWrapper>
        </PriceButton>
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

export default WineCarousel;
