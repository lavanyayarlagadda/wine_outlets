import { styled } from "@mui/material/styles";
import { Box, Typography, Button, ButtonBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import shape from "../../themes/shape";

export const TitleText = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  color: theme.palette.grey[900],
}));

// Search section wrapper
export const SearchContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  marginBottom: theme.spacing(2),
}));

// Input + Icon wrapper with border
export const SearchBoxWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flex: 1,
  border: `1px solid ${theme.palette.grey[400]}`,
  borderRadius: "12px",
  padding: "0 12px",
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.down("sm")]: {
    flex: 1,
  },
}));

export const SearchIconStyled = styled(SearchIcon)(() => ({
  color: "gray",
  marginRight: 8,
}));

// Button aligned to right end
export const StyledSearchButton = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  backgroundColor: theme.palette.primary.dark,
  borderRadius: "12px",
  whiteSpace: "nowrap",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

export const StoreButtonBase = styled(ButtonBase, {
  shouldForwardProp: (prop) => prop !== "selected",
})<{ selected?: boolean }>(({ theme, selected }) => ({
  width: "100%",
  textAlign: "left",
  backgroundColor: selected ? theme.palette.primary.light : theme.palette.background.paper,
  borderRadius: shape.borderRadius * 2,
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  display: "block",
  transition: "background-color 0.2s ease",
}));

export const StoreHeader = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between", // pushes Check icon to far right
  width: "100%",
}));

export const StoreLeftGroup = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: 8,
}));

export const StoreName = styled(Typography)(() => ({
  fontWeight: "bold",
}));

export const MapButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "selected",
})<{ selected?: boolean }>(({ theme, selected }) => ({
  borderRadius: "20px",
  border: `1px solid ${selected ? theme.palette.primary.dark : theme.palette.grey[400]}`,
  color: selected ? theme.palette.primary.dark : "inherit",
  textTransform: "none",
  minWidth: "100px",
}));

export const MapIconImage = styled("img")(() => ({
  width: 15,
  height: 15,
}));

export const StoreInfoRow = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: 8,
}));

export const InfoItem = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: 4,
}));
