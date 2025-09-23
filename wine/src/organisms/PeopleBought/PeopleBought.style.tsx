import { styled } from "@mui/material/styles";
import { Box, Typography, Divider } from "@mui/material";
import palette from "../../themes/palette";

// Wrapper for the entire section
export const PeopleBoughtWrapper = styled(Box)(() => ({
  paddingTop: 32,
  paddingBottom: 32,
}));

// Header Row
export const HeaderRow = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 24,
}));

export const HeaderTitle = styled(Typography)(() => ({
  color: palette.black[800],
  fontWeight: 600,
}));

// Products Container
export const ProductsContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: 16,
  width: "100%",
  // Responsive
  "@media (min-width: 900px)": {
    flexDirection: "row",
  },
}));

export const ProductsWrapper = styled(Box)(() => ({
  flex: "1 1 100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 16,
  "@media (min-width: 900px)": {
    flex: "0 0 70%",
    flexDirection: "row",
    alignItems: "center",
  },
}));

export const VerticalDivider = styled(Divider)(() => ({
  display: "none",
  borderColor: palette.success.main,
  "@media (min-width: 900px)": {
    display: "block",
  },
}));
