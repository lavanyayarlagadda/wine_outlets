import React from "react";
import { StyledFilterButton } from "./FilterButton.style";

interface FilterButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ label, isActive, onClick }) => (
  <StyledFilterButton isActive={isActive} onClick={onClick} size="small" variant={isActive ? "contained" : "outlined"}>
    {label}
  </StyledFilterButton>
);

export default FilterButton;
