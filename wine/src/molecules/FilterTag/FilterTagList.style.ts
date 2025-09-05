import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const Wrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "8px", // gap={1} = 8px
}));

export const FilterHeader = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
}));

export const ChipsWrapper = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
}));
