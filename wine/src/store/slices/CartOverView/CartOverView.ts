import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartOverView } from "../../Interfaces/CartOverViewInterface/CartOverViewInterface";

const initialState: CartOverView = {
  placeOrder: false,
};

const CartOverViewSlice = createSlice({
  name: "cartOverViewSlice",
  initialState,
  reducers: {
    setPlaceOrder: (state, action: PayloadAction<boolean>) => {
      state.placeOrder = action.payload;
    },
  },
});

export const { setPlaceOrder } = CartOverViewSlice.actions;
export default CartOverViewSlice.reducer;
