import React from "react";

import {
  StyledCardMedia,
  StyledCard,
  StyledThumbnailCard,
  StyledImageContainer,
  StyledThumbnailList,
  StyledThumbnailMedia,
} from "./ProductView.style";
import { useProductView } from "./UseProductView.hook";

interface ImageGalleryProps {
  images: { url: string }[]; // generic array of images
  initialIndex?: number;
  onImageChange?: (_index: number, _image: string) => void;
  thumbnailPosition?: "left" | "right" | "top" | "bottom";
  imageFit?: "cover" | "contain";
  height?: number | string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, initialIndex = 0, onImageChange }) => {
  const { selectedIndex, selectedImage, handleSelect } = useProductView(
    images,
    initialIndex,
    onImageChange
  );

  return (
    <StyledImageContainer>
      {/* Thumbnails */}
      <StyledThumbnailList>
        {images.map((img, idx) => (
          <StyledThumbnailCard
            key={idx}
            selected={selectedIndex === idx}
            onClick={() => handleSelect(idx)}
          >
            <StyledThumbnailMedia as="img" src={img.url} alt={`Thumbnail ${idx + 1}`} />
          </StyledThumbnailCard>
        ))}
      </StyledThumbnailList>

      {/* Main Image */}
      <StyledCard>
        <StyledCardMedia as="img" src={selectedImage?.url} alt="Selected Image" />
      </StyledCard>
    </StyledImageContainer>
  );
};

export default ImageGallery;
