import { styled } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import shape from "../../themes/shape";

// Styled IconButton
export const CustomWishlistButton = styled(IconButton)(({ theme }) => ({
  border: "1px solid #E0E0E0",
  borderRadius: shape.borderRadius,
  marginLeft: "8px",
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    backgroundColor: "#f5f5f5",
    borderColor: "#bdbdbd",
  },
}));
