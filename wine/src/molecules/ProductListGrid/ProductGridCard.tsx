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
  ImageFallback,
} from "./ProductGridCard.style";
import { empty_star, expandIcon, calendar, cityMap } from "../../assets";

export interface Product {
  itemId: string;
  pricing: any;
  images: any;
  itemNumber: string;
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
  onAddToCart?: (itemNumber: number | string) => void;
  onToggleFavorite: (itemNumber: number | string) => void;
  isFavorite: boolean;
  isLoading?: string | null;
  wishListLoading?: string | null;
  noaddtocart?: boolean;
}

const ProductGridCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onToggleFavorite,
  isFavorite,
  isLoading,
  wishListLoading,
  noaddtocart,
}) => {
  const navigate = useNavigate();
  const productKey = product.itemNumber ?? product.itemId;
  return (
    <ResponsiveCard>
      <FavoriteButton onClick={() => onToggleFavorite(productKey)}>
        {wishListLoading?.toString() === productKey ? (
          <AddToCartLoader />
        ) : isFavorite ? (
          <FavoriteIcon />
        ) : (
          <FavoriteBorderIcon />
        )}
      </FavoriteButton>

      {(noaddtocart ? product.images.url : product.media.url) ? (
        <ProductImage
          component="img"
          image={noaddtocart ? product.images.url : product.media.url}
          alt={product.name}
          onClick={() => {
            navigate(
              `/productView?productId=${product.itemNumber}&size=${product.size}&vintage=${product.year}`
            );
            window.scrollTo(0, 0);
          }}
        />
      ) : (
        <ImageFallback>No Image Available</ImageFallback>
      )}

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
        {!noaddtocart ? (
          <PriceRow noaddtocart={noaddtocart}>
            {product?.vipPrice && (
              <VIPPriceText>VIP: ${product?.vipPrice?.toFixed(2)}</VIPPriceText>
            )}
            <PriceText>${product?.price?.toFixed(2)}</PriceText>
          </PriceRow>
        ) : (
          <PriceRow noaddtocart={noaddtocart}>
            {product?.pricing?.vipPrice && (
              <VIPPriceText>VIP: ${product?.pricing?.vipPrice?.toFixed(2)}</VIPPriceText>
            )}
            <PriceText>${product?.pricing?.price?.toFixed(2)}</PriceText>
          </PriceRow>
        )}
        {!noaddtocart && onAddToCart && (
          <AddToCartButton
            onClick={() => onAddToCart(product.itemNumber)}
            startIcon={isLoading?.toString() === product.itemNumber ? null : <ShoppingCart />}
            disabled={isLoading?.toString() === product.itemNumber} // disable while loading
          >
            {isLoading?.toString() === product.itemNumber ? <AddToCartLoader /> : "Add to Cart"}
          </AddToCartButton>
        )}
      </ProductCardContent>
    </ResponsiveCard>
  );
};

export default ProductGridCard;
