import React from "react";
import { HighlightsContainer, HighlightsTitle,  DetailValue } from "./ProductView.style";

interface ProductHighlightsProps {
  title?: string;
  highlights: string;
}

const ProductHighlights: React.FC<ProductHighlightsProps> = ({
  title ,
  highlights,
}) => {
  return (
    <HighlightsContainer>
      <HighlightsTitle >{title}</HighlightsTitle>
      <DetailValue >{highlights}</DetailValue>
    </HighlightsContainer>
  );
};

export default ProductHighlights;
