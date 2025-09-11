import { useEffect, useState } from "react";
import { stores } from "../../constant/curatedData";

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

export const useNavigation = (menuKeys: string[], banners: Banner[], interval = 2000) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
  const firstStoreName = stores.length > 0 ? stores[0].name : "Select Store";
  const [selectedStore, setSelectedStore] = useState<number>(stores.length > 0 ? stores[0].id : 0);

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
