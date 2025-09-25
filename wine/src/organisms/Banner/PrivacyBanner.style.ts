import { Box, styled, Typography } from "@mui/material";
import { useFontSize } from "../../themes/fontSize";
import palette from "../../themes/palette";

export const BannerContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  //   background: "linear-gradient(to right, #c21807, #d97706)",
  background: `linear-gradient(to right, ${theme.palette.primary.main}, ${palette.yellow.default})`,
  color: theme.palette.primary.light,
  textAlign: "center",
  padding: "70px 30px",
}));

export const BannerHeading = styled(Typography)(() => ({
  fontSize: useFontSize(32),
  marginBottom: "10px",
  fontWeight: 600,
}));

export const BannerDiscription = styled(Typography)(() => ({
  maxWidth: "800px",
  margin: "0 auto",
  fontSize: useFontSize(18),
  lineHeight: "1.5",
  fontWeight: 600,
  whiteSpace: "pre-line",
}));
