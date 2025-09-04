import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const RatingContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: 16,
  border: `1px solid ${theme.palette.grey[300]}`,
  backgroundColor: theme.palette.background.paper,
}));

export const RatingHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: theme.spacing(1),
}));

export const RatingBadge = styled(Box)(({ theme }) => ({
  border: `2px solid ${theme.palette.primary.dark}`,
  borderRadius: "50%",
  width: 36,
  height: 36,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: 600,
//   color: theme.palette.error.main,
}));

export const RatingText = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  lineHeight: 1.6,
  color: theme.palette.grey[200],
  marginBottom: theme.spacing(2),
}));

export const ReviewerBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const ReviewerName = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: "14px",
  color: theme.palette.text.primary,
}));
