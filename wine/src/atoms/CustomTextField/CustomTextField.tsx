import React from "react";
import { InputAdornment, MenuItem, Box } from "@mui/material";
import { StyledTextField, CountrySelect, StyledLabel, ErrorText } from "./CustomTextField.style";
import palette from "../../themes/palette";

interface DropdownOption {
  value: string;
  label: string;
}

interface CustomTextFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  fullWidth?: boolean;
  isPhoneInput?: boolean;
  countryValue?: string;
  onCountryChange?: (value: string) => void;
  countryOptions?: DropdownOption[];
  error?: string;
  required?: boolean;
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  startIcon,
  endIcon,
  fullWidth = true,
  isPhoneInput = false,
  countryValue = "US",
  onCountryChange,
  countryOptions = [],
  error,
  required = false,
}) => {
  const countryDropdown =
    isPhoneInput && countryOptions.length > 0 ? (
      <InputAdornment position="start">
        <CountrySelect
          value={countryValue}
          onChange={(e) => onCountryChange?.(e.target.value as string)}
          variant="standard"
          disableUnderline
        >
          {countryOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </CountrySelect>
      </InputAdornment>
    ) : startIcon ? (
      <InputAdornment position="start">{startIcon}</InputAdornment>
    ) : undefined;

  return (
    <Box>
      <StyledLabel>
        {label} {required && <span style={{ color: palette.primary.dark }}>*</span>}
      </StyledLabel>
      <StyledTextField
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        type={type}
        fullWidth={fullWidth}
        variant="outlined"
        error={!!error}
        InputProps={{
          startAdornment: countryDropdown,
          endAdornment: endIcon ? (
            <InputAdornment position="end">{endIcon}</InputAdornment>
          ) : undefined,
        }}
      />

      {error && <ErrorText variant="caption">{error}</ErrorText>}
    </Box>
  );
};

export default CustomTextField;
