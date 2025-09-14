import React from "react";
import {
  Container,
  RightSectionBox,
  LeftSectionBox,
  Wrapper,
  BackgroundImage,
  ContentContainer,
} from "./Trending.style";
import CustomCard from "../../atoms/CustomCard/CustomCard";
import { useNavigate } from "react-router-dom";
import { useGetHomeSectionsQuery } from "../../store/apis/Home/HomeAPI";
import type { ValueSection } from "../../store/Interfaces/LandingPageInterface/HomePageSectionsDataInterface";

const Trending = () => {
  const { data: sections } = useGetHomeSectionsQuery();
  const valueSection: ValueSection = sections?.sections?.valueSection ?? {};
  const { isVisible, mainCard, cards } = valueSection;
  const { media, Action } = mainCard ?? {};
  const navigate = useNavigate();
  if (!isVisible) return null;

  return (
    <Container>
      <Wrapper>
        <LeftSectionBox>
          <BackgroundImage backgroundImage={media?.url} />
          <ContentContainer
            onClick={() => {
              navigate(Action || "/");
            }}
          >
            {/* <TextContent>
              <Title variant="h2">{title ?? ""}</Title>
              <Description variant="body1">{description ?? ""}</Description>
            </TextContent>
            <CTAButton
              endIcon={<ArrowForwardIcon />}
              disableRipple
              onClick={() => {
                navigate(Action || "/");
                // console.log(Action);
              }}
            >
              {btnText ?? ""}
            </CTAButton> */}
          </ContentContainer>
        </LeftSectionBox>
        <RightSectionBox>
          {cards?.map((card, index) => (
            <CustomCard
              key={index}
              title={card?.title || ""}
              subTitle={card?.description || ""}
              btnText={card?.btnText || ""}
              handleClick={() => navigate(card.btnAction || "/")}
            />
          ))}
        </RightSectionBox>
      </Wrapper>
    </Container>
  );
};

export default Trending;
