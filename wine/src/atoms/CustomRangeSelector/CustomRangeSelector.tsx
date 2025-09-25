import React, { useState, useEffect } from "react";
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

const CustomRangeSlider: React.FC<Props> = ({ value, min, max, onChange, symbol, single }) => {
  const [inputValue, setInputValue] = useState<number[]>(value as number[]);

  // Sync local state with parent value when it changes externally
  useEffect(() => {
    if (!single) setInputValue(value as number[]);
  }, [value, single]);

  if (single) {
    return (
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
    );
  }

  return (
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
        <TextField
          size="small"
          value={`${symbol}${inputValue[0]}`}
          fullWidth
          onChange={(e) => {
            const newVal = Number(e.target.value.replace(symbol, ""));
            setInputValue([newVal, inputValue[1]]);
          }}
          onBlur={() => {
            const newMin = Math.max(min, Math.min(inputValue[0], inputValue[1]));
            (onChange as (value: number[]) => void)([newMin, inputValue[1]]);
          }}
        />
        <Typography>-</Typography>
        <TextField
          size="small"
          value={`${symbol}${inputValue[1]}`}
          fullWidth
          onChange={(e) => {
            const newVal = Number(e.target.value.replace(symbol, ""));
            setInputValue([inputValue[0], newVal]);
          }}
          onBlur={() => {
            const newMax = Math.min(max, Math.max(inputValue[1], inputValue[0]));
            (onChange as (value: number[]) => void)([inputValue[0], newMax]);
          }}
        />
      </RangeInputsWrapper>
    </>
  );
};

export default CustomRangeSlider;
