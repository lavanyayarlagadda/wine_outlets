import { useState, useEffect } from "react";
import { useLoginMutation } from "../../store/apis/Auth/authenticationApis";
import Cookies from "js-cookie";

export const useHomeLogic = () => {
  const [agePopupOpen, setAgePopupOpen] = useState(true);
  const [isAgeVerified, setIsAgeVerified] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedStore, setSelectedStore] = useState<number | 0>();

  const [login, { data, error, isLoading }] = useLoginMutation();

  // 🔹 Check cookie on mount
  useEffect(() => {
    const verified = Cookies.get("ageVerified");
    if (verified === "true") {
      setIsAgeVerified(true);
      setAgePopupOpen(false);
    }
  }, []);

  const handleVerifyAge = async () => {
    setAgePopupOpen(false);
    setOpen(true);
    setIsAgeVerified(true);

    // ✅ Save cookie for 6 months
    Cookies.set("ageVerified", "true", { expires: 180 });

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
    selectedStore,
    setSelectedStore,
  };
};
