import { useState, useEffect } from "react";
import type { ProductViewResponse } from "../../constant/productViewData";
import {
  useBottleSizesQuery,
  useProductDetailsQuery,
} from "../../store/apis/ProductView/ProductViewAPI";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

interface ProductDetailsProps {
  initialData?: ProductViewResponse;
}

export const UseProductView = ({ initialData }: ProductDetailsProps = {}) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productId = queryParams.get("productId") || "";
  const size = queryParams.get("size") || "";

  const [expanded, setExpanded] = useState(true);
  const [productViewData, setProductViewData] = useState<ProductViewResponse | null>(
    initialData || null
  );

  const { data, isLoading } = useBottleSizesQuery({ productId: Number(productId) });

  const {
    data: productDetails,
    isLoading: productDetailLoading,
    isError,
  } = useProductDetailsQuery({ itemId: Number(productId), size });
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedVintage, setSelectedVintage] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  const [wishlist, setWishlist] = useState<boolean>(false);

  const toggleExpand = () => {
    setExpanded((prev) => !prev);
  };

  useEffect(() => {
    if (isError) {
      toast.error("Failed to load the product details");
    }
  }, [isError]);

  const toggleWishlist = () => setWishlist((prev) => !prev);
  useEffect(() => {
    if (!initialData) {
      setProductViewData(productDetails?.productDetails);
    }
  }, [initialData]);

  useEffect(() => {
    if (productViewData?.productDetails?.product) {
      const product = productViewData.product;
      setSelectedSize(product.bottle_size?.[0]?.id || "");
      setSelectedVintage(product.other_vintages?.[0]?.year || "");
    }
  }, [productViewData]);

  return {
    expanded,
    toggleExpand,
    productViewData,
    selectedSize,
    setSelectedSize,
    selectedVintage,
    setSelectedVintage,
    count,
    setCount,
    wishlist,
    toggleWishlist,
    data,
    isLoading,
    productDetails,
    productDetailLoading,
  };
};
