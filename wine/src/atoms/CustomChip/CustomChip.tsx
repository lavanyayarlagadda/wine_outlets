import React from "react";
import { StyledChip } from "./CustomChip.style";

interface CustomChipProps {
  label: string;
  onDelete?: () => void;
}

const CustomChip: React.FC<CustomChipProps> = ({ label, onDelete }) => {
  return <StyledChip label={label} onDelete={onDelete} size="medium" variant="outlined" />;
};

export default CustomChip;
