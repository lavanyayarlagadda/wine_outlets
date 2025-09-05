import React from "react";
import { MenuItem, Select } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { DropdownWrapper, StyledFormControl, StyledLabel } from "./CustomDropdown.style";

interface DropdownOption {
  value: string;
  label: string;
}

interface CustomDropdownProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: DropdownOption[];
  placeholder?: string;
  fullWidth?: boolean;
  side?: boolean; // if true, label + select side by side
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  label,
  value,
  onChange,
  options,
  placeholder,
  fullWidth = true,
  side = false,
}) => {
  return (
    <DropdownWrapper side={side}>
      <StyledLabel side={side}>{label}</StyledLabel>
      <StyledFormControl fullWidth={fullWidth} variant="outlined">
        <Select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          displayEmpty
          IconComponent={ExpandMore}
          renderValue={(selected) => {
            if (!selected && placeholder) return <span style={{ color: "#999" }}>{placeholder}</span>;
            const selectedOption = options.find((option) => option.value === selected);
            return selectedOption ? selectedOption.label : placeholder;
          }}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </StyledFormControl>
    </DropdownWrapper>
  );
};

export default CustomDropdown;
