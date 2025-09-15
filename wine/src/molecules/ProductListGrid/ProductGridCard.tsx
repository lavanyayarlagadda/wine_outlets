import React from "react";
import { ShoppingCart } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import {
  ResponsiveCard,
  FavoriteButton,
  ProductImage,
  ProductCardContent,
  ProductName,
  DetailsRow,
  SmallText,
  RatingBox,
  PriceRow,
  PriceText,
  VIPPriceText,
  AddToCartButton,
  FavoriteIcon,
  FavoriteBorderIcon,
  AddToCartLoader,
} from "./ProductGridCard.style";
import { empty_star, expandIcon, calendar, cityMap } from "../../assets";

export interface Product {
  id: string;
  name: string;
  year: number;
  region: string;
  size: string;
  rating: number;
  price: number;
  vipPrice?: number;
  salePrice?: number;
  tag?: string;
  isWishlisted?: boolean;
  description?: string;
  media: {
    type: "image" | "video";
    url: string;
  };
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (id: number | string) => void;
  onToggleFavorite: (id: number | string) => void;
  isFavorite: boolean;
  isLoading?: string | null;
  wishListLoading?: string | null;
  noAddtoCart?: boolean;
}

const ProductGridCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onToggleFavorite,
  isFavorite,
  isLoading,
  wishListLoading,
  noAddtoCart,
}) => {
  const navigate = useNavigate();
  return (
    <ResponsiveCard>
      <FavoriteButton onClick={() => onToggleFavorite(product.id)}>
        {wishListLoading?.toString() === product.id ? (
          <AddToCartLoader />
        ) : isFavorite ? (
          <FavoriteIcon />
        ) : (
          <FavoriteBorderIcon />
        )}
      </FavoriteButton>

      <ProductImage
        component="img"
        image={product.media.url}
        alt={product.name}
        onClick={() => {
          navigate(
            `/productView?productId=${product.id}&size=${product.size}&vintage=${product.year}`
          );
          window.scrollTo(0, 0);
        }}
      />

      <ProductCardContent>
        <ProductName>{product.name}</ProductName>

        <DetailsRow>
          <SmallText>
            <img src={calendar} alt="year" style={{ width: 20, height: 20, marginRight: 6 }} />
            {product.year}
          </SmallText>

          <SmallText>
            <img src={cityMap} alt="region" style={{ width: 20, height: 20, marginRight: 6 }} />
            {product.region}
          </SmallText>
        </DetailsRow>

        <DetailsRow>
          <SmallText>
            <img src={expandIcon} alt="size" style={{ width: 20, height: 20, marginRight: 6 }} />
            {product.size}
          </SmallText>

          <RatingBox>
            <img src={empty_star} alt="rating" style={{ width: 20, height: 20, marginRight: 6 }} />
            <SmallText>{product.rating}</SmallText>
          </RatingBox>
        </DetailsRow>

        <PriceRow noAddtoCart={noAddtoCart}>
          {product.vipPrice && <VIPPriceText>VIP: ${product.vipPrice.toFixed(2)}</VIPPriceText>}
          <PriceText>${product.price.toFixed(2)}</PriceText>
        </PriceRow>
        {!noAddtoCart && (
          <AddToCartButton
            onClick={() => onAddToCart(product.id)}
            startIcon={isLoading?.toString() === product.id ? null : <ShoppingCart />}
            disabled={isLoading?.toString() === product.id} // disable while loading
          >
            {isLoading?.toString() === product.id ? <AddToCartLoader /> : "Add to Cart"}
          </AddToCartButton>
        )}
      </ProductCardContent>
    </ResponsiveCard>
  );
};

export default ProductGridCard;
