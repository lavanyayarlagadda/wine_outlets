import type { ReactNode } from "react";
import React from "react";
import { StyledToggleButton, IconWrapper } from "./CustomToggleButton.style";

interface ViewToggleButtonProps {
  value: string;
  selected?: boolean;
  icon: ReactNode;
}

const ViewToggleButton: React.FC<ViewToggleButtonProps> = ({ value, selected, icon }) => {
  return (
    <StyledToggleButton value={value} selected={selected}>
      <IconWrapper selected={selected}>{icon}</IconWrapper>
    </StyledToggleButton>
  );
};

export default ViewToggleButton;
