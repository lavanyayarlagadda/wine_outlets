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
import { useGetHomeSectionsQuery } from "../../store/apis/Home/HomeAPI";
import AppLoader from "../../atoms/AppLoader/AppLoader";

const Home = () => {
  const { data: sections, error, isLoading } = useGetHomeSectionsQuery();
  const { heroSection } = sections?.sections || {};
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

  if (isLoading) return <AppLoader />;
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
          onSelect={(id) => setSelectedStore(id)}
          setIsAgeVerified={setIsAgeVerified}
        />
      )}
      {/* {isAgeVerified && <HeroBanner setOpen={setOpen} />} */}
      <HeroBanner
        setOpen={setOpen}
        slides={heroSection?.slides}
        isVisible={heroSection?.isVisible}
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
