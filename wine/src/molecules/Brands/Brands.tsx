import React from "react";
import { Container, ImageWrapper } from "./Brand.style";
import { CustomTitleSection } from "../../atoms";

import { willow } from "../../assets";

const Brands = () => {
  return (
    <Container>
      <CustomTitleSection
        title={"Featured Brands"}
        subtitle={""}
      />
      <ImageWrapper>
        {[...Array(5)].map((_, i) => (
          <img key={i} src={willow} alt={`brand image ${i}`} />
        ))}
      </ImageWrapper>
    </Container>
  );
};

export default Brands;
