import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_API_URL_BASE } from "../../../api.config";

export const productListApi = createApi({
  reducerPath: "productListApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL_BASE,
  }),

  endpoints: (builder) => ({
    filter: builder.query<any, void>({
      query: () => ({
        url: "/product-listing/filter-list",
        method: "GET",
      }),
    }),
    productList: builder.query<any, { category: string; page: number }>({
      query: ({ category, page }) => ({
        url: `product-listing/product-list`,
        method: "GET",
        params: {
          category,
          limit: "20",
          page: page.toString(),
        },
      }),
    }),
    wishList: builder.query<any, { userId?: number; productId: string }>({
      query: ({ userId, productId }) => ({
        url: `/product-listing/wishlist`,
        method: "GET",
        params: {
          userId,
          productId,
        },
      }),
    }),
  }),
});

export const { useFilterQuery, useProductListQuery, useLazyWishListQuery } = productListApi;
