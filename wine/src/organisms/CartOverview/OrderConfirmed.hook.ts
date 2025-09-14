import { useEffect } from "react";
import { usePlaceOrderQuery } from "../../store/apis/CartCheckOut/CartCheckOutAPI";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setPlaceOrder } from "../../store/slices/CartOverView/CartOverView";

export const useOrderConfirmed = () => {
  const dispatch = useDispatch();
  const { data, isLoading, isSuccess, isError } = usePlaceOrderQuery({
    cartId: "1",
    paymentMethod: "credit",
  });

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
