import { useEffect } from "react";
import { usePlaceOrderMutation } from "../../store/apis/CartCheckOut/CartCheckOutAPI";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setPlaceOrder } from "../../store/slices/CartOverView/CartOverView";

export const useOrderConfirmed = () => {
  const dispatch = useDispatch();
  const [placeOrder, { data, isLoading, isSuccess, isError }] = usePlaceOrderMutation();
  const storedId = localStorage.getItem("selectedStore");
  const userId = localStorage.getItem("userId");
  useEffect(() => {
    placeOrder({
      cartId: 1,
      paymentMethod: "credit",
      slotId: 1,
      userId: Number(userId),
      storeId: Number(storedId) || 0,
    });
  }, []);

  useEffect(() => {
    if (isError) {
      dispatch(setPlaceOrder(false));
      toast.error("Failed to load the place order");
    }
    if (isSuccess) {
      toast.success("Order placed successfully!");
    }
  }, [isError, isSuccess]);

  return {
    data,
    isLoading,
  };
};
