import React from "react";
import { ToggleButton } from "@mui/material";
import { IconImage } from "./CustomToggleButton.style";

interface ViewToggleButtonProps {
  value: string;
  selected?: boolean;
  icon: string;
  alt: string;
}

const ViewToggleButton: React.FC<ViewToggleButtonProps> = ({ value, selected, icon, alt }) => {
  return (
    <ToggleButton value={value}>
      <IconImage src={icon} alt={alt} selected={selected} />
    </ToggleButton>
  );
};

export default ViewToggleButton;
