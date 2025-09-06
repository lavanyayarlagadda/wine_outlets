import React from "react";
import { useHeroBanner } from "./HeroBanner.hook";
import {
  HeroBannerContainer,
  SlideContainer,
  SlideBackground,
  DotsContainer,
  Dot,
} from "./HeroBanner.style";
// import { HERO_BANNER_SLIDES } from "../../constant/heroBannerSlides";
import { HeroOverlay } from "../../atoms";
import { LandingPageData } from "../../constant/LandingPageData";

export interface SlideData {
  id: string; 
  order?: number;
  tagText?: string;
  tagActionText?: string;
  tagActionUrl?: string;
  title?: string;
  subtitle?: string;
  backgroundMedia?: {
    type: "image" | "video" | string;
    url: string;
  };
  firstBtnText?: string;
  secondBtnText?: string;
  firstBtnAction?: string; 
  secondBtnAction?: string; 
}

export interface HeroBannerProps {
  slides?: SlideData[];
  autoPlayInterval?: number;
  height?: string | number;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}
const HeroBanner = ({
  slides = LandingPageData.heroSection.slides,
  autoPlayInterval = 5000,
  setOpen,
}: HeroBannerProps) => {
  const {
    currentSlide,
    goToSlide,
    containerRef,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    firstBtnAction,
    secondBtnAction,
    handleTagClick
  } = useHeroBanner(slides.length, autoPlayInterval, setOpen, slides);

  const currentSlideData = slides[currentSlide];

  return (
    <HeroBannerContainer
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((slide, index) => (
        <SlideContainer key={slide.id} isActive={index === currentSlide}>
          <SlideBackground
            backgroundImage={slide.backgroundMedia?.url ?? ""}
            role="img"
            aria-label={slide.title}
          />
        </SlideContainer>
      ))}

      <HeroOverlay
        title={currentSlideData?.title || ""}
        subtitle={currentSlideData?.subtitle || ""}
        firstBtnText={currentSlideData?.firstBtnText || ""}
        secondBtnText={currentSlideData.secondBtnText || ""}
        onFirstBtnClick={firstBtnAction}
        onSecondBtnClick={secondBtnAction}
        tagText={currentSlideData.tagText}
        tagActionText={currentSlideData.tagActionText || ""}
        tagActionUrl={currentSlideData?.tagActionUrl}
        handleTagClick={handleTagClick}
      />

      <DotsContainer>
        {slides.map((_, index) => (
          <Dot
            key={index}
            isActive={index === currentSlide}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </DotsContainer>
    </HeroBannerContainer>
  );
};

export default HeroBanner;
