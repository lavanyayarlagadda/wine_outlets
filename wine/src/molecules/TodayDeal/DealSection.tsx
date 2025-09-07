import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import { LandingPageData } from "../../constant/LandingPageData";
import type { Product } from "../ProductCard/ProductCard";
import { Container } from "./DealSection.style";
import ProductCard from "../ProductCard/ProductCard";
import palette from "../../themes/palette";

interface TimerConfig {
  endTime: string; // ISO string
  format?: string;
}

interface DealFilterBtn {
  id: string;
  label: string;
}

interface DealProductsGroup {
  trending?: Product[];
  staff?: Product[];
  popular?: Product[];
  justforyou?: Product[];
  // allow other keys
  [key: string]: Product[] | undefined;
}

interface DealSectionPropsFromData {
  isVisible?: boolean | string;
  title?: string;
  props?: {
    showTimer?: boolean;
    timer?: TimerConfig;
    filterButtons?: DealFilterBtn[];
  };
  dealProducts?: DealProductsGroup;
}

const dealSection: DealSectionPropsFromData = (LandingPageData as any)?.dealSection ?? {};

const title = dealSection.title ?? "Today's Deal for you!";
const sectionProps = dealSection.props ?? {};

const timerConfig = sectionProps?.timer;
const filterButtonsFromData: DealFilterBtn[] = sectionProps?.filterButtons ?? [];
const dealProducts: DealProductsGroup = (dealSection.dealProducts as DealProductsGroup) ?? {};


const DealsSection: React.FC = () => {
  const theme = useTheme();
  const showTimer = !!sectionProps?.showTimer;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeFilter, setActiveFilter] = useState<string>(
    filterButtonsFromData[0]?.id ?? "trending"
  );
  const [remainingMs, setRemainingMs] = useState<number | null>(() => {
    if (!timerConfig?.endTime) return null;
    const ms = Date.parse(timerConfig.endTime) - Date.now();
    return Number.isFinite(ms) ? Math.max(0, ms) : null;
  });

  const productsForActiveFilter: Product[] = (dealProducts[activeFilter] ?? []) as Product[];
  const totalSlides = Math.max(1, Math.ceil((productsForActiveFilter?.length ?? 0) / 4));

  const timeParts =
    remainingMs !== null
      ? {
          hours: Math.floor(remainingMs / (1000 * 60 * 60)),
          minutes: Math.floor((remainingMs % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((remainingMs % (1000 * 60)) / 1000),
        }
      : { hours: 0, minutes: 0, seconds: 0 };

  // Refs for drag scrolling
  const filterButtonsRef = useRef<HTMLDivElement>(null);
  const productCardsRef = useRef<HTMLDivElement>(null);

  // Drag scrolling functions
  const enableDragScroll = (element: HTMLDivElement) => {
    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    element.addEventListener("mousedown", (e) => {
      isDown = true;
      startX = e.pageX - element.offsetLeft;
      scrollLeft = element.scrollLeft;
      element.style.cursor = "grabbing";
      element.style.userSelect = "none";
    });

    element.addEventListener("mouseleave", () => {
      isDown = false;
      element.style.cursor = "grab";
      element.style.userSelect = "auto";
    });

    element.addEventListener("mouseup", () => {
      isDown = false;
      element.style.cursor = "grab";
      element.style.userSelect = "auto";
    });

    element.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - element.offsetLeft;
      const walk = (x - startX) * 2; // Scroll-fastness
      element.scrollLeft = scrollLeft - walk;
    });

    // Touch events for mobile
    element.addEventListener("touchstart", (e) => {
      isDown = true;
      startX = e.touches[0].pageX - element.offsetLeft;
      scrollLeft = element.scrollLeft;
    });

    element.addEventListener("touchend", () => {
      isDown = false;
    });

    element.addEventListener("touchmove", (e) => {
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

useEffect(() => {
  if (!showTimer || remainingMs === null) return undefined;

  const tick = () => {
    setRemainingMs((prev) => {
      if (prev === null) return null;
      const next = prev - 1000;
      return next >= 0 ? next : 0;
    });
  };

  const id = setInterval(tick, 1000);
  return () => clearInterval(id);
}, [showTimer, remainingMs]);


  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "center" },
          gap: { xs: 2, md: 3 },
          mb: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "flex-start", sm: "center" },
            gap: { xs: 1, sm: 2 },
            flexWrap: "wrap",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: theme.palette.black[800],
              fontSize: {
                xs: "1.5rem",
                sm: "1.75rem",
                md: "2rem",
                lg: "2.125rem",
              },
            }}
          >
            {title}
          </Typography>

          {/* Timer Component */}
          {showTimer && remainingMs !== null && (
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              {[
                { value: String(timeParts.hours).padStart(2, "0"), label: "hours" },
                { value: String(timeParts.minutes).padStart(2, "0"), label: "minutes" },
                { value: String(timeParts.seconds).padStart(2, "0"), label: "seconds" },
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
                      fontSize: { xs: "0.9rem", sm: "1.1rem" },
                    }}
                  >
                    {time.value}
                  </Box>
                  {index < 2 && (
                    <Typography
                      sx={{
                        color: palette.primary.dark,
                        fontWeight: "bold",
                        fontSize: { xs: "0.9rem", sm: "1.1rem" },
                      }}
                    >
                      :
                    </Typography>
                  )}
                </React.Fragment>
              ))}
            </Box>
          )}
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
          {filterButtonsFromData.map((filter) => {
            const isActive = filter.id === activeFilter;
            return (
              <Button
                key={filter.id}
                variant={isActive ? "contained" : "outlined"}
                startIcon={/* optionally map icons by id if you want */ undefined}
                onClick={() => setActiveFilter(filter.id)}
                sx={{
                  backgroundColor: isActive ? theme.palette.primary.main : palette.white.main,
                  borderColor: isActive ? theme.palette.primary.main : palette.grey[50],
                  color: isActive ? palette.white.main : theme.palette.black[800],
                  "&:hover": {
                    backgroundColor: isActive ? theme.palette.primary.dark : palette.grey[200],
                    borderColor: isActive ? theme.palette.primary.dark : palette.grey[50],
                  },
                  textTransform: "none",
                  fontWeight: 600,
                  flexShrink: 0,
                  minWidth: "auto",
                  px: { xs: 1.5, sm: 2 },
                  py: { xs: 0.5, sm: 1 },
                  fontSize: {
                    xs: "0.75rem",
                    sm: "0.875rem",
                  },
                  "& .MuiButton-startIcon": {
                    marginRight: { xs: 0.5, sm: 1 },
                    "& > svg": {
                      fontSize: { xs: "1rem", sm: "1.25rem" },
                    },
                  },
                }}
              >
                {filter.label}
              </Button>
            );
          })}
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
          scrollBehavior: "smooth",
        }}
      >
        {(productsForActiveFilter ?? []).map((product) => (
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
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          gap: 1,
        }}
      >
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
