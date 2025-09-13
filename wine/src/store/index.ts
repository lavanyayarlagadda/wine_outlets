import { configureStore } from "@reduxjs/toolkit";
import { authenticationApi } from "./apis/Auth/authenticationApis";
import productListSlice from "./slices/ProductList/productListSlice";
import cartOverViewSlice from "./slices/CartOverView/CartOverView";
import { productListApi } from "./apis/ProductList/productListApi";
import { homeApi } from "./apis/Home/homeApi";

export const store = configureStore({
  reducer: {
    productListSlice: productListSlice,
    cartOverViewSlice: cartOverViewSlice,

    [authenticationApi.reducerPath]: authenticationApi.reducer,
    [productListApi.reducerPath]: productListApi.reducer,
    [homeApi.reducerPath]: homeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authenticationApi.middleware)
      .concat(productListApi.middleware)
      .concat(homeApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
