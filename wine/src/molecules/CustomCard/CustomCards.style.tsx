import { Box, Typography, styled } from "@mui/material";
import { useFontSize } from "../../themes/fontSize";
import palette from "../../themes/palette";

export const CardContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: "12px",
  padding: theme.spacing(3),
  boxShadow: "0px 2px 6px rgba(0,0,0,0.08)",
  margin: "20px",
}));

export const HeaderRow = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  marginBottom: "12px",
}));

export const InfoIconWrapper = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.dark,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const NumberWrapper = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.dark,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight:600,
  fontSize:useFontSize(24)
}));

export const CardHeader = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.dark,
  fontSize: useFontSize(24),
  fontWeight: 600,
}));

export const ContentText = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: theme.palette.text.secondary,
  fontSize: useFontSize(18),
}));
export const InnerCardTitle = styled(Typography)(() => ({
  fonntSize: useFontSize(16),
  fontWeight: 500,
}));

export const InnerCard = styled(Box)(({ theme }) => ({
  backgroundColor: palette.white.light,
  borderRadius: "8px",
  padding: theme.spacing(2),
  border: `1px solid ${theme.palette.grey[300]}`,
}));

export const ListContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  marginTop: "8px",
  gap: "8px",
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
  },
}));

export const ListItem = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "6px",
}));

export const ListText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: useFontSize(16),
}));

// Styling check icon via class
export const CheckIconStyle = styled("div")(({ theme }) => ({
  "& .checkIcon": {
    color: theme.palette.error.main,
    fontSize: "18px",
  },
}));

export const RedCheckIcon = styled("span")(({ theme }) => ({
  color: theme.palette.primary.dark,
  display: "flex",
  alignItems: "center",
}));
