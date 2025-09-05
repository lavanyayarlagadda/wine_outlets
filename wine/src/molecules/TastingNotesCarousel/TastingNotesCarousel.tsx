import React from "react";
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
import PeopleBought from "../../organisms/PeopleBought/PeopleBought";
import { useTastingNotesCarousel } from "./TastingNotesCarousel.hook";

const TastingNotesCarousel: React.FC = () => {
  const { slides, currentSlide, current, goToSlide } = useTastingNotesCarousel();

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
              onClick={() => goToSlide(index)}
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
