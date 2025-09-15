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
import PeopleBought from "../../PeopleBought/PeopleBought";
import { useTastingNotesCarousel } from "./TastingNotesCarousel.hook";
import palette from "../../../themes/palette";

interface TastingNotesCarouselProps {
  productDetails: any; // ideally replace `any` with a proper type
}

const TastingNotesCarousel: React.FC<TastingNotesCarouselProps> = ({ productDetails }) => {
  const { slides, currentSlide, current, goToSlide } = useTastingNotesCarousel(productDetails);

  return (
    <Container>
      <CarouselSlide bgColor={palette.white.main}>
        <ContentSection>
          <SlideTitle>{current?.title}</SlideTitle>
          <SlideDescription>{current?.description}</SlideDescription>
        </ContentSection>
      </CarouselSlide>

      <DotsWrapper>
        <DotsContainer>
          {slides?.map((_: any, index: any) => (
            <Dot key={index} active={index === currentSlide} onClick={() => goToSlide(index)} />
          ))}
        </DotsContainer>
      </DotsWrapper>

      <PeopleBoughtWrapper>
        <PeopleBought suggestedProducts={productDetails} />
      </PeopleBoughtWrapper>
    </Container>
  );
};

export default TastingNotesCarousel;
