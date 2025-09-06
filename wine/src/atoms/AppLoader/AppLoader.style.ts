import { Box, styled } from "@mui/material";

export const LoaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: theme.palette.background.default, // optional
}));

export const LoaderImage = styled("img")(({ theme }) => ({
  width: theme.spacing(19), // ~150px
  height: theme.spacing(19),
  objectFit: "contain",
}));
