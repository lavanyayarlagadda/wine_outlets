import React from "react";

import { Navigation, Newsletter, ProductListBanner } from "../../molecules";
import { Box } from "@mui/material";
import ProductList from "../../molecules/ProductList/ProductList";
import Footer from "../../organisms/Footer/Footer";


const ProductListPage = () => {

  return (
    <>
        <Navigation />
      <ProductListBanner />
      <ProductList/>
          <Box sx={{mt:4}}>
        <Newsletter />
        </Box>
             <Footer />
    </>
  );
};

export default ProductListPage;
