import { styled } from "@mui/material/styles";
import {
  Card,
  CardContent,
  Box,
  Typography,
  IconButton,
  Button,
  Grid,
  DialogContent,
  Tooltip,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import palette from "../../themes/palette";

// Grid wrapper
export const CustomGrid = styled(Grid)(() => ({
  padding: 32,
  "@media (min-width:600px)": {
    padding: 24,
  },
  "@media (min-width:900px)": {
    padding: 32,
  },
}));

// Card
export const StoreCard = styled(Card)(() => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  overflow: "hidden",
  border: `1px solid ${palette.grey.divider}`,
  borderRadius: 8,
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  transition: "all 0.3s ease-in-out",
  "@media (min-width:600px)": {
    flexDirection: "row",
  },
  "&:hover": {
    boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
    transform: "translateY(-4px)",
  },
}));

// Image
export const StoreImage = styled("img")(() => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  cursor: "pointer",
  "@media (min-width:600px)": {
    width: 300,
    height: "100%",
  },
}));

// Card content
export const StoreContent = styled(CardContent)(() => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  padding: 16,
}));

export const StoreTitle = styled(Typography)(() => ({
  color: palette.primary.dark,
  fontWeight: "bold",
  marginBottom: 8,
  fontSize: 18,
  "@media (min-width:600px)": {
    fontSize: 20,
  },
}));

// Rows for icons + text
export const InfoRow = styled(Box)(() => ({
  display: "flex",
  alignItems: "flex-start",
  marginBottom: 8,
  flexWrap: "wrap",
}));

export const IconBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  marginBottom: 8,
}));

export const StyledLocationIcon = styled(LocationOnIcon)(() => ({
  fontSize: 18,
  marginRight: 8,
  color: palette.primary.dark,
}));

export const StyledPhoneIcon = styled(PhoneIcon)(() => ({
  fontSize: 18,
  marginRight: 8,
  color: palette.primary.dark,
}));

export const StyledAccessTimeIcon = styled(AccessTimeIcon)(() => ({
  fontSize: 18,
  marginRight: 8,
  color: palette.primary.dark,
}));

// Buttons row
export const ButtonRow = styled(Box)(() => ({
  display: "flex",
  gap: 8,
  marginTop: "auto",
  flexWrap: "wrap",
}));

export const StyledButton = styled(Button)(() => ({}));

// Dialog (Modal)
export const StyledDialogContent = styled(DialogContent)(() => ({
  position: "relative",
  padding: 0,
  background: palette.primary.light,
  color: palette.primary.dark,
}));

export const CloseButton = styled(IconButton)(() => ({
  position: "absolute",
  right: 8,
  top: 8,
  zIndex: 2,
  color: palette.primary.dark,
  background: palette.primary.light,
  "&:hover": {
    background: palette.primary.light,
  },
}));

export const ModalTitle = styled(Box)(() => ({
  textAlign: "center",
  fontWeight: "bold",
  padding: "8px 0",
  fontSize: 20,
}));

export const ImageContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  width: "90vw",
  maxWidth: 800,
  height: "60vh",
  maxHeight: 600,
  margin: "0 auto",
  background: palette.white.main,
  "@media (min-width:600px)": {
    height: 400,
  },
}));

export const ModalImage = styled("img")(() => ({
  maxHeight: "100%",
  maxWidth: "90%",
  objectFit: "contain",
  margin: "auto",
}));

export const NavButton = styled(IconButton)<{ left?: boolean; right?: boolean }>(
  ({ left, right }) => ({
    color: palette.primary.dark,
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 2,
    ...(left ? { left: 8 } : {}),
    ...(right ? { right: 8 } : {}),
  })
);
export const AddressTooltip = styled(Tooltip)(() => ({
  cursor: "pointer",
}));

// Typography inside tooltip that truncates text
export const TruncatedAddress = styled(Typography)(({ theme }) => ({
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: 300, // default for small mobile
  [theme.breakpoints.up("sm")]: {
    maxWidth: 300, // tablet
  },
  [theme.breakpoints.up("md")]: {
    maxWidth: 500, // laptop
  },
  [theme.breakpoints.up("lg")]: {
    maxWidth: 300, // desktop
  },
}));

// Thumbnails
export const ThumbnailRow = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  gap: 8,
  marginTop: 16,
  flexWrap: "wrap",
}));

export const Thumbnail = styled("img")<{ active?: boolean }>(({ active }) => ({
  width: 60,
  height: 60,
  objectFit: "cover",
  cursor: "pointer",
  border: active ? `2px solid ${palette.primary.dark}` : "2px solid transparent",
  borderRadius: 4,
  "@media (min-width:600px)": {
    width: 70,
    height: 70,
  },
}));

export const Counter = styled(Box)(() => ({
  textAlign: "center",
  color: palette.primary.dark,
  marginTop: 8,
  paddingBottom: 8,
}));
