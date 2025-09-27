import { configureStore } from "@reduxjs/toolkit";
import productListSlice from "./slices/ProductList/productListSlice";
import cartOverViewSlice from "./slices/CartOverView/CartOverView";
import { productListApi } from "./apis/ProductList/ProductListAPI";
import { homeApi } from "./apis/Home/HomeAPI";
import { productViewApi } from "./apis/ProductView/ProductViewAPI";
import { cartCheckoutApi } from "./apis/CartCheckOut/CartCheckOutAPI";
import homeSlice from "./slices/Home/Home";
import { AuthAPI } from "./apis/Authentication/AuthAPI";
import authSlice from "./slices/Auth/AuthSlice";
import menuItemSlice from "./slices/MenuItems/MenuItemsSlice";
import productViewSlice from "./slices/ProductView/productViewSlice";
import { profileApi } from "./apis/MyProfile/MyProfileAPI";
import MyProfileSlice from "./slices/MyProfile/MyProfileSlice";

export const store = configureStore({
  reducer: {
    productListSlice: productListSlice,
    cartOverViewSlice: cartOverViewSlice,
    homeSlice: homeSlice,
    authSlice: authSlice,
    menu: menuItemSlice,
    productViewSlice: productViewSlice,
    profileSlice:MyProfileSlice,
    [productListApi.reducerPath]: productListApi.reducer,
    [productViewApi.reducerPath]: productViewApi.reducer,
    [homeApi.reducerPath]: homeApi.reducer,
    [cartCheckoutApi.reducerPath]: cartCheckoutApi.reducer,
    [AuthAPI.reducerPath]: AuthAPI.reducer,
    [profileApi.reducerPath]:profileApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productListApi.middleware)
      .concat(homeApi.middleware)
      .concat(productViewApi.middleware)
      .concat(cartCheckoutApi.middleware)
      .concat(AuthAPI.middleware)
      .concat(profileApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
