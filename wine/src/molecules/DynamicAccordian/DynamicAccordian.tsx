import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  AccDetails,
  AccordianContainer,
  AccSummary,
  MainContainer,
  IconWrapper,
  TitleText,
  ContentText,
} from "./DynamicAccordian.style";

interface ReusableAccordionProps {
  title: string;
  content: React.ReactNode;
  icon?: React.ReactNode; // custom icon on left
  defaultExpanded?: boolean;
  contentTwo?: React.ReactNode;
  contentThree?: React.ReactNode;
}

const DynamicAccordian: React.FC<ReusableAccordionProps> = ({
  title,
  content,
  icon,
  defaultExpanded = false,
  contentTwo,
  contentThree,
}) => {
  return (
    <MainContainer>
      <AccordianContainer defaultExpanded={defaultExpanded}>
        <AccSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${title}-content`}
          id={`${title}-header`}
        >
          {icon && <IconWrapper>{icon}</IconWrapper>}
          <TitleText>{title}</TitleText>
        </AccSummary>
        <AccDetails>
          {content && <ContentText>{content}</ContentText>}
          {contentTwo && <ContentText>{contentTwo}</ContentText>}
          {contentThree && <ContentText>{contentThree}</ContentText>}
        </AccDetails>
      </AccordianContainer>
    </MainContainer>
  );
};

export default DynamicAccordian;
