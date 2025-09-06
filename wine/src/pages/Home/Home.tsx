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
import { HERO_BANNER_SLIDES } from "../../constant/heroBannerSlides";


const Home = () => {
  const {
    agePopupOpen,
    isAgeVerified,
    handleVerifyAge,
    handleCategoryClick,
    handleBrandClick,
    setOpen,
    open,
    setIsAgeVerified,
  } = useHomeLogic();
  const [selectedStore, setSelectedStore] = React.useState<number | 0>();

  const stores = [
    {
      id: 1,
      name: "Manasquan Wine Outlet",
      address: "2439 NJ-34, Manasquan, NJ 08736",
      phone: "123-456-7890",
      hours: "9AM–9PM",
      distance: "0.5 mi",
      mapUrl: "mapUrl",
    },
    {
      id: 2,
      name: "Point Pleasant Wine Outlet",
      address: "526 Arnold Ave, Point Pleasant Beach, NJ 08742",
      phone: "123-456-7891",
      hours: "10AM–8PM",
      distance: "2.1 mi",
      mapUrl: "mapUrl",
    },
  ];

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
      {isAgeVerified && <HeroBanner slides={HERO_BANNER_SLIDES} />}
      {isAgeVerified && <TimeOfferCarousel />}
      {isAgeVerified && <Trending />}
      {isAgeVerified && <CuratedPicks />}
      {isAgeVerified && <EverydayCarousel />}
      {isAgeVerified && <CategorySection handleClick={handleCategoryClick} />}
      {isAgeVerified && <DealSection />}
      {isAgeVerified && <Brand handleBrandClick={handleBrandClick} />}
      {isAgeVerified && <RecentlyView />}
      {isAgeVerified && <Newsletter />}
    </>
  );
};

export default Home;
