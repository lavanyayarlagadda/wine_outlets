import { useEffect, useState, useMemo } from "react";
import { useDispatch } from "react-redux";
import {
  useGetCartCountQuery,
  useGetDeliveryPartnersQuery,
  useGetHeaderBannersQuery,
  useGetMenuItemsQuery,
} from "../../store/apis/Home/HomeAPI";

import { setMenuList } from "../../store/slices/MenuItems/MenuItemsSlice";
// import type { RootState } from "../../store";

type MenuState = {
  [key: string]: boolean;
};

type AnchorState = {
  [key: string]: HTMLElement | null;
};

// type Banner = {
//   id: number;
//   message: string;
//   action: { label: string; url: string };
// };

export const useNavigation = (
  stores: any,
  menuKeys: string[] = [],
  // banners: Banner[] = [],
  interval = 3000
) => {
  const storedIdString = localStorage.getItem("selectedStore");
  const dispatch = useDispatch();
  const { data } = useGetMenuItemsQuery();
  //  const menuItems = useSelector((state: RootState) => state.menu.menuList);
  const {
    data: headerBannerData,
    isLoading: headerBannerLoading,
    isError: headerBannerError,
    refetch: refetchHeaderBanners,
  } = useGetHeaderBannersQuery({ StoreId: Number(storedIdString) });
  const userIdString = localStorage.getItem("userId");
  const userId = userIdString ? Number(userIdString) : undefined;

  const storedId = storedIdString ? Number(storedIdString) : 0;
  const cartQueryParams = {
    userId: userId,
    storeId: storedIdString && Number(storedIdString) > 0 ? storedIdString : undefined,
    userIP: "",
  };

  const { data: cartData, refetch: refetchCartCount } = useGetCartCountQuery(cartQueryParams);
  const { data: deliveryData, isLoading: deliveryLoading } = useGetDeliveryPartnersQuery({
    storeId: storedId > 0 ? storedId.toString() : "1",
  });

  const deliveryPartners = deliveryData?.deliveryPartners ?? [];
  const remoteBanners =
    headerBannerData?.banners && Array.isArray(headerBannerData.banners)
      ? headerBannerData.banners
      : undefined;

  const bannersToUse = useMemo(() => {
    if (remoteBanners && remoteBanners.length > 0) return remoteBanners;
    return [];
  }, [remoteBanners]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cartCount, setCartCount] = useState<number>(0);

  const [menuOpen, setMenuOpen] = useState<MenuState>(
    menuKeys.reduce((acc, key) => ({ ...acc, [key]: false }), {})
  );
  const [anchorElProfile, setAnchorElProfile] = useState<null | HTMLElement>(null);
  const popup = Boolean(anchorElProfile);
  const [open, setOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [signIn, setSignIn] = useState(false);

  const [anchorEl, setAnchorEl] = useState<AnchorState>(
    menuKeys.reduce((acc, key) => ({ ...acc, [key]: null }), {})
  );

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [expandedMenus, setExpandedMenus] = useState<{ [key: string]: boolean }>({});

  const toggleExpand = (menuName: string) => {
    setExpandedMenus((prev) => {
      const newState = { ...prev, [menuName]: !prev[menuName] };

      // If expanding, reset scroll
      if (newState[menuName]) {
        setTimeout(() => {
          const container = document.getElementById(`columns-wrapper-${menuName}`);
          if (container) container.scrollTop = 0;
        }, 0);
      }

      return newState;
    });
  };

  const mockData = [
    "Merlot",
    "Chardonnay",
    "Cabernet Sauvignon",
    "Pinot Noir",
    "Sauvignon Blanc",
    "Syrah",
    "Merlot123",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setQuery(input);

    if (input.length > 0) {
      const filtered = mockData.filter((item) => item.toLowerCase().includes(input.toLowerCase()));
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelectSuggestion = (suggestion: string) => {
    setQuery(suggestion);
    setSuggestions([]);
  };

  const currentBanner = (bannersToUse && bannersToUse[currentIndex]) ?? {
    id: -1,
    message: "",
    action: { label: "", url: "" },
  };

  const firstStoreName = (() => {
    if (!stores || stores.length === 0) return "Select Store";

    if (storedId) {
      const matchedStore = stores?.find((store: any) => store?.id === Number(storedId));
      if (matchedStore) return matchedStore.name;
    }

    return stores[0].name;
  })();

  const selectedStore =
    stores?.some((store: any) => store.id === Number(storedId)) && Number(storedId) > 0
      ? Number(storedId)
      : stores?.[0]?.id || 0;

  useEffect(() => {
    if (!bannersToUse || bannersToUse.length === 0) {
      setCurrentIndex(0);
      return;
    }
    const int = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannersToUse.length);
    }, interval);
    return () => clearInterval(int);
  }, [bannersToUse, interval]);

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

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, menu: string) => {
    const target = event.currentTarget;
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

  useEffect(() => {
    if (data) {
      dispatch(setMenuList(data.menuList));
    }
  }, [data, dispatch]);

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
    anchorElProfile,
    popup,
    handleProfileClick,
    handleProfileClose,
    setOpenLogin,
    cartCount,
    refetchCartCount,
    deliveryPartners,
    deliveryLoading,
    openLogin,
    signIn,
    setSignIn,
    handleLoginClose,
    setOpen,
    open,
    currentBanner,
    headerBannerLoading,
    headerBannerError,
    refetchHeaderBanners,
    handleChange,
    handleSelectSuggestion,
    mockData,
    query,
    setQuery,
    suggestions,
    setSuggestions,
    toggleExpand,
    expandedMenus,
  };
};
