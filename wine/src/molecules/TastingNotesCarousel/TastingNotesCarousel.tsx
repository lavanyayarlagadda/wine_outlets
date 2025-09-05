import type React from "react";
import { useState } from "react";
import { useTheme } from "@mui/material";
import {
  Container,
  CarouselSlide,
  SlideTitle,
  ContentSection,
  SlideDescription,
  DotsWrapper,
  DotsContainer,
  Dot,
  PeopleBoughtWrapper,
} from "./TastingNotes.style";
import { tastingNotes as tastingNotesData } from "../../constant/curatedData";
import PeopleBought from "../../organisms/PeopleBought/PeopleBought";

const TastingNotesCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = tastingNotesData;

  const current = slides[currentSlide];

  return (
    <Container>
      <CarouselSlide bgColor="white">
        <ContentSection>
          <SlideTitle>{current.title}</SlideTitle>
          <SlideDescription>{current.description}</SlideDescription>
        </ContentSection>
      </CarouselSlide>

      <DotsWrapper>
        <DotsContainer>
          {slides.map((_, index) => (
            <Dot
              key={index}
              active={index === currentSlide}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </DotsContainer>
      </DotsWrapper>

      <PeopleBoughtWrapper>
        <PeopleBought />
      </PeopleBoughtWrapper>
    </Container>
  );
};

export default TastingNotesCarousel;
