import React from "react";
import ProductGridCard from "../ProductListGrid/ProductGridCard";
import { CustomPlus } from "../../atoms";

interface Props {
  product: any;
  showDivider: boolean;
  onAddToCart: () => void;
  onToggleFavorite: () => void;
}

const ProductWithDivider: React.FC<Props> = ({
  product,
  showDivider,
  onAddToCart,
  onToggleFavorite,
}) => {
  return (
    <>
      <ProductGridCard
        product={product}
        onAddToCart={onAddToCart}
        onToggleFavorite={onToggleFavorite}
      />
      {showDivider && <CustomPlus />}
    </>
  );
};

export default ProductWithDivider;
