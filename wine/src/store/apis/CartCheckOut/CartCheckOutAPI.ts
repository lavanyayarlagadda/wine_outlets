import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_API_URL_BASE } from "../../../api.config";

export const cartCheckoutApi = createApi({
  reducerPath: "cartCheckoutApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL_BASE,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),

  endpoints: (builder) => ({
    cartProductDetails: builder.mutation<
      any,
      { page: number; userId: number | string; storeId: number; size: number }
    >({
      query: ({ userId, storeId, page, size }) => ({
        url: `/cart-checkout/product-listing`,
        method: "POST",
        body: {
          userId,
          storeId,
          page,
          size,
        },
      }),
    }),
    slotDetails: builder.mutation<any, { storeId: number; date: string }>({
      query: ({ storeId, date }) => ({
        url: `/cart-checkout/pickup-slots`,
        method: "POST",
        body: {
          storeId,
          date,
        },
      }),
    }),
    placeOrder: builder.mutation<any, any>({
      query: (newItem) => ({
        url: `/cart-checkout/place-order`,
        method: "POST",
        body: newItem,
      }),
    }),
    storeOffDays: builder.mutation<any, { storeId: number }>({
      query: ({ storeId }) => ({
        url: `/cart-checkout/store-off-days`,
        method: "POST",
        body: { storeId },
      }),
    }),
  }),
});

export const { useCartProductDetailsMutation, useSlotDetailsMutation, usePlaceOrderMutation, useStoreOffDaysMutation } =
  cartCheckoutApi;
