import React from "react";
import {
  CardContent,
  Box,
  Typography,
  Button,
  CardMedia,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { FavoriteBorder, ShoppingCart } from "@mui/icons-material";
import {
  StyledCard,
  FavoriteButton,
  ProductName,
  DetailsRow,
  SmallText,
  SmallChip,
  RatingBox,
  PriceText,
  VIPPriceText,
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

export const ProductGridCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onToggleFavorite,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <StyledCard
      sx={{
        maxWidth: isMobile ? 340 : 470,
        width: "100%",
        minHeight: isMobile ? 380 : 470,
      }}
    >
      <FavoriteButton
        aria-label="add to favorites"
        onClick={() => onToggleFavorite(product.id)}
      >
        <FavoriteBorder sx={{ color: "#666" }} />
      </FavoriteButton>

      <CardMedia
        component="img"
        height={250}
        image={product.media.url}
        alt={product.name}
        sx={{ objectFit: "contain", p: 2 }}
      />

      <CardContent sx={{ pt: 1, pb: 0 }}>
        <ProductName sx={{ textAlign: "left" }}>{product.name}</ProductName>

        <DetailsRow>
          <Box display="flex" alignItems="center">
  <SmallText>
            <img
              src={calendar}
              alt="region"
              style={{ width: 20, height: 20, marginRight: 6 }}
            />
            {product.year}
          </SmallText>
          </Box>
          <SmallText>
            <img
              src={cityMap}
              alt="region"
              style={{ width: 20, height: 20, marginRight: 6 }}
            />
            {product.region}
          </SmallText>
        </DetailsRow>

        <DetailsRow>
          <SmallText>
            <img
              src={expandIcon}
              alt="size"
              style={{ width: 20, height: 20, marginRight: 6 }}
            />
            {product.size}
          </SmallText>
          <RatingBox>
            <img src={empty_star} alt="star" style={{ width: 20, height: 20,marginRight:6 }} />
            <SmallText>
              {product.rating}
            </SmallText>
          </RatingBox>
        </DetailsRow>

<Box sx={{ mb: 2, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2 }}>
  {product.vipPrice && (
    <VIPPriceText>
      VIP: ${product.vipPrice.toFixed(2)}
    </VIPPriceText>
  )}
  <PriceText>${product.price.toFixed(2)}</PriceText>
</Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 1,
          }}
        >
        <Button
          variant="contained"
          fullWidth={isMobile}
          onClick={() => onAddToCart(product.id)}
          startIcon={<ShoppingCart />}
              sx={{
                color: theme.palette.primary.dark,
                backgroundColor: theme.palette.primary.light,
                padding: "12px 0px",
                textTransform: "none",
                fontWeight: 600,
                width: "100%",
                whiteSpace:'nowrap',
                border:`1px solid ${theme.palette.primary.dark}`
              }}
        >
          Add to Cart
        </Button>
        </Box>
      </CardContent>
    </StyledCard>
  );
};
