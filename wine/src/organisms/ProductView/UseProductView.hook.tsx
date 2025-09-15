import { useState, useEffect } from "react";
import type { ProductViewResponse } from "../../constant/productViewData";
import {
  useBottleSizesQuery,
  useProductDetailsQuery,
} from "../../store/apis/ProductView/ProductViewAPI";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useAddtoCartMutation } from "../../store/apis/Home/homeAPI";
import { useWishListMutation } from "../../store/apis/ProductList/ProductListAPI";

interface ProductDetailsProps {
  initialData?: ProductViewResponse;
}

export const UseProductView = ({ initialData }: ProductDetailsProps = {}) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productId = queryParams.get("productId") || "";
  const size = queryParams.get("size") || "";
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

  const {
    data: productDetails,
    isLoading: productDetailLoading,
    isError,
  } = useProductDetailsQuery({ itemId: Number(productId), size });
  const [selectedSize, setSelectedSize] = useState<string>(size);
  const [selectedVintage, setSelectedVintage] = useState<string>("");
  const [count, setCount] = useState<number>(0);

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

  const handleToggleFavorite = async (productId: string) => {
    const isAlreadyFavorite = wishlist.includes(productId) || productViewData?.product.isWishlisted;
    if (isAlreadyFavorite) {
      setWishlist((prev) => prev.filter((id) => id !== productId));
      toast.success("Removed from wishlist");
      return;
    }

    try {
      setWishListLoading(productId);

      const data = await wishList({ userId: 1, productId, storeId: 1 }).unwrap();

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
      setProductViewData(productDetails?.productDetails);
    }
  }, [initialData]);

  useEffect(() => {
    if (productViewData?.product) {
      console.log(productViewData, "PRODUCTVIEWDATA");
      const product = productViewData?.product;
      setSelectedSize(size);
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
    handleAddToCart,
    handleToggleFavorite,
    loadingProduct,
    wishListLoading,
    data,
    isLoading,
    productDetails,
    productDetailLoading,
    productId,
  };
};
