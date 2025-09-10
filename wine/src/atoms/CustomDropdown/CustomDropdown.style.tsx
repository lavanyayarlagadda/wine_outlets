import { Box, FormControl, Typography, styled } from "@mui/material";
import shape from "../../themes/shape";
import palette from "../../themes/palette";

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
    padding: "12px 14px",
    fontSize: "14px",
  },
}));

export const DropdownWrapper = styled(Box)<{ side?: boolean }>(({ theme, side }) => ({
  display: "flex",
  flexDirection: side ? "row" : "column",
  alignItems: side ? "center" : "flex-start",
  gap: theme.spacing(1),
  border: side ? shape.borderSuccess : "none",
  borderRadius: side ? 4 : 0,
  padding: side ? 8 : 0,
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
  fontSize: 14,
  fontWeight: 400,
  marginBottom: side ? 0 : 8,
  whiteSpace: side ? "nowrap" : "normal",
}));
