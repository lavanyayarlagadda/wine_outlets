import { Box, Divider, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import shape from "../../themes/shape";
import { PasswordFields as OriginalPasswordFields } from "../../organisms/Authentication/AuthDialog.style";

export const Container = styled(Box)(() => ({
  paddingLeft: "48px",
  paddingRight: "48px",
}));

export const HeaderBox = styled(Box)(() => ({
  marginBottom: "4px",
}));

export const DividerLine = styled(Divider)(() => ({
  marginTop: shape.borderRadiuspx,
  marginBottom: "4px",
}));

export const ButtonWrapper = styled(Box)(() => ({
  width: "200px",
  marginTop: shape.borderRadiuspx,
}));

export const PasswordFieldsResponsive = styled(OriginalPasswordFields)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start", // align top for vertical layout on mobile
  gap: "16px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column", // stack vertically on tablet/mobile
    gap: "8px",
  },
}));

export const InfoText = styled(Typography)(({ theme }) => ({
  fontSize: "0.875rem",
  color: "#757575",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    marginTop: 0,
  },
  [theme.breakpoints.up("md")]: {
    marginTop: "35px",
  },
}));
