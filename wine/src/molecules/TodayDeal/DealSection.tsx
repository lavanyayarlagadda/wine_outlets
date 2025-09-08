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

const DealsSection: React.FC = () => {
  const {
    title,
    showTimer,
    timeParts,
    filterButtonsFromData,
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
  } = useDealsSection();

  return (
    <Container>
      <HeaderRow>
        <TitleAndTimer>
          <TitleTypography variant="h4">{title}</TitleTypography>

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
          {filterButtonsFromData.map((filter) => {
            const isActive = filter.id === activeFilter;
            return (
              <StyledFilterButton
                key={filter.id}
                active={isActive}
                onClick={() => setActiveFilter(filter.id)}
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
