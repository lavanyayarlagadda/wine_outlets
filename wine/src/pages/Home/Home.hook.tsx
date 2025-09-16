import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import {
  useGetHomeSectionsQuery,
  useStoreLocatorQuery,
  useStoreSearchlocatorQuery,
} from "../../store/apis/Home/HomeAPI";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { skipToken } from "@reduxjs/toolkit/query";
import type { RootState } from "../../store";

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
  const { searchTerm } = useSelector((state: RootState) => state.homeSlice);
  const {
    data: searchData,
    isLoading: searchLoading,
    error: searchError,
  } = useStoreSearchlocatorQuery(searchTerm ? { location: searchTerm } : skipToken);
  const stores = data?.stores;
  const storesData = searchData?.stores;

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
    if (searchError) {
      toast.error("Failed to load Stores");
    }
  }, [isError, searchError]);

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
    searchLoading,
    storesData,
  };
};
