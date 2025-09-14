import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartOverView } from "../../Interfaces/CartOverViewInterface/CartOverViewInterface";

const initialState: CartOverView = {
  placeOrder: false,
  orderResult: null,
};

const CartOverViewSlice = createSlice({
  name: "cartOverViewSlice",
  initialState,
  reducers: {
    setPlaceOrder: (state, action: PayloadAction<boolean>) => {
      state.placeOrder = action.payload;
    },
    setOrderResult: (state, action: PayloadAction<any>) => {
      state.orderResult = action.payload;
    },
  },
});

export const { setPlaceOrder, setOrderResult } = CartOverViewSlice.actions;
export default CartOverViewSlice.reducer;
