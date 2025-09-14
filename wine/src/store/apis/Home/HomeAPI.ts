import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_API_URL_BASE } from "../../../api.config";
import type { LandingPageResponse } from "../../Interfaces/LandingPageInterface/HomePageSectionsDataInterface";

export const homeApi = createApi({
  reducerPath: "homeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL_BASE,
  }),

  endpoints: (builder) => ({
    addtoCart: builder.mutation<any, { productId: number; quantity: number; userId: number }>({
      query: (newItem) => ({
        url: "/home/add-to-cart",
        method: "POST",
        body: newItem,
      }),
    }),
    getHomeSections: builder.query<LandingPageResponse, void>({
      query: () => ({
        url: "/home/sections",
        method: "GET",
      }),
      // providesTags: ["HomeSections"],
    }),
  }),
});

export const { useAddtoCartMutation, useGetHomeSectionsQuery } = homeApi;
