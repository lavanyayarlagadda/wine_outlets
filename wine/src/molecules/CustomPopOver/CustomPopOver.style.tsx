import { Box, Button, Popover, styled, Typography } from "@mui/material";
import shape from "../../themes/shape";
import { useFontSize } from "../../themes/fontSize";
import palette from "../../themes/palette";

interface PopOverHeadingProps {
  title?: string;
}

export const CustomDeliveryButton = styled(Button)(({ theme }) => ({
  fontWeight: "600",
  fontSize: useFontSize(14),
  color: theme.palette.black[800],
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px 25px",
  textTransform: "none",
  border: shape.borderSuccess,
  borderRadius: "0px",
  transition: "all 0.3s ease",
  img: {
    width: 56,
    height: 56,
    marginBottom: 8,
    objectFit: "contain",
  },
}));

export const PopoverContainer = styled(Popover)(({ theme }) => ({
  borderRadius: shape.baseBorderRadius,
  minWidth: 220,
  // marginTop: theme.spacing(1),
  "& .MuiPaper-root": {
    borderRadius: "8px",
    minWidth: 220,
    marginTop: theme.spacing(2),
  },
}));

export const PopOverWrapper = styled(Box)(() => ({
  borderRadius: shape.baseBorderRadius,
  minWidth: 240,
  border: shape.borderSuccess,
  textAlign: "center",
}));

export const PopOverHeading = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "title",
})<PopOverHeadingProps>(({ theme, title }) => ({
  fontWeight: "500",
  color: title?.toLowerCase().includes("order") ? palette.grey.main : theme.palette.text.primary,
  padding: shape.baseBorderRadius,
  fontSize: useFontSize(14),
}));

export const PopoverContent = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
}));

export const PopOverHeader = styled(Box)<{ titleAlign: "center" | "left" }>(({ titleAlign }) => ({
  display: "flex",
  justifyContent: titleAlign === "center" ? "center" : "space-between",
  alignItems: "center",
  padding: "12px 16px",
}));
export const HeaderIconWrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
}));

export const CartText = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  color: theme.palette.error.contrastText,
  fontSize: useFontSize(14),
}));

export const CartIconImage = styled("img")(({ theme }) => ({
  width: "24px",
  height: "24px",
  objectFit: "contain",
  filter:
    "invert(15%) sepia(98%) saturate(3134%) hue-rotate(354deg) brightness(85%) contrast(110%)",
  color: theme.palette.error.contrastText,
}));
