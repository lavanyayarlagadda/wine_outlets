import React, { useEffect } from "react";
import { AgePopup, Newsletter, RecentlyView, StoreLocator } from "../../molecules";
import { useHomeLogic } from "./Home.hook";
import AppLoader from "../../atoms/AppLoader/AppLoader";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import SectionRenderer from "../../organisms/HomePageSections/SectionRenderer";
import { toast } from "react-toastify";

const Home = () => {
  const {
    agePopupOpen,
    isAgeVerified,
    handleVerifyAge,
    setOpen,
    open,
    setIsAgeVerified,
    setSelectedStore,
    selectedStore,
    stores,
    sections,
    isError,
    sectionsLoading,
    error,
    isLoading,
    storesData,
    searchLoading,
    rvData,
    rvLoading,
    rvError,
  } = useHomeLogic();
  const { searchTerm } = useSelector((store: RootState) => store.homeSlice);

  useEffect(() => {
    if (isError) {
      toast.error("Failed to load Store details");
    }
  }, [isError]);
  if (sectionsLoading) return <AppLoader />;
  if (error) return <h5> Something Went wrong...</h5>;

  return (
    <>
      {agePopupOpen && (
        <AgePopup
          open={agePopupOpen}
          onClose={() => window.open("https://www.google.com/", "_blank")}
          onVerify={handleVerifyAge}
        />
      )}

      {isAgeVerified && (
        <StoreLocator
          open={open}
          onClose={() => setOpen(false)}
          selectedStoreId={selectedStore}
          stores={searchTerm !== "" ? storesData : stores}
          onSelect={(id) => {
            setSelectedStore(id);
          }}
          setIsAgeVerified={setIsAgeVerified}
          isLoading={searchTerm ? searchLoading : isLoading}
        />
      )}
      {isAgeVerified && <SectionRenderer sectionsFromApi={sections} />}
      {isAgeVerified && (
        <RecentlyView
          content={rvData?.products ?? []}
          title={rvData?.title}
          isVisible={rvData?.isVisible ?? true}
          cardsPerSlide={4}
        />
      )}
      {isAgeVerified && <Newsletter />}
    </>
  );
};

export default Home;
