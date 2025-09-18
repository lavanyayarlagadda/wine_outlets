import React from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CheckIcon from "@mui/icons-material/Check";
import {
  CardContainer,
  HeaderRow,
  InfoIconWrapper,
  ContentText,
  InnerCard,
  ListContainer,
  ListItem,
  ListText,
  CardHeader,
  InnerCardTitle,
  RedCheckIcon
} from "./TransparencyCard.style";


const TransparencyCard: React.FC = () => {
  return (

    <CardContainer>
      <HeaderRow>
        <InfoIconWrapper>
          <InfoOutlinedIcon />
        </InfoIconWrapper>
        <CardHeader>
          Transparency at Wine Outlet
        </CardHeader>
      </HeaderRow>

      <ContentText>
        We want to make our information policies clear and accessible. This
        privacy policy outlines how we collect, use, and protect your personal
        information.
      </ContentText>

      <InnerCard>
        <InnerCardTitle>
          In this policy, you'll learn about:
        </InnerCardTitle>

        <ListContainer>
          <ListItem>
             <RedCheckIcon><CheckIcon /></RedCheckIcon>
            <ListText>What personal data we collect</ListText>
          </ListItem>

          <ListItem>
             <RedCheckIcon><CheckIcon /></RedCheckIcon>
            <ListText>With whom it is shared</ListText>
          </ListItem>

          <ListItem>
             <RedCheckIcon><CheckIcon /></RedCheckIcon>
            <ListText>How we ensure its security</ListText>
          </ListItem>

          <ListItem>
             <RedCheckIcon><CheckIcon /></RedCheckIcon>
            <ListText>How we use it</ListText>
          </ListItem>

          <ListItem>
             <RedCheckIcon><CheckIcon /></RedCheckIcon>
            <ListText>How you can correct inaccuracies</ListText>
          </ListItem>
        </ListContainer>
      </InnerCard>
    </CardContainer>

  );
};

export default TransparencyCard;
