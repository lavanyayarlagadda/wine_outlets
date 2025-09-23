import { styled } from "@mui/material/styles";
import { ToggleButton } from "@mui/material";

interface IconWrapperProps {
  selected?: boolean;
}

// Wrapper for the icon inside the toggle button
export const IconWrapper = styled("span")<IconWrapperProps>(({ selected, theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 24, // smaller icon wrapper
  height: 24,
  color: selected ? theme.palette.primary.main : theme.palette.grey[500],
  transition: "color 0.3s, transform 0.2s",
}));

// Styled ToggleButton with less padding
export const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
  // padding: "0px",                // reduce internal padding
  minWidth: "auto", // remove default minWidth
  borderRadius: "4px", // smaller radius
  "&.Mui-selected": {
    backgroundColor: theme.palette.action.selected, // optional selected background
  },
}));
