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
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import palette from "../../themes/palette";

// Grid wrapper
export const CustomGrid = styled(Grid)(() => ({
  padding: 32,
}));

// Card
export const StoreCard = styled(Card)(() => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  overflow: "hidden", // prevents overflow of image
  "@media (min-width:600px)": {
    flexDirection: "row",
  },
}));

// Image
export const StoreImage = styled("img")(() => ({
  width: "100%",
  height: "100%", // stretch vertically
  objectFit: "cover",
  cursor: "pointer",
  "@media (min-width:600px)": {
    width: 200,
    height: "100%", // match card height on desktop
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
}));

// Rows for icons + text
export const InfoRow = styled(Box)(() => ({
  display: "flex",
  alignItems: "flex-start",
  marginBottom: 8,
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
}));

export const StyledButton = styled(Button)(() => ({}));

// Dialog
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
}));

export const ModalTitle = styled(Box)(() => ({
  textAlign: "center",
  fontWeight: "bold",
  padding: "8px 0",
}));

export const ImageContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  width: 600,
  maxWidth: "95vw",
  height: 400,
  margin: "0 auto",
  background: palette.white.main,
}));

export const ModalImage = styled("img")(() => ({
  maxHeight: "100%",
  maxWidth: "80%",
  margin: "auto",
}));

export const NavButton = styled(IconButton)<{ left?: boolean; right?: boolean }>(
  ({ left, right }) => ({
    color: palette.primary.dark,
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    ...(left ? { left: 8 } : {}),
    ...(right ? { right: 8 } : {}),
  })
);

// Thumbnails
export const ThumbnailRow = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  gap: 8,
  marginTop: 16,
  flexWrap: "wrap",
}));

export const Thumbnail = styled("img")<{ active?: boolean }>(({ active }) => ({
  width: 70,
  height: 70,
  objectFit: "cover",
  cursor: "pointer",
  border: active ? `2px solid ${palette.primary.dark}` : "2px solid transparent",
}));

export const Counter = styled(Box)(() => ({
  textAlign: "center",
  color: palette.primary.dark,
  marginTop: 8,
  paddingBottom: 8,
}));
