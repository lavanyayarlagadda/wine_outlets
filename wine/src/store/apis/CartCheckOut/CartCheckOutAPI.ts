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
    cartProductDetails: builder.query<
      any,
      { cartId: number; userId: number | string; storeId: number; userIp: string }
    >({
      query: ({ cartId, userId, storeId, userIp }) => ({
        url: `/cart-checkout/product-listing`,
        method: "GET",
        params: {
          cartId,
          userId,
          storeId,
          userIp,
        },
      }),
    }),
    slotDetails: builder.query<any, { storeId: number; date: string }>({
      query: ({ storeId, date }) => ({
        url: `/cart-checkout/pickup-slots`,
        method: "GET",
        params: {
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
  }),
});

export const { useCartProductDetailsQuery, useSlotDetailsQuery, usePlaceOrderMutation } =
  cartCheckoutApi;
