import React from "react";

import { ProductListBanner } from "../../molecules";
import { Box } from "@mui/material";
import ProductList from "../../molecules/ProductList/ProductList";


const ProductListPage = () => {

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <ProductListBanner />
      <ProductList/>
    </Box>
  );
};

export default ProductListPage;
