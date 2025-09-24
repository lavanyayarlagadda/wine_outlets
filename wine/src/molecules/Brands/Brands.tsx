import React from "react";
import { Container, ImageWrapper, BrandImage } from "./Brand.style";
import { CustomTitleSection } from "../../atoms";
import { useBrands } from "./Brands.hook";

interface Props {
  title?: string;
  isVisible?: boolean;
  content?: { imageUrl: string; brandName: string }[];
}

const Brands = ({ title = "", isVisible = true, content = [] }:Props) => {
  const { handleContainerClick } = useBrands();

  if (!isVisible) return null;
  return (
    <Container>
      <CustomTitleSection title={title} subtitle={""} />
      <ImageWrapper>
        {content.map((b, index) => {
          return (
            <BrandImage
              key={index}
              src={b.imageUrl}
              alt={`brand-${b.brandName}`}
              onClick={() => handleContainerClick(b.brandName)}
            />
          );
        })}
      </ImageWrapper>
    </Container>
  );
};

export default Brands;
