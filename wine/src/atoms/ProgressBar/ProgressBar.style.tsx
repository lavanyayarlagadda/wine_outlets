import { LinearProgress, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import shape from "../../themes/shape";
import palette from "../../themes/palette";

export const ProgressWrapper = styled(Box)({
  flexGrow: 1,
  marginLeft: 8,
  marginRight: 8,
});

export const StyledLinearProgress = styled(LinearProgress)<{ barcolor?: string }>(({ barcolor }) => ({
  height: 8,
  borderRadius: 5,
  backgroundColor: shape.borderSuccess,
  "& .MuiLinearProgress-bar": {
    backgroundColor: barcolor || palette.black[800],
  },
}));
