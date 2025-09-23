import React from "react";
import { Select, MenuItem, type SelectChangeEvent } from "@mui/material";
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
  const singleOption = options?.length <= 1;

  return (
    <StyledFormControl fullWidth={fullWidth} variant="outlined" size="small">
      <StyledLabel>{label}</StyledLabel>
      <Select
        value={value}
        onChange={(e: SelectChangeEvent<string>) => onChange(e.target.value)}
        displayEmpty
        IconComponent={singleOption ? () => null : undefined} // hide arrow if single option
        MenuProps={{
          disablePortal: true,
          PaperProps: {
            style: { display: singleOption ? "none" : "block" }, // prevent dropdown menu if single option
          },
        }}
      >
        {placeholder && !value && (
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
