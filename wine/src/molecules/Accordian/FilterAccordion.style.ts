import { styled } from "@mui/material/styles";
import { Accordion, AccordionSummary, Typography, Divider } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import palette from "../../themes/palette";

export const StyledAccordion = styled(Accordion)(() => ({
  border: "none",
  "&:before": { display: "none" },
  boxShadow: "none",
}));

export const StyledAccordionSummary = styled(AccordionSummary)(() => ({
  "& .MuiAccordionSummary-expandIconWrapper": {
    color: palette.black[800],
  },
}));

export const StyledExpandMoreIcon = styled(ExpandMoreIcon)(() => ({
  color: palette.black[800],
  fontSize: "16px",
  fontWeight: 600,
}));

export const Title = styled(Typography)(() => ({
  color: palette.black[800],
  fontSize: "16px",
  fontWeight: 600,
}));

export const StyledDivider = styled(Divider)(() => ({
  marginBottom: "8px",
  marginLeft: "-16px",
  marginRight: "-16px",
}));
