import { styled, Box, Typography, TextField, Rating } from "@mui/material";
import shape from "../../themes/shape";
import palette from "../../themes/palette";

export const FormWrapper = styled(Box)(({ theme }) => ({
  border: shape.borderSuccess,
  borderRadius: 16, // 2*8px
  padding: theme.spacing(2, 3),
  width: "100%",
  backgroundColor: palette.white.main,
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(3),
  },
}));

export const HeaderText = styled(Typography)({
  fontWeight: 700,
  marginBottom: 16,
});

export const CommentField = styled(TextField)({
  marginBottom: 16,
});

export const RatingBox = styled(Box)<{ isSm: boolean }>(({ isSm }) => ({
  display: "flex",
  flexDirection: isSm ? "column" : "row",
  alignItems: isSm ? "flex-start" : "center",
  justifyContent: "space-between",
  gap: 16,
}));

export const ButtonHintWrapper = styled(Box)<{ isSm: boolean }>(({ isSm }) => ({
  display: "flex",
  alignItems: "center",
  gap: 16,
  width: isSm ? "100%" : "auto",
}));

export const MobileHint = styled(Typography)({
  color: palette.grey.main, // text.secondary
  textAlign: "center",
  marginTop: 8,
});

export const StyledRating = styled(Rating)({
  color: palette.yellow.default,
});
