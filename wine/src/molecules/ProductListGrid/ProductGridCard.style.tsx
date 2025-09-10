import { styled } from "@mui/material/styles";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  type CardMediaProps,
} from "@mui/material";
import shape from "../../themes/shape";
import palette from "../../themes/palette";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

interface ProductImageProps extends CardMediaProps {
  alt?: string;
}

export const ResponsiveCard = styled(Card)(({ theme }) => ({
  position: "relative",
  borderRadius: shape.borderRadius,
  transition: "all 0.3s ease",
  width: "100%",
  minHeight: 470,
  maxWidth: 470,

  [theme.breakpoints.down("sm")]: {
    maxWidth: 340,
    minHeight: 380,
  },

  [theme.breakpoints.up("lg")]: {
    maxWidth: 700,
  },

  "&:hover": {
    transform: "translateY(-2px)",
  },
}));

export const FavoriteButton = styled(IconButton)(() => ({
  position: "absolute",
  top: 20,
  right: 22,
  backgroundColor: palette.white.main,
  border: shape.borderSuccess,
  borderRadius: "4px",
  zIndex: 1,
}));

export const FavoriteIcon = styled(Favorite)(() => ({
  color: palette.primary.dark,
}));

export const FavoriteBorderIcon = styled(FavoriteBorder)(() => ({
  color: palette.grey[500], // or whatever you want for border
}));

export const ProductImage = styled(CardMedia)<ProductImageProps>(({ theme }) => ({
  objectFit: "contain",
  padding: theme.spacing(2),
  height: 250,
  cursor: "pointer",
  [theme.breakpoints.down("sm")]: { height: 200 },
  [theme.breakpoints.up("lg")]: { height: 300 },
}));

export const ProductCardContent = styled(CardContent)(({ theme }) => ({
  paddingTop: theme.spacing(1),
  paddingBottom: 0,
}));

export const ProductName = styled(Typography)(() => ({
  fontWeight: 600,
  marginBottom: 8,
  fontSize: "1rem",
}));

export const DetailsRow = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 8,
  marginBottom: 8,
}));

export const SmallText = styled(Typography)(() => ({
  color: palette.grey[200],
  fontSize: "1rem",
  display: "flex",
  alignItems: "center",
}));

export const RatingBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
}));

export const PriceRow = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 16,
  marginBottom: 16,
}));

export const PriceText = styled(Typography)(({ theme }) => ({
  color: theme.palette.black[800],
  fontWeight: 600,
  fontSize: "20px",
}));

export const VIPPriceText = styled(Typography)(({ theme }) => ({
  color: theme.palette.warning.light,
  fontWeight: 600,
  fontSize: "20px",
}));

export const AddToCartButton = styled(Button)(({ theme }) => ({
  border: shape.borderRed,
  color: theme.palette.primary.dark,
  backgroundColor: theme.palette.primary.light,
  padding: "12px 0px",
  textTransform: "none",
  fontWeight: 600,
  width: "100%",
  whiteSpace: "nowrap",
  borderRadius: shape.borderRadiuspx,
}));
