import { styled } from "@mui/material/styles";
import { Box, Grid, Typography } from "@mui/material";
import shape from "../../themes/shape";
import AddIcon from "@mui/icons-material/Add";
import { useFontSize } from "../../themes/fontSize";

export const MainContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
}));
export const CartOverViewHeader = styled(Typography)(() => ({
  fontSize: useFontSize(20),
  fontWeight: 600,
}));
export const LayoutContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  overflowX: "hidden",
  width: "100%",
  boxSizing: "border-box",
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  gap: theme.spacing(2),
  [theme.breakpoints.up("md")]: { flexDirection: "row" },
}));

export const ProductListWrapper = styled(Box)(({ theme }) => ({
  flex: "0 0 auto",
  marginBottom: theme.spacing(2),
  // border: shape.borderSuccess,
  // borderRadius: theme.shape.borderRadius,
  [theme.breakpoints.up("sm")]: { flex: "0 0 65%" },
}));

export const LeftContent = styled(Box)(({ theme }) => ({
  border: shape.borderSuccess,
  borderRadius: theme.shape.borderRadius,
}));

export const ContentWrapper = styled(Box)(({ theme }) => ({
  flex: "1 1 auto",
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  overflowX: "hidden",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
  // border: shape.borderSuccess,
  // borderRadius: theme.shape.borderRadius,
  [theme.breakpoints.up("sm")]: { flex: "1 0 30%", marginBottom: 0 },
  // [theme.breakpoints.up("lg")]: { flex: "0 0 75%" },
}));

export const ProductHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
  width: "100%",
  boxSizing: "border-box",
  padding: theme.spacing(2),
}));

export const HeaderTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 600,
  fontSize: useFontSize(16),
}));

export const HeaderAction = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.dark,
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  fontWeight: 500,
  fontSize: useFontSize(16),
}));

export const BorderedIcon = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: shape.borderRed,
  width: "16px",
  height: "16px",
  marginRight: theme.spacing(1),
  color: theme.palette.primary.dark,
}));

export const SmallAddIcon = styled(AddIcon)(() => ({
  fontSize: useFontSize(12),
  color: "inherit",
}));

export const Wrapper = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(4.5),
}));

export const HeaderBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  marginBottom: theme.spacing(6),
}));

export const Illustration = styled("img")(({ theme }) => ({
  width: 60,
  height: 60,
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    width: 60,
    height: 60,
  },
}));

export const Description = styled(Typography)(() => ({
  maxWidth: 600,
}));

// Grid styles
export const TwoColumnGrid = styled(Grid)(() => ({
  width: "100%",
}));

export const ColumnGrid = styled(Grid)(() => ({}));
