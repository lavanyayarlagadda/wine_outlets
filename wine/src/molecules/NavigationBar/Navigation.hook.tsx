import { useEffect, useState } from "react";
import { useGetCartCountQuery } from "../../store/apis/Home/HomeAPI";


type MenuState = {
  [key: string]: boolean;
};

type AnchorState = {
  [key: string]: HTMLElement | null;
};

type Banner = {
  id: number;
  message: string;
  action: { label: string; url: string };
};
  const storedId = localStorage.getItem("selectedStore");

  const cartQueryParams = {
    userId: 1,
    storeId: storedId || undefined,
    userIP: "1",
  };

export const useNavigation = (menuKeys: string[], banners: Banner[], interval = 2000,stores:any) => {
  const { data: cartData, refetch: refetchCartCount } = useGetCartCountQuery(cartQueryParams);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cartCount, setCartCount] = useState<number>(0);

  const [menuOpen, setMenuOpen] = useState<MenuState>(
    menuKeys.reduce((acc, key) => ({ ...acc, [key]: false }), {})
  );
  const [anchorElProfile, setAnchorElProfile] = useState<null | HTMLElement>(null);
  const popup = Boolean(anchorElProfile);
  const [open, setOpen] = useState(false);
  // Auth states
  const [openLogin, setOpenLogin] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const [anchorEl, setAnchorEl] = useState<AnchorState>(
    menuKeys.reduce((acc, key) => ({ ...acc, [key]: null }), {})
  );

  // mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

const [selectedStore, setSelectedStore] = useState<number>(() => {
  if (storedId) return Number(storedId);
  return stores?.length > 0 ? stores[0].id : 0;
});

  const firstStoreName = stores?.length > 0 ? stores[0]?.name : "Select Store";
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, interval);

    return () => clearInterval(timer);
  }, [banners.length, interval]);

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElProfile(event.currentTarget);
  };

  const handleProfileClose = () => {
    setAnchorElProfile(null);
  };

  const handleLoginClose = () => {
    setOpenLogin(false);
    setSignIn(false);
    setIsSubmit(true);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, menu: string) => {
    const target = event.currentTarget; // clone reference immediately
    setAnchorEl((prev) => ({
      ...prev,
      [menu]: target,
    }));
    setMenuOpen((prev) => ({ ...prev, [menu]: true }));
  };

  const handleMenuClose = (key: string) => {
    setAnchorEl((prev) => ({ ...prev, [key]: null }));
    setMenuOpen((prev) => ({ ...prev, [key]: false }));
  };

  const handleMobileMenuToggle = (key: string) => {
    setMenuOpen((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleMobileMenuOpen = () => {
    setMobileMenuOpen(true);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
    const resetMenuState = menuKeys.reduce((acc, key) => ({ ...acc, [key]: false }), {});
    setMenuOpen(resetMenuState);
  };

  useEffect(() => {
    if (!cartData) return;
    const cartResponse = cartData?.cartResponse;
    if (!cartResponse) return;
    const ids = Array.isArray(cartResponse.cartIds) ? cartResponse.cartIds : [];
    try {
      localStorage.setItem("cartIds", JSON.stringify(ids));
      localStorage.setItem("cartCount", String(cartResponse.cartCount ?? ids.length));
    } catch (e) {
      // ignore storage errors
      // console.warn("localStorage error", e);
    }
    setCartCount(Number(cartResponse.cartCount ?? ids.length));
  }, [cartData]);

  return {
    menuOpen,
    anchorEl,
    mobileMenuOpen,
    handleMenuOpen,
    handleMenuClose,
    handleMobileMenuOpen,
    handleMobileMenuClose,
    handleMobileMenuToggle,
    firstStoreName,
    selectedStore,
    setSelectedStore,
    anchorElProfile,
    popup,
    handleProfileClick,
    handleProfileClose,
    setOpenLogin,
    cartCount,
    refetchCartCount,
    // auth
    openLogin,
    signIn,
    setSignIn,
    isSubmit,
    setIsSubmit,
    handleLoginClose,
    setOpen,
    open,
    currentBanner: banners[currentIndex],
  };
};
