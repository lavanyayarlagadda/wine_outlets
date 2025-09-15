import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useGetHomeSectionsQuery, useStoreLocatorQuery } from "../../store/apis/Home/HomeAPI";


export const useHomeLogic = () => {
  const [agePopupOpen, setAgePopupOpen] = useState(true);
  const [isAgeVerified, setIsAgeVerified] = useState(false);
  const [open, setOpen] = useState(false);
const [selectedStore, setSelectedStore] = useState<number>(() => {
  const stored = localStorage.getItem("selectedStore");
  return stored ? Number(stored) : 0; 
});
useEffect(() => {
  localStorage.setItem("selectedStore", selectedStore.toString());
}, [selectedStore]);


  const {data,isLoading,isError}= useStoreLocatorQuery();
    const { data: sections, error, isLoading:sectionsLoading } = useGetHomeSectionsQuery();
  const stores = data?.stores
  console.log(stores,"STORESDATA")

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
      // const result = await login({ username: "test", password: "1234" }).unwrap();
      // console.log("Login success", result);
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
stores,
     isLoading,
    selectedStore,
    setSelectedStore,
    sections,
    error,
    sectionsLoading
  };
};
