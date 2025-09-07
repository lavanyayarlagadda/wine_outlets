import React from "react";
import { Container, ImageWrapper } from "./Brand.style";
import { CustomTitleSection } from "../../atoms";
import {useBrands} from "./Brands.hook";

const Brands = () => {
  const { title, isVisible, brands, brandImageSrc, handleContainerClick } = useBrands();

if (!isVisible) return null
  return (
    <Container>
      <CustomTitleSection title={title} subtitle={""} />
      <ImageWrapper>
        {brands.map((b) => {
          const src = brandImageSrc(b);
          if (!src) return null;
          return <img key={b.id ?? b.brandId ?? Math.random()} src={src} alt={`brand-${b.id ?? b.brandId}`} onClick={handleContainerClick}/>;
        })}
      </ImageWrapper>
    </Container>
  );
};

export default Brands;
