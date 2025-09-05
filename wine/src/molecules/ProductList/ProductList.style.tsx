// ProductList.style.ts
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const LayoutContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  overflowX: "hidden",
  width: "100%",
  boxSizing: "border-box",
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  [theme.breakpoints.up("lg")]: { flexDirection: "row" },
}));

export const SidebarWrapper = styled(Box)(({ theme }) => ({
  flex: "0 0 auto",
  marginBottom: theme.spacing(2),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  [theme.breakpoints.up("lg")]: { flex: "1 0 20%", marginBottom: 0 },
}));

export const ContentWrapper = styled(Box)(({ theme }) => ({
  flex: "1 1 auto",
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  overflowX: "hidden",
  boxSizing: "border-box",
  [theme.breakpoints.up("md")]: { flex: "0 0 69%", paddingLeft: "14px" },
  [theme.breakpoints.up("lg")]: { flex: "0 0 75%" },
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
  [theme.breakpoints.up("sm")]: { flexWrap: "nowrap", paddingLeft: theme.spacing(1) },
}));

export const ProductsGrid = styled(Box, {
  shouldForwardProp: (prop) => prop !== "view" && prop !== "columns",
})<{ view: "grid" | "list"; columns: number }>(({ theme, view, columns }) => ({
  display: "grid",
  gap: theme.spacing(3),
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),

  gridTemplateColumns:
    view === "grid"
      ? `repeat(1, 1fr)` // default for xs
      : "repeat(1, 1fr)",

  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns:
      view === "grid" ? `repeat(2, 1fr)` : "repeat(1, 1fr)",
  },

  [theme.breakpoints.up("md")]: {
    gridTemplateColumns:
      view === "grid" ? `repeat(${columns}, 1fr)` : "repeat(1, 1fr)",
  },

  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(2),
  },
}));

// ✅ This is the one your import is complaining about
export const ProductsWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  overflowX: "hidden",
  padding: 0,
  [theme.breakpoints.up("sm")]: { padding: "1px" },
}));


