import React from "react";
import { Tooltip } from "@mui/material";
import { TruncatedTypography } from "./CustomTooltip.style";

interface TruncatedTooltipProps {
  text?: string | null;
  maxLength?: number;
  maxWidth?: number | string;
  variant?: "h6" | "body2" | string;
  sx?: any;
  children?: React.ReactNode;
}

const CustomTooltip: React.FC<TruncatedTooltipProps> = ({
  text,
  children,
  maxLength = 15,
  maxWidth = 200,
  variant = "h6",
  sx = {},
}) => {
  const displayText = children ?? text ?? "";

  const shouldShowTooltip = (typeof displayText === "string" && displayText.length > maxLength);

  const typography = (
  <TruncatedTypography
    variant={variant as any}
    maxwidth={maxWidth}
    shouldShowTooltip={shouldShowTooltip}
    sx={sx}
    title={shouldShowTooltip ? undefined : (typeof displayText === "string" ? displayText : undefined)}
  >
    {displayText}
  </TruncatedTypography>
);

  return shouldShowTooltip ? (
    <Tooltip title={typeof displayText === "string" ? displayText : ""}>
      {typography}
    </Tooltip>
  ) : (
    typography
  );
};

export default CustomTooltip;
