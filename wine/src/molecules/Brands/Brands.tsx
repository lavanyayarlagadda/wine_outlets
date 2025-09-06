import React from "react";
import { Container, ImageWrapper } from "./Brand.style";
import { CustomTitleSection } from "../../atoms";

import { willow } from "../../assets";
import { useNavigate } from "react-router-dom";

const Brands = () => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate("/productsList")}>
      <CustomTitleSection title={"Featured Brands"} subtitle={""} />
      <ImageWrapper>
        {[...Array(5)].map((_, i) => (
          <img key={i} src={willow} alt={`brand image ${i}`} />
        ))}
      </ImageWrapper>
    </Container>
  );
};

export default Brands;
