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
import type { ProductCategoryListSection } from "../../constant/LandingPageData";
interface Props {
  content?: ProductCategoryListSection["content"];
  title?: string;
  subtitle?: string;
  isVisible?: boolean;
}

const CuratedPicks = ({
  content = [],
  title = "",
  subtitle = "",
  isVisible = true,
}: Props) => {
  const navigate = useNavigate();

  if (!isVisible) return null;

  return (
    <Container>
      <HeaderSection>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </HeaderSection>
      <StyledContainer>
        <StyledGridContainer>
          {content?.map((item, index) => (
            <Grid key={index}>
              <StyledWineItem>
                <StyledImageContainer
                  onClick={() => navigate(`/productsList?tags=${item?.tags?.join(",")}`)}
                >
                  <StyledOverlay />
                  <ProductImage src={item.imageUrl} alt={`${item.title} wine bottle`} />
                </StyledImageContainer>

                <StyledCategoryLabel variant="body1">{item.title}</StyledCategoryLabel>
              </StyledWineItem>
            </Grid>
          ))}
        </StyledGridContainer>
      </StyledContainer>
    </Container>
  );
};

export default CuratedPicks;
