import { Box, Typography } from "@mui/material";
import palette from "../../themes/palette";


const PlusDivider = () => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 50,
      height: 30,
      border: `1px solid ${palette.primary.dark}`,
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
