import { useState } from "react";
import { AccordionDetails } from "@mui/material";
import {
  StyledAccordion,
  StyledAccordionSummary,
  StyledExpandMoreIcon,
  Title,
  StyledDivider,
} from "./FilterAccordion.style";

interface Props {
  title: string;
  children: React.ReactNode;
  isLast?: boolean;
}

const FilterAccordion: React.FC<Props> = ({ title, children, isLast }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <>
      <StyledAccordion
        disableGutters
        elevation={0}
        square
        expanded={expanded}
        onChange={(_, isExpanded) => setExpanded(isExpanded)}
      >
        <StyledAccordionSummary expandIcon={<StyledExpandMoreIcon />}>
          <Title>{title}</Title>
        </StyledAccordionSummary>

        <AccordionDetails>{children}</AccordionDetails>

        {!isLast && expanded && <StyledDivider />}
      </StyledAccordion>

      {!isLast && !expanded && <StyledDivider />}
    </>
  );
};

export default FilterAccordion;
