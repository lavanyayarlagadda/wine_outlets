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

import { curatedData } from "../../constant/curatedData";
import { useNavigate } from "react-router-dom";

const CuratedPicks = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <HeaderSection>
        <Title>Shop Our Curated Picks</Title>
        <Subtitle>Find your favorite by type.</Subtitle>
      </HeaderSection>
      <StyledContainer>
        <StyledGridContainer>
          {curatedData.map((item, index) => (
            <Grid key={index}>
              <StyledWineItem>
                <StyledImageContainer onClick={() => navigate("/productsList")}>
                  <StyledOverlay />
                  <img
                    src={item.imageUrl || "/placeholder.svg"}
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
