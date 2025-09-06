import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { FavoriteBorder, ShoppingCart } from "@mui/icons-material";
import { empty_star, expandIcon, calendar, cityMap } from "../../assets";
import shape from "../../themes/shape";
import palette from "../../themes/palette";
import { useNavigate } from "react-router-dom";

// const isRecentlyViewedCard = true;

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
  isRecentlyViewedCard?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onToggleFavorite,
  isRecentlyViewedCard = false,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        position: "relative",
        borderRadius: 3,
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        "&:hover": {
          boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
          transform: "translateY(-2px)",
        },
        transition: "all 0.3s ease",
      }}
    >
      {/* Favorite Button */}
      <IconButton
        onClick={() => onToggleFavorite(product?.id)}
        sx={{
          position: "absolute",
          top: 20,
          right: 22,
          backgroundColor: palette.white.main,
          border: shape.borderSuccess,
          borderRadius: "4px",
          zIndex: 1,
          "&:hover": { backgroundColor: palette.white.main },
        }}
      >
        <FavoriteBorder sx={{ color: palette.grey[200] }} />
      </IconButton>

      {/* Product Image */}
      <CardMedia
        component="img"
        height={isRecentlyViewedCard ? "300" : "240"}
        image={product?.media?.url}
        alt={product?.name}
        sx={{ objectFit: "contain", cursor: "pointer" }}
        onClick={() => navigate("/productView")}
      />

      <CardContent sx={{ p: 2 }}>
        {/* Product Name */}
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, fontSize: "1rem" }}>
          {product?.name}
        </Typography>

        {/* Product Details */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            mb: 1,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={calendar}
              alt={"calendar icon"}
              style={{ width: "24px", height: "24px", marginRight: "5px" }}
            />
            <Typography
              variant="h6"
              sx={{ fontSize: "1rem", fontWeight: 500, color: theme.palette.grey[200] }}
            >
              {product?.year}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={cityMap}
              alt={"city map"}
              style={{ width: "24px", height: "24px", marginRight: "5px" }}
            />
            <Typography
              variant="body2"
              sx={{ fontSize: "1rem", fontWeight: 500, color: theme.palette.grey[200] }}
            >
              {product?.region}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            mb: 2,
            mt: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{ color: theme.palette.grey[200], fontSize: "1rem", fontWeight: 500 }}
          >
            <img
              src={expandIcon}
              alt={"expand icon"}
              style={{ width: "18px", height: "18px", marginRight: "5px" }}
            />
            {product?.size}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <img
              src={empty_star}
              alt="empty-star"
              style={{ height: "18px", marginBottom: "2px" }}
            />
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.grey[200],
                fontSize: "1rem",
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                lineHeight: 0,
              }}
            >
              {product?.rating}
            </Typography>
          </Box>
        </Box>

        {/* Pricing */}
        <Box>
          {!isRecentlyViewedCard && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 1,
                mb: 2,
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.warning.light,
                  fontWeight: 600,
                  fontSize: "20px",
                }}
              >
                VIP: ${product?.price.toFixed(2)}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.black[800],
                  fontWeight: 600,
                  fontSize: "20px",
                }}
              >
                ${product?.price.toFixed(2)}
              </Typography>
            </Box>
          )}
          <Box
            sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 1 }}
          >
            {isRecentlyViewedCard && (
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.black[800],
                  fontWeight: 600,
                  fontSize: "20px",
                }}
              >
                ${product?.price.toFixed(2)}
              </Typography>
            )}
            <Button
              variant="contained"
              fullWidth={isMobile}
              onClick={() => onAddToCart(product?.id)}
              startIcon={<ShoppingCart />}
              sx={{
                borderColor: theme.palette.primary.dark,
                border: "1px solid",
                borderRadius: 1.5,
                color: theme.palette.primary.dark,
                backgroundColor: theme.palette.primary.light,
                padding: "12px 0px",
                textTransform: "none",
                fontWeight: 600,
                width: isRecentlyViewedCard ? "60%" : "100%",
              }}
            >
              Add to Cart
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
