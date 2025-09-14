import { configureStore } from "@reduxjs/toolkit";
import productListSlice from "./slices/ProductList/productListSlice";
import cartOverViewSlice from "./slices/CartOverView/CartOverView";
import { productListApi } from "./apis/ProductList/productListApi";
import { homeApi } from "./apis/Home/homeApi";
import { productViewApi } from "./apis/ProductView/productViewApi";
import { cartCheckoutApi } from "./apis/CartCheckOut/CartCheckOutAPI";

export const store = configureStore({
  reducer: {
    productListSlice: productListSlice,
    cartOverViewSlice: cartOverViewSlice,
    [productListApi.reducerPath]: productListApi.reducer,
    [productViewApi.reducerPath]: productViewApi.reducer,
    [homeApi.reducerPath]: homeApi.reducer,
    [cartCheckoutApi.reducerPath]: cartCheckoutApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productListApi.middleware)
      .concat(homeApi.middleware)
      .concat(productViewApi.middleware)
      .concat(cartCheckoutApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
