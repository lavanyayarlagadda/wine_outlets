import { Box, Button, styled, Typography, type BoxProps } from "@mui/material";
import palette from "../../themes/palette";
import { useFontSize } from "../../themes/fontSize";
import shape from "../../themes/shape";

interface TabsWrapperProps {
  profile?: boolean;
}

export const TabsWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "profile",
})<TabsWrapperProps>(({ profile }) => ({
  display: "flex",
  justifyContent: "center",
  backgroundColor: palette.grey.border,
  borderRadius: shape.borderRadiuspx,
  padding: "4px",
  flexDirection: profile ? "column" : "row",
  width: profile ? "200px" : "100%", // 👈 adjust width as needed
}));

export const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active: boolean; profile?: boolean }>(({ active, profile }) => ({
  textTransform: "none",
  fontWeight: "bold",
  borderRadius: shape.borderRadiuspx,
  minHeight: "36px",
  backgroundColor:
    active && !profile
      ? palette.primary.light
      : active && profile
        ? palette.white.main
        : "transpar",
  color:
    active && !profile
      ? palette.primary.dark
      : active && profile
        ? palette.black[800]
        : palette.grey.greyDark, // fallback for text.secondary
  border: active && profile ? shape.borderGreyline : "transparent",
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
export const TabFields = styled(Box)(() => ({
  paddingTop: 2,
}));

export const HalfField = styled(Box)(() => ({
  flex: 1,
}));

export const SwitchText = styled(Typography)(() => ({
  fontSize: useFontSize(20),
  textAlign: "center",
}));

export const ForgotPasswordBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(2),
  color: palette.primary.dark,
}));
export const SwitchLink = styled(Typography)(() => ({
  color: palette.primary.dark,
  cursor: "pointer",
  fontWeight: 400,
  display: "inline-block",
}));
export const FormWrapper = styled(Box)<BoxProps>(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
}));

export const SubmitButton = styled(Button)(() => ({
  backgroundColor: palette.primary.dark,
  borderRadius: shape.borderRadiuspx,
  padding: "10px 0",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: palette.primary.main,
  },
}));
