import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AddToCartButton } from "./CustomButton.style";
import { AddToCartLoader } from "../../molecules/ProductListGrid/ProductGridCard.style";

interface AddToCartProps {
  onClick: (id?: number) => void;
  label?: string;
  variantType?: "filled" | "outlined";
  id?: number;
  isLoading?: string | null;
  disabled?: boolean;
}

const AddToCart: React.FC<AddToCartProps> = ({
  onClick,
  label,
  variantType,
  isLoading,
  id,
  disabled,
}) => {
  // Check loading state
  const isButtonLoading =
    (isLoading != null && id != null && isLoading.toString() === id.toString()) ||
    isLoading === "all";

  return (
    <AddToCartButton
      variant="contained"
      startIcon={!isButtonLoading ? <ShoppingCartIcon /> : null}
      disabled={disabled || isButtonLoading}
      onClick={() => id !== undefined && onClick(id)}
      variantType={variantType}
    >
      {isButtonLoading ? <AddToCartLoader /> : label}
    </AddToCartButton>
  );
};

export default AddToCart;
