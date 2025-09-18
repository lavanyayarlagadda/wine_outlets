import { Accordion, AccordionDetails, AccordionSummary, Box, styled, Typography } from "@mui/material";
import shape from "../../themes/shape";
import { useFontSize } from "../../themes/fontSize";

// Main wrapper
export const MainContainer = styled(Box)(() => ({
  margin: "20px",
}));

// Accordion container
export const AccordianContainer = styled(Accordion)(({ theme }) => ({
  borderRadius: shape.baseBorderRadius,
  border: shape.borderGrey2px,
  backgroundColor: theme.palette.background.default,
}));

// Accordion summary
export const AccSummary = styled(AccordionSummary)(({ theme }) => ({
  "&.Mui-expanded": {
    backgroundColor: theme.palette.primary.light,
    minHeight: 48,
    color: theme.palette.primary.dark,
    padding: "10px",
  },
  "& .MuiAccordionSummary-content.Mui-expanded": {
    margin: "12px 0",
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    color: theme.palette.primary.dark,
  },
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  transition: "background-color 0.3s ease",
}));

// Accordion details
export const AccDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.default,
}));

// Icon wrapper with default red color
export const IconWrapper = styled(Box)(({theme}) => ({
  color: theme.palette.primary.dark, 
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
 marginRight:"10px"
}));

// Typography for title
export const TitleText = styled(Typography)(({ theme }) => ({
  fontSize: useFontSize(18),
  fontWeight: theme.typography.h6.fontWeight,
}));


export const ContentText = styled(Typography)(({ theme }) => ({
  fontSize: useFontSize(14),
  fontWeight: theme.typography.h6.fontWeight,
}));
