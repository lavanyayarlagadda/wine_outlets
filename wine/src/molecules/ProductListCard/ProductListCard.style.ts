import { styled } from "@mui/material/styles";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
  IconButton,
  type CardMediaProps,
} from "@mui/material";
import shape from "../../themes/shape";
import palette from "../../themes/palette";

// Main Card
export const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
  },
  alignItems: "flex-start",
  borderRadius: 16,
  border: shape.borderGreyline,
  padding: theme.spacing(3),
  width: "100%",
  minHeight: 210,
  background: "#fff",
  boxShadow: "0 2px 12px 0 rgba(55, 84, 170, 0.04)",
}));

// Image wrapper
export const ImageWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  borderRadius: shape.borderRadius,
  border: shape.borderGreyline,
  padding: theme.spacing(2),
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minWidth: "100%",
  minHeight: 180,
  marginBottom: theme.spacing(2),

  [theme.breakpoints.up("sm")]: {
    minWidth: 140,
    minHeight: 210,
    marginBottom: 0,
  },
  [theme.breakpoints.up("md")]: {
    minWidth: 200,
    minHeight: 300,
  },
}));

interface ProductImageProps extends CardMediaProps {
  alt?: string;
}

export const ProductImage = styled(CardMedia)<ProductImageProps>(({ theme }) => ({
  width: 80,
  height: 150,
  objectFit: "contain",
  borderRadius: 8,
  cursor: "pointer",

  [theme.breakpoints.up("sm")]: {
    width: 100,
    height: 210,
  },
  [theme.breakpoints.up("md")]: {
    width: 120,
    height: 250,
  },
}));

// Favorite Button wrapper
export const FavoriteWrapper = styled(Box)(() => ({
  position: "absolute",
  top: 10,
  right: 10,
  zIndex: 1,
}));

// Favorite button
export const FavoriteButton = styled(IconButton)(() => ({
  backgroundColor: palette.white.main,
  borderRadius: "50%",
  boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
  "&:hover": {
    backgroundColor: palette.white.main,
  },
}));

// Card Content
export const StyledCardContent = styled(CardContent)(({ theme }) => ({
  flex: "1 1 auto",
  paddingLeft: 0,
  paddingRight: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1.5),

  [theme.breakpoints.up("sm")]: {
    paddingLeft: theme.spacing(2),
  },
}));

// Product Name
export const ProductTitle = styled(Typography)(() => ({
  fontWeight: 700,
  marginTop: 8,
  marginBottom: 4,
}));

// Info Row
export const InfoRow = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: 8,
  gap: 8,
}));

// Small Icon + Text
export const InfoIcon = styled("img")(() => ({
  width: 20,
  height: 20,
  marginRight: 6,
}));

// Description
export const DescriptionText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(2),
  minHeight: 48,
}));

// Footer (price + button container)
export const FooterRow = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(2),

  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
}));

// Add to Cart Button
export const AddToCartButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.dark,
  backgroundColor: theme.palette.primary.light,
  padding: "12px 0px",
  textTransform: "none",
  fontWeight: 600,
  whiteSpace: "nowrap",
  border: shape.borderRed,
  width: "100%", // default for xs
  [theme.breakpoints.up("sm")]: {
    width: "30%",
  },
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: palette.white.main,
  },
  borderRadius:shape.borderRadiuspx
}));
