// Breadcrumbs.style.ts
import { styled } from "@mui/material/styles";
import { Breadcrumbs as MUIBreadcrumbs, Link, Typography, Box } from "@mui/material";
import palette from "../../themes/palette";
import { useFontSize } from "../../themes/fontSize";

// Wrapper for the breadcrumbs container
export const BreadcrumbsWrapper = styled(MUIBreadcrumbs)(({ theme }) => ({
  padding: theme.spacing(2),
  fontSize: useFontSize(16),
}));

// Last breadcrumb (active one)
export const ActiveCrumb = styled(Typography)(() => ({
  color: palette.primary.dark,
  fontWeight: 500,
  fontSize: useFontSize(16),
}));

// Link style for clickable breadcrumbs
export const CrumbLink = styled(Link)(() => ({
  color: palette.black[800],
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
}));

// Normal (non-clickable) breadcrumb
export const CrumbText = styled(Typography)(() => ({
  color: palette.black[800],
}));
export const BreadcrumbHeaderWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap", // default, overridden by media query
  gap: theme.spacing(2),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    flexWrap: "nowrap",
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
}));

// Box wrapper for product count
export const ProductCountBox = styled(Box)(() => ({
  flex: "0 0 auto",
  paddingRight: 12,
}));

// Typography for product count
export const ProductCountText = styled(Typography)(() => ({
  color: palette.grey.main,
  variant: "body2",
}));
// Box wrapper for breadcrumb items
export const BreadcrumbsBox = styled(Box)(() => ({
  flex: "1 1 auto",
}));
