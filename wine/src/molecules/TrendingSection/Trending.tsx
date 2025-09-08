import React from "react";
import {
  Container,
  RightSectionBox,
  LeftSectionBox,
  Wrapper,
  BackgroundImage,
  ContentContainer,
  TextContent,
  Title,
  Description,
  CTAButton,
} from "./Trending.style";
import { LandingPageData } from "../../constant/LandingPageData";
// import { CARD_DATA } from "../../constant/trendingData";
import CustomCard from "../../atoms/CustomCard/CustomCard";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

interface ValueCard {
  id: string;
  title?: string;
  description?: string;
  btnText?: string;
  btnAction?: string;
  action?: { id: number; btnText?: string; btnAction?: string };
}

interface ValueSection {
  isVisible?: boolean;
  mainCard?: {
    id: string;
    title?: string;
    description?: string;
    media?: { type?: string; url?: string };
    btnText?: string;
    btnAction?: string;
  };
  cards?: ValueCard[];
}

const valueSection: ValueSection = LandingPageData?.valueSection ?? {};
const { title, description, btnText, media, btnAction } = valueSection.mainCard ?? {};
const cards = valueSection.cards ?? [];

const Trending = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Wrapper>
        <LeftSectionBox>
          <BackgroundImage backgroundImage={media?.url} />
          <ContentContainer>
            <TextContent>
              <Title variant="h2">{title ?? ""}</Title>
              <Description variant="body1">{description ?? ""}</Description>
            </TextContent>
            <CTAButton
              endIcon={<ArrowForwardIcon />}
              disableRipple
              onClick={() => {
                navigate("/productsList");
                console.log(btnAction);
              }}
            >
              {btnText ?? ""}
            </CTAButton>
          </ContentContainer>
        </LeftSectionBox>
        <RightSectionBox>
          {cards.map((card, index) => (
            <CustomCard
              key={index}
              title={card?.title || ""}
              subTitle={card?.description || ""}
              btnText={card?.btnText || ""}
              handleClick={() => navigate("/productsList")}
            />
          ))}
        </RightSectionBox>
      </Wrapper>
    </Container>
  );
};

export default Trending;
