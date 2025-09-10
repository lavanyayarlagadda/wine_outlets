// src/organisms/pages/Invoice/Invoice.style.tsx
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

export const InvoiceHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

// the rounded pill background for the arrow
export const BackPill = styled(IconButton)(({ theme }) => ({
  background: theme.palette.action.hover,
  borderRadius: 8,
  width: 36,
  height: 36,
  padding: 6,
  boxShadow: "none",
  border: `1px solid ${theme.palette.divider}`,
  "&:hover": {
    background: theme.palette.action.selected,
  },
}));

export const Breadcrumb = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  alignItems: "center",
}));

export const BreadcrumbLabel = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.primary,
}));

export const BreadcrumbOrderId = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.primary.dark, // colored id like your screenshot
  fontWeight: 600,
}));
