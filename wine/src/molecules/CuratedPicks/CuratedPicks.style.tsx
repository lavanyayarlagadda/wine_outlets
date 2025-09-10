import { Box, Typography, styled } from "@mui/material";
import palette from "../../themes/palette";

export const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  margin: "0 auto",
  padding: "80px 64px",
  [theme.breakpoints.down("sm")]: {
    padding: "40px 16px",
  },
}));
export const HeaderSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: theme.spacing(3),
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

export const StyledContainer = styled(Box)(() => ({
  position: "relative",
}));

export const StyledOverlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "30px",
  left: "-26px",
  right: 0,
  bottom: 0,
  height: "170px",
  width: "170px",
  borderRadius: "50%",
  backgroundColor: theme.palette.primary.light,
  zIndex: -1,
}));

export const StyledGridContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 10,
  padding: "32px",
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  [theme.breakpoints.up("md")]: {
    flexWrap: "nowrap",
    justifyContent: "space-between",
  },
  [theme.breakpoints.down("sm")]: {
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center",
    gap: "24px",
    padding: "16px",
  },
}));

export const StyledWineItem = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  cursor: "pointer",
  width: "180px",
  flex: "0 1 auto",
  "&:hover .wine-image": {
    transform: "scale(1.05)",
  },
  [theme.breakpoints.down("sm")]: {
    width: "140px",
    flex: "0 1 auto",
  },
}));

export const StyledImageContainer = styled(Box)(() => ({
  position: "relative",
  marginBottom: "16px",
  transition: "transform 0.3s ease",
  // filter: "drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))",
}));

export const StyledCategoryLabel = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontWeight: 600,
  color: palette.grey.main,
  fontSize: "0.875rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "1rem",
  },
}));
