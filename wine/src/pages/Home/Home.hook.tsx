import { useState } from "react";
import { useLoginMutation } from "../../store/apis/Auth/authenticationApis";

export const useHomeLogic = () => {
  const [agePopupOpen, setAgePopupOpen] = useState(true);
  const [isAgeVerified, setIsAgeVerified] = useState(false);
  const [open, setOpen] = useState(false);

  const [login, { data, error, isLoading }] = useLoginMutation();

  const handleVerifyAge = async () => {
    setAgePopupOpen(false);
    setOpen(true);
    setIsAgeVerified(true);

    // Example call
    try {
      const result = await login({ username: "test", password: "1234" }).unwrap();
      console.log("Login success", result);
    } catch (err) {
      console.error("Login failed", err);
    }
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
    setIsAgeVerified,
    data,
    error,
    isLoading,
  };
};
