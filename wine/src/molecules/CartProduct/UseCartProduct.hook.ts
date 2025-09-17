import { useState } from "react";

interface UseCartProductParams {
  initialQuantity: number;
}

const useCartProduct = ({ initialQuantity }: UseCartProductParams) => {
  const [customQuantity, setCustomQuantity] = useState(initialQuantity);

  const handleQuantityChange = (newQuantity: number) => {
    setCustomQuantity(newQuantity);
  };

  return {
    customQuantity,
    handleQuantityChange,
    setCustomQuantity,
  };
};

export default useCartProduct;
