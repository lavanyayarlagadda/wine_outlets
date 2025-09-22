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
    getReviews: builder.query<
      any,
      { itemId: number; page: number; limit: number; rating: string,userId:number }
    >({
      query: ({ itemId, page, limit, rating,userId }) => ({
        url: "/product-view/reviews",
        method: "GET",
        params: {
          itemId,
          page,
          limit,
          rating,
          userId
        },
      }),
    }),
    productDetails: builder.mutation<any, any>({
      query: (newItem) => ({
        url: `/product-view/product-details`,
        method: "POST",
        body: newItem,
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
    vintageYear: builder.mutation<any, any>({
      query: (newItem) => ({
        url: `/product-view/vintage-year`,
        method: "POST",
        body: newItem,
      }),
    }),
    createReview: builder.mutation<
      any,
      { itemNumber: number; rating: number; userId: number; comment: string }
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
  useProductDetailsMutation,
  useVintageYearMutation,
} = productViewApi;
