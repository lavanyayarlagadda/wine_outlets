import { Alert, Box, Card, Divider, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import shape from "../../themes/shape";
import { PasswordFields as OriginalPasswordFields } from "../../organisms/Authentication/AuthDialog.style";
import palette from "../../themes/palette";

export const Container = styled(Box)(({ theme }) => ({
  paddingLeft: "48px",
  paddingRight: "48px",
  [theme.breakpoints.down("sm")]: {
    padding: 0,
  },
}));

export const HeaderBox = styled(Box)(() => ({
  marginBottom: "4px",
}));

export const DividerLine = styled(Divider)(() => ({
  marginTop: shape.borderRadiuspx,
  marginBottom: "4px",
}));

export const ButtonWrapper = styled(Box)(() => ({
  width: "200px",
  marginTop: shape.borderRadiuspx,
}));

export const PasswordFieldsResponsive = styled(OriginalPasswordFields)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start", // align top for vertical layout on mobile
  gap: "16px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column", // stack vertically on tablet/mobile
    gap: "8px",
  },
}));

export const InfoText = styled(Typography)(({ theme }) => ({
  fontSize: "0.875rem",
  color: "#757575",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    marginTop: 0,
  },
  [theme.breakpoints.up("md")]: {
    marginTop: "35px",
  },
}));
export const TextBox = styled(Box)(({ theme }) => ({
  flex: 1, // take remaining space beside the button
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
  },
}));

export const VIPContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "16px",
  marginTop: "20px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const GridItem = styled(Grid)(() => ({
  flex: 1,
  minWidth: "280px",
}));

export const VIPCard = styled(Card)<{ active?: boolean }>(({ active, theme }) => ({
  backgroundColor: !active ? palette.background.bg_light : palette.primary.dark,
  color: !active ? palette.black[800] : palette.white.main,
  borderRadius: "12px",
  minHeight: "280px", // increased height
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between", // top and bottom spaced
  padding: "16px",
  [theme.breakpoints.down("sm")]: {
    minHeight: "240px",
  },
}));

export const CardTopRow = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
});

export const CardBottomRow = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
  marginTop: "auto", // ensures bottom positioning
});

export const BarcodeForm = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    marginTop: "16px",
  },
}));

export const NoteAlert = styled(Alert)(({ theme }) => ({
  marginTop: "16px",
  backgroundColor: "#fef3c7",
  color: "#92400e",
  fontSize: "0.95rem",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.85rem",
  },
}));

export const AlertIcon = styled("span")({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "20px",
  height: "20px",
  borderRadius: "50%",
  backgroundColor: "#facc15",
  color: "#92400e",
  fontWeight: 700,
  fontSize: "0.85rem",
});
