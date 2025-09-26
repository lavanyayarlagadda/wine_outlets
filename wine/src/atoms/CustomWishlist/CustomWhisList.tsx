import React, { useState } from "react";
import {
  CustomWishlistButton,
  SmallFavoriteIcon,
  SmallFavoriteBorderIcon,
} from "./CustomWishlist.style";
import { AddToCartLoader } from "../../molecules/ProductListGrid/ProductGridCard.style";

interface CustomWishlistProps {
  id?: string | number;
  defaultSelected?: boolean; // initial state
  onToggle?: (selected: boolean) => void; // callback when toggled
  isLoading?: string | null;
  isLoadingCart?: boolean;
}

const CustomWishlist: React.FC<CustomWishlistProps> = ({
  defaultSelected = false,
  onToggle,
  isLoading,
  id,
}) => {
  const [selected, setSelected] = useState(defaultSelected);
  const handleToggle = () => {
    const newValue = defaultSelected ? true : !selected;
    setSelected(newValue);
    if (onToggle) onToggle(newValue);
  };

  return (
    <CustomWishlistButton onClick={handleToggle} selected={selected}>
      {isLoading != null && id != null && isLoading.toString() === id.toString() ? (
        <AddToCartLoader />
      ) : selected ? (
        <SmallFavoriteIcon />
      ) : (
        <SmallFavoriteBorderIcon />
      )}
    </CustomWishlistButton>
  );
};

export default CustomWishlist;
