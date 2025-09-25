import { Box, Button, Typography, styled } from "@mui/material";
import shape from "../../themes/shape";
import { theme } from "../../themes/theme";
import { useFontSize } from "../../themes/fontSize";
import palette from "../../themes/palette";
import { PickersDay } from "@mui/x-date-pickers";
// Popover container
export const PopoverContent = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
}));

// DatePicker + TimeSlots container
export const PickerContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: 16,
  gap: 32,
  alignItems: "flex-start",

  // Responsive layout
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

// Vertical Divider (hidden on small screens)
export const VerticalDivider = styled(Box)(({ theme }) => ({
  width: 1,
  backgroundColor: palette.grey.main,
  margin: "0 16px",
  alignSelf: "stretch",

  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

// Time slots wrapper
export const TimeSlotsContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: 16,
  alignItems: "center",
}));

// Available Time title
export const TimeSlotsTitle = styled(Typography)(() => ({
  marginTop: "7px",
}));

// Each time slot button
export const TimeSlotButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "selected" && prop !== "disabledSlot",
})<{ selected?: boolean; disabledSlot?: boolean }>(({ selected, disabledSlot, theme }) => ({
  border: selected ? shape.borderRed : shape.borderGrey2px,
  color: selected ? theme.palette.error.dark : "black",
  pointerEvents: disabledSlot ? "none" : "auto",
  opacity: disabledSlot ? 0.5 : 1,
  borderRadius: shape.baseBorderRadius,
  backgroundColor: selected
    ? theme.palette.primary.light
    : disabledSlot
      ? palette.grey.main
      : "transparent",
  "&:hover": {
    border: selected ? shape.borderRed : shape.borderGrey2px,
    color: selected ? theme.palette.error.dark : "black",
    backgroundColor: selected
      ? theme.palette.primary.light
      : disabledSlot
        ? palette.grey.main
        : "transparent ",
  },
}));

export const Footer = styled(Box)(({ theme }) => ({
  padding: "8px 16px",
  borderTop: shape.borderSuccess,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  minWidth: 300,
  [theme.breakpoints.down("sm")]: {
    borderTop: "none",
    flexDirection: "column",
    alignItems: "stretch",
    gap: theme.spacing(1),
  },
}));

export const SelectedSlotsBtn = styled(Button)(() => ({
  width: "100%",
  justifyContent: "center",
  border: shape.borderSuccess,
  color: theme.palette.text.secondary,
  display: "flex",
  borderRadius: shape.baseBorderRadius,
  padding: "8px 16px",
  fontSize: useFontSize(16),
}));

export const Container = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export const FooterButtons = styled(Button)(() => ({
  border: shape.borderSuccess,
  color: theme.palette.text.secondary,
  display: "flex",
  borderRadius: shape.baseBorderRadius,
  padding: "8px 16px",
}));

export const FooterConfirmButtons = styled(Button)(() => ({
  border: shape.borderMain,
  color: theme.palette.secondary.main,
  display: "flex",
  borderRadius: shape.baseBorderRadius,
  padding: "8px 16px",
  backgroundColor: theme.palette.primary.dark,
}));

export const DisabledDay = styled(PickersDay)(() => ({
  backgroundColor: "#f5f5f5",
  color: "#bdbdbd",
  pointerEvents: "none",
}));
