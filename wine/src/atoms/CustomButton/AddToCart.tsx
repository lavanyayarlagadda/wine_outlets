import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AddToCartButton } from "./CustomButton.style";

interface AddToCartProps {
  onClick?: () => void;
  label?: string;
}

const AddToCart: React.FC<AddToCartProps> = ({ onClick, label }) => {
  return (
    <AddToCartButton variant="contained" startIcon={<ShoppingCartIcon />} onClick={onClick}>
      {label}
    </AddToCartButton>
  );
};

export default AddToCart;
