import React from "react";

import { Newsletter, ProductListBanner } from "../../molecules";
import ProductList from "../../molecules/ProductList/ProductList";
import { useProductList } from "../../molecules/ProductList/ProductList.hook";

const ProductListPage = () => {
  const { currentSlide, slides, goToSlide, current } = useProductList();
  return (
    <>
      <ProductListBanner
        currentSlide={currentSlide}
        slides={slides}
        goToSlide={goToSlide}
        current={current}
      />
      <ProductList />
      <Newsletter />
    </>
  );
};

export default ProductListPage;
