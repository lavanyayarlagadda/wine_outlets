import React from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { ShoppingCart } from "@mui/icons-material";
import { empty_star, expandIcon, calendar, cityMap } from "../../assets";
import {
  PriceText,
  RatingBox,
  SmallText,
  VIPPriceText,
} from "../ProductListGrid/ProductGridCard.style";
import { useNavigate } from "react-router-dom";
import {
  StyledCard,
  ImageWrapper,
  ProductImage,
  FavoriteWrapper,
  FavoriteButton,
  StyledCardContent,
  ProductTitle,
  DescriptionText,
  FooterRow,
  AddToCartButton,
  InfoRow,
  InfoIcon,
} from "./ProductListCard.style";

export interface ProductCardProps {
  id: number | string;
  image: string;
  name: string;
  location?: string;
  year?: string | number;
  size?: string;
  rating?: string | number;
  description?: string;
  price: number;
  vipPrice?: number;
  onAddToCart: (id: number | string) => void;
  onToggleFavorite: (id: number | string) => void;
  isFavorite: boolean;
}

const ProductListCard: React.FC<ProductCardProps> = ({
  id,
  image,
  name,
  location,
  year,
  size,
  rating,
  description,
  price,
  vipPrice,
  onAddToCart,
  onToggleFavorite,
  isFavorite,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  return (
    <StyledCard elevation={0}>
      <ImageWrapper>
        <ProductImage
          component="img"
          image={image}
          alt={name}
          onClick={() => navigate("/productView")}
        />
        <FavoriteWrapper>
          <FavoriteButton onClick={() => onToggleFavorite(id)}>
            {isFavorite ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
          </FavoriteButton>
        </FavoriteWrapper>
      </ImageWrapper>

      <StyledCardContent>
        <ProductTitle variant="h6">{name}</ProductTitle>

        <InfoRow>
          {location && (
            <SmallText>
              <InfoIcon src={cityMap} alt="region" />
              {location}
            </SmallText>
          )}
          {year && (
            <SmallText>
              <InfoIcon src={calendar} alt="year" />
              {year}
            </SmallText>
          )}
          {size && (
            <SmallText>
              <InfoIcon src={expandIcon} alt="size" />
              {size}
            </SmallText>
          )}
          {rating && (
            <RatingBox>
              <InfoIcon src={empty_star} alt="star" />
              <SmallText>{rating}</SmallText>
            </RatingBox>
          )}
        </InfoRow>

        {description && <DescriptionText variant="body2">{description}</DescriptionText>}

        <FooterRow>
          {typeof vipPrice === "number" && <VIPPriceText>VIP: ${vipPrice.toFixed(2)}</VIPPriceText>}
          <PriceText>${price.toFixed(2)}</PriceText>
          <AddToCartButton
            variant="contained"
            fullWidth={isMobile}
            startIcon={<ShoppingCart />}
            onClick={() => onAddToCart(id)}
          >
            Add to Cart
          </AddToCartButton>
        </FooterRow>
      </StyledCardContent>
    </StyledCard>
  );
};

export default ProductListCard;
