import React from "react";
import {
  Container,
  RightSectionBox,
  // LeftSectionBox,
  Wrapper,
  // BackgroundImage,
  // ContentContainer,
} from "./Trending.style";
// import CustomCard from "../../atoms/CustomCard/CustomCard";
import { useNavigate } from "react-router-dom";
// import { useGetHomeSectionsQuery } from "../../store/apis/Home/HomeAPI";
// import type { ValueSection } from "../../store/Interfaces/LandingPageInterface/HomePageSectionsDataInterface";
import { SITE_SETTING_DEMO_DATA, type BannerCollectionSection } from "../../constant/LandingPageData";
import { CustomTitleSection } from "../../atoms";
import { renderOfferCard } from "../LimitedTimeOfferCarousel/TimeOfferCarousel";
import { Box } from "@mui/material";
// import { CardImage } from "../LimitedTimeOfferCarousel/TimeOfferCarousel.style";

const Trending = () => {
  // const { data: sections } = useGetHomeSectionsQuery();
  // const valueSection: ValueSection = sections?.sections?.valueSection ?? {};
  const valueSection = SITE_SETTING_DEMO_DATA.pageSections.find((s) => s.id === "collection-2") as BannerCollectionSection;
  const { isVisible,  content ,title , subtitle} = valueSection;
  // const { media, Action } = mainCard ?? {};
  const navigate = useNavigate();
  if (!isVisible) return null;

  return (
    <Container>
      <Wrapper>
        <CustomTitleSection title={title || ""} subtitle={subtitle}/>
        {/* <LeftSectionBox>
          <BackgroundImage backgroundImage={media?.url} />
          <ContentContainer
            onClick={() => {
              navigate(Action || "/");
            }}
          ></ContentContainer>
        </LeftSectionBox> */}
        <RightSectionBox>
          {content?.map((card, index) => (
            <Box onClick={()=>{
              navigate(`/productsList?tags=${card?.tags?.join(',')}`)
            }}>
             {renderOfferCard(card,index)}
            </Box>
            // below is the UI of the card with button
            // <CustomCard
            //   key={index}
            //   title={card?.title || ""}
            //   subTitle={card?.description || ""}
            //   btnText={card?.btnText || ""}
            //   handleClick={() => navigate(card.btnAction || "/")}
            // />
          ))}
        </RightSectionBox>
      </Wrapper>
    </Container>
  );
};

export default Trending;
