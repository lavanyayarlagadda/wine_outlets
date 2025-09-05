import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Button,
  useTheme,
} from "@mui/material";
import {
  LocalFireDepartment,
  Star,
  ThumbUp,
  PersonOutline,
} from "@mui/icons-material";
import { DEAL_PRODUCT } from "../../constant/dealProduct";
import { Container } from "./DealSection.style";
import ProductCard from "../ProductCard/ProductCard";
import palette from "../../themes/palette";

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

  // Refs for drag scrolling
  const filterButtonsRef = useRef<HTMLDivElement>(null);
  const productCardsRef = useRef<HTMLDivElement>(null);

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

  // Drag scrolling functions
  const enableDragScroll = (element: HTMLDivElement) => {
    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    element.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - element.offsetLeft;
      scrollLeft = element.scrollLeft;
      element.style.cursor = 'grabbing';
      element.style.userSelect = 'none';
    });

    element.addEventListener('mouseleave', () => {
      isDown = false;
      element.style.cursor = 'grab';
      element.style.userSelect = 'auto';
    });

    element.addEventListener('mouseup', () => {
      isDown = false;
      element.style.cursor = 'grab';
      element.style.userSelect = 'auto';
    });

    element.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - element.offsetLeft;
      const walk = (x - startX) * 2; // Scroll-fastness
      element.scrollLeft = scrollLeft - walk;
    });

    // Touch events for mobile
    element.addEventListener('touchstart', (e) => {
      isDown = true;
      startX = e.touches[0].pageX - element.offsetLeft;
      scrollLeft = element.scrollLeft;
    });

    element.addEventListener('touchend', () => {
      isDown = false;
    });

    element.addEventListener('touchmove', (e) => {
      if (!isDown) return;
      const x = e.touches[0].pageX - element.offsetLeft;
      const walk = (x - startX) * 2;
      element.scrollLeft = scrollLeft - walk;
    });
  };

  // Initialize drag scrolling after component mounts
  useEffect(() => {
    if (filterButtonsRef.current) {
      enableDragScroll(filterButtonsRef.current);
    }
    if (productCardsRef.current) {
      enableDragScroll(productCardsRef.current);
    }
  }, []);

  const totalSlides = Math.ceil(DEAL_PRODUCT.length / 4);

  const getCurrentProducts = () => {
    const startIndex = currentSlide * 4;
    return DEAL_PRODUCT.slice(startIndex, startIndex + 4);
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);

    if (productCardsRef.current) {
      const container = productCardsRef.current;
      const containerWidth = container.clientWidth; // visible width
      container.scrollTo({
        left: index * containerWidth,
        behavior: "smooth",
      });
    }
  };


  const handleAddToCart = (productId: string) => {
    console.log("Add to cart:", productId);
  };

  const handleToggleFavorite = (productId: string) => {
    console.log("Toggle favorite:", productId);
  };

  return (
    <Container>
      <Box sx={{ 
        display: "flex", 
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between", 
        alignItems: { xs: "flex-start", md: "center" }, 
        gap: { xs: 2, md: 3 },
        mb: 4 
      }}>
        <Box sx={{ 
          display: "flex", 
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "flex-start", sm: "center" },
          gap: { xs: 1, sm: 2 },
          flexWrap: "wrap"
        }}>
          <Typography variant="h4" sx={{ 
            fontWeight: "bold", 
            color: theme.palette.black[800],
            fontSize: {
              xs: "1.5rem",
              sm: "1.75rem", 
              md: "2rem",
              lg: "2.125rem"
            }
          }}>
            Today's Deal for you!
          </Typography>
          
          {/* Timer Component */}
          <Box sx={{ 
            display: "flex", 
            gap: 1,
            alignItems: "center"
          }}>
            {[
              { value: timeLeft.hours.toString().padStart(2, "0"), label: "hours" },
              { value: timeLeft.minutes.toString().padStart(2, "0"), label: "minutes" },
              { value: timeLeft.seconds.toString().padStart(2, "0"), label: "seconds" },
            ].map((time, index) => (
              <React.Fragment key={time.label}>
                <Box
                  sx={{
                    backgroundColor: palette.primary.dark,
                    color: theme.palette.white.main,
                    px: { xs: 1, sm: 1.5 },
                    py: { xs: 0.25, sm: 0.5 },
                    borderRadius: "50%",
                    height: { xs: "32px", sm: "40px" },
                    width: { xs: "32px", sm: "40px" },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    fontSize: {
                      xs: "0.9rem",
                      sm: "1.1rem"
                    },
                  }}
                >
                  {time.value}
                </Box>
                {index < 2 && (
                  <Typography sx={{ 
                    color: palette.primary.dark, 
                    fontWeight: "bold", 
                    fontSize: {
                      xs: "0.9rem",
                      sm: "1.1rem"
                    } 
                  }}>
                    :
                  </Typography>
                )}
              </React.Fragment>
            ))}
          </Box>
        </Box>
        
        <Box 
          ref={filterButtonsRef}
          sx={{ 
            display: "flex", 
            gap: { xs: 1, sm: 2 },
            overflowX: "auto",
            whiteSpace: "nowrap",
            maxWidth: "100%",
            width: { xs: "100%", md: "auto" },
            pb: 1,
            cursor: "grab",
            "&:active": {
              cursor: "grabbing",
            },
            "&::-webkit-scrollbar": {
              display: "none",
            },
            "-ms-overflow-style": "none",
            scrollbarWidth: "none",
          }}
        >
          {filterButtons.map((filter) => (
            <Button
              key={filter.id}
              variant={filter.isActive ? "contained" : "outlined"}
              startIcon={filter.icon}
              sx={{
                backgroundColor: filter.isActive ? theme.palette.primary.main : palette.white.main,
                borderColor: filter.isActive ? theme.palette.primary.main : palette.grey[50],
                color: filter.isActive ? palette.white.main : theme.palette.black[800],
                "&:hover": {
                  backgroundColor: filter.isActive ? theme.palette.primary.dark : palette.grey[150] ,
                  borderColor: filter.isActive ? theme.palette.primary.dark : palette.grey[50],
                },
                textTransform: "none",
                fontWeight: 600,
                flexShrink: 0,
                minWidth: "auto",
                px: { xs: 1.5, sm: 2 },
                py: { xs: 0.5, sm: 1 },
                fontSize: {
                  xs: "0.75rem",
                  sm: "0.875rem"
                },
                '& .MuiButton-startIcon': {
                  marginRight: { xs: 0.5, sm: 1 },
                  '& > svg': {
                    fontSize: { xs: "1rem", sm: "1.25rem" }
                  }
                }
              }}
            >
              {filter.label}
            </Button>
          ))}
        </Box>
      </Box>

      <Box
        ref={productCardsRef}
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: 3,
          mb: 3,
          mt: 7,
          py: 1,
          cursor: "grab",
          "&:active": { cursor: "grabbing" },
          "&::-webkit-scrollbar": { display: "none" },
          "-ms-overflow-style": "none",
          scrollbarWidth: "none",
          scrollBehavior: "smooth", // ✅ add this
        }}
      >
        {DEAL_PRODUCT.map((product) => (
          <Box
            key={product.id}
            sx={{
              minWidth: { xs: "280px", md: "calc(25% - 18px)" },
              flexShrink: 0,
            }}
          >
            <ProductCard
              product={product}
              onAddToCart={handleAddToCart}
              onToggleFavorite={handleToggleFavorite}
            />
          </Box>
        ))}
      </Box>

      {/* Navigation Dots */}
      <Box sx={{   
        display: { xs: "none", md: "flex" },
        justifyContent: "center", 
        gap: 1 
      }}>
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