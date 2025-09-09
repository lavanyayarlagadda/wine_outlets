import { configureStore } from "@reduxjs/toolkit";
import { authenticationApi } from "./apis/Auth/authenticationApis";
import productListSlice from "./slices/ProductList/productListSlice";

export const store = configureStore({
  reducer: {
    productListSlice: productListSlice,

    [authenticationApi.reducerPath]: authenticationApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authenticationApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
