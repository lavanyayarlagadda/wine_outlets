import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import palette from "../../themes/palette";

interface Props {
  title: string;
  children: React.ReactNode;
  isLast?:boolean
}

const FilterAccordion: React.FC<Props> = ({ title, children,isLast }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Accordion
        disableGutters
        elevation={0}
        square
        expanded={expanded}
        onChange={(_, isExpanded) => setExpanded(isExpanded)}
        sx={{
          border: "none",
          "&:before": { display: "none" },
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{ color: palette.black[800], fontSize: "16px", fontWeight: 600 }}
            />
          }
        >
          <Typography
            sx={{
              color: palette.black[800],
              fontSize: "16px",
              fontWeight: 600,
              p: 1,
            }}
          >
            {title}
          </Typography>
        </AccordionSummary>

        <AccordionDetails>{children}</AccordionDetails>

        {/* Divider only when expanded */}
        {!isLast && expanded && <Divider sx={{ mb: 1, mx: -2 }} />}
      </Accordion>

      {/* Divider only when not expanded */}
      {!isLast && !expanded && <Divider sx={{ mb: 1, mx: -2 }} />}
    </>
  );
};

export default FilterAccordion;
