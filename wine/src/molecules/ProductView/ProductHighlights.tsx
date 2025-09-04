import React from "react";
import { Box, Typography } from "@mui/material";
import { HighlightsContainer, HighlightsTitle, HighlightsText, DetailValue } from "./ProductView.style";

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
