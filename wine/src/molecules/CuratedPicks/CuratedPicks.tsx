import React from "react";
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
} from "./CuratedPicks.style";
import { LandingPageData } from "../../constant/LandingPageData";
// import { curatedData } from "../../constant/curatedData";
import { useNavigate } from "react-router-dom";

interface CuratedCategory {
  id: number;
  category: string;
  media?: {
    type?: string;
    url?: string;
  };
  categoryAction?: string;
}

interface CuratedPicksSection {
  isVisible?: boolean;
  title?: string;
  subtitle?: string;
  categories?: CuratedCategory[];
}

const { title, subtitle, categories }: CuratedPicksSection = LandingPageData?.curatedPicks ?? {};
// const title = curatedSection.title ?? "Shop Our Curated Picks";
// const subtitle = curatedSection.subtitle ?? "Find your favorite by type.";
// const categories = curatedSection.categories ?? [];

const CuratedPicks = () => {
  const navigate = useNavigate();
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
                <StyledImageContainer onClick={() => navigate("/productsList")}>
                  <StyledOverlay />
                  <img
                    src={item.media?.url || "/placeholder.svg"}
                    alt={`${item.category} wine bottle`}
                    width={120}
                    height={240}
                    style={{ objectFit: "contain" }}
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
