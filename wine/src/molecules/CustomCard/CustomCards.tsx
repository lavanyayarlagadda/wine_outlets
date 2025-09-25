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
  RedCheckIcon,
  NumberWrapper,
} from "./CustomCards.style";

// Define props for reusability
interface InfoCardProps {
  header?: string;
  description?: string;
  innerTitle?: string;
  items: string[];
  icon?: React.ReactNode; // Optional custom icon
  number?: number | string;
}

const CustomCards: React.FC<InfoCardProps> = ({
  header,
  description,
  innerTitle,
  items,
  icon = <InfoOutlinedIcon />,
  number,
}) => {
  return (
    <CardContainer>
      <HeaderRow>
        {number !== undefined ? (
          <NumberWrapper>{number}.</NumberWrapper>
        ) : (
          <InfoIconWrapper>{icon}</InfoIconWrapper>
        )}
        <CardHeader>{header}</CardHeader>
      </HeaderRow>

      <ContentText>{description}</ContentText>

      <InnerCard>
        <InnerCardTitle>{innerTitle}</InnerCardTitle>

        <ListContainer>
          {items.map((item, index) => (
            <ListItem key={index}>
              <RedCheckIcon>
                <CheckIcon />
              </RedCheckIcon>
              <ListText>{item}</ListText>
            </ListItem>
          ))}
        </ListContainer>
      </InnerCard>
    </CardContainer>
  );
};

export default CustomCards;
