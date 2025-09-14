import { useState } from "react";

export const useTastingNotesCarousel = (productDetails?: any) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  console.log(productDetails, "productDetails");
  const slides = productDetails?.productDetails?.tastingNotes;

  const goToSlide = (index: number) => {
    if (index >= 0 && index < slides?.length) {
      setCurrentSlide(index);
    }
  };

  return {
    slides,
    currentSlide,
    current: slides?.length > 0 ? slides[currentSlide] : null,
    goToSlide,
  };
};
