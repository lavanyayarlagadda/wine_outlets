import { styled, Card, CardContent, Box, Typography } from "@mui/material";

export const StyledCard = styled(Card)({
  borderRadius: 16, // 2 * 8px
  height: "100%",
  display: "flex",
  flexDirection: "column",
});

export const StyledCardContent = styled(CardContent)({
  flexGrow: 1,
});

export const InfoRow = styled(Box)({
  display: "flex",
  flexDirection: "row",
  gap: 16, // 2 * 8px
});

export const TitleText = styled(Typography)({
  fontWeight: 700,
  marginTop: 8,
  marginBottom: 0,
});

export const InfoText = styled(Typography)({
  color: "#757575", // text.secondary
  marginBottom: 8,
});

export const BodyText = styled(Typography)({
  color: "#212121", // text.primary
});
