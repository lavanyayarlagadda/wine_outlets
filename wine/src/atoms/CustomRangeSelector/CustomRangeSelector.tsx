import { TextField, Typography } from "@mui/material";
import { SliderWrapper, RangeInputsWrapper, StyledSlider } from "./CustomRangeSelector.style";

interface RangeProps {
  value: number[];
  min: number;
  max: number;
  onChange: (value: number[]) => void;
  symbol: string;
}

interface SingleProps {
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
  symbol: string;
}

type Props = (RangeProps | SingleProps) & { single?: boolean };

const CustomRangeSlider: React.FC<Props> = ({ value, min, max, onChange, symbol, single }) => (
  <>
    {single ? (
      <SliderWrapper>
        <StyledSlider
          value={value as number}
          min={min}
          max={max}
          onChange={(_, val) => {
            if (typeof val === "number") {
              (onChange as (value: number) => void)(val);
            }
          }}
        />
      </SliderWrapper>
    ) : (
      <>
        <StyledSlider
          value={value as number[]}
          min={min}
          max={max}
          onChange={(_, val) => {
            if (Array.isArray(val)) {
              (onChange as (value: number[]) => void)(val);
            }
          }}
        />

        <RangeInputsWrapper>
          <TextField size="small" value={`${symbol}${(value as number[])[0]}`} fullWidth />
          <Typography>-</Typography>
          <TextField size="small" value={`${symbol}${(value as number[])[1]}`} fullWidth />
        </RangeInputsWrapper>
      </>
    )}
  </>
);

export default CustomRangeSlider;
