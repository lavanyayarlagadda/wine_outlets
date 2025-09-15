import { useState, useEffect } from "react";
import type { ProductViewResponse } from "../../constant/productViewData";
import {
  useBottleSizesQuery,
  useProductDetailsMutation,
} from "../../store/apis/ProductView/ProductViewAPI";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useAddtoCartMutation } from "../../store/apis/Home/HomeAPI";
import { useWishListMutation } from "../../store/apis/ProductList/ProductListAPI";

interface ProductDetailsProps {
  initialData?: ProductViewResponse;
}

export const UseProductView = ({ initialData }: ProductDetailsProps = {}) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productId = queryParams.get("productId") || "";
  const size = queryParams.get("size") || "";
  const vintage = queryParams.get("vintage") || "";
  const [loadingProduct, setLoadingProduct] = useState<string | null>(null);
  const [wishListLoading, setWishListLoading] = useState<string | null>(null);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [cartItems, setCartItems] = useState<{ [productId: number]: number }>({});
  const [addToCart] = useAddtoCartMutation();
  const [wishList] = useWishListMutation();

  const [expanded, setExpanded] = useState(true);
  const [productViewData, setProductViewData] = useState<ProductViewResponse | null>(
    initialData || null
  );

  const { data, isLoading } = useBottleSizesQuery({ productId: Number(productId) });

  const [productDetails, { data: productDetailsData, isLoading: productDetailLoading, isError }] =
    useProductDetailsMutation();
  const [selectedSize, setSelectedSize] = useState<string>(size);
  const [selectedVintage, setSelectedVintage] = useState<string>("");
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const result = await productDetails({
          itemId: productId,
          userId: "user123",
          size,
          vintageYear: vintage,
        }).unwrap();

        // result is the actual response payload
        setProductViewData(result?.productDetails);
      } catch (err) {
        toast.error("Failed to load the product details");
      }
    };

    if (productId) {
      fetchDetails();
    }
  }, [productId, size, vintage]);

  console.log(productDetailsData, "productDetailsData");
  const toggleExpand = () => {
    setExpanded((prev) => !prev);
  };

  useEffect(() => {
    if (isError) {
      toast.error("Failed to load the product details");
    }
  }, [isError]);

  const handleAddToCart = async (productId: any, newValue?: any) => {
    try {
      if (!newValue) {
        setLoadingProduct(productId);
      }
      const newQuantity = (cartItems[productId] || 0) + 1;
      const payload = {
        productId,
        quantity: newValue ? newValue : newQuantity,
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

  // Example: store wishlist IDs
  useEffect(() => {
    if (productViewData?.product.isWishlisted) {
      setWishlist([productId]);
    }
  }, [productId, productViewData]);
  const storedId = localStorage.getItem("selectedStore");
  const handleToggleFavorite = async (productId: string) => {
    const isAlreadyFavorite = wishlist.includes(productId) || productViewData?.product.isWishlisted;
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

  useEffect(() => {
    if (!initialData) {
      setProductViewData(productDetailsData?.productDetails);
    }
  }, [initialData]);

  useEffect(() => {
    if (productViewData?.product) {
      setSelectedSize(size);
      setSelectedVintage(vintage || "");
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
    handleAddToCart,
    handleToggleFavorite,
    loadingProduct,
    wishListLoading,
    data,
    isLoading,
    productDetailsData,
    productDetailLoading,
    productId,
  };
};
