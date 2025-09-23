import { useState } from "react";

interface UseCartProductParams {
  initialQuantity: number;
}

const useCartProduct = ({ initialQuantity }: UseCartProductParams) => {
  const [customQuantity, setCustomQuantity] = useState(initialQuantity);
  const storedCartIds = localStorage.getItem("cartIds");
  const parsedCartIds: number[] = storedCartIds ? JSON.parse(storedCartIds) : [];
  const orderId = parsedCartIds[0];
  const handleQuantityChange = (newQuantity: number) => {
    setCustomQuantity(newQuantity);
  };

  return {
    customQuantity,
    handleQuantityChange,
    setCustomQuantity,
    orderId,
  };
};

export default useCartProduct;
