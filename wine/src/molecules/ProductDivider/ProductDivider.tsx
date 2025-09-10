import React from "react";
import ProductGridCard from "../ProductListGrid/ProductGridCard";
import { CustomPlus } from "../../atoms";

interface Props {
  product: any;
  showDivider: boolean;
  onAddToCart: () => void;
  onToggleFavorite: () => void;
  isFavorite: boolean;
}

const ProductWithDivider: React.FC<Props> = ({
  product,
  showDivider,
  onAddToCart,
  onToggleFavorite,
  isFavorite,
}) => {
  return (
    <>
      <ProductGridCard
        product={product}
        onAddToCart={onAddToCart}
        onToggleFavorite={onToggleFavorite}
        isFavorite={isFavorite}
      />
      {showDivider && <CustomPlus />}
    </>
  );
};

export default ProductWithDivider;
