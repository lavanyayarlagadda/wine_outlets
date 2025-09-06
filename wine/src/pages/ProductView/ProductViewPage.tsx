import React from "react";

import { Newsletter, RecentlyView } from "../../molecules";
import ProductViewBreadCrumbs from "../../organisms/ProductView/ProductViewBreadCrumbs";
import Product from "../../organisms/ProductView/Product";
import { productViewData } from "../../constant/productViewData";
import ProfessionalRating from "../../organisms/ProductView/ProfessionalRating";
import { ProductView } from "../../molecules";

const ProductViewPage = () => {
  return (
    <>
      {/* <ProductView /> */}
      <ProductViewBreadCrumbs />
      <Product productViewData={productViewData} />
      <ProfessionalRating productViewData={productViewData} />
      <ProductView />
      <RecentlyView />
      <Newsletter />
    </>
  );
};

export default ProductViewPage;
