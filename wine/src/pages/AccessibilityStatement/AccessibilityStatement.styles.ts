import { Paper, Typography, List, Box, ListItemText } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useFontSize } from "../../themes/fontSize";

export const AccessibilityPaper = styled(Paper)(({ theme }) => ({
  padding: "20px",
  margin: "20px",
  borderRadius: theme.shape.borderRadius,
}));

export const AccessibilityMainContainer = styled(Box)(() => ({
  padding: "20px",
  margin: "20px",
}));

export const HeaderTypography = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
  marginBottom: theme.spacing(2),
  fontSize: useFontSize(24),
}));

export const SubHeadingTypography = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(1),
  fontSize: useFontSize(18),
}));

export const BodyTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontSize: useFontSize(16),
}));

export const FeaturesList = styled(List)(({ theme }) => ({
  marginTop: theme.spacing(1),
}));

export const FeedbackContent = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: 1,
}));

export const ListItemContent =  styled(ListItemText)(() => ({
fontSize:useFontSize(16)
}));
