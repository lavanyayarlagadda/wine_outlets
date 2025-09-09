import { Box, Button, Typography, styled } from "@mui/material";
import shape from "../../themes/shape";
import { theme } from "../../themes/theme";


// Popover container
export const PopoverContent = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
}));

// DatePicker + TimeSlots container
export const PickerContainer = styled(Box)(() => ({
  display: "flex",
  padding: 16,
  gap: 32,
  alignItems: "flex-start",
}));

// Vertical line between Calendar and TimeSlots

export const VerticalDivider = styled(Box)(() => ({
  width: 1,
  backgroundColor: "#ddd",
  margin: "0 16px",
  alignSelf: "stretch", 
}));

// Time slots wrapper
export const TimeSlotsContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: 16,
 alignItems:'center'
}));

// Available Time title
export const TimeSlotsTitle = styled(Typography)(() => ({
  marginTop:"7px"
}));

// Each time slot button
export const TimeSlotButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "selected" && prop !== "disabledSlot",
})<{ selected?: boolean; disabledSlot?: boolean }>(({ selected, disabledSlot }) => ({
  border: selected ? shape.borderRed : shape.borderGrey2px,
  color: selected ? theme.palette.error.dark : "black",
  pointerEvents: disabledSlot ? "none" : "auto",
  opacity: disabledSlot ? 0.5 : 1,
  backgroundColor:selected? theme.palette.primary.light : disabledSlot ? theme.palette.grey[300] : 'transparent',
   "&:hover": {
    border: selected ? shape.borderRed : shape.borderGrey2px,
    color: selected ? theme.palette.error.dark : "black",
    backgroundColor: selected
      ? theme.palette.primary.light
      : disabledSlot
      ? theme.palette.grey[300]
      : "transparent",
  },
}));

// Footer at the bottom of popover
export const Footer = styled(Box)(() => ({
  padding: "8px 16px",
  borderTop: "1px solid #ddd",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  minWidth: 400,
}));

export const SelectedSlotsBtn = styled(
  Button,
  {}
)<{ selected?: boolean; disabledSlot?: boolean }>(() => ({
   width: "100%",              
    justifyContent: "center",   
    border: shape.borderDivider,
    color: theme.palette.text.primary,
    display: "flex",
    borderRadius: shape.baseBorderRadius,
    padding: "8px 16px",
}));

export const Container = styled(Box) (({theme}) => ({
    padding:theme.spacing(2)
}))
