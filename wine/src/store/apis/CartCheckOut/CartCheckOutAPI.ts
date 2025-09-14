import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_API_URL_BASE } from "../../../api.config";

export const cartCheckoutApi = createApi({
  reducerPath: "cartCheckoutApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL_BASE,
  }),

  endpoints: (builder) => ({
    cartProductDetails: builder.query<any, { cartId: number; userId: number; storeId: number }>({
      query: ({ cartId, userId, storeId }) => ({
        url: `/cart-checkout/product-listing`,
        method: "GET",
        params: {
          cartId,
          userId,
          storeId,
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
    placeOrder: builder.query<
      any,
      { paymentMethod: string; slotId: number; cartId: number; userId: number; storeId: number }
    >({
      query: ({ cartId, paymentMethod, slotId, userId, storeId }) => ({
        url: `/cart-checkout/place-order`,
        method: "GET",
        params: {
          cartId,
          paymentMethod,
          slotId,
          userId,
          storeId,
        },
      }),
    }),
  }),
});

export const { useCartProductDetailsQuery, useSlotDetailsQuery, usePlaceOrderQuery } =
  cartCheckoutApi;
