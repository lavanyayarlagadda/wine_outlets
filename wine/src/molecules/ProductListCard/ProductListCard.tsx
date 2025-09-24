import React from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { empty_star, expandIcon, calendar, cityMap } from "../../assets";
import {
  AddToCartLoader,
  FavoriteBorderIcon,
  FavoriteIcon,
  ImageFallback,
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
  DescriptionTooltip,
} from "./ProductListCard.style";

export interface ProductCardProps {
  itemNumber: number | string;
  image: string;
  itemName: string;
  location?: string;
  year?: string | number;
  size?: string;
  rating?: string | number;
  description?: string;
  price: number;
  vipPrice?: number;
  onAddToCart: (itemNumber: number | string) => void;
  onToggleFavorite: (itemNumber: number | string) => void;
  isFavorite: boolean;
  isLoading?: string | null;
  wishListLoading?: string | null;
}

const ProductListCard: React.FC<ProductCardProps> = ({
  itemNumber,
  image,
  itemName,
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
  isLoading,
  wishListLoading,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  return (
    <StyledCard elevation={0}>
      <ImageWrapper>
        {image ? (
          <ProductImage
            component="img"
            image={image}
            alt={itemName}
            onClick={() => {
              navigate(`/productView?productId=${itemNumber}&size=${size}&vintage=${year}`);
              window.scrollTo(0, 0);
            }}
          />
        ) : (
          <ImageFallback>No Image Available</ImageFallback>
        )}

        <FavoriteWrapper>
          <FavoriteButton onClick={() => onToggleFavorite(itemNumber)}>
            {wishListLoading === itemNumber ? (
              <AddToCartLoader />
            ) : isFavorite ? (
              <FavoriteIcon />
            ) : (
              <FavoriteBorderIcon />
            )}
          </FavoriteButton>
        </FavoriteWrapper>
      </ImageWrapper>

      <StyledCardContent>
        <ProductTitle variant="h6">{itemName}</ProductTitle>

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

        {description && (
          <DescriptionTooltip title={description} arrow>
            <DescriptionText variant="body2">{description}</DescriptionText>
          </DescriptionTooltip>
        )}

        <FooterRow>
          {typeof vipPrice === "number" && <VIPPriceText>VIP: ${vipPrice.toFixed(2)}</VIPPriceText>}
          <PriceText>${price.toFixed(2)}</PriceText>
          <AddToCartButton
            variant="contained"
            fullWidth={isMobile}
            startIcon={isLoading ? null : <ShoppingCart />}
            onClick={() => onAddToCart(itemNumber)}
            disabled={isLoading === itemNumber} // disable button while loading
          >
            {isLoading === itemNumber ? <AddToCartLoader /> : "Add to Cart"}
          </AddToCartButton>
        </FooterRow>
      </StyledCardContent>
    </StyledCard>
  );
};

export default ProductListCard;
