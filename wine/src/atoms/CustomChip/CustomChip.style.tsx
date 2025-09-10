import { Chip, styled } from "@mui/material";
import shape from "../../themes/shape";

export const StyledChip = styled(Chip)(() => ({
  borderRadius: shape.borderRadiuspx,
  border: shape.borderSuccess,
}));
