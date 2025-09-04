import { Button } from "@mui/material";
import React from "react";
import palette from "../../themes/palette";

interface FilterButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ label, isActive, onClick }) => (
  <Button
    variant={isActive ? "contained" : "outlined"}
    size="small"
    sx={{
      color: isActive ? "#fff" : palette.black[800],
      backgroundColor: isActive ? palette.black[800] : "transparent",
      borderColor: palette.black[800],
      minWidth: "90px",
      "&:hover": {
        color: isActive ? "#fff" : palette.black[800],
        backgroundColor: isActive ? palette.black[800] : "transparent",
        borderColor: palette.black[800],
      },
    }}
    onClick={onClick}
  >
    {label}
  </Button>
);

export default FilterButton;
