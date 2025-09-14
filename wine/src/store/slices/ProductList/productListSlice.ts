import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ProductListItems } from "../../Interfaces/ProductListInterface/ProductListInterface";

const initialState: ProductListItems = {
  cartList: [],
  selectedNames: [],
  productsData: {},
};

const ProductListSlice = createSlice({
  name: "productListSlice",
  initialState,
  reducers: {
    setCartList: (state, action: PayloadAction<string[]>) => {
      state.cartList = action.payload;
    },
    setSelectedNames: (state, action: PayloadAction<string[]>) => {
      state.selectedNames = action.payload;
    },
    setProductsData: (state, action: PayloadAction<any>) => {
      state.productsData = action.payload;
    },
  },
});

export const { setCartList, setSelectedNames, setProductsData } = ProductListSlice.actions;
export default ProductListSlice.reducer;
