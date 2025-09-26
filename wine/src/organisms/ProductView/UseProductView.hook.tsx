import { useState, useEffect } from "react";
import type { ProductViewResponse } from "../../constant/productViewData";
import {
  useBottleSizesMutation,
  useProductDetailsMutation,
  useVintageYearMutation,
} from "../../store/apis/ProductView/ProductViewAPI";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useAddtoCartMutation, useGetRecentlyViewedQuery } from "../../store/apis/Home/HomeAPI";
import { useWishListMutation } from "../../store/apis/ProductList/ProductListAPI";
import { getClientIdentifierForPayload } from "../../utils/useClientIdentifier";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";

interface ProductDetailsProps {
  initialData?: ProductViewResponse;
}

export const useProductView = ({ initialData }: ProductDetailsProps = {}) => {
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
  const {
    data: rvData,
    isLoading: rvLoading,
    isError: rvError,
  } = useGetRecentlyViewedQuery({
    ...getClientIdentifierForPayload(),
  });
  const [vintageYearData, setVintageYearData] = useState([]);

  const [expanded, setExpanded] = useState(true);
  const [productViewData, setProductViewData] = useState<ProductViewResponse | null>(
    initialData || null
  );

  const [bottleSizes, { data, isLoading }] = useBottleSizesMutation();
  const [vintageYear] = useVintageYearMutation();
  const { reviewsSubmit } = useSelector((state: RootState) => state.productViewSlice);
  const { isSignedIn } = useSelector((state: RootState) => state.authSlice);
  const [productDetails, { data: productDetailsData, isLoading: productDetailLoading, isError }] =
    useProductDetailsMutation();
  const [selectedSize, setSelectedSize] = useState<string>(size);
  const [selectedVintage, setSelectedVintage] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  const storedId = localStorage.getItem("selectedStore");
  useEffect(() => {
    if (location.pathname.includes("/productView")) {
      const fetchDetails = async () => {
        try {
          const result = await productDetails({
            itemId: productId,
            ...getClientIdentifierForPayload(),
            size,
            vintageYear: Number(vintage),
            storeId: Number(storedId),
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
    }
  }, [isSignedIn]);
  useEffect(() => {
    bottleSizes({
      itemNumber: productId,
    }).unwrap(); // optional: returns a promise with the response
  }, [productId]);

  useEffect(() => {
    if (reviewsSubmit) {
      const fetchDetails = async () => {
        try {
          const result = await productDetails({
            itemId: productId,
            ...getClientIdentifierForPayload(),
            size,
            vintageYear: Number(vintage),
            storeId: Number(storedId),
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
    }
  }, [reviewsSubmit]);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const result = await vintageYear({
          itemNumber: productId,
        }).unwrap();
        setVintageYearData(result?.vintageYear);
      } catch (err) {
        toast.error("Failed to load the vintageYear details");
      }
    };

    if (productId) {
      fetchDetails();
    }
  }, []);

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
      const payload = [
        {
          itemNumber: productId,
          quantity: newValue ? newValue : newQuantity,
          ...getClientIdentifierForPayload(),
          storeId: Number(storedId),
        },
      ];

      const response = await addToCart(payload).unwrap();
      setCartItems((prev) => ({
        ...prev,
        [productId]: newQuantity,
      }));
      toast.success(response.cartResponse.message);
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

      const data = await wishList({
        ...getClientIdentifierForPayload(),
        itemNumber: productId,
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
    vintageYearData,
    rvData,
    rvLoading,
    rvError,
  };
};
export type ProductViewHookReturn = ReturnType<typeof useProductView>;
