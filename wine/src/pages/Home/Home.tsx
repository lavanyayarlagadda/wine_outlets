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
// import { HERO_BANNER_SLIDES } from "../../constant/heroBannerSlides";

const Home = () => {
  const { agePopupOpen, isAgeVerified, handleVerifyAge, setOpen, open, setIsAgeVerified } =
    useHomeLogic();
  const [selectedStore, setSelectedStore] = React.useState<number | 0>();

  return (
    <>
      <AgePopup open={agePopupOpen} onClose={() => {}} onVerify={handleVerifyAge} />
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
