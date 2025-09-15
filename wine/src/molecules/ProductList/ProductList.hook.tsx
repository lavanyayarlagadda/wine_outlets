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
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const [loadingProduct, setLoadingProduct] = useState<string | null>(null);
  const [wishListLoading, setWishListLoading] = useState<string | null>(null);

  const [addToCart] = useAddtoCartMutation();
  const { data: BannerData, isLoading: BannerLoading, isError } = useBannerQuery();

  const [cartItems, setCartItems] = useState<{ [productId: number]: number }>({});
  const [category, setCategory] = useState(urlCategory || "");

  const { productsData } = useSelector((store: RootState) => store.productListSlice);
  const dispatch = useDispatch();
  const [
    productList,
    { data: ProductListData, isLoading: ProductListLoading, error: productListError },
  ] = useProductListMutation();
  useEffect(() => {
    let payload: any = {
      category: category,
      department: "",
      subDepartment: "",
      size: "",
      price: "",
      occasion: "",
      customerRating: "",
      tags: "",
      origin: "",
      grapeVariety: "",
      brand: "",
      vintageYear: "",
      alcoholContent: "",
      limit: 20,
      page: currentPage,
      sort: "relevance",
    };

    if (productsData && Object.keys(productsData).length > 0) {
      payload = { ...payload, ...productsData };
    }

    productList(payload);
  }, [category, currentPage, productsData, productList]);

  const [wishList] = useWishListMutation();

  useEffect(() => {
    if (isError) {
      toast.error("Failed to load Banner");
    }
  }, [isError]);
  const storedId = localStorage.getItem("selectedStore");
  const currentProducts = ProductListData?.productList?.products?.slice(startIndex, endIndex);
  const totaldataPage = ProductListData?.productList?.products;
  const totalPages = Math.ceil(totaldataPage?.length / productsPerPage);
  const totalProducts = ProductListData?.productList?.totalProducts;

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
  const handleSortChange = (newSort: string) => {
    setSortBy(newSort);
    dispatch(
      setProductsData({
        ...productsData,
        sort: newSort,
      })
    );
  };

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
        userId: 1,
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
    topRef.current?.scrollIntoView({ behavior: "smooth" });
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
