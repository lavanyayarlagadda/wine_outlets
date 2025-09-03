import React from "react";
import { ToggleButton } from "@mui/material";

interface ViewToggleButtonProps {
  value: string;
  selected: boolean;
  icon: string;
  alt: string;
}

const ViewToggleButton: React.FC<ViewToggleButtonProps> = ({
  value,
  selected,
  icon,
  alt,
}) => {
  return (
    <ToggleButton value={value} sx={{ p: 0 }}>
      <img
        src={icon}
        alt={alt}
        style={{ width: 40, height: 40, opacity: selected ? 1 : 0.6 }}
      />
    </ToggleButton>
  );
};

export default ViewToggleButton;
