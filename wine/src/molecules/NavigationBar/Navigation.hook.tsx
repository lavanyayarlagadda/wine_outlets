import { useState } from "react";
import { storesData } from "../../constant/storesData";

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

  const [anchorEl, setAnchorEl] = useState<AnchorState>(
    menuKeys.reduce((acc, key) => ({ ...acc, [key]: null }), {})
  );

  // mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [storeData] = useState(storesData); // ✅ constant store data
  const [selectedStore, setSelectedStore] = useState<number | null>(null);

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
    storeData,
    selectedStore,
    setSelectedStore,
  };
};
