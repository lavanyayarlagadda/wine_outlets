import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import palette from "../../themes/palette";
import shape from "../../themes/shape";

export const PlusDividerWrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 50,
  height: 30,
  border: shape.borderRed,
  borderRadius: "30%",
}));

export const PlusDividerText = styled(Typography)(() => ({
  fontSize: 20,
  fontWeight: "bold",
  color: palette.primary.dark,
  lineHeight: 1,
}));
