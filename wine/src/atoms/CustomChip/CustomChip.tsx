import React from "react";
import { Chip } from "@mui/material";

interface CustomChipProps {
  label: string;
  onDelete?: () => void;
}

const CustomChip: React.FC<CustomChipProps> = ({ label, onDelete }) => {
  return (
    <Chip
      label={label}
      onDelete={onDelete}
      size="medium"
      variant="outlined"
      sx={{ borderRadius: "8px" }}
    />
  );
};

export default CustomChip;
