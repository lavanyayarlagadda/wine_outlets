import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useGetHomeSectionsQuery, useStoreLocatorQuery } from "../../store/apis/Home/HomeAPI";
import { toast } from "react-toastify";

export const useHomeLogic = () => {
  const [agePopupOpen, setAgePopupOpen] = useState(true);
  const [isAgeVerified, setIsAgeVerified] = useState(false);
  const [open, setOpen] = useState(false);
  const stored = localStorage.getItem("selectedStore");
  const [selectedStore, setSelectedStore] = useState<number>(() => {
    return stored ? Number(stored) : 0;
  });
  useEffect(() => {
    localStorage.setItem("selectedStore", selectedStore.toString());
  }, [selectedStore]);

  const { data, isLoading, isError } = useStoreLocatorQuery(undefined, {
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  const { data: sections, error, isLoading: sectionsLoading } = useGetHomeSectionsQuery();
  const stores = data?.stores;

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
    Cookies.set("ageVerified", "true", { expires: 180 });
  };

  const handleCategoryClick = () => {
    console.log("category clicked");
  };

  const handleBrandClick = () => {
    console.log("view all brand");
  };

  useEffect(() => {
    if (isError) {
      toast.error("Failed to load Stores");
    }
  }, [isError]);

  return {
    agePopupOpen,
    isAgeVerified,
    handleVerifyAge,
    handleCategoryClick,
    handleBrandClick,
    setOpen,
    open,
    setIsAgeVerified,
    stores,
    isLoading,
    selectedStore,
    setSelectedStore,
    sections,
    error,
    sectionsLoading,
  };
};
