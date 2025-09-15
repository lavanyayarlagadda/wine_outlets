import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AddToCartButton } from "./CustomButton.style";
import { AddToCartLoader } from "../../molecules/ProductListGrid/ProductGridCard.style";

interface AddToCartProps {
  onClick: (id: number) => void;
  label?: string;
  variantType?: "filled" | "outlined";
  id?: number;
  isLoading?: string | null;
}

const AddToCart: React.FC<AddToCartProps> = ({ onClick, label, variantType, isLoading, id }) => {
  return (
    <AddToCartButton
      variant="contained"
      startIcon={
        isLoading != null && id != null && isLoading.toString() === id.toString() ? null : (
          <ShoppingCartIcon />
        )
      }
      disabled={isLoading != null && id != null && isLoading.toString() === id.toString()}
      onClick={() => onClick(Number(id))} // <-- FIXED
      variantType={variantType}
    >
      {isLoading != null && id != null && isLoading.toString() === id.toString() ? (
        <AddToCartLoader />
      ) : (
        label
      )}
    </AddToCartButton>
  );
};

export default AddToCart;
