import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { CounterBox } from "./CustomCounter.style";

interface CounterProps {
  value: number;
  onChange: (newValue: number) => void;
  min?: number;
  max?: number;
  step?: number;
}

const CustomCounter: React.FC<CounterProps> = ({ value, onChange, min = 0, max = Infinity, step = 1 }) => {
  const handleDecrement = () => {
    if (value > min) {
      onChange(value - step);
    }
  };

  const handleIncrement = () => {
    if (value < max) {
      onChange(value + step);
    }
  };

  return (
    <CounterBox>
      <IconButton size="small" onClick={handleDecrement}>
        <RemoveIcon fontSize="small" />
      </IconButton>
      <Typography mx={1} minWidth={16} textAlign="center">
        {value}
      </Typography>
      <IconButton size="small" onClick={handleIncrement}>
        <AddIcon fontSize="small" />
      </IconButton>
    </CounterBox>
  );
};

export default CustomCounter;
