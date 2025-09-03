import React from "react";

import { Navigation, Newsletter, ProductListBanner } from "../../molecules";
import { Box } from "@mui/material";
import ProductList from "../../molecules/ProductList/ProductList";
import Footer from "../../organisms/Footer/Footer";
import RecentlyViewed from '../../molecules/RecentlyViewed/RecentlyView';
import ProductView from "../../molecules/ProductView/ProductView";


const ProductViewPage = () => {

  return (
    <>
    <ProductView/>
      <RecentlyViewed/>
        <Newsletter />
             <Footer />
    </>
  );
};

export default ProductViewPage;
