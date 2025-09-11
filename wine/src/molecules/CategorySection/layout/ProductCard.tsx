import React from "react";
import { Box } from "@mui/material";
import {
  CustomizeCardWrapper,
  StyledCard,
  ImageWrapper,
  OverlayContent,
  Title,
  SubTitle,
  CoverImage,
} from "./ProductCard.style";
import { useNavigate } from "react-router-dom";
import type { ShopCategory } from "../CategorySection";

const ProductCardSection: React.FC<{ categories: ShopCategory[] }> = ({ categories }) => {
  const navigate = useNavigate();
  const displayData = categories.slice(0, 4);

  return (
    <Box>
      <CustomizeCardWrapper>
        {displayData.map((item) => (
          <StyledCard
            key={item.id}
            onClick={() => {
              if (item.categoryAction) navigate(item.categoryAction);
              else navigate("/productsList");
            }}
            role="button"
          >
            <ImageWrapper>
              <CoverImage src={item.media?.url ?? "/placeholder.svg"} alt={item.productName} />
            </ImageWrapper>
            <OverlayContent>
              <Title>{item.productName}</Title>
              <SubTitle variant="body2">{item.productCount ?? 0} products</SubTitle>
            </OverlayContent>
          </StyledCard>
        ))}
      </CustomizeCardWrapper>
    </Box>
  );
};

export default ProductCardSection;
