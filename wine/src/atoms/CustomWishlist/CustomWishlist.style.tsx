// import { styled } from "@mui/material/styles";
// import { IconButton } from "@mui/material";
// import shape from "../../themes/shape";

// // Styled IconButton
// export const CustomWishlistButton = styled(IconButton)(({ theme }) => ({
//   border: `1px solid ${theme.palette.success.main}`,
//   borderRadius: shape.borderRadius,
//   marginLeft: "8px",
//   transition: "all 0.2s ease-in-out",
//   "&:hover": {
//     backgroundColor: theme.palette.white[400],
//     // borderColor: theme.palette.grey[400],
//   },
// }));

import { styled } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import shape from "../../themes/shape";
import palette from "../../themes/palette";

// extend props to include "selected"
export const CustomWishlistButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "selected", // prevent passing to DOM
})<{ selected?: boolean }>(({ theme, selected }) => ({
  border:  selected ? shape.borderRed:shape.borderSecondary,
  borderRadius: shape.borderRadius,
  marginLeft: "8px",
  transition: "all 0.2s ease-in-out",
  color: selected ? theme.palette.primary.dark : theme.palette.text.primary,
  "&:hover": {
    backgroundColor: theme.palette.white[400],
  },
}));
