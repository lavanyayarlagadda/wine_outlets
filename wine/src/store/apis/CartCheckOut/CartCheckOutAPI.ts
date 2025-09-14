import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_API_URL_BASE } from "../../../api.config";

export const cartCheckoutApi = createApi({
  reducerPath: "cartCheckoutApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL_BASE,
  }),

  endpoints: (builder) => ({
    cartProductDetails: builder.query<any, { cartId: number; userId: number }>({
      query: ({ cartId, userId }) => ({
        url: `/cart-checkout/product-listing`,
        method: "GET",
        params: {
          cartId,
          userId,
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
    placeOrder: builder.query<any, { cartId: string; paymentMethod: string }>({
      query: ({ cartId, paymentMethod }) => ({
        url: `/cart-checkout/place-order`,
        method: "GET",
        params: {
          cartId,
          paymentMethod,
        },
      }),
    }),
  }),
});

export const { useCartProductDetailsQuery, useSlotDetailsQuery, usePlaceOrderQuery } =
  cartCheckoutApi;
