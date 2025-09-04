import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { CustomWishlistButton } from "./CustomWishlist.style";

interface CustomWishlistProps {
  defaultSelected?: boolean;         // initial state
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
    <CustomWishlistButton
      onClick={handleToggle}
      sx={{
        color: selected ? "#AD1113" : "inherit",
        borderColor: selected ? "#AD1113" : "#E0E0E0",
      }}
    >
      {selected ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </CustomWishlistButton>
  );
};

export default CustomWishlist;
