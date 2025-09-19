import { Box, Grid, styled, Typography } from "@mui/material";
import { useFontSize } from "../../themes/fontSize";
import shape from "../../themes/shape";

export const PhilosophyContainer = styled(Box)(() => ({
  margin: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
}));

export const PhilosophyHeader = styled(Typography)(() => ({
  fontSize: useFontSize(24),
  fontWeight: 600,
  marginBottom: "16px",
}));

export const PhilosophySubText = styled(Typography)(() => ({
  fontSize: useFontSize(16),
  lineHeight: 1.5,
  maxWidth: "800px",
  marginBottom: "24px",
}));

export const PhilosophyBox = styled(Box)(() => ({
  border: shape.dashedRed,
  borderRadius: "8px",
  padding: "16px",
  maxWidth: "900px",
}));

export const PhilosophyContent = styled(Typography)(() => ({
  fontSize: useFontSize(16),
  lineHeight: 1.6,
  textAlign: "center",
}));

export const TechSectionContainer = styled(Box)(() => ({
  padding: "20px 20px 0px 20px",
}));

export const TechGridContainer = styled(Grid)(() => ({
  display: "flex",
  alignItems: "flex-start",
  gap: "32px",
  flexWrap: "wrap",
}));

export const TechGridLeft = styled(Grid)({});

export const TechGridRight = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

export const TechHeader = styled(Typography)(() => ({
  fontSize: useFontSize(24),
  fontWeight: 600,
  display: "flex",
  alignItems: "center",
  marginBottom: "20px",
  gap: "8px",
}));

export const TechDescription = styled(Typography)(() => ({
  fontSize: useFontSize(16),
  lineHeight: 1.6,
  marginBottom: "16px",
}));

export const FeatureBox = styled(Box)(() => ({
  border: "1px solid",
  borderRadius: "10px",
  padding: "16px",
  display: "flex",
  alignItems: "center",
  gap: "12px",
}));

export const FeatureBoxRed = styled(FeatureBox)(({ theme }) => ({
  borderColor: theme.palette.primary.dark,
}));

export const FeatureBoxGreen = styled(FeatureBox)(({ theme }) => ({
  borderColor: theme.palette.warning.light,
}));

export const FeatureIcon = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const FeatureContent = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const FeatureTitle = styled(Typography)(() => ({
  fontSize: useFontSize(16),
  fontWeight: 600,
}));

export const FeatureSubtitle = styled(Typography)(() => ({
  fontSize: useFontSize(14),
  color: "#666",
}));
