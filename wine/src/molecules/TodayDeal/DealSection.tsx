import React, { useState, useEffect } from "react";
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
import {
  FavoriteBorder,
  ShoppingCart,
  LocalFireDepartment,
  Star,
  ThumbUp,
  PersonOutline,
} from "@mui/icons-material";
import { DEAL_PRODUCT } from "../../constant/dealProduct";
import { empty_star, calendar, cityMap, expandIcon } from "../../assets";
import { Container, Dot } from "./DealSection.style";
import ProductCard from "../ProductCard/ProductCard";

interface Product {
  id: string;
  name: string;
  year: number;
  region: string;
  volume: string;
  rating: number;
  vipPrice: number;
  regularPrice: number;
  imageUrl: string;
  isFavorite?: boolean;
}

interface FilterButton {
  id: string;
  label: string;
  icon: React.ReactNode;
  isActive?: boolean;
}

const DealsSection: React.FC = () => {
  const theme = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    hours: 9,
    minutes: 17,
    seconds: 45,
  });

  const filterButtons: FilterButton[] = [
    { id: "trending", label: "Trending", icon: <LocalFireDepartment />, isActive: true },
    { id: "staff", label: "Staff Picks", icon: <Star />, isActive: false },
    { id: "popular", label: "Most Popular", icon: <ThumbUp />, isActive: false },
    { id: "foryou", label: "Just For You", icon: <PersonOutline />, isActive: false },
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", color: theme.palette.black[800] }}>
            Today's Deal for you!
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            {[
              { value: timeLeft.hours.toString().padStart(2, "0"), label: "hours" },
              { value: timeLeft.minutes.toString().padStart(2, "0"), label: "minutes" },
              { value: timeLeft.seconds.toString().padStart(2, "0"), label: "seconds" },
            ].map((time, index) => (
              <React.Fragment key={time.label}>
                <Box
                  sx={{
                    backgroundColor: "#d32f2f",
                    color: theme.palette.white.main,
                    px: 1.5,
                    py: 0.5,
                    borderRadius: "50%",
                    height: "40px",
                    width: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                  }}
                >
                  {time.value}
                </Box>
                {index < 2 && (
                  <Typography sx={{ color: "#d32f2f", fontWeight: "bold", fontSize: "1.1rem" }}>
                    :
                  </Typography>
                )}
              </React.Fragment>
            ))}
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          {filterButtons.map((filter) => (
            <Button
              key={filter.id}
              variant={filter.isActive ? "contained" : "outlined"}
              startIcon={filter.icon}
              sx={{
                backgroundColor: filter.isActive ? "transparent" : "#fff",
                borderColor: filter.isActive ? "#ff6b35" : "#ddd",
                color: filter.isActive ? theme.palette.primary.dark : theme.palette.black[800],
                "&:hover": {
                  backgroundColor: filter.isActive ? "#e55a2b" : "#f5f5f5",
                },
                textTransform: "none",
                fontWeight: 600,
              }}
            >
              {filter.label}
            </Button>
          ))}
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

export default DealsSection;
