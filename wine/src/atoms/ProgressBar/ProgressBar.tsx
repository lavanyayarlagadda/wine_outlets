import React from "react";
import { ProgressWrapper, StyledLinearProgress } from "./ProgressBar.style";

interface ProgressBarProps {
  value: number;
  color?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, color }) => {
  return (
    <ProgressWrapper>
      <StyledLinearProgress variant="determinate" value={value} barcolor={color} />
    </ProgressWrapper>
  );
};

export default ProgressBar;
