import { Card, IconButton, CardMedia, Typography, Box, Chip, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import shape from "../../themes/shape";

export const StyledCard = styled(Card)(({ theme }) => ({
  position: "relative",
  borderRadius: 16,
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  transition: "all 0.3s ease",
  "&:hover": {
    boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
    transform: "translateY(-2px)",
  },
}));

export const FavoriteButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: 20,
  right: 22,
  backgroundColor: "white",
  border: shape.borderSuccess,
  borderRadius: "4px",
  zIndex: 1,
  "&:hover": { backgroundColor: "#f5f5f5" },
}));

export const ProductImage = styled(CardMedia)(() => ({
  objectFit: "contain",
  padding: 16,
  height: 400,
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
  color: "#666",
  fontSize: "0.75rem",
  display: "flex",
  alignItems: "center",
}));

export const SmallChip = styled(Chip)(() => ({
  backgroundColor: "#f5f5f5",
  fontSize: "0.75rem",
  height: 20,
}));

export const RatingBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: 4,
}));

export const PriceText = styled(Typography)(({ theme }) => ({
  color: theme.palette.black[800],
  fontWeight: 600,
  fontSize: "20px",
}));

export const AddToCartButton = styled(Button)(({ theme }) => ({
  borderColor: theme.palette.primary.dark,
  color: theme.palette.primary.dark,
  backgroundColor: theme.palette.primary.light,
  padding: "12px 0px",
  textTransform: "none",
  fontWeight: 600,
  width: "50%",
}));
