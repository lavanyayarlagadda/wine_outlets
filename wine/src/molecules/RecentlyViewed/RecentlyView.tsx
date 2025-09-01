import React, { useState } from "react";
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
import { DEAL_PRODUCT } from "../../constant/dealProduct";
import { empty_star } from "../../assets";
import { Container } from "./RecentlyView.style";
import { expandIcon, calendar, cityMap } from "../../assets";
import ProductCard from "../ProductCard/ProductCard";

const RecentlyViewed: React.FC = () => {
  const theme = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = Math.ceil(DEAL_PRODUCT.length / 4);

  const getCurrentProducts = () => {
    const startIndex = currentSlide * 4;
    return DEAL_PRODUCT.slice(startIndex, startIndex + 4);
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  const handleAddToCart = (productId: string) => {
    console.log("Add to cart:", productId);
  };

  const handleToggleFavorite = (productId: string) => {
    console.log("Toggle favorite:", productId);
  };

  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 4 }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", color: theme.palette.black[800] }}>
            Recently Viewed
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 3, mb: 3, mt: 7 }}>
        {getCurrentProducts().map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            onAddToCart={handleAddToCart}
            onToggleFavorite={handleToggleFavorite}
          />
        ))}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
        {Array.from({ length: totalSlides }).map((_, index) => (
          <Box
            key={index}
            onClick={() => handleDotClick(index)}
            sx={{
              width: currentSlide === index ? 24 : 12,
              height: 12,
              borderRadius: currentSlide === index ? 4 : "50%",
              backgroundColor:
                currentSlide === index ? theme.palette.primary.dark : theme.palette.warning.light,
              cursor: "pointer",
              transition: "background-color 0.3s ease",
              "&:hover": {
                backgroundColor:
                  currentSlide === index ? theme.palette.primary.dark : theme.palette.warning.light,
              },
            }}
          />
        ))}
      </Box>
    </Container>
  );
};

export default RecentlyViewed;
