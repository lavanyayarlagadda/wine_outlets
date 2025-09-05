import { styled, Button } from "@mui/material";
import palette from "../../themes/palette";

interface StyledButtonProps {
  isActive: boolean;
}

export const StyledFilterButton = styled(Button)<StyledButtonProps>(({ isActive }) => ({
  minWidth: 90,
  color: isActive ? "#fff" : palette.black[800],
  backgroundColor: isActive ? palette.black[800] : "transparent",
  borderColor: palette.black[800],
  "&:hover": {
    color: isActive ? "#fff" : palette.black[800],
    backgroundColor: isActive ? palette.black[800] : "transparent",
    borderColor: palette.black[800],
  },
}));
