import type React from "react";
import { useState } from "react";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { Box, useTheme } from "@mui/material";
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
} from "./TastingNotes.style";
import { tastingNotes as tastingNotesData } from "../../constant/curatedData";
import palette from "../../themes/palette";
import PeopleBought from "../../organisms/PeopleBought/PeopleBought";

const TastingNotesCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const theme = useTheme();
  const slides = tastingNotesData;

  const current = slides[currentSlide];


  return (

<Container sx={{ mb: 6, position: "relative" }}>
  <CarouselSlide bgColor="white">
    <ContentSection
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        height: "100%",
        p: 3,
      }}
    >
      <SlideTitle>{current.title}</SlideTitle>
      <SlideDescription>{current.description}</SlideDescription>
    </ContentSection>
  </CarouselSlide>

  {/* Dots Centered */}
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      mt: 4,
      mb: 3,
    }}
  >
    <DotsContainer
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 1.5,
      }}
    >
      {slides.map((_, index) => (
        <Dot
          key={index}
          active={index === currentSlide}
          onClick={() => setCurrentSlide(index)}
        />
      ))}
    </DotsContainer>
  </Box>

  {/* PeopleBought aligned to left */}
  <Box sx={{ textAlign: "left" }}>
    <PeopleBought />
  </Box>
</Container>





  );
};

export default TastingNotesCarousel;
