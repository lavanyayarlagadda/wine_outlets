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
import { stores } from "../../constant/curatedData";

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
  } = useHomeLogic();

  return (
    <>
      <AgePopup
        open={agePopupOpen}
        onClose={() => window.open("https://www.google.com/", "_blank")}
        onVerify={handleVerifyAge}
      />
      {isAgeVerified && (
        <StoreLocator
          open={open}
          onClose={() => setOpen(false)}
          selectedStoreId={selectedStore}
          stores={stores}
          onSelect={(id) => setSelectedStore(id)}
          setIsAgeVerified={setIsAgeVerified}
        />
      )}
      {/* {isAgeVerified && <HeroBanner setOpen={setOpen} />} */}
      <HeroBanner setOpen={setOpen} />
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
