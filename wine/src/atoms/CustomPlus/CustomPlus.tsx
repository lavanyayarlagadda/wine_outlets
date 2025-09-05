import { Box, Typography } from "@mui/material";
import palette from "../../themes/palette";
import shape from "../../themes/shape";


const PlusDivider = () => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 50,
      height: 30,
      border: shape.borderRed,
      borderRadius: "30%",
    }}
  >
    <Typography
      sx={{
        fontSize: 20,
        fontWeight: "bold",
        color: palette.primary.dark,
        lineHeight: 1,
      }}
    >
      +
    </Typography>
  </Box>
);

export default PlusDivider;
