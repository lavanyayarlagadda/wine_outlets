import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import {
  Container,
  HeaderRow,
  TitleAndTimer,
  TitleTypography,
  TimerBox,
  TimerChip,
  TimerColon,
  FilterButtonsRow,
  StyledFilterButton,
  CardsRow,
  CardWrapper,
  DotsRow,
  Dot,
} from "./DealSection.style";
import { useDealsSection } from "./DealsSection.hook";
import type { SideCategoryButton } from "../../constant/LandingPageData";
import { Box } from "@mui/material";

interface Props {
  title?: string;
  subtitle?: string;
  showTimer?: boolean;
  endTimeIso?: string;
  sideButtons?: SideCategoryButton[];
  content?: any[];
  isVisible?: boolean;
}

const DealsSection: React.FC<Props> = ({
  title,
  // subtitle,
  showTimer,
  endTimeIso,
  sideButtons,
  content,
  isVisible,
}) => {
  const {
    timeParts,
    activeFilter,
    setActiveFilter,
    productsForActiveFilter,
    productCardsRef,
    filterButtonsRef,
    handleDotClick,
    currentSlide,
    totalSlides,
    handleAddToCart,
    handleToggleFavorite,
    wishlist,
    counts,
    // subtitle,
    // increment,
    // decrement,
    // cartLoading,
  } = useDealsSection({ content, sideButtons, endTimeIso, showTimer });
  if (!isVisible) return null;
  return (
    <Container>
      <HeaderRow>
        <TitleAndTimer>
          <Box>
            <TitleTypography variant="h4">{title}</TitleTypography>
            {/* <Typography variant = "h6">{subtitle}</Typography> */}
          </Box>
          {showTimer && (
            <TimerBox>
              <TimerChip>{String(timeParts.hours).padStart(2, "0")}</TimerChip>
              <TimerColon>:</TimerColon>
              <TimerChip>{String(timeParts.minutes).padStart(2, "0")}</TimerChip>
              <TimerColon>:</TimerColon>
              <TimerChip>{String(timeParts.seconds).padStart(2, "0")}</TimerChip>
            </TimerBox>
          )}
        </TitleAndTimer>

        <FilterButtonsRow ref={filterButtonsRef}>
          {sideButtons?.map((filter: SideCategoryButton) => {
            const isActive = filter.tag === activeFilter;
            return (
              <StyledFilterButton
                key={filter.tag}
                active={isActive}
                onClick={() => setActiveFilter(filter.tag)}
                startIcon={undefined}
                variant={isActive ? "contained" : "outlined"}
              >
                {filter.label}
              </StyledFilterButton>
            );
          })}
        </FilterButtonsRow>
      </HeaderRow>

      <CardsRow ref={productCardsRef}>
        {(productsForActiveFilter ?? []).map((product) => (
          <CardWrapper key={product.id}>
            <ProductCard
              product={product}
              onAddToCart={handleAddToCart}
              onToggleFavorite={handleToggleFavorite}
              isFavorite={wishlist.includes(product.id)}
              cartCount={counts[product.id] ?? 0}
              // onIncrement={() => increment(product.id)}
              // onDecrement={() => decrement(product.id)}
            />
          </CardWrapper>
        ))}
      </CardsRow>

      <DotsRow>
        {Array.from({ length: totalSlides }).map((_, index) => {
          const active = currentSlide === index;
          return <Dot key={index} active={active} onClick={() => handleDotClick(index)} />;
        })}
      </DotsRow>
    </Container>
  );
};

export default DealsSection;
