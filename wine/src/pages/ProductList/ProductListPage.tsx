import React from "react";

import { Newsletter, ProductListBanner } from "../../molecules";
import ProductList from "../../molecules/ProductList/ProductList";

const ProductListPage = () => {
  return (
    <>
      <ProductListBanner />
      <ProductList />
      <Newsletter />
    </>
  );
};

export default ProductListPage;
