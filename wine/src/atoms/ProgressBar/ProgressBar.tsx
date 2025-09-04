import { LinearProgress, Box } from "@mui/material";
import React from "react";

interface ProgressBarProps {
  value: number;
  color?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, color = "#000" }) => {
  return (
    <Box sx={{ flexGrow: 1, mx: 2 }}>
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{
          height: 8,
          borderRadius: 5,
          backgroundColor: "#e0e0e0",
          "& .MuiLinearProgress-bar": { backgroundColor: color },
        }}
      />
    </Box>
  );
};

export default ProgressBar;
