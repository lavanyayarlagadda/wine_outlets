// useImageGallery.ts
import { useState } from "react";

export const UseProductView = (
  images: { url: string }[],
  initialIndex: number = 0,
  onImageChange?: (_index: number, _image: string) => void
) => {
  const [selectedIndex, setSelectedIndex] = useState(initialIndex);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
    onImageChange?.(index, images[index].url);
  };

  return {
    selectedIndex,
    selectedImage: images[selectedIndex],
    handleSelect,
  };
};
