import { useState } from "react";
import { stores } from "../../constant/curatedData";

type MenuState = {
  [key: string]: boolean;
};

type AnchorState = {
  [key: string]: HTMLElement | null;
};

export const useNavigation = (menuKeys: string[]) => {
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

  console.log(signIn, "SIGNIN");

  // mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const firstStoreName = stores.length > 0 ? stores[0].name : "Select Store";
  const [selectedStore, setSelectedStore] = useState<number>(stores.length > 0 ? stores[0].id : 0);

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElProfile(event.currentTarget);
  };

  const handleProfileClose = () => {
    setAnchorElProfile(null);
  };

  const handleLoginClose = () => {
    setOpenLogin(false);
    setSignIn(false);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, key: string) => {
    setAnchorEl((prev) => ({ ...prev, [key]: event.currentTarget }));
    setMenuOpen((prev) => ({ ...prev, [key]: true }));
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
  };
};
