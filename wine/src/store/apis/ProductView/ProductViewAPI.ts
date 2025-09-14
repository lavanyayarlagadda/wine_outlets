import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_API_URL_BASE } from "../../../api.config";

export const productViewApi = createApi({
  reducerPath: "productViewApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL_BASE,
  }),

  endpoints: (builder) => ({
    getReviews: builder.query<
      any,
      { productId: number; page: number; limit: number; rating: string }
    >({
      query: ({ productId, page, limit, rating }) => ({
        url: "/product-view/reviews",
        method: "GET",
        params: {
          productId,
          page,
          limit,
          rating,
        },
      }),
    }),
    productDetails: builder.query<any, { itemId: number; size: any }>({
      query: ({ itemId, size }) => ({
        url: `/product-view/product-details`,
        method: "GET",
        params: {
          itemId,
          size,
        },
      }),
    }),

    bottleSizes: builder.query<any, { productId: number }>({
      query: ({ productId }) => ({
        url: `/product-view/bottle-sizes`,
        method: "GET",
        params: {
          productId,
        },
      }),
    }),
    createReview: builder.mutation<
      any,
      { productId: number; rating: number; userId: number; comment: string }
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
  useGetReviewsQuery,
  useBottleSizesQuery,
  useCreateReviewMutation,
  useProductDetailsQuery,
} = productViewApi;
