import React from "react";
import { Container, ImageWrapper, BrandImage } from "./Brand.style";
import { CustomTitleSection } from "../../atoms";
import { useBrands } from "./Brands.hook";

const Brands = () => {
  const { title, isVisible, brands, handleContainerClick } = useBrands();

  if (!isVisible) return null;
  return (
    <Container>
      <CustomTitleSection title={title} subtitle={""} />
      <ImageWrapper>
        {brands.map((b, index) => {
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
