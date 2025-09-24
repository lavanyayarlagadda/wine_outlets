import { Box, FormControl, Paper, Typography, styled } from "@mui/material";
import shape from "../../themes/shape";
import palette from "../../themes/palette";
import { useFontSize } from "../../themes/fontSize";

export const StyledFormDropdown = styled(FormControl)(() => ({
  display: "flex",
  flexDirection: "row",
}));
export const StyledFormControl = styled(FormControl)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: theme.palette.white.main,
    borderRadius: shape.borderRadiuspx,
    "& fieldset": {
      borderColor: theme.palette.success.main,
    },
    "&:hover fieldset": {
      borderColor: palette.grey.main,
    },
    "&.Mui-focused fieldset": {
      borderColor: palette.blue.default,
    },
  },
  "& .MuiSelect-select": {
    padding: "6px 14px",
    fontSize: "14px",
  },
}));
interface SelectedSpanProps {
  hasValue?: boolean;
  side?: boolean;
}

export const SelectedSpan = styled("span")<SelectedSpanProps>(({ hasValue, side }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  cursor: "pointer",
  padding: "8px 12px",
  minWidth: "100%",
  backgroundColor: palette.white.main, // theme background
  borderRadius: shape.borderRadiuspx, // theme border radius
  border: side ? "none" : `1px solid ${palette.success.main}`, // theme border color
  color: hasValue ? palette.text.primary : palette.grey.main,
}));
interface DropdownMenuProps {
  anchorWidth: number;
  side?: boolean;
}

export const DropdownMenu = styled(Paper)<DropdownMenuProps>(({ anchorWidth, side }) => ({
  position: "absolute",
  zIndex: 10,
  marginTop: side ? 260 : 100, // same logic as before
  minWidth: anchorWidth,
  maxHeight: 200,
  overflowY: "auto",
}));
export const DropdownWrapper = styled(Box)<{ side?: boolean }>(({ theme, side }) => ({
  display: "flex",
  flexDirection: side ? "row" : "column",
  alignItems: side ? "center" : "flex-start",
  gap: theme.spacing(1),
  border: side ? shape.borderSuccess : "none",
  borderRadius: side ? 4 : 0,
  padding: side ? 6 : 0,
  "& .MuiOutlinedInput-notchedOutline": {
    border: side ? "none" : undefined, // remove border if side is true
  },
  "& .MuiSelect-select": {
    padding: side ? "0px" : undefined,
  },
}));

export const StyledLabel = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "side", // prevent side from being passed to DOM
})<{ side?: boolean }>(({ side }) => ({
  color: palette.grey.main,
  fontSize: useFontSize(14),
  fontWeight: 400,
  marginBottom: side ? 0 : 8,
  whiteSpace: side ? "nowrap" : "normal",
}));
