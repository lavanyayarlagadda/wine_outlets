import { useState, useEffect } from "react";
import type { ProductViewResponse } from "../../constant/productViewData";
import { productViewData as staticData } from "../../constant/productViewData";
import {
  useBottleSizesQuery,
  useProductDetailsQuery,
} from "../../store/apis/ProductView/productViewApi";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

interface ProductDetailsProps {
  initialData?: ProductViewResponse;
}

export const UseProductView = ({ initialData }: ProductDetailsProps = {}) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productId = queryParams.get("productId") || "";

  const [expanded, setExpanded] = useState(true);
  const [productViewData, setProductViewData] = useState<ProductViewResponse | null>(
    initialData || null
  );

  const { data, isLoading } = useBottleSizesQuery({ productId: Number(productId) });

  const {
    data: productDetails,
    isLoading: productDetailLoading,
    isError,
  } = useProductDetailsQuery({ productId: Number(productId) });
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
      setProductViewData(staticData);
    }
  }, [initialData]);

  useEffect(() => {
    if (productViewData?.product) {
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
