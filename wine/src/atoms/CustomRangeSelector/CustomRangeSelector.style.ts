import { styled } from "@mui/material/styles";
import { Box, Slider } from "@mui/material";
import palette from "../../themes/palette";

export const SliderWrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "16px", // gap={2}
  width: "100%",
}));

export const RangeInputsWrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "8px", // gap={1}
}));

export const StyledSlider = styled(Slider)(() => ({
  "& .MuiSlider-rail": {
    color: palette.grey.divider,
    opacity: 1,
    height: 4,
  },
  "& .MuiSlider-track": {
    color: palette.primary.dark,
    height: 4,
  },
  "& .MuiSlider-thumb": {
    border: "2px solid white",
  },
}));
