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
      <HighlightsTitle variant="subtitle1">{title}</HighlightsTitle>
      <DetailValue variant="body2">{highlights}</DetailValue>
    </HighlightsContainer>
  );
};

export default ProductHighlights;
