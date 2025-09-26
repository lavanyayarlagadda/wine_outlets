import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ProductViewItems } from "../../Interfaces/ProductViewInterface/ProductViewnterface";

const initialState: ProductViewItems = {
  reviewsSubmit: false,
};

const ProductViewSlice = createSlice({
  name: "productListSlice",
  initialState,
  reducers: {
    setReviewsSubmit: (state, action: PayloadAction<boolean>) => {
      state.reviewsSubmit = action.payload;
    },
  },
});

export const { setReviewsSubmit } = ProductViewSlice.actions;
export default ProductViewSlice.reducer;
