import { styled } from "@mui/material/styles";
import { Box, Typography, Divider } from "@mui/material";
import palette from "../../themes/palette";
import shape from "../../themes/shape";

export const SummaryCardWrapper = styled(Box)(({ theme }) => ({
  flexShrink: 0,
  borderRadius: 16,
  border: shape.borderSuccess,
  padding: theme.spacing(2),
  backgroundColor: palette.white.main,
  boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
  alignSelf: "center",

  width: "100%",
  maxWidth: "100%",
  [theme.breakpoints.up("md")]: {
    width: "36%",
    maxWidth: "36%",
  },
  [theme.breakpoints.up("lg")]: {
    width: 400,
    maxWidth: 400,
  },
  [theme.breakpoints.up("xl")]: {
    width: 500,
    maxWidth: 500,
  },
}));

export const StockText = styled(Typography)(() => ({
  color: palette.icon.secondary,
  fontWeight: 500,
  marginBottom: 8,
}));

export const PriceContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: 12,
  marginBottom: 16,
}));

export const StyledDivider = styled(Divider)(() => ({
  borderColor: palette.grey.light,
}));
