import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TruncatedTypography = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "maxwidth" && prop !== "shouldShowTooltip",
})<{
  maxwidth?: number | string;
  shouldShowTooltip?: boolean;
}>(({ maxwidth, shouldShowTooltip }) => ({
  fontWeight: 600,
  marginBottom: "0.5rem",
  fontSize: "1rem",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: typeof maxwidth === "number" ? `${maxwidth}px` : (maxwidth as string) || "200px",
  cursor: shouldShowTooltip ? "default" : "inherit",
}));
