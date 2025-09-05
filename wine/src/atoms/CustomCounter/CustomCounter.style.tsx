
import {Box, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import shape from "../../themes/shape";
export const CounterBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  border: "1px solid #E0E0E0",
  borderRadius: shape.borderRadius,
  padding: "6px",
}));

// IconButton with default small size
export const CounterIconButton = styled(IconButton)(({ theme }) => ({
  padding: 4, // default MUI small padding
  "& svg": {
    fontSize: "16px", // small icon size
  },
}));

// Typography for value display
export const CounterValue = styled(Typography)(({ theme }) => ({
  margin: "0 4px",
  minWidth: 16,
  textAlign: "center",
}));