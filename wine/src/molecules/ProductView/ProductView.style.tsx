import { Card, IconButton, CardMedia, Typography, Box, Chip, Button, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import  palette from "../../themes/palette";


export const StyledImageContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  gap: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const StyledThumbnailList = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("md")]: {
    flexDirection: "row",
    marginBottom: theme.spacing(2),
    justifyContent: "center",
    width: "100%",
  },
}));

export const StyledCard = styled(Card)(({ theme }) => ({
  position: "relative",
  borderRadius: 16,
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-2px)",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
    maxWidth: 350,
  },
}));

export const StyledCardMedia = styled(CardMedia)<{ alt?: string; src?: string }>(({ theme }) => ({
  objectFit: "contain",
  padding: 16,
  height: 500,
  width: 500,
  [theme.breakpoints.down("md")]: {
    height: 300,
    width: "100%",
    padding: 8,
  },
  [theme.breakpoints.down("sm")]: {
    height: 200,
    width: "100%",
    padding: 4,
  },
}));

export const StyledThumbnailCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== "selected",
})<{ selected?: boolean }>(({ theme, selected }) => ({
  width: 80,
  height: 124,
  marginBottom: 2,
  border: selected ? `2px solid ${theme.palette.primary.main}` : `2px solid ${palette.grey.border}`,
  cursor: "pointer",
  overflow: "hidden",
  transition: "border 0.2s, box-shadow 0.2s",
  boxShadow: selected ? theme.shadows[4] : theme.shadows[1],
  "&:hover": {
    boxShadow: theme.shadows[6],
  },
  [theme.breakpoints.down("md")]: {
    width: 60,
    height: 90,
    marginRight: 8,
  },
  [theme.breakpoints.down("sm")]: {
    width: 45,
    height: 65,
    marginRight: 4,
  },
}));

export const DetailsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  width: "100%",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(2),
  },
}));

export const ProductTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "24px",
  [theme.breakpoints.down("md")]: {
    fontSize: "22px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "18px",
  },
}));

export const ProductInfoRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  marginTop: theme.spacing(1),
  flexWrap: "wrap",
  "& > *": {
    flex: "1 1 45%",
    minWidth: "160px",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: theme.spacing(0.5),
  },
}));

export const PriceRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: theme.spacing(2),
  marginTop: theme.spacing(2),
}));

export const AddToCartBtn = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  width: "100%",
  fontWeight: 600,
  fontSize: "1rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.9rem",
    padding: "8px 12px",
  },
}));

export const StyledChip = styled(Chip)(({ theme }) => ({
  fontWeight: 500,
  fontSize: "12px",
  color: theme.palette.primary.dark,
  border: `1px solid ${theme.palette.primary.dark}`,
  backgroundColor: "transparent",
  [theme.breakpoints.down("sm")]: {
    fontSize: "11px",
    padding: "0 4px",
  },
}));

export const RatingBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
}));

export const RatingTypography = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  color: theme.palette.grey[100] ,
  fontSize: "0.9rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.8rem",
  },
}));

export const InfoValues = styled(Typography)(({ theme }) => ({
 color: theme.palette.text.primary,
  fontWeight: 500,
  fontSize: "16px",
  display: "inline",
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}));

export const PricingBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  flex: 1,
  minWidth: "160px",
}));

export const VipPriceText = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  fontWeight: 700,
  whiteSpace: "nowrap",
  color: theme.palette.warning.light,
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
}));

export const RegularPriceText = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  fontWeight: 600,
  textDecoration: "line-through",
 color: theme.palette.text.primary,
  whiteSpace: "nowrap",
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
}));

export const DescriptionText = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  color: theme.palette.text.primary,
  marginTop: "16px",
  lineHeight: 1.5,
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
    marginTop: "12px",
  },
}));

// Outer container
export const LayoutContainer = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(4),
  },
}));

// Grid Container
export const LayoutGrid = styled(Grid)(() => ({
  height: "100%",
}));

// Image Section
export const ImageSection = styled(Grid)(() => ({
  display: "flex",
}));

export const ImageBox = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(0),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(2),
  },
}));

// Details Section
export const DetailsSection = styled(Grid)(() => ({
  display: "flex",
}));

export const DetailsBox = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  maxHeight: "80vh", // Adjust based on your design
  overflowY: "auto",
  padding: theme.spacing(0),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(2),
  },
}));

export const HighlightsContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: 16,
  backgroundColor: theme. palette.success.main,
  border: `1px solid ${theme.palette.success.main}`,
  marginTop: theme.spacing(2),
}));

export const HighlightsTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(1),
   color: theme.palette.text.primary,
}));

export const HighlightsText = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[100],
  fontSize: "14px",
  lineHeight: 1.6,
}));


export const DetailsTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(1.5),
   color: theme.palette.text.primary,
}));

export const DetailRow = styled(Box)(({ theme }) => ({
  display: "flex",
  marginBottom: theme.spacing(1),
  "&:last-child": {
    marginBottom: 0,
  },
}));

export const DetailLabel = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  color: theme.palette.text.primary,
  minWidth: 100, // keeps labels aligned
}));

export const DetailValue = styled(Typography)(({ theme }) => ({
   fontWeight: 400,
   color: theme.palette.text.primary,
  flex: 1,
}));
