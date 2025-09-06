import { Box, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import shape from "../../themes/shape";
export const CounterBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  border: shape.borderSuccess,
  borderRadius: shape.borderRadius,
  padding: "6px",
}));

// IconButton with default small size
export const CounterIconButton = styled(IconButton)(() => ({
  padding: 4, // default MUI small padding
  "& svg": {
    fontSize: "16px", // small icon size
  },
}));

// Typography for value display
export const CounterValue = styled(Typography)(() => ({
  margin: "0 4px",
  minWidth: 16,
  textAlign: "center",
}));
