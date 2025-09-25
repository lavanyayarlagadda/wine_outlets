import { Box, Typography, List, Paper, ListItemText } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useFontSize } from "../../themes/fontSize";

// Main container
export const VIPContainer = styled(Paper)(({ theme }) => ({
  padding: "20px",
  margin: "20px",
  borderRadius: theme.shape.borderRadius,
}));
export const VIPMainContainer = styled(Box)(() => ({
  padding: "20px",
  margin: "20px",
}));

// Section Heading
export const SectionHeading = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
  marginBottom: theme.spacing(2),
  fontSize: useFontSize(24),
}));

// Sub Heading
export const SubHeading = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(1),
  fontSize: useFontSize(18),
}));

// Body Text
export const BodyText = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  lineHeight: 1.6,
  fontSize: useFontSize(18),
}));

// Icon List
export const IconList = styled(List)(({ theme }) => ({
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(2),
}));

// Box with icon
export const IconBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));

export const ListItemContent = styled(ListItemText)(() => ({
  fontSize: useFontSize(16),
}));
