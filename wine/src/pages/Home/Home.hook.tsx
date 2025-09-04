import { useState } from "react";

export const useHomeLogic = () => {
  const [agePopupOpen, setAgePopupOpen] = useState(true);
  const [isAgeVerified, setIsAgeVerified] = useState(false);
        const [open, setOpen] = useState(false);

  const handleVerifyAge = () => {
    setAgePopupOpen(false);
    setOpen(true)
    setIsAgeVerified(true);
  };
  const handleCategoryClick = () => {
    console.log("category clicked");
  };
  const handleBrandClick = () => {
    console.log("view all brand");
  };
  return {
    agePopupOpen,
    isAgeVerified,
    handleVerifyAge,
    handleCategoryClick,
    handleBrandClick,
    setOpen,
    open,
    setIsAgeVerified
  };
};
