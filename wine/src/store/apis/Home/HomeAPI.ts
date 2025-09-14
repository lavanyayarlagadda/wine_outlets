import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_API_URL_BASE } from "../../../api.config";

export const homeApi = createApi({
  reducerPath: "homeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL_BASE,
  }),

  endpoints: (builder) => ({
    // In your API slice
    addtoCart: builder.mutation<any, { productId: number; quantity: number; userId: number }>({
      query: (newItem) => ({
        url: "/home/add-to-cart",
        method: "POST",
        body: newItem,
      }),
    }),
  }),
});

export const { useAddtoCartMutation } = homeApi;
