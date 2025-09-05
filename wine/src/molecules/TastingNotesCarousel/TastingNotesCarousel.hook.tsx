import { useState } from "react";
import { tastingNotes as tastingNotesData } from "../../constant/curatedData";

export const useTastingNotesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = tastingNotesData;

  const goToSlide = (index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index);
    }
  };

  return {
    slides,
    currentSlide,
    current: slides[currentSlide],
    goToSlide,
  };
};
