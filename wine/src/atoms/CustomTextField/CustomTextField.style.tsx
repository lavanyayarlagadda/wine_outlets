import { TextField, Select, Typography, styled } from "@mui/material";
import shape from "../../themes/shape";
import palette from "../../themes/palette";

export const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: theme.palette.white.main,
    borderRadius: shape.borderRadiuspx,
    "& fieldset": {
      borderColor: shape.borderSuccess,
    },
    "&:hover fieldset": {
      borderColor: palette.grey.main,
    },
    "&.Mui-focused fieldset": {
      borderColor: palette.blue.default,
    },
  },
  "& .MuiInputLabel-root": {
    color: palette.grey.main,
    fontSize: "14px",
  },
  "& .MuiOutlinedInput-input": {
    padding: "12px 14px",
    fontSize: "14px",
  },
}));

export const CountrySelect = styled(Select)(() => ({
  "& .MuiSelect-select": {
    padding: "0 8px",
    fontSize: "14px",
    minWidth: "50px",
    marginRight: "8px",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
}));

export const StyledLabel = styled(Typography)(() => ({
  color: palette.grey.main,
  fontSize: "14px",
  marginBottom: "8px",
  fontWeight: 400,
}));
