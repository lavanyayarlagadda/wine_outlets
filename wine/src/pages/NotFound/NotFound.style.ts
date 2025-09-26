// Notfound.style.ts
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export const Container = styled(Box)(({ theme }) => ({
  minHeight: "calc(100vh - 200px)", // adjust if your header height differs
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(4),
  background: theme.palette.background.default,
}));

export const Card = styled(Box)(({ theme }) => ({
  textAlign: "center",
  maxWidth: 920,
  width: "100%",
  padding: theme.spacing(6),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[4],
  background:
    theme.palette.mode === "light"
      ? theme.palette.common.white
      : theme.palette.background.paper,
}));

export const Illustration = styled("div")(({ theme }) => ({
  width: "100%",
  maxWidth: 360,
  margin: "0 auto",
  marginBottom: theme.spacing(3),
  svg: {
    width: "100%",
    height: "auto",
    display: "block",
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(1),
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(3),
}));

export const Actions = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  justifyContent: "center",
  flexWrap: "wrap",
  marginTop: theme.spacing(2),
}));

export const BackButton = styled(Button)(({ theme }) => ({
  minWidth: 140,
}));
