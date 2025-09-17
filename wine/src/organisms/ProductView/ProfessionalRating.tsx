import { Grid, IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { ProductLayoutContainer } from "./ProductView.style";
import { ProductTitle } from "../../molecules/ProductListCard/ProductListCard.style";
import ProfessionalRatingCard from "../../molecules/ProductView/ProfessionalRatingCard";
import { Container, Header, RatingsGrid } from "../../molecules/ProductView/ProductView.style";
import { StyledSkeletonRect } from "../Filter/FilterPanel.style";
import TastingNotesCarousel from "./TastingNotesCarousel/TastingNotesCarousel";
import type { ProductViewHookReturn } from "./UseProductView.hook";

interface ProfessionalRatingProps {
  expanded: ProductViewHookReturn["expanded"];
  toggleExpand: ProductViewHookReturn["toggleExpand"];
  productDetailsData: ProductViewHookReturn["productDetailsData"];
  productDetailLoading: ProductViewHookReturn["productDetailLoading"];
}

const ProfessionalRating: React.FC<ProfessionalRatingProps> = ({
  expanded,
  toggleExpand,
  productDetailsData,
  productDetailLoading,
}) => {
  const skeletonArray = Array.from({ length: 6 });

  return (
    <>
      <ProductLayoutContainer>
        <Container>
          <Header onClick={toggleExpand}>
            <ProductTitle>Professional Rating</ProductTitle>
            <IconButton>{expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}</IconButton>
          </Header>

          {expanded && (
            <RatingsGrid container spacing={2}>
              {productDetailLoading ? (
                skeletonArray.map((_, index) => <StyledSkeletonRect key={index} />)
              ) : productDetailsData?.productDetails?.professionalRating?.length ? (
                productDetailsData.productDetails.professionalRating.map(
                  (rating: any, index: number) => {
                    const total = productDetailsData.productDetails.professionalRating.length;
                    const isLastRowStart = Math.floor(index / 3) === Math.floor((total - 1) / 3);
                    const remaining = total % 3;
                    let gridSize = 4; // default 3 per row

                    if (isLastRowStart && remaining !== 0) {
                      if (remaining === 1)
                        gridSize = 12; // last card full width
                      else if (remaining === 2) gridSize = index === total - 2 ? 4 : 8;
                    }

                    return (
                      <Grid size={{ xs: 12, sm: gridSize, md: gridSize }} key={index}>
                        <ProfessionalRatingCard
                          title={rating.title}
                          score={rating.score}
                          description={rating.description}
                        />
                      </Grid>
                    );
                  }
                )
              ) : (
                <p>No professional ratings available.</p>
              )}
            </RatingsGrid>
          )}
        </Container>
      </ProductLayoutContainer>
      <TastingNotesCarousel productDetails={productDetailsData} />
    </>
  );
};

export default ProfessionalRating;
