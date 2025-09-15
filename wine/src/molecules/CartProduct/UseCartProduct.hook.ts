import { useState } from "react";

interface UseCartProductParams {
  initialQuantity: number;
}

const useCartProduct = ({ initialQuantity }: UseCartProductParams) => {
  const [customQuantity, setCustomQuantity] = useState(initialQuantity);

  const handleQuantityChange = (newQuantity: number) => {
    setCustomQuantity(newQuantity);
    console.log("Updated Quantity:", newQuantity);
  };

  return {
    customQuantity,
    handleQuantityChange,

  };
};

export default useCartProduct;
