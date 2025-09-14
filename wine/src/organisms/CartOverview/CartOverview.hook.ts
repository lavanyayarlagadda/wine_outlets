import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPlaceOrder } from "../../store/slices/CartOverView/CartOverView";
import {
  useCartProductDetailsQuery,
  useSlotDetailsQuery,
} from "../../store/apis/CartCheckOut/CartCheckOutAPI";
import { toast } from "react-toastify";

export const useCartOverView = () => {
  const dispatch = useDispatch();
  const today = new Date().toISOString().split("T")[0];
  const { data, isLoading, isError } = useCartProductDetailsQuery({
    cartId: 1,
    userId: 1,
    storeId: 1,
  });
  const cartDetails = data?.productListing?.[0];

  const {
    data: slotData,
    isLoading: slotLoading,
    isError: slotError,
  } = useSlotDetailsQuery({ storeId: 1, date: today });
  useEffect(() => {
    if (isError) toast.error("Failed to load the Cart Product Details");
    if (slotError) toast.error("Failed to load the Slot Details");
  }, [isError, slotError]);

  useEffect(() => {
    dispatch(setPlaceOrder(false));
  }, []);

  return {
    cartDetails,
    isLoading,
    slotData,
    slotLoading,
  };
};
