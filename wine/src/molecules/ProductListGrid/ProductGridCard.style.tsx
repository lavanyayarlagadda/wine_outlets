import { styled } from "@mui/material/styles";
import { Box, Button, Card, CardMedia, Chip, IconButton, Typography } from "@mui/material";

export const LayoutContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  overflowX: "hidden",
  width: "100%",
  boxSizing: "border-box",
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),

  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
  },
}));

export const SidebarWrapper = styled(Box)(({ theme }) => ({
  flex: "0 0 auto",
  marginBottom: theme.spacing(2),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),

  [theme.breakpoints.up("lg")]: {
    flex: "0 0 20%",
    marginBottom: 0,
  },
}));

export const ContentWrapper = styled(Box)(({ theme }) => ({
  flex: "1 1 auto",
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  overflowX: "hidden",
  boxSizing: "border-box",

  [theme.breakpoints.up("md")]: {
    flex: "0 0 69%",
    paddingLeft: "14px",
  },
  [theme.breakpoints.up("lg")]: {
    flex: "0 0 75%",
  },
}));

export const ControlsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  paddingLeft: 0,
  paddingRight: theme.spacing(1),
  gap: theme.spacing(2),

  [theme.breakpoints.up("sm")]: {
    flexWrap: "nowrap",
    paddingLeft: theme.spacing(1),
  },
}));

export const ProductsWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  overflowX: "hidden",
  padding: 0,

  [theme.breakpoints.up("sm")]: {
    padding: "20px",
  },
}));

export const ProductsGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(3),
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),

  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(2),
  },
}));
export const StyledCard = styled(Card)(({ theme }) => ({
  position: "relative",
  borderRadius: 16,
  // boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  transition: "all 0.3s ease",
  "&:hover": {
    // boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
    transform: "translateY(-2px)",
  },
}));

export const FavoriteButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: 20,
  right: 22,
  backgroundColor: "white",
  border: `1px solid ${theme.palette.success.main}`,
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
  fontSize: "1rem",
  display: "flex",
  alignItems: "center",
}));

export const SmallChip = styled(Chip)(() => ({
  backgroundColor: "transparent",
  fontSize: "1rem",
  height: 20,
}));

export const RatingBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  // gap: 4,
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
  borderColor: theme.palette.primary.dark,
  color: theme.palette.primary.dark,
  backgroundColor: theme.palette.primary.light,
  padding: "12px 0px",
  textTransform: "none",
  fontWeight: 600,
  width: "50%",
}));
