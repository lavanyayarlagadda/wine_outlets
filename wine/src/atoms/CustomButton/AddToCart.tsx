import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AddToCartButton } from "./CustomButton.style";

interface AddToCartProps {
  onClick?: () => void;
  label?: string;
  variantType?: "filled" | "outlined";
}

const AddToCart: React.FC<AddToCartProps> = ({ onClick, label, variantType }) => {
  return (
    <AddToCartButton
      variant="contained"
      startIcon={<ShoppingCartIcon />}
      onClick={onClick}
      variantType={variantType}
    >
      {label}
    </AddToCartButton>
  );
};

export default AddToCart;
