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
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useFontSize } from "../../themes/fontSize";
// extend props to include "selected"
export const CustomWishlistButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "selected", // prevent passing to DOM
})<{ selected?: boolean }>(({ theme, selected }) => ({
  border: selected ? shape.borderRed : shape.borderSuccess,
  borderRadius: shape.borderRadiuspx,
  marginLeft: "8px",
  transition: "all 0.2s ease-in-out",
  color: selected ? theme.palette.primary.dark : theme.palette.text.primary,
  "&:hover": {
    backgroundColor: theme.palette.white[400],
  },
}));

export const SmallFavoriteIcon = styled(FavoriteIcon)(() => ({
  fontSize: useFontSize(16), // Adjust the size as needed
}));

export const SmallFavoriteBorderIcon = styled(FavoriteBorderIcon)(() => ({
  fontSize: useFontSize(16), // Same size for consistency
}));
