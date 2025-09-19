import React, { useEffect } from "react";
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
// import AppLoader from "../../atoms/AppLoader/AppLoader";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import type { HeroBannerSection } from "../../constant/LandingPageData";
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
    // sectionsLoading,
    // error,
    isLoading,
    storesData,
    searchLoading,
  } = useHomeLogic();
  // const { heroSection } = sections?.sections || {};
  const heroSection: HeroBannerSection = sections;
  const { searchTerm } = useSelector((store: RootState) => store.homeSlice);
  // if (sectionsLoading) return <AppLoader />;
  // if (error) return <h5> Something Went wrong</h5>;

  useEffect(() => {
    if (isError) {
      toast.error("Failed to load Store details");
    }
  }, [isError]);

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
          stores={searchTerm ? storesData : stores}
          onSelect={(id) => {
            setSelectedStore(id);
          }}
          setIsAgeVerified={setIsAgeVerified}
          isLoading={searchTerm ? searchLoading : isLoading}
        />
      )}
      {/* {isAgeVerified && <HeroBanner setOpen={setOpen} />} */}
      <HeroBanner
        setOpen={setOpen}
        slides={heroSection?.content}
        isVisible={heroSection?.isVisible ?? false}
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
