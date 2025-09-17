import React from "react";
import { Box } from "@mui/material";
import {
  CustomizeCardWrapper,
  StyledCard,
  ImageWrapper,
  // OverlayContent,
  // Title,
  // SubTitle,
  CoverImage,
} from "./ProductCard.style";
import { useNavigate } from "react-router-dom";
// import type { ShopCategory } from "../../../store/Interfaces/LandingPageInterface/HomePageSectionsDataInterface";
import type { BannerImageItem } from "../../../constant/LandingPageData";

const ProductCardSection: React.FC<{ categories: BannerImageItem[] }> = ({ categories }) => {
  const navigate = useNavigate();
  const displayData = categories.slice(0, 4);

  return (
    <Box>
      <CustomizeCardWrapper>
        {displayData.map((item,index) => (
          <StyledCard
            key={index}
            onClick={() => {
              navigate(`/productsList?tags=${item?.tags?.join(',')}`);
            }}
            role="button"
          >
            <ImageWrapper>
              <CoverImage src={item.imageUrl ?? "/placeholder.svg"} alt="wine_img" />
            </ImageWrapper>
            {/* <OverlayContent>
              <Title>{item.productName}</Title>
              <SubTitle variant="body2">{item.productCount ?? 0} products</SubTitle>
            </OverlayContent> */}
          </StyledCard>
        ))}
      </CustomizeCardWrapper>
    </Box>
  );
};

export default ProductCardSection;
