import { Button, Box, Typography, styled } from "@mui/material";
import shape from "../../themes/shape";
import { useFontSize } from "../../themes/fontSize";

export const StyledButton = styled(Button)<{ bgColor: string; btnBorderColor: string }>(
  ({ bgColor, btnBorderColor, theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: bgColor,
    color: theme.palette.white.main,
    borderRadius: shape.borderRadius12,
    border: btnBorderColor ? `1px solid ${btnBorderColor}` : "",
    padding: "16px 12px 16px 20px",
    textTransform: "none",
    fontWeight: 600,
    minWidth: "150px",
    "&:hover": {
      backgroundColor: bgColor,
      opacity: 0.9,
    },
    [theme.breakpoints.down("md")]: {
      padding: "10px 14px",
      fontSize: "14px",
      maxWidth: "100%",
    },
    [theme.breakpoints.between("md", "lg")]: {
      padding: "12px 16px",
      fontSize: "14px",
      maxWidth: "250px",
    },
  })
);

export const ButtonText = styled(Typography)(({ theme }) => ({
  fontWeight: "500",
  fontSize: `${theme?.typography?.body2}px !important`,
  [theme.breakpoints.down("md")]: {
    fontSize: "13px",
  },
}));

export const IconWrapper = styled(Box)<{ border: string; color: string; bgcolor: string }>(
  ({ theme, border, color, bgcolor }) => ({
    backgroundColor: bgcolor ? bgcolor : theme.palette.white.main,
    color: color ? color : theme?.palette?.primary.dark, // <-- will apply to the icon
    "& svg": {
      color: color ? color : theme?.palette?.primary.dark, // apply btnColor to icon itself
    },
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "28px",
    height: "28px",
    marginLeft: "8px",
    border: border ? `1px solid ${border}` : "",
  })
);

export const AddToCartButton = styled(Button)(({ theme }) => ({
  fontSize: useFontSize(16),
  backgroundColor: theme.palette.primary.dark, // dark red
  color: theme.palette.white.main,
  fontWeight: 600,
  textTransform: "none",
  borderRadius: shape.borderRadiuspx,
  padding: "10px 16px",
  width: "100%",
  "&:hover": {
    backgroundColor: theme.palette.primary.main, // lighter red on hover
  },
  [theme.breakpoints.down("md")]: {
    padding: "8px 12px",
    // fontSize: "14px",
  },
}));

//wine/src/atoms/CustomButton/CustomButton.style.tsx
