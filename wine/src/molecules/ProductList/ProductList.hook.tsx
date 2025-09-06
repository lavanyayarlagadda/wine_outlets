import { useState, useRef } from "react";
import { DEAL_PRODUCT } from "../../constant/dealProduct";
import { BannerData as bannerData } from "../../constant/curatedData";

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
  const [sortBy, setSortBy] = useState("relevance");
  const [view, setView] = useState<ViewType>("grid");
  const [cartItems, setCartItems] = useState<string[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const topRef = useRef<HTMLDivElement | null>(null);

  const allProducts = DEAL_PRODUCT;
  const totalPages = Math.ceil(allProducts.length / productsPerPage);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = allProducts.slice(startIndex, endIndex);

  const handleAddToCart = (productId: string) => {
    setCartItems((prev) => (prev.includes(productId) ? prev : [...prev, productId]));
  };

  const handleToggleFavorite = (productId: string) => {
    setWishlist((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
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
    allProducts,
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
  };
};
