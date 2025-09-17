import React from "react";
import { useHeroBanner } from "./HeroBanner.hook";
import { useNavigate } from "react-router-dom";
import {
  HeroBannerContainer,
  SlideContainer,
  SlideBackground,
  DotsContainer,
  Dot,
} from "./HeroBanner.style";
// import { HeroOverlay } from "../../atoms";
import { LandingPageData, type BannerImageItem } from "../../constant/LandingPageData";
// import type { HeroSlide } from "../../store/Interfaces/LandingPageInterface/HomePageSectionsDataInterface";

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
  slides: BannerImageItem[];
  autoPlayInterval?: number;
  height?: string | number;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  isVisible: boolean;
}
const HeroBanner = ({
  slides,
  autoPlayInterval = 5000,
  setOpen,
  isVisible,
}: HeroBannerProps) => {
  const navigate = useNavigate();
  const {
    currentSlide,
    goToSlide,
    containerRef,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    // firstBtnAction,
    // secondBtnAction,
    // handleTagClick,
  } = useHeroBanner(slides?.length || 0, autoPlayInterval, setOpen, slides);

  // const currentSlideData = slides[currentSlide];

  if (!isVisible || !slides) return null;
  return (
    <HeroBannerContainer
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((slide, index) => (
        <SlideContainer
          // key={slide.id}
          key={index}
          isActive={index === currentSlide}
          onClick={() => navigate(`/productsList?tags=${slide?.tags?.join(',')}` || "/")}
        >
          <SlideBackground
            backgroundImage={slide.imageUrl ?? ""}
            role="img"
            // aria-label={slide.title}
          />
        </SlideContainer>
      ))}

      {/* <HeroOverlay
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
      /> */}

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
