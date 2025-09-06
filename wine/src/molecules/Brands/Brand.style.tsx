import { Box, styled } from "@mui/material";

export const Container = styled(Box)(() => ({
  width: "100%",
  margin: "0 auto",
  padding: "80px 64px",
  cursor: "pointer",
}));

export const ImageWrapper = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "30px",
  marginTop: "40px",
  flexWrap: "wrap",
});
