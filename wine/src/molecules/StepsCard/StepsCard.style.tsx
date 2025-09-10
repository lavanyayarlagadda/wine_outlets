import { styled } from "@mui/material/styles";
import { Card, Box, Divider, Typography } from "@mui/material";
import palette from "../../themes/palette";
import shape from "../../themes/shape";

export const StepsCardWrapper = styled(Card)(() => ({
  borderRadius: shape.borderRadius,
  maxWidth: 600,
  margin: "0 auto",
  width: "100%",
  border: shape.borderSuccess,
  boxShadow: "none",
}));

export const StyledDivider = styled(Divider)(({ theme }) => ({
  color: palette.success.main,
  marginLeft: -theme.spacing(2),
  marginRight: -theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

export const StepWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const StepNumberCircle = styled(Box)(({ theme }) => ({
  width: 28,
  height: 28,
  borderRadius: "50%",
  backgroundColor: palette.primary.dark,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: palette.white.main,
  fontSize: "14px",
  fontWeight: "bold",
  marginRight: theme.spacing(2),
  flexShrink: 0,
  [theme.breakpoints.down("sm")]: {
    marginRight: 0,
    marginBottom: theme.spacing(1),
  },
}));

export const StepTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));

export const StepDescription = styled(Typography)(({ theme }) => ({
  fontSize: "0.9rem",
  color: theme.palette.text.secondary,
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.85rem",
  },
}));
