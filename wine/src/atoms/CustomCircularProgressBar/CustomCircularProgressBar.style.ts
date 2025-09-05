import { styled } from "@mui/material/styles";
import { Box, Typography, CircularProgress } from "@mui/material";
import palette from "../../themes/palette";

// Wrapper for the whole card
export const AverageRatingWrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
}));

// Circular Progress wrapper
export const CircularProgressWrapper = styled(Box)(() => ({
  position: "relative",
  display: "inline-flex",
}));

// Circular Progress itself
export const CircularProgressStyled = styled(CircularProgress)(() => ({
  color: palette.black[800],
}));

// Absolute box to show number in center
export const CircularLabel = styled(Box)(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

// Typography for the rating number
export const RatingNumber = styled(Typography)(() => ({
  fontWeight: "bold",
}));

// Right column wrapper for stars and text
export const RatingInfo = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginLeft: 16,
}));

// Text under stars
export const RatingText = styled(Typography)(() => ({
  marginTop: 8,
  color: palette.text.secondary,
  textAlign: "center",
}));
