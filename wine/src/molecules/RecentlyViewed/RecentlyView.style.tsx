import { Box, Typography, styled } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  width: "100%",
  margin: "0 auto",
  padding: `${theme.spacing(10)} ${theme.spacing(8)}`,
  [theme.breakpoints.down("md")]: {
    padding: `${theme.spacing(5)} ${theme.spacing(2)}`,
  },
}));

export const HeaderWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  marginBottom: theme.spacing(4),
}));

export const Title = styled(Typography)(({ theme }) => ({
  ...theme.typography.h4,
  fontWeight: "bold",
  color: theme.palette.black[800],
  fontFamily: theme.typography.fontFamily,

  [theme.breakpoints.down("sm")]: {
    fontSize: theme.typography.h6.fontSize, 
  },
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: theme.typography.h5.fontSize, 
  },
}));

export const CarouselWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  overflowX: "auto",
  scrollSnapType: "x mandatory",
  gap: theme.spacing(3),
  marginBottom: theme.spacing(3),
  marginTop: theme.spacing(7),
  scrollBehavior: "smooth",
  WebkitOverflowScrolling: "touch",
  "&::-webkit-scrollbar": {
    display: "none",
  },
}));

export const ProductBox = styled(Box)(({ theme }) => ({
  minWidth: "280px",
  flexShrink: 0,
  scrollSnapAlign: "start",
  [theme.breakpoints.up("md")]: {
    minWidth: `calc(25% - ${theme.spacing(2.25)})`,
  },
}));

export const DotsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const Dot = styled(Box)<{ active: boolean }>(({ active, theme }) => ({
  width: active ? theme.spacing(4) : theme.spacing(1.5),
  height: theme.spacing(1.5),
  borderRadius: active ? theme.shape.borderRadius : "50%",
  backgroundColor: active
    ? theme.palette.primary.dark
    : theme.palette.warning.light,
  cursor: "pointer",
  transition: "all 0.16s ease",
  "&:hover": {
    backgroundColor: active
      ? theme.palette.primary.dark
      : theme.palette.warning.light,
  },
}));
