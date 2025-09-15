import React from "react";
import {
  AgePopup,
  HeroBanner,
  TimeOfferCarousel,
  Trending,
  CategorySection,
  DealSection,
  CuratedPicks,
  EverydayCarousel,
  Brand,
  RecentlyView,
  Newsletter,
  StoreLocator,
} from "../../molecules";
import { useHomeLogic } from "./Home.hook";
import AppLoader from "../../atoms/AppLoader/AppLoader";

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
    sectionsLoading,
    error
  } = useHomeLogic();
  const { heroSection } = sections?.sections || {};
  if (sectionsLoading) return <AppLoader />;
  //TODO: replace this with proper error component and retry logic
  if (error) return <h5> Something Went wrong</h5>;

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
  stores={stores}
  onSelect={(id) => {
    setSelectedStore(id);
    localStorage.setItem("selectedStore", id.toString()); // ✅ keep in sync
    setOpen(false); // ✅ close popup here also (safe redundancy)
  }}
  setIsAgeVerified={setIsAgeVerified}
/>

      )}
      {/* {isAgeVerified && <HeroBanner setOpen={setOpen} />} */}
      <HeroBanner
        setOpen={setOpen}
        slides={heroSection?.slides}
        isVisible={heroSection?.isVisible?? false}
      />
      {isAgeVerified && <TimeOfferCarousel />}
      {isAgeVerified && <Trending />}
      {isAgeVerified && <CuratedPicks />}
      {isAgeVerified && <EverydayCarousel />}
      {isAgeVerified && <CategorySection />}
      {isAgeVerified && <DealSection />}
      {isAgeVerified && <Brand />}
      {isAgeVerified && <RecentlyView />}
      {isAgeVerified && <Newsletter />}
    </>
  );
};

export default Home;
