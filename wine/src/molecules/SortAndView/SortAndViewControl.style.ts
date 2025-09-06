import { styled } from "@mui/material/styles";
import { Box, FormControl, ToggleButtonGroup } from "@mui/material";
import palette from "../../themes/palette";
import shape from "../../themes/shape";

export const Wrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "12px", // gap={1.5}
  flexWrap: "wrap",
}));

export const StyledFormControl = styled(FormControl)(() => ({
  minWidth: 140,
  paddingRight: "20px",
}));

export const ViewBox = styled(Box)(() => ({
  backgroundColor: palette.grey.light,
  padding: "8px",
  border: shape.borderGreyLight,
  borderRadius: shape.borderRadiuspx,
  display: "flex",
  justifyContent: "center",
}));

export const StyledToggleButtonGroup = styled(ToggleButtonGroup)(() => ({
  border: "none",
  "& .MuiToggleButton-root": {
    border: "none",
    backgroundColor: "transparent",
    "&.Mui-selected": {
      backgroundColor: "transparent",
    },
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));
