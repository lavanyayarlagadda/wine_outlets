import type React from "react";
import { Select, MenuItem, Box } from "@mui/material";
import { StyledFormControl, StyledLabel } from "./CustomDropdown.style";
import { ExpandMore } from "@mui/icons-material";

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
    <Box
      display="flex"
      flexDirection={side ? "row" : "column"}
      alignItems={side ? "center" : "flex-start"}
      gap={1} // spacing between label and select
      border={side ? "1px solid #ccc" : "none"} // border if side
      borderRadius={side ? "4px" : "0"} 
      padding={side ? "8px" : "0"}
    >
      <StyledLabel sx={{whiteSpace:'nowrap',marginTop:side?'5px':'0px'}}>{label}</StyledLabel>
      <StyledFormControl fullWidth={fullWidth} variant="outlined">
        <Select
          value={value}
          onChange={(e) => onChange(e.target.value as string)}
          displayEmpty
           IconComponent={ExpandMore} 
         sx={{
    "& .MuiOutlinedInput-notchedOutline": {
      border: side ? "none" : undefined, // remove border if side is true
    },
    "& .MuiSelect-select":{
      padding:side ?"0px":undefined
    }
  }}
          renderValue={(selected) => {
            if (!selected && placeholder) {
              return <span style={{ color: "#999" }}>{placeholder}</span>;
            }
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
    </Box>
  );
};

export default CustomDropdown;
