import { styled } from "@mui/material/styles";
import { Box, Typography, Button, ButtonBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import shape from "../../themes/shape";
import palette from "../../themes/palette";

export const TitleText = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  color: theme.palette.grey[900],
  ...theme.typography.h6,
  [theme.breakpoints.down("sm")]: {
    ...theme.typography.subtitle1,
  },
}));

export const SearchContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  marginBottom: theme.spacing(2),
  gap: theme.spacing(1),
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "stretch",
  },
}));

export const SearchBoxWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flex: 1,
  border: shape.borderGrey,
  borderRadius: shape.baseBorderRadius * 1.5,
  padding: theme.spacing(0, 1.5),
  backgroundColor: theme.palette.background.paper,
  minHeight: theme.spacing(4.5),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(0.5, 1),
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    padding: theme.spacing(0.5, 1),
    borderRadius: `${theme.shape.borderRadius}px`,
  },
}));

export const SearchIconStyled = styled(SearchIcon)(({ theme }) => ({
  color: palette.grey[200],
  marginRight: theme.spacing(1),
  display: "flex",
  alignItems: "center",
  svg: {
    fontSize: theme.typography.body1.fontSize,
  },
}));

export const StyledSearchButton = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  backgroundColor: theme.palette.primary.dark,
  borderRadius: shape.baseBorderRadius * 1.5,
  whiteSpace: "nowrap",
  padding: theme.spacing(1, 2),
  fontSize: theme.typography.button.fontSize,
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
  [theme.breakpoints.down("sm")]: {
    marginLeft: 0,
    width: "100%",
    alignSelf: "stretch",
  },
}));

export const StoreButtonBase = styled(ButtonBase, {
  shouldForwardProp: (prop) => prop !== "selected",
})<{ selected?: boolean }>(({ theme, selected }) => ({
  width: "100%",
  textAlign: "left",
  backgroundColor: selected ? theme.palette.primary.light : theme.palette.background.paper,
  borderRadius: shape.baseBorderRadius * 2,
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  display: "block",
  transition: "background-color 0.2s ease",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1.5),
    marginBottom: theme.spacing(1.5),
    borderRadius: shape.borderRadius,
  },
}));

export const StoreHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between", // pushes Check icon to far right
  width: "100%",
  gap: theme.spacing(1),
}));

export const StoreLeftGroup = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  flex: 1,
  minWidth: 0,
}));

export const StoreName = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  ...theme.typography.subtitle1,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  [theme.breakpoints.down("sm")]: {
    ...theme.typography.body1,
  },
}));

export const MapButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "selected",
})<{ selected?: boolean }>(({ theme, selected }) => ({
  borderRadius: shape.baseBorderRadius * 2,
  border: selected ? shape.borderRed : shape.borderGrey,
  color: selected ? theme.palette.primary.dark : "inherit",
  textTransform: "none",
  minWidth: theme.spacing(12),
  padding: theme.spacing(0.5, 1.25),
  fontSize: theme.typography.caption.fontSize,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    minWidth: theme.spacing(10),
    padding: theme.spacing(0.5, 1),
    fontSize: theme.typography.caption.fontSize,
  },
}));

export const MapIconImage = styled("img")(({ theme }) => ({
  width: theme.spacing(2),
  height: theme.spacing(2),
  objectFit: "contain",
}));

export const StoreInfoRow = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: theme.spacing(1),
  gap: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: theme.spacing(0.75),
  },
}));

export const InfoItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(0.5),
  color: theme.palette.text.secondary,
  "& svg": {
    fontSize: theme.typography.body2.fontSize,
  },
}));
