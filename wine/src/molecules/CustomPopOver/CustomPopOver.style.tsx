import { Box, Button, Popover, styled, Typography } from "@mui/material";
import shape from "../../themes/shape";
import { useFontSize } from "../../themes/fontSize";

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
  width: 240,
  border: shape.borderSuccess,
  textAlign: "center",
}));

export const PopOverHeading = styled(Typography)(({ theme }) => ({
  fontWeight: "500",
  color: theme.palette.grey[200],
  padding: shape.baseBorderRadius,
  fontSize: useFontSize(16),
}));

export const PopoverContent = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
}));
