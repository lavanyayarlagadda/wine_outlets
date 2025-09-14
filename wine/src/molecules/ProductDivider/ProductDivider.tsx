import React from "react";
import ProductGridCard from "../ProductListGrid/ProductGridCard";
import { CustomPlus } from "../../atoms";

interface Props {
  product: any;
  showDivider: boolean;
  onAddToCart: () => void;
  onToggleFavorite: () => void;
  isFavorite: boolean;
  isLoading?: string | null;
  wishListLoading?: string | null;
}

const ProductWithDivider: React.FC<Props> = ({
  product,
  showDivider,
  onAddToCart,
  onToggleFavorite,
  isFavorite,
  isLoading,
  wishListLoading,
}) => {
  return (
    <>
      <ProductGridCard
        product={product}
        onAddToCart={onAddToCart}
        onToggleFavorite={onToggleFavorite}
        isFavorite={isFavorite}
        isLoading={isLoading}
        wishListLoading={wishListLoading}
      />
      {showDivider && <CustomPlus />}
    </>
  );
};

export default ProductWithDivider;
