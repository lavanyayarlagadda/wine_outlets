import React from "react";
import { ShoppingCart, FavoriteBorder } from "@mui/icons-material";
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
  onAddToCart: (id: string) => void;
  onToggleFavorite: (id: string) => void;
}

const ProductGridCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onToggleFavorite,
}) => {
  const navigate = useNavigate();

  return (
    <ResponsiveCard>
      <FavoriteButton onClick={() => onToggleFavorite(product.id)}>
        <FavoriteBorder />
      </FavoriteButton>

      <ProductImage
        component="img"
        image={product.media.url}
        alt={product.name}
        onClick={() => {
          navigate("/productView");
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

        <PriceRow>
          {product.vipPrice && <VIPPriceText>VIP: ${product.vipPrice.toFixed(2)}</VIPPriceText>}
          <PriceText>${product.price.toFixed(2)}</PriceText>
        </PriceRow>

        <AddToCartButton onClick={() => onAddToCart(product.id)} startIcon={<ShoppingCart />}>
          Add to Cart
        </AddToCartButton>
      </ProductCardContent>
    </ResponsiveCard>
  );
};

export default ProductGridCard;
