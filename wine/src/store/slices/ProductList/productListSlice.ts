import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ProductListItems } from "../../Interfaces/ProductListInterface/ProductListInterface";

const initialState: ProductListItems = {
  cartList: [],
};

const ProductListSlice = createSlice({
  name: "productListSlice",
  initialState,
  reducers: {
    setCartList: (state, action: PayloadAction<string[]>) => {
      state.cartList = action.payload;
    },
  },
});

export const { setCartList } = ProductListSlice.actions;
export default ProductListSlice.reducer;
