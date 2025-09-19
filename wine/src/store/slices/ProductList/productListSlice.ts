import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ProductListItems } from "../../Interfaces/ProductListInterface/ProductListInterface";

const initialState: ProductListItems = {
  cartList: [],
  selectedNames: {},
  productsData: {},
  productsViewData: null,
  vintageYearsData: [],
};

const ProductListSlice = createSlice({
  name: "productListSlice",
  initialState,
  reducers: {
    setCartList: (state, action: PayloadAction<string[]>) => {
      state.cartList = action.payload;
    },
    setSelectedNames: (state, action: PayloadAction<Record<string, string[]>>) => {
      state.selectedNames = action.payload; // ✅ update by object
    },
    setProductsData: (state, action: PayloadAction<any>) => {
      state.productsData = action.payload;
    },
    setProductData: (state, action) => {
      state.productsViewData = action.payload.productDetails;
      state.vintageYearsData = action.payload.vintageYear;
    },
  },
});

export const { setCartList, setSelectedNames, setProductsData, setProductData } =
  ProductListSlice.actions;
export default ProductListSlice.reducer;
