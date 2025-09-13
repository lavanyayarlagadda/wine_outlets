import React from "react";
import { Select, MenuItem } from "@mui/material";
import { StyledFormControl, StyledLabel } from "./CustomDropdown.style";

interface DropdownOption {
  value: string;
  label: string;
}

interface SimpleDropdownProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: DropdownOption[];
  placeholder?: string;
  fullWidth?: boolean;
}

const SimpleDropdown: React.FC<SimpleDropdownProps> = ({
  label,
  value,
  onChange,
  options,
  placeholder,
  fullWidth = true,
}) => {
  return (
    <StyledFormControl fullWidth={fullWidth} variant="outlined" size="small">
      <StyledLabel>{label}</StyledLabel>
      <Select value={value} onChange={(e) => onChange(e.target.value as string)} displayEmpty>
        {placeholder && (
          <MenuItem value="">
            <span>{placeholder}</span>
          </MenuItem>
        )}
        {options?.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </StyledFormControl>
  );
};

export default SimpleDropdown;
