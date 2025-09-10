import { Box, Typography, styled } from "@mui/material";
import palette from "../../themes/palette";

export const HeaderSection = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: theme.spacing(2),
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: "32px",
  fontWeight: 600,
  color: theme.palette.black[800],
  marginBottom: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    fontSize: "22px",
  },
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  fontSize: "24px",
  color: palette.grey.main,
  fontWeight: 400,
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
}));
