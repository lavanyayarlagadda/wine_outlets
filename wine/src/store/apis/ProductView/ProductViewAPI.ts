import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_API_URL_BASE } from "../../../api.config";

export const productViewApi = createApi({
  reducerPath: "productViewApi",
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
    getReviews: builder.mutation<any, any>({
      query: (newItem) => ({
        url: "/product-view/reviews",
        method: "POST",
        body: newItem,
      }),
    }),
    productDetails: builder.mutation<any, any>({
      query: (newItem) => ({
        url: `/product-view/product-details`,
        method: "POST",
        body: newItem,
      }),
    }),

    bottleSizes: builder.mutation<any, any>({
      query: (newItem) => ({
        url: `/product-view/bottle-sizes`,
        method: "POST",
        body: newItem,
      }),
    }),
    vintageYear: builder.mutation<any, any>({
      query: (newItem) => ({
        url: `/product-view/vintage-year`,
        method: "POST",
        body: newItem,
      }),
    }),
    createReview: builder.mutation<
      any,
      { itemNumber: number; rating: number; userId: number; comment: string; orderId: number }
    >({
      query: (newItem) => ({
        url: `/product-view/create-review`,
        method: "POST",
        body: newItem,
      }),
    }),
  }),
});

export const {
  useGetReviewsMutation,
  useBottleSizesMutation,
  useCreateReviewMutation,
  useProductDetailsMutation,
  useVintageYearMutation,
} = productViewApi;
