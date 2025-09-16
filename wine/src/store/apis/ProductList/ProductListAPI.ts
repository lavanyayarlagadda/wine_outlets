import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_API_URL_BASE } from "../../../api.config";

export const productListApi = createApi({
  reducerPath: "productListApi",
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
    banner: builder.query<any, void>({
      query: () => ({
        url: "/product-listing/banner",
        method: "GET",
      }),
    }),
    filter: builder.query<any, void>({
      query: () => ({
        url: "/product-listing/filter-list",
        method: "GET",
      }),
    }),
    productList: builder.mutation<any, any>({
      query: (newItem) => ({
        url: `product-listing/product-list`,
        method: "POST",
        body: newItem,
      }),
    }),
    wishList: builder.mutation<any, any>({
      query: (newItem) => ({
        url: `/product-listing/create-wishlist`,
        method: "POST",
        body: newItem,
      }),
    }),
  }),
});

export const { useFilterQuery, useProductListMutation, useWishListMutation, useBannerQuery } =
  productListApi;
