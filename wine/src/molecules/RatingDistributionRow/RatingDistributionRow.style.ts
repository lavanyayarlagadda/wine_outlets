import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const RatingRowWrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
  gap: 8,
}));

export const StarsText = styled(Typography)(() => ({
  width: 20,
}));

export const CountText = styled(Typography)(() => ({
  color: "text.secondary",
}));
