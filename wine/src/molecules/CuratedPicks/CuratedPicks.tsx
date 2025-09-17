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
// import type { CuratedPicksSection } from "../../store/Interfaces/LandingPageInterface/HomePageSectionsDataInterface";
// import { useGetHomeSectionsQuery } from "../../store/apis/Home/HomeAPI";
import { SITE_SETTING_DEMO_DATA, type ProductCategoryListSection } from "../../constant/LandingPageData";

const CuratedPicks = () => {
  const navigate = useNavigate();
  // const { data: sections } = useGetHomeSectionsQuery();
  const curatedPicksData = SITE_SETTING_DEMO_DATA.pageSections.find((s) => s.id === "product-category-1") as ProductCategoryListSection;
  const { isVisible, title, subtitle, content }: ProductCategoryListSection =
    curatedPicksData;

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
                <StyledImageContainer onClick={() => navigate(`/productsList?tags=${item?.tags?.join(',')}`)}>
                  <StyledOverlay />
                  <ProductImage
                    src={item.imageUrl}
                    alt={`${item.title} wine bottle`}
                  />
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
