import React from "react";
import { useState } from "react";
// import NorthEastIcon from "@mui/icons-material/NorthEast";
// import { useTheme } from "@mui/material";
import {
  Container,
  CarouselSlide,
  // SlideTitle,
  // ContentSection,
  // SlideDescription,
  // PriceButton,
    // IconWrapper,
  DotsContainer,
  Dot,
  StyledImage,
} from "./EverydayCarousel.style";
import type { EverydaySlidesSection } from "../../store/Interfaces/LandingPageInterface/HomePageSectionsDataInterface";
import { useNavigate } from "react-router-dom";
import { useGetHomeSectionsQuery } from "../../store/apis/Home/homeAPI";

const WineCarousel: React.FC = () => {
  const { data: sections } = useGetHomeSectionsQuery();
  const everyDaySection: EverydaySlidesSection = sections?.sections?.everyDaySlides ?? {};
  const slides = everyDaySection.slides ?? [];
  const [currentSlide, setCurrentSlide] = useState(0);
  // const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Container>
      <CarouselSlide>
        <StyledImage 
         src={slides[currentSlide].media.url}
         onClick={()=>{
          navigate(slides[currentSlide].Action || "/")
         }}
         />
        {/* <ContentSection>
          <SlideTitle variant="h2">{slides[currentSlide].title}</SlideTitle>
          <SlideDescription>{slides[currentSlide].description}</SlideDescription>
        </ContentSection> */}
        {/* <PriceButton variant="contained" onClick={() => navigate("/productsList")}>
          {slides[currentSlide].btnText}
          <IconWrapper>
            <NorthEastIcon fontSize="small" sx={{ color: theme.palette.white.main }} />
          </IconWrapper>
        </PriceButton> */}
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
