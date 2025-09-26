import { useEffect, useState, useMemo } from "react";
import { useDispatch } from "react-redux";
import {
  useGetCartCountQuery,
  useGetDeliveryPartnersQuery,
  useGetHeaderBannersQuery,
  useGetMenuItemsQuery,
} from "../../store/apis/Home/HomeAPI";

import { setMenuList } from "../../store/slices/MenuItems/MenuItemsSlice";
import { getClientIdentifierForPayload } from "../../utils/useClientIdentifier";
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

  const storedId = storedIdString ? Number(storedIdString) : 0;
  const cartQueryParams = {
    ...getClientIdentifierForPayload(),
    storeId: storedIdString && Number(storedIdString) > 0 ? storedIdString : undefined,
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
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);

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

  const chunkArray = (arr: any[], size: number) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
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
    selectedMenu,
    setSelectedMenu,
    chunkArray,
  };
};



// {
//   "menuList": [
//     {
//       "id": 1,
//       "groupName": "WINE",
//       "departments": [
//         {
//           "title": "CABERNET AISLE",
//           "subDepartments": [
//             {
//               "id": 1,
//               "name": "DOMESTIC CABERNET"
//             },
//             {
//               "id": 2,
//               "name": "DOMESTIC CABERNET BLENDS"
//             },
//             {
//               "id": 3,
//               "name": "IMPORTED CABERNET"
//             },
//             {
//               "id": 4,
//               "name": "IMPORTED CABERNET BLENDS"
//             }
//           ]
//         },
//         {
//           "title": "CHARDONNAY AISLE",
//           "subDepartments": [
//             {
//               "id": 1,
//               "name": "DOMESTIC CHARDONNAY"
//             },
//             {
//               "id": 2,
//               "name": "IMPORTED CHARDONNAY"
//             }
//           ]
//         },
//         {
//           "title": "FINE WINE COOLER",
//           "subDepartments": [
//             {
//               "id": 1,
//               "name": "ALL FINE WINE COOLER ITEMS"
//             }
//           ]
//         },
//         {
//           "title": "FRENCH",
//           "subDepartments": [
//             {
//               "id": 1,
//               "name": "FRENCH RED"
//             },
//             {
//               "id": 2,
//               "name": "FRENCH WHITE"
//             }
//           ]
//         },
//         {
//           "title": "GWERTS/GRUNER VETLINER",
//           "subDepartments": [
//             {
//               "id": 1,
//               "name": "GEWURTZTRAMINER"
//             },
//             {
//               "id": 2,
//               "name": "GRUNER VETLINER"
//             }
//           ]
//         },
//         {
//           "title": "ITALIAN",
//           "subDepartments": [
//             {
//               "id": 1,
//               "name": "ITALIAN RED"
//             }
//           ]
//         },
//         {
//           "title": "JUG/BOX WINE AISLE",
//           "subDepartments": [
//             {
//               "id": 1,
//               "name": "BOXED WINES"
//             },
//             {
//               "id": 2,
//               "name": "JUG WINES"
//             },
//             {
//               "id": 3,
//               "name": "SANGRIA"
//             }
//           ]
//         },
//         {
//           "title": "KOSHER",
//           "subDepartments": [
//             {
//               "id": 1,
//               "name": "KOSHER"
//             }
//           ]
//         },
//         {
//           "title": "LOCAL NJ/NY WINE",
//           "subDepartments": [
//             {
//               "id": 1,
//               "name": "LOCAL NJ/NY WINE"
//             }
//           ]
//         },
//         {
//           "title": "MAGNUMS",
//           "subDepartments": [
//             {
//               "id": 1,
//               "name": "ALL DOMESTIC MAGNUM WINE"
//             },
//             {
//               "id": 2,
//               "name": "ALL IMPORTED MAGNUM WINE"
//             }
//           ]
//         },
//         {
//           "title": "MALBEC",
//           "subDepartments": [
//             {
//               "id": 1,
//               "name": "ARGENTINIAN"
//             }
//           ]
//         },
//         {
//           "title": "MERLOT",
//           "subDepartments": [
//             {
//               "id": 1,
//               "name": "DOMESTIC MERLOT"
//             },
//             {
//               "id": 2,
//               "name": "IMPORTED MERLOT"
//             }
//           ]
//         },
//         {
//           "title": "ORGANIC WINE",
//           "subDepartments": [
//             {
//               "id": 1,
//               "name": "ORGANIC WINE"
//             }
//           ]
//         },
//         {
//           "title": "OTHER WHITE VARIETAL",
//           "subDepartments": [
//             {
//               "id": 1,
//               "name": "CHENIN BLANC"
//             },
//             {
//               "id": 2,
//               "name": "MOSCATO D'ASTI"
//             },
//             {
//               "id": 3,
//               "name": "OTHER WHITE VARIETALS"
//             },
//             {
//               "id": 4,
//               "name": "VIOGNIER"
//             }
//           ]
//         },
//         {
//           "title": "PINOT GRIGIO/GAVI",
//           "subDepartments": [
//             {
//               "id": 1,
//               "name": "DOMESTIC PINOT GRIGIO"
//             },
//             {
//               "id": 2,
//               "name": "GAVI"
//             },
//             {
//               "id": 3,
//               "name": "IMPORTED PINOT GRIGIO"
//             },
//             {
//               "id": 4,
//               "name": "OTHER WHITE VARIETALS"
//             }
//           ]
//         },
//         {
//           "title": "PINOT NOIR AISLE",
//           "subDepartments": [
//             {
//               "id": 1,
//               "name": "BURGUNDY"
//             },
//             {
//               "id": 2,
//               "name": "DOMESTIC PINOT NOIR"
//             },
//             {
//               "id": 3,
//               "name": "IMPORTED PINOT NOIR"
//             }
//           ]
//         },
//         {
//           "title": "PORT/DESSERT WINE",
//           "subDepartments": [
//             {
//               "id": 1,
//               "name": "DESSERT WINE"
//             },
//             {
//               "id": 2,
//               "name": "PORT"
//             }
//           ]
//         },
//         {
//           "title": "PORT/NY-NJ AISLE",
//           "subDepartments": [
//             {
//               "id": 1,
//               "name": "NY/NJ/KOSHER WINES"
//             },
//             {
//               "id": 2,
//               "name": "PORT/DESSERT/OTHER"
//             }
//           ]
//         },
//         {
//           "title": "PORTUGUESE",
//           "subDepartments": [
//             {
//               "id": 1,
//               "name": "PORTUGUESE RED"
//             },
//             {
//               "id": 2,
//               "name": "PORTUGUESE WHITE"
//             }
//           ]
//         },
//         {
//           "title": "RED BLEND",
//           "subDepartments": [
//             {
//               "id": 1,
//               "name": "DOMESTIC RED BLEND"
//             },
//             {
//               "id": 2,
//               "name": "IMPORTED RED BLEND"
//             }
//           ]
//         },
//         {
//           "title": "RHONE/GRENACH/CARMEN/PET SIRAH",
//           "subDepartments": [
//             {
//               "id": 1,
//               "name": "CARMENERE"
//             },
//             {
//               "id": 2,
//               "name": "GRENACHE"
//             },
//             {
//               "id": 3,
//               "name": "PETIT SIRAH"
//             },
//             {
//               "id": 4,
//               "name": "RHONE"
//             }
//           ]
//         },
//         {
//           "title": "RIESLING",
//           "subDepartments": [
//             {
//               "id": 1,
//               "name": "DOMESTIC RIESLING"
//             },
//             {
//               "id": 2,
//               "name": "IMPORTED RIESLING"
//             }
//           ]
//         },
//         {
//           "title": "ROSE",
//           "subDepartments": [
//             {
//               "id": 1,
//               "name": "STILL ROSE WINE"
//             }
//           ]
//         },
//         {
//           "title": "SAKE/NON-ALCOHOLIC",
//           "subDepartments": [
//             {
//               "id": 1,
//               "name": "NON-ALCOHOLIC WINE"
//             },
//             {
//               "id": 2,
//               "name": "SAKE/MEAD/GLUWEIN"
//             }
//           ]
//         },
//         {
//           "title": "SAUVIGNON BLANC",
//           "subDepartments": [
//             {
//               "id": 1,
//               "name": "DOMESTIC SAUVIGNON BLANC"
//             },
//             {
//               "id": 2,
//               "name": "IMPORTED SAUVIGNON BLANC"
//             }
//           ]
//         },
//         {
//           "title": "SHIRAZ/SYRAH",
//           "subDepartments": [
//             {
//               "id": 1,
//               "name": "SHIRAZ/SHIRAZ BLENDS"
//             }
//           ]
//         },
//         {
//           "title": "SPANISH",
//           "subDepartments": [
//             {
//               "id": 1,
//               "name": "SPANISH REDS"
//             },
//             {
//               "id": 2,
//               "name": "SPANISH WHITE"
//             }
//           ]
//         },
//         {
//           "title": "SPARKLING AISLE",
//           "subDepartments": [
//             {
//               "id": 1,
//               "name": "CHAMPAGNE"
//             },
//             {
//               "id": 2,
//               "name": "OTHER SPARKLING"
//             },
//             {
//               "id": 3,
//               "name": "SMALL BOTTLES/SPLITS ETC."
//             },
//             {
//               "id": 4,
//               "name": "STILL SWEET RED WINE"
//             }
//           ]
//         },
//         {
//           "title": "SPLITS/SMALL BOTTLES",
//           "subDepartments": [
//             {
//               "id": 1,
//               "name": "SPLITS/SMALL BOTTLES"
//             }
//           ]
//         },
//         {
//           "title": "ZINFANDEL",
//           "subDepartments": [
//             {
//               "id": 1,
//               "name": "DOMESTIC ZIN"
//             },
//             {
//               "id": 2,
//               "name": "IMPORTED ZIN"
//             }
//           ]
//         }
//       ]
//     },
//     {
//       "id": 2,
//       "groupName": "LIQUOR",
//       "departments": [
//         {
//           "title": "LIQUOR",
//           "subDepartments": [
//             {
//               "id": 1,
//               "name": "BOURBON"
//             },
//             {
//               "id": 2,
//               "name": "BRANDY"
//             },
//             {
//               "id": 3,
//               "name": "CHECKOUT COUNTER - SMALL SIZES"
//             },
//             {
//               "id": 4,
//               "name": "COGNAC"
//             },
//             {
//               "id": 5,
//               "name": "CORDIALS"
//             },
//             {
//               "id": 6,
//               "name": "GIN"
//             },
//             {
//               "id": 7,
//               "name": "HERBAL LIQUEUR"
//             },
//             {
//               "id": 8,
//               "name": "PREPARED COCKTAILS/RTD"
//             },
//             {
//               "id": 9,
//               "name": "RUM"
//             },
//             {
//               "id": 10,
//               "name": "SCOTCH"
//             },
//             {
//               "id": 11,
//               "name": "SINGLE MALT SCOTCH"
//             },
//             {
//               "id": 12,
//               "name": "TEQUILA"
//             },
//             {
//               "id": 13,
//               "name": "VODKA"
//             },
//             {
//               "id": 14,
//               "name": "WHISKEY"
//             }
//           ]
//         },
//         {
//           "title": "LIQUOR SPECIAL",
//           "subDepartments": []
//         }
//       ]
//     },
//     {
//       "id": 3,
//       "groupName": "BEER",
//       "departments": [
//         {
//           "title": "BEER",
//           "subDepartments": [
//             {
//               "id": 1,
//               "name": "CANNED COCKTAILS"
//             },
//             {
//               "id": 2,
//               "name": "DOMESTIC BEER"
//             },
//             {
//               "id": 3,
//               "name": "HARD CIDER"
//             },
//             {
//               "id": 4,
//               "name": "HARD SELTZER"
//             },
//             {
//               "id": 5,
//               "name": "IMPORTED BEER"
//             },
//             {
//               "id": 6,
//               "name": "KEG/PARTY BALLS"
//             },
//             {
//               "id": 7,
//               "name": "MALTERNATIVES"
//             },
//             {
//               "id": 8,
//               "name": "MICRO/SPECIALTY BEERS"
//             },
//             {
//               "id": 9,
//               "name": "NON-ALCOHOL BEER"
//             },
//             {
//               "id": 10,
//               "name": "SINGLE BOTTLES"
//             }
//           ]
//         },
//         {
//           "title": "BEER SPECIAL",
//           "subDepartments": []
//         }
//       ]
//     },
//     {
//       "id": 8,
//       "groupName": "MISCELLANEOUS",
//       "departments": [
//         {
//           "title": "HEMP",
//           "subDepartments": [
//             {
//               "id": 1,
//               "name": "CBD"
//             },
//             {
//               "id": 2,
//               "name": "THC / DELTA-9"
//             }
//           ]
//         },
//         {
//           "title": "INTERNET",
//           "subDepartments": [
//             {
//               "id": 1,
//               "name": "INTERNET"
//             }
//           ]
//         },
//         {
//           "title": "MIXER AISLE",
//           "subDepartments": [
//             {
//               "id": 1,
//               "name": "ALCOHOLIC MIXERS"
//             },
//             {
//               "id": 2,
//               "name": "NON-ALCOHOLIC MIXERS"
//             }
//           ]
//         },
//         {
//           "title": "NON-ALCOHOLIC",
//           "subDepartments": [
//             {
//               "id": 1,
//               "name": "NON-ALCOHOLIC LIQUOR"
//             },
//             {
//               "id": 2,
//               "name": "NON-ALCOHOLIC WINE"
//             }
//           ]
//         }
//       ]
//     }
//   ]
// }


