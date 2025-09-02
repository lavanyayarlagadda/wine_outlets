import { Box, Slider, TextField, Typography } from "@mui/material";
import palette from "../../themes/palette";

interface RangeProps {
  value: number[];
  min: number;
  max: number;
  onChange: (value: number[]) => void;
}

interface SingleProps {
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
}

type Props = (RangeProps | SingleProps) & { single?: boolean };

const CustomRangeSlider: React.FC<Props> = ({ value, min, max, onChange, single }) => (
  <Box>
    {single ? (
<Box display="flex" alignItems="center" gap={2} width="100%">
<Slider
  value={value as number}
  min={min}
  max={max}
  onChange={(_, val) => (onChange as (value: number) => void)(val as number)}
  sx={{
    width: 200,
    "& .MuiSlider-rail": {
      color: "#ccc",
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
  }}
/>
</Box>


    ) : (
      <>
        <Slider
          value={value as number[]}
          min={min}
          max={max}
          onChange={(_, val) => (onChange as (value: number[]) => void)(val as number[])}
          sx={{
            color: palette.primary.dark,
            "& .MuiSlider-thumb": { border: "2px solid white" },
          }}
        />
       <Box display="flex" gap={1} alignItems="center">
  <TextField size="small" value={`$${(value as number[])[0]}`} fullWidth />
  <Typography>-</Typography>
  <TextField size="small" value={`$${(value as number[])[1]}`} fullWidth />
</Box>

      </>
    )}
  </Box>
);

export default CustomRangeSlider;
