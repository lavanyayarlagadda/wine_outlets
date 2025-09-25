// DealsSection.style.tsx
import { Box, styled, Button, Typography } from "@mui/material";
import shape from "../../themes/shape";
import palette from "../../themes/palette";

export const Container = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  width: "100%",
  margin: "0 auto",
  padding: theme.spacing(10, 8),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(5, 2),
  },
}));

export const HeaderRow = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  gap: theme.spacing(3),
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: theme.spacing(2),
  },
}));

export const TitleAndTimer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  alignItems: "center",
  // flexWrap: "wrap",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
}));

export const TitleTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: theme.palette.text.primary,
  // responsive font sizes
  fontSize: "2rem",
  [theme.breakpoints.down("sm")]: { fontSize: "1.5rem" },
  [theme.breakpoints.up("md")]: { fontSize: "2rem" },
  [theme.breakpoints.up("lg")]: { fontSize: "2.125rem" },
}));

export const TimerBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  alignItems: "center",
}));

export const FilterButtonsRow = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1.5),
  overflowX: "auto",
  whiteSpace: "nowrap",
  maxWidth: "100%",
  // width: "100%",
  paddingBottom: theme.spacing(1),
  cursor: "grab",
  "&:active": { cursor: "grabbing" },
  "&::-webkit-scrollbar": { display: "none" },
  "-ms-overflow-style": "none",
  scrollbarWidth: "none",
  [theme.breakpoints.down("md")]: { width: "100%" },
}));

export const StyledFilterButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active?: boolean }>(({ theme, active }) => ({
  textTransform: "none",
  fontWeight: 600,
  flexShrink: 0,
  minWidth: "auto",
  padding: `${theme.spacing(0.5)} ${theme.spacing(2)}`,
  fontSize: "0.875rem",
  borderRadius: shape.baseBorderRadius,
  backgroundColor: active ? theme.palette.primary.main : theme.palette.common.white,
  border: `1px solid ${active ? theme.palette.primary.main : palette.grey.main}`,
  color: active ? theme.palette.common.white : theme.palette.text.primary,
  "&:hover": {
    backgroundColor: active ? theme.palette.primary.dark : palette.grey[300],
    borderColor: active ? theme.palette.primary.dark : palette.grey.main,
  },
  "& .MuiButton-startIcon": {
    marginRight: theme.spacing(1),
    "& > svg": { fontSize: "1.125rem" },
  },
}));

export const CardWrapper = styled(Box)(({ theme }) => ({
  minWidth: 280,
  flexShrink: 0,
  [theme.breakpoints.up("md")]: {
    minWidth: `calc(25% - ${theme.spacing(2)})`,
  },
}));

export const CardsRow = styled(Box)(({ theme }) => ({
  display: "flex",
  overflowX: "auto",
  gap: theme.spacing(3),
  marginBottom: theme.spacing(3),
  marginTop: theme.spacing(7),
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  cursor: "grab",
  "&:active": { cursor: "grabbing" },
  "&::-webkit-scrollbar": { display: "none" },
  "-ms-overflow-style": "none",
  scrollbarWidth: "none",
  scrollBehavior: "smooth",
}));

export const DotsRow = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(1),
  [theme.breakpoints.down("md")]: { display: "none" },
}));

export const Dot = styled(Box, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active?: boolean }>(({ theme, active }) => ({
  width: active ? 24 : 12,
  height: 12,
  borderRadius: active ? shape.borderRadiuspx : "50%",
  backgroundColor: active ? theme.palette.primary.dark : theme.palette.warning.light,
  cursor: "pointer",
  transition: "background-color 0.2s ease-in-out, width 0.18s ease",
  "&:hover": {
    backgroundColor: active ? theme.palette.primary.dark : theme.palette.warning.light,
  },
}));

export const TimerChip = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.common.white,
  padding: theme.spacing(0.5, 1.25),
  borderRadius: "50%",
  height: 40,
  width: 40,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 700,
  fontSize: "1rem",
}));

export const TimerColon = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.dark,
  fontWeight: 700,
}));
