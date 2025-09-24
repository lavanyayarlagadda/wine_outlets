import React, { useState, useRef } from "react";
import { MenuItem, ClickAwayListener } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import {
  DropdownMenu,
  DropdownWrapper,
  SelectedSpan,
  StyledFormDropdown,
  StyledLabel,
} from "./CustomDropdown.style";
import palette from "../../themes/palette";

interface DropdownOption {
  value: string;
  label: string;
}

interface CustomDropdownProps {
  required?: boolean;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: DropdownOption[];
  placeholder?: string;
  fullWidth?: boolean;
  side?: boolean; // if true, label + dropdown side by side
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  label,
  value,
  onChange,
  options,
  placeholder,
  fullWidth = true,
  side = false,
  required = false,
}) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement | null>(null);

  const selectedLabel = options?.find((option) => option.value === value)?.label;

  return (
    <DropdownWrapper side={side}>
      <StyledLabel side={side}>
        {label} {required && <span style={{ color: palette.primary.dark }}>*</span>}
      </StyledLabel>
      <StyledFormDropdown
        fullWidth={fullWidth && !side}
        variant="outlined"
        ref={anchorRef}
        onClick={() => setOpen((prev) => !prev)}
        style={{ display: "inline-flex", flex: 1 }}
      >
        <SelectedSpan hasValue={!!value} side={side}>
          {selectedLabel || placeholder || "Select"}
          <ExpandMore />
        </SelectedSpan>
      </StyledFormDropdown>

      {open && anchorRef.current && (
        <ClickAwayListener onClickAway={() => setOpen(false)}>
          <DropdownMenu anchorWidth={anchorRef.current.offsetWidth} side={side}>
            {options?.map((option) => (
              <MenuItem
                key={option.value}
                selected={option.value === value}
                onClick={() => {
                  onChange(option.value);
                  setOpen(false);
                }}
              >
                {option.label}
              </MenuItem>
            ))}
          </DropdownMenu>
        </ClickAwayListener>
      )}
    </DropdownWrapper>
  );
};

export default CustomDropdown;
