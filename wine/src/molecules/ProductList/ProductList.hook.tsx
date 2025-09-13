import { useState, useRef, useEffect } from "react";
import { BannerData as bannerData } from "../../constant/curatedData";
import {
  useFilterQuery,
  useProductListQuery,
  useLazyWishListQuery,
} from "../../store/apis/ProductList/productListApi";
import { toast } from "react-toastify";
import { useAddtoCartMutation } from "../../store/apis/Home/homeApi";
import { useLocation } from "react-router-dom";

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
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const [loadingProduct, setLoadingProduct] = useState<string | null>(null);
  const [wishListLoading, setWishListLoading] = useState<string | null>(null);

  const [addToCart] = useAddtoCartMutation();

  const [cartItems, setCartItems] = useState<{ [productId: number]: number }>({});
  const [category, setCategory] = useState(urlCategory || "");

  const {
    data: ProductListData,
    isLoading: ProductListLoading,
    error: productListError,
  } = useProductListQuery({
    category,
    page: currentPage,
  });

  const [wishList] = useLazyWishListQuery();

  const currentProducts = ProductListData?.productList?.products?.slice(startIndex, endIndex);
  const totalPages = ProductListData?.productList?.totalProducts;

  useEffect(() => {
    setCategory(urlCategory || "");
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

  const handleAddToCart = async (productId: any) => {
    try {
      setLoadingProduct(productId);
      const newQuantity = (cartItems[productId] || 0) + 1;
      const payload = {
        productId,
        quantity: newQuantity,
        userId: 1,
      };

      const response = await addToCart(payload).unwrap();
      console.log("ERROR1");
      setCartItems((prev) => ({
        ...prev,
        [productId]: newQuantity,
      }));
      toast.success(response.cartResponse);
    } catch (err) {
      console.log("ERROR");
      console.error("Failed to add to cart:", err);
      toast.error("Failed to add to cart");
    } finally {
      setLoadingProduct(null); // stop loader
    }
  };

  const handleToggleFavorite = async (productId: string) => {
    const isAlreadyFavorite = wishlist.includes(productId);

    // 👉 If unfavoriting, just update local state, no API call
    if (isAlreadyFavorite) {
      setWishlist((prev) => prev.filter((id) => id !== productId));
      toast.success("Removed from wishlist");
      return;
    }

    try {
      setWishListLoading(productId);

      const data = await wishList({ userId: 1, productId }).unwrap();

      if (data.includes(productId)) {
        setWishlist((prev) => [...prev, productId]);
        toast.success("Added to wishlist");
      }
    } catch (err) {
      console.error("Failed to update wishlist:", err);
      toast.error("Failed to update wishlist");
    } finally {
      setWishListLoading(null);
    }
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = bannerData.banners;

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
  };
};
