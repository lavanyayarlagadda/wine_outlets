import { useState, useRef, useEffect } from "react";
import {
  useFilterQuery,
  useProductListMutation,
  useWishListMutation,
  useBannerQuery,
} from "../../store/apis/ProductList/ProductListAPI";
import { toast } from "react-toastify";
import { useAddtoCartMutation } from "../../store/apis/Home/HomeAPI";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import { setProductsData } from "../../store/slices/ProductList/productListSlice";

export type ViewType = "grid" | "list";

export interface Product {
  id: string;
  name: string;
  year: number;
  region: string;
  size: string;
  rating: number;
  price: number;
  vipPrice?: number;
  salePrice?: number;
  tag?: string;
  isWishlisted?: boolean;
  description?: string;
  media: {
    type: "image" | "video";
    url: string;
  };
}

export interface UseProductListProps {
  productsPerPage?: number;
  productsPerRow?: number;
}

export const useProductList = ({
  productsPerPage = 24,
  productsPerRow = 3,
}: UseProductListProps = {}) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const urlCategory = queryParams.get("category") || "";
  const [sortBy, setSortBy] = useState("relevance");
  const [view, setView] = useState<ViewType>("grid");
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const topRef = useRef<HTMLDivElement | null>(null);

  const { data, isLoading, error } = useFilterQuery();
  const [loadingProduct, setLoadingProduct] = useState<string | null>(null);
  const [wishListLoading, setWishListLoading] = useState<string | null>(null);

  const [addToCart] = useAddtoCartMutation();
  const { data: BannerData, isLoading: BannerLoading, isError } = useBannerQuery();

  const [cartItems, setCartItems] = useState<{ [productId: number]: number }>({});
  const storedId = localStorage.getItem("selectedStore");
  const { productsData, selectedNames } = useSelector((store: RootState) => store.productListSlice);
  const dispatch = useDispatch();
  const [
    productList,
    { data: ProductListData, isLoading: ProductListLoading, error: productListError },
  ] = useProductListMutation();

  const queryString = queryParams.toString();

  useEffect(() => {
    const payloadFromUrl: Record<string, any> = {};

    // Parse query params
    queryParams.forEach((value, key) => {
      const normalizedKey = key.replace(/\s+/g, "").replace(/^[A-Z]/, (c) => c.toLowerCase());
      if (normalizedKey.toLowerCase().includes("range")) {
        const parts = value.split(",");
        const rangeObj: Record<string, number> = {};
        parts.forEach((p) => {
          const [k, v] = p.split(":");
          if (k && v) rangeObj[k.trim()] = Number(v.trim());
        });

        if (normalizedKey.includes("price")) payloadFromUrl["price"] = rangeObj;
        else if (normalizedKey.includes("alcohol")) payloadFromUrl["alcoholContent"] = rangeObj;
        else payloadFromUrl[normalizedKey] = rangeObj;
      } else if (value.includes(",")) {
        payloadFromUrl[normalizedKey] = value.split(",").map((v) => v.trim());
      } else {
        payloadFromUrl[normalizedKey] = value.trim();
      }
    });

    // Clean category
    const cleanedCategory = productsData.category
      ? productsData.category.replace(/\s*\(.*?\)\s*/g, "")
      : "";

    // Construct initial payload
    const payload: any = {
      limit: 24,
      page: currentPage,
      sortBy: sortBy,
      sortOrder: "asc",
      storeId: 6,
      category: cleanedCategory,
      department: Array.isArray(productsData.department)
        ? productsData.department
        : productsData.department
          ? [productsData.department]
          : [],
      subDepartment: Array.isArray(productsData.subDepartment)
        ? productsData.subDepartment
        : productsData.subDepartment
          ? [productsData.subDepartment]
          : [],
      size: productsData.size || [],
      price:
        productsData.price && typeof productsData.price === "object"
          ? productsData.price
          : productsData.price
            ? { min: Number(productsData.price), max: Number(productsData.price) }
            : {},
      occasion: productsData.occasion || [],
      customerRating: productsData.customerRating || [],
      tags: productsData.tags || [],
      origin: productsData.origin || [],
      grapeVariety: productsData.grapeVariety || [],
      brand: productsData.brand || [],
      vintageYear: productsData.vintageYear || [],
      alcoholContent:
        productsData.alcoholContent && typeof productsData.alcoholContent === "object"
          ? productsData.alcoholContent
          : productsData.alcoholContent
            ? { min: Number(productsData.alcoholContent), max: Number(productsData.alcoholContent) }
            : {},
    };

    // Normalize selectedNames
    const mergedSelectedNames: Record<string, string[]> = {};
    Object.keys(selectedNames).forEach((key) => {
      const normalizedKey = key.toLowerCase().replace(/\s+/g, "");
      if (!mergedSelectedNames[normalizedKey]) mergedSelectedNames[normalizedKey] = [];
      mergedSelectedNames[normalizedKey] = Array.from(
        new Set([...mergedSelectedNames[normalizedKey], ...selectedNames[key]])
      );
    });

    const metaKeys = ["limit", "page", "sortBy", "sortOrder", "storeId"];

    Object.keys(payload).forEach((key) => {
      if (metaKeys.includes(key)) return; // skip meta keys
      if (/^\d/.test(key)) {
        delete payload[key];
        return;
      }

      const normalizedKey = key.toLowerCase().replace(/\s+/g, "");
      const selectedVals = mergedSelectedNames[normalizedKey];

      if (!selectedVals || selectedVals.length === 0) {
        // Make all non-special keys arrays of strings
        if (["category", "price", "alcoholContent"].includes(normalizedKey)) return;
        payload[key] = [];
        return;
      }

      if (normalizedKey === "price" || normalizedKey === "alcoholcontent") {
        const valStr = selectedVals[0];
        if (valStr.includes("-")) {
          const [minStr, maxStr] = valStr.split("-");
          payload[key] = { min: Number(minStr), max: Number(maxStr) };
        } else {
          payload[key] = { min: Number(valStr), max: Number(valStr) };
        }
      } else if (normalizedKey === "category") {
        // Keep cleaned category value if no selectedNames exist
        payload[key] =
          selectedVals.length === 1
            ? selectedVals[0].replace(/\s*\(.*?\)\s*/g, "")
            : selectedVals.map((v) => v.replace(/\s*\(.*?\)\s*/g, ""));
      } else {
        // Everything else => array of strings (cleaned)
        payload[key] = selectedVals.map((v) => v);
      }
    });

    // Remove empty or undefined values
    const cleanedPayload = Object.fromEntries(
      Object.entries(payload).filter(([_, value]) => {
        if (value === null || value === undefined) return false;
        if (Array.isArray(value) && value.length === 0) return false;
        if (typeof value === "string" && value === "") return false;
        if (typeof value === "object" && !Array.isArray(value) && Object.keys(value).length === 0)
          return false; // <-- skip empty objects
        return true;
      })
    );

    productList(cleanedPayload);
  }, [queryString, currentPage, productsData, productList, selectedNames, storedId]);

  const [wishList] = useWishListMutation();

  useEffect(() => {
    if (isError) {
      toast.error("Failed to load Banner");
    }
  }, [isError]);
  const currentProducts = ProductListData?.productList?.products ?? [];
  const totalProducts = ProductListData?.productList?.totalProducts;
  const totalPages = Math.ceil((totalProducts || 0) / productsPerPage);
  const userId = localStorage.getItem("userId");
  useEffect(() => {
    setCurrentPage(1);
  }, [urlCategory]);

  useEffect(() => {
    if (error) {
      toast.error("Failed to load filters. Please try again.", {
        toastId: "filter-error",
      });
    }
  }, [error]);
  useEffect(() => {
    if (productListError) {
      toast.error("Failed to load ProductList. Please try again.", {
        toastId: "productlist-error",
      });
    }
  }, [productListError]);

  const handleSortChange = (newSort: string) => {
    setSortBy(newSort);
    dispatch(
      setProductsData({
        ...productsData,
        sortBy: newSort,
      })
    );
  };

  const handleAddToCart = async (productId: any) => {
    try {
      setLoadingProduct(productId);
      const newQuantity = (cartItems[productId] || 0) + 1;
      const payload = [
        {
          productId,
          quantity: newQuantity,
          userId: Number(userId),
        },
      ];

      const response = await addToCart(payload).unwrap();
      setCartItems((prev) => ({
        ...prev,
        [productId]: newQuantity,
      }));
      toast.success(response.cartResponse);
    } catch (err) {
      toast.error("Failed to add to cart");
    } finally {
      setLoadingProduct(null);
    }
  };

  const handleToggleFavorite = async (productId: string) => {
    const isAlreadyFavorite = wishlist.includes(productId);
    if (isAlreadyFavorite) {
      setWishlist((prev) => prev.filter((id) => id !== productId));
      toast.success("Removed from wishlist");
      return;
    }

    try {
      setWishListLoading(productId);

      const data = await wishList({
        userId: userId,
        productId,
        storeId: Number(storedId) || 0,
      }).unwrap();

      if (data) {
        setWishlist((prev) => [...prev, productId]);
        toast.success("Added to wishlist");
      }
    } catch (err) {
      toast.error("Failed to update wishlist");
    } finally {
      setWishListLoading(null);
    }
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = BannerData?.banner[0]?.slides ?? [];

  const goToSlide = (index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return {
    sortBy,
    setSortBy,
    view,
    setView,
    cartItems,
    wishlist,
    currentPage,
    setCurrentPage,
    topRef,
    currentProducts,
    totalPages,
    productsPerRow,
    handleAddToCart,
    handleToggleFavorite,
    handlePageChange,
    currentSlide,
    slides,
    goToSlide,
    nextSlide,
    prevSlide,
    current: slides[currentSlide],
    data,
    isLoading,
    error,
    ProductListData,
    loadingProduct,
    ProductListLoading,
    wishListLoading,
    BannerData,
    BannerLoading,
    totalProducts,
    handleSortChange,
  };
};
export type ProductListHookReturn = ReturnType<typeof useProductList>;
