import { Box, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import shape from "../../themes/shape";
import { useFontSize } from "../../themes/fontSize";
import BackspaceOutlinedIcon from "@mui/icons-material/BackspaceOutlined";
import palette from "../../themes/palette";
export const CardContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  padding: theme.spacing(2),
  gap: theme.spacing(2),
  position: "relative",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const ProductImage = styled("img")({
  minWidth: 120,
  height: 160,
  objectFit: "contain",
  border: shape.borderSuccess,
  borderRadius: shape.baseBorderRadius,
});

export const InfoBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
});

export const ActionBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 8,
});

export const PriceRow = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 16,
  marginTop: 8,
});

export const OldPrice = styled(Typography)(({ theme }) => ({
  textDecoration: "line-through",
  color: theme.palette.text.primary,
}));

export const NewPrice = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  color: theme.palette.warning.light,
}));

export const ProductTitle = styled(Typography)(() => ({
  fontWeight: 500,
  fontSize: useFontSize(16),
  textAlign: "left",
}));

export const ProductInfoRow = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(1),
  marginTop: theme.spacing(1),

  "& > *": {
    flex: "1 1 45%",
    minWidth: "160px",
  },

  // Odd children (1st, 3rd, 5th…) stay left
  "& > *:nth-of-type(even)": {
    justifyContent: "flex-start",
    textAlign: "right",
    marginLeft: 0,
  },

  // Even children (2nd, 4th, 6th…) pushed to right
  "& > *:nth-of-type(odd)": {
    justifyContent: "flex-end",
    textAlign: "left",
    marginLeft: "auto",
  },

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: theme.spacing(0.5),

    "& > *": {
      marginLeft: 0,
      textAlign: "left",
    },
  },
}));

export const RatingBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  marginBottom: "2px",
}));

export const RatingTypography = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  color: palette.grey.main,
  fontSize: useFontSize(16),
}));
export const InfoValues = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 500,
  fontSize: useFontSize(16),
  display: "inline",
}));
export const InfoIcon = styled("img")(({ theme }) => ({
  width: 18,
  height: 18,
  objectFit: "contain",
  marginRight: theme.spacing(1),
}));

export const IconRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: theme.spacing(2),
  //   marginTop: theme.spacing(2),
}));

export const BackspaceIcon = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "selected",
})<{ selected?: boolean }>(({ theme, selected }) => ({
  border: selected ? shape.borderRed : shape.borderSuccess,
  borderRadius: shape.borderRadiuspx,
  marginLeft: "8px",
  transition: "all 0.2s ease-in-out",
  color: selected ? theme.palette.primary.dark : theme.palette.text.primary,
  "&:hover": {
    backgroundColor: theme.palette.white[400],
  },
}));

export const PricingBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "componentType",
})<{ componentType?: "WISHLIST" | "DEFAULT" }>(({ componentType }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: componentType === "WISHLIST" ? "flex-start" : "flex-end",
  flex: 1,
  minWidth: "160px",
}));
export const VipPriceText = styled(Typography)(({ theme }) => ({
  fontSize: useFontSize(18),
  fontWeight: 700,
  whiteSpace: "nowrap",
  color: theme.palette.warning.light,
  marginLeft: "10px",
}));

export const RegularPriceText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "componentType",
})<{ componentType?: "WISHLIST" | "DEFAULT" }>(({ theme, componentType }) => ({
  fontSize: useFontSize(18),
  fontWeight: 600,
  textDecoration: componentType === "WISHLIST" ? "none" : "line-through",
  color: theme.palette.text.primary,
  whiteSpace: "nowrap",
}));

export const BackSpaceIcon = styled(BackspaceOutlinedIcon)(() => ({
  fontSize: useFontSize(16),
}));

export const CounterWrapper = styled(Box)(() => ({
  display: "inline-flex",
  width: "auto",
}));

export const CartButtonWrapper = styled(Box)(() => ({
  width: "auto",
}));

export const WishlistPriceAndCartContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const ItemSubPrice = styled(Typography)(({ theme }) => ({
  fontSize: useFontSize(14),
  color: theme.palette.text.primary,
}));
export const ItemPrice = styled("span")(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: useFontSize(14),
  color: theme.palette.warning.light,
}));
