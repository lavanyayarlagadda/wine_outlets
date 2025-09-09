import React, { useState } from "react";
import { CustomWishlistButton, SmallFavoriteIcon, SmallFavoriteBorderIcon } from "./CustomWishlist.style";

interface CustomWishlistProps {
  defaultSelected?: boolean; // initial state
  onToggle?: (selected: boolean) => void; // callback when toggled
}

const CustomWishlist: React.FC<CustomWishlistProps> = ({ defaultSelected = false, onToggle }) => {
  const [selected, setSelected] = useState(defaultSelected);

  const handleToggle = () => {
    const newValue = !selected;
    setSelected(newValue);
    if (onToggle) onToggle(newValue);
  };

  return (
    <CustomWishlistButton onClick={handleToggle} selected={selected}>
      {selected ? <SmallFavoriteIcon /> : <SmallFavoriteBorderIcon />}
    </CustomWishlistButton>
  );
};

export default CustomWishlist;
