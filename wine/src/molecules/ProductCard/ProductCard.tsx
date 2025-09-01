import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Chip,
  useTheme,
} from "@mui/material";
import { FavoriteBorder, ShoppingCart } from "@mui/icons-material";
import { empty_star, expandIcon, calendar, cityMap } from "../../assets";

interface ProductCardProps {
  id: string;
  name: string;
  year: number;
  region: string;
  volume: string;
  rating: number;
  regularPrice: number;
  imageUrl: string;
  onAddToCart: (id: string) => void;
  onToggleFavorite: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  year,
  region,
  volume,
  rating,
  regularPrice,
  imageUrl,
  onAddToCart,
  onToggleFavorite,
}) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        position: "relative",
        borderRadius: 2,
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
        sx={{
          position: "absolute",
          top: 20,
          right: 22,
          backgroundColor: "white",
          border: `1px solid ${theme.palette.success.main}`,
          borderRadius: "4px",
          zIndex: 1,
          "&:hover": { backgroundColor: "#f5f5f5" },
        }}
        onClick={() => onToggleFavorite(id)}
      >
        <FavoriteBorder sx={{ color: "#666" }} />
      </IconButton>

      {/* Product Image */}
      <CardMedia
        component="img"
        height="400"
        image={imageUrl}
        alt={name}
        sx={{ objectFit: "contain", p: 2 }}
      />

      <CardContent sx={{ p: 2 }}>
        {/* Product Name */}
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, fontSize: "1rem" }}>
          {name}
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
          <Box>
            <img
              src={calendar}
              alt={"calendar icon"}
              style={{ width: "12px", height: "12px", marginRight: "5px" }}
            />
            <Chip
              label={year}
              size="small"
              sx={{ backgroundColor: "#f5f5f5", fontSize: "0.75rem" }}
            />
          </Box>
          <Typography variant="body2" sx={{ color: "#666", fontSize: "0.75rem" }}>
            <img
              src={cityMap}
              alt={"city map"}
              style={{ width: "12px", height: "12px", marginRight: "5px" }}
            />
            {region}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            mb: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: "#666", fontSize: "0.75rem" }}>
            <img
              src={expandIcon}
              alt={"expand icon"}
              style={{ width: "12px", height: "12px", marginRight: "5px" }}
            />
            {volume}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <img
              src={empty_star}
              alt="empty-star"
              style={{ height: "12px", marginBottom: "2px" }}
            />
            <Typography
              variant="body2"
              sx={{
                color: "#666",
                fontSize: "0.75rem",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                lineHeight: 0,
              }}
            >
              {rating}
            </Typography>
          </Box>
        </Box>

        {/* Pricing */}
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.black[800],
                fontWeight: 600,
                fontSize: "20px",
              }}
            >
              ${regularPrice.toFixed(2)}
            </Typography>
            <Button
              variant="outlined"
              startIcon={<ShoppingCart />}
              onClick={() => onAddToCart(id)}
              sx={{
                borderColor: theme.palette.primary.dark,
                color: theme.palette.primary.dark,
                backgroundColor: theme.palette.primary.light,
                padding: "12px 0px",
                textTransform: "none",
                fontWeight: 600,
                width: "50%",
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
