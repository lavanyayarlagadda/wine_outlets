// Newsletter.style.tsx
import { Box, Button, styled, Typography } from "@mui/material";
import shape from "../../themes/shape";

export const NewsletterContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  margin: "0 auto",
  padding: `${theme.spacing(0)} ${theme.spacing(4)} ${theme.spacing(4)}`,
  backgroundColor: theme.palette.primary.light,
  [theme.breakpoints.down("sm")]: {
    padding: `${theme.spacing(0)} ${theme.spacing(2)} ${theme.spacing(2)}`,
  },
}));

export const CustomizeTitleText = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  fontWeight: 600,
  color: theme.palette.black[800],
  [theme.breakpoints.up("md")]: {
    ...theme.typography.h4,
  },
  [theme.breakpoints.between("sm", "md")]: {
    ...theme.typography.h5,
  },
  [theme.breakpoints.down("sm")]: {
    ...theme.typography.h6,
  },
}));

export const SubscribeButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.white.main,
  padding: theme.spacing(1.5, 3),
  borderRadius: shape.baseBorderRadius * 1.5,
  textTransform: "none",
  fontSize: theme.typography.button.fontSize,
  fontWeight: 600,
}));

export const WrapperBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.white.main,
  borderRadius: shape.baseBorderRadius * 3,
  border: shape.borderSuccess,
  padding: theme.spacing(3),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
    borderRadius: shape.baseBorderRadius * 2,
  },
}));

export const CustomizedGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: theme.spacing(3),
  marginTop: theme.spacing(3),
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
    gap: theme.spacing(2),
  },
}));

export const BtnWrapperBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2.5),
  paddingTop: theme.spacing(2.5),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "stretch",
    gap: theme.spacing(1.5),
  },
}));

export const CustomizeUnsubscribeText = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[400],
  fontSize: theme.typography.subtitle2.fontSize,
  display: "block",
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.caption.fontSize,
  },
}));
