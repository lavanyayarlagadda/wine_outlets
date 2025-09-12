import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_API_URL_BASE } from "../../../api.config";

export const authenticationApi = createApi({
  reducerPath: "AthenticationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL_BASE,
  }),

  endpoints: (builder) => ({
    login: builder.query<any, void>({
      query: () => ({
        url: "/product-listing/banner",
        method: "GET",
      }),
    }),

    forGotPassword: builder.mutation<any, any>({
      query: (newItem) => ({
        url: "auth/forgotPassword",
        method: "POST",
        body: newItem,
      }),
    }),
  }),
});

export const { useLoginQuery, useForGotPasswordMutation } = authenticationApi;
