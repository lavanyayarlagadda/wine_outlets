import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPlaceOrder } from "../../store/slices/CartOverView/CartOverView";

export const useCartOverView = () => {
  const error = "";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPlaceOrder(false));
  }, []);

  return {
    error,
  };
};
