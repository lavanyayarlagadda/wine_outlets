import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Grid } from "@mui/material";
import shape from "../../themes/shape";


export const WishlistContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2,8,8,8),
//   border:"2px solid red",
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
  marginTop:theme.spacing(4),
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


export const WishlistCard = styled(Box)(({ theme }) => ({
  borderRadius: shape.baseBorderRadius,
  padding: theme.spacing(2),
  display: "flex",
  gap: theme.spacing(2),
  alignItems: "center",
  width: "50%"
}));

export const Thumbnail = styled("img")(({ theme }) => ({
  width: 84,
  height: 84,
  objectFit: "contain",
  borderRadius: 8,
  background: theme.palette.background.default,
}));

export const Meta = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
}));

export const PriceRow = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  alignItems: "center",
}));

export const VipPrice = styled(Typography)(({ theme }) => ({
  color: theme.palette.warning.light,
  fontWeight: 600,
}));

export const RegularPrice = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 600,
}));

export const Actions = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1.5),
  alignItems: "center",
}));

export const AddBtn = styled(Button)(({ theme }) => ({
  textTransform: "none",
  borderRadius: shape.baseBorderRadius,
  padding: theme.spacing(0.6, 2),
}));

export const RemoveBtn = styled(IconButton)(({ theme }) => ({
  borderRadius: shape.baseBorderRadius,
  padding: theme.spacing(0.6),
  border: `1px solid ${theme.palette.divider}`,
}));
