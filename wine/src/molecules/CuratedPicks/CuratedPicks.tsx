import { Grid } from "@mui/material";
import {
  Container,
  HeaderSection,
  Title,
  Subtitle,
  StyledContainer,
  StyledOverlay,
  StyledGridContainer,
  StyledWineItem,
  StyledImageContainer,
  StyledCategoryLabel,
  ProductImage,
} from "./CuratedPicks.style";
import { useNavigate } from "react-router-dom";
import type { CuratedPicksSection } from "../../store/Interfaces/LandingPageInterface/HomePageSectionsDataInterface";
import { useGetHomeSectionsQuery } from "../../store/apis/Home/HomeAPI";

const CuratedPicks = () => {
  const navigate = useNavigate();
  const { data: sections } = useGetHomeSectionsQuery();
  const { isVisible, title, subtitle, categories }: CuratedPicksSection =
    sections?.sections?.curatedPicks ?? {};

  if (!isVisible) return null;

  return (
    <Container>
      <HeaderSection>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </HeaderSection>
      <StyledContainer>
        <StyledGridContainer>
          {categories?.map((item, index) => (
            <Grid key={index}>
              <StyledWineItem>
                <StyledImageContainer onClick={() => navigate(item.categoryAction || "/")}>
                  <StyledOverlay />
                  <ProductImage
                    src={item.media?.url || "/placeholder.svg"}
                    alt={`${item.category} wine bottle`}
                  />
                </StyledImageContainer>

                <StyledCategoryLabel variant="body1">{item.category}</StyledCategoryLabel>
              </StyledWineItem>
            </Grid>
          ))}
        </StyledGridContainer>
      </StyledContainer>
    </Container>
  );
};

export default CuratedPicks;
