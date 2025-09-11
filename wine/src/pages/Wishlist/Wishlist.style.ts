import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import shape from "../../themes/shape";

export const WishlistContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2, 8, 8, 8),
}));

export const WishlistHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: theme.spacing(3),
}));

export const Title = styled(Typography)(({ theme }) => ({
  ...theme.typography.h6,
  fontWeight: 700,
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
}));

export const WishlistItemsContainer = styled(Typography)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  marginTop: theme.spacing(4),
  borderRadius: shape.baseBorderRadius * 1.5,
}));

export const CartGrid = styled(Grid)(({ theme }) => ({
  position: "relative",
  display: "grid",
  gridTemplateColumns: "1fr",
  boxSizing: "border-box",

  "& > *": {
    boxSizing: "border-box",
    background: "transparent",
    zIndex: 1,
  },

  [theme.breakpoints.up("lg")]: {
    gridTemplateColumns: "1fr 1fr",

    "&::before": {
      content: '""',
      position: "absolute",
      top: theme.spacing(1),
      bottom: theme.spacing(1),
      left: "50%",
      width: 1,
      backgroundColor: theme.palette.divider,
      transform: "translateX(-0.5px)",
      pointerEvents: "none",
      zIndex: 0,
    },

    "& > *:nth-child(n+3)": {
      borderTop: `1px solid ${theme.palette.divider}`,
      paddingTop: theme.spacing(2),
    },
  },

  [theme.breakpoints.between("sm", "lg")]: {
    gridTemplateColumns: "1fr",
    "&::before": {
      display: "none",
    },
    "& > *:nth-child(n+2)": {
      borderTop: `1px solid ${theme.palette.divider}`,
      paddingTop: theme.spacing(2),
    },
  },

  "& > *:nth-last-child(-n+2)": {
    borderBottom: `1px solid ${theme.palette.divider}`,
    paddingBottom: theme.spacing(2),
    zIndex: 1,
  },

  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
    "&::before": {
      display: "none",
    },
    "& > *:nth-child(n+2)": {
      borderTop: `1px solid ${theme.palette.divider}`,
      paddingTop: theme.spacing(2),
    },
  },
}));
