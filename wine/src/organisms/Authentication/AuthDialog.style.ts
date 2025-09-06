import { Box, Button, styled, Typography, type BoxProps } from "@mui/material";
import palette from "../../themes/palette";
import { useFontSize } from "../../themes/fontSize";

export const TabsWrapper = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  backgroundColor: palette.white.main,
  borderRadius: "8px",
  padding: "4px",
}));

export const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active: boolean }>(({ active }) => ({
  textTransform: "none",
  fontWeight: "bold",
  borderRadius: "8px",
  minHeight: "36px",
  backgroundColor: active ? palette.primary.light : "transparent",
  color: active ? palette.primary.dark : palette.grey.greyDark, // fallback for text.secondary
  boxShadow: active ? "0px 2px 4px rgba(0,0,0,0.1)" : "none",
  "&:hover": {
    backgroundColor: active ? palette.primary.light : "transparent",
  },
}));

export const PasswordFields = styled(Box)(() => ({
  display: "flex",
  gap: "16px",
  width: "100%",
}));

export const HalfField = styled(Box)(() => ({
  flex: 1,
}));

export const SwitchText = styled(Typography)(() => ({
  fontSize: useFontSize(24),
  textAlign: "center",
}));

export const SwitchLink = styled(Typography)(() => ({
  color: palette.primary.dark,
  cursor: "pointer",
  fontWeight: "bold",
  display: "inline-block",
}));
export const FormWrapper = styled(Box)<BoxProps>(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
}));

export const SubmitButton = styled(Button)(() => ({
  backgroundColor: palette.primary.dark,
  borderRadius: "8px",
  padding: "10px 0",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: palette.primary.main,
  },
}));
