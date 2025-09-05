import { useState } from "react";
import { Grid, IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { ProductLayoutContainer } from './ProductView.style';
import { ProductTitle } from "../../molecules/ProductListCard/ProductListCard.style";
import type { ProductViewResponse } from "../../constant/productViewData";
import ProfessionalRatingCard from "../../molecules/ProductView/ProfessionalRatingCard";
import { Container, Header, RatingsGrid } from "../../molecules/ProductView/ProductView.style";
// import { ProductLayoutContainer } from "./ProductView.style";


interface ProductDetailsProps {
    productViewData: ProductViewResponse;
}

const ProfessionalRating: React.FC<ProductDetailsProps> = ({ productViewData }) => {
    const [expanded, setExpanded] = useState(true);

    const toggleExpand = () => {
        setExpanded((prev) => !prev);
    };

    return (
         <ProductLayoutContainer>
      <Container>
        <Header onClick={toggleExpand}>
          <ProductTitle>Professional Rating</ProductTitle>
          <IconButton>
            {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </Header>

        {expanded && productViewData?.professionalRating?.length ? (
          <RatingsGrid container spacing={2}>
            {productViewData.professionalRating.map((rating: any, index: number) => {
              const total = productViewData.professionalRating.length;
              const isLastRowStart = Math.floor(index / 3) === Math.floor((total - 1) / 3);
              const remaining = total % 3;

              let gridSize = 4; // default 3 per row

              if (isLastRowStart && remaining !== 0) {
                if (remaining === 1) {
                  gridSize = 12; // last card full width
                } else if (remaining === 2) {
                  gridSize = index === total - 2 ? 4 : 8;
                }
              }

              return (
                <Grid size={{ xs: 12, sm: gridSize, md: gridSize }}  key={index}>
                  <ProfessionalRatingCard
                    title={rating.title}
                    score={rating.score}
                    description={rating.description}
                  />
                </Grid>
              );
            })}
          </RatingsGrid>
        ) : expanded ? (
          <p>No professional ratings available.</p>
        ) : null}
      </Container>
    </ProductLayoutContainer>
    );
};

export default ProfessionalRating;
