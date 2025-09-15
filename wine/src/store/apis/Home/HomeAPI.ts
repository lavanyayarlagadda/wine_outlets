import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_API_URL_BASE } from "../../../api.config";
import type {
  LandingPageResponse,
  RecentlyViewedSection,
} from "../../Interfaces/LandingPageInterface/HomePageSectionsDataInterface";

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
    sendNewsletter: builder.mutation<
      any,
      {
        userId: number;
        userIp: string;
        fullName: string;
        email: string;
        phoneNumber: string;
        preferredStore: string[];
        preferredAlcohol: string[];
      }
    >({
      query: (payload) => ({
        url: "/home/newsletter",
        method: "POST",
        body: payload,
      }),
    }),
    getCartCount: builder.query<any, { userId?: number; storeId?: string; userIP?: string } | void>(
      {
        query: (params) => {
          //queryParams
          const qs =
            params && Object.keys(params).length
              ? `?${Object.entries(params)
                  .filter(([, v]) => v !== undefined && v !== null && v !== "")
                  .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
                  .join("&")}`
              : "";
          return {
            url: `/home/cart-count${qs}`,
            method: "GET",
          };
        },
      }
    ),
    getRecentlyViewed: builder.query<
      RecentlyViewedSection,
      { userId?: number; limit?: number } | void
    >({
      query: (params) => {
        const qs =
          params && Object.keys(params).length
            ? `?${Object.entries(params)
                .filter(([, v]) => v !== undefined && v !== null)
                .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
                .join("&")}`
            : "";
        return {
          url: `/home/recently-viewed${qs}`,
          method: "GET",
        };
      },
    }),

    getDeliveryPartners: builder.query<
      { deliveryPartners: { id: number; name: string; link?: string }[] },
      { storeId?: string } | void
    >({
      query: (params) => {
        const qs =
          params && Object.keys(params).length
            ? `?${Object.entries(params)
                .filter(([, v]) => v !== undefined && v !== null && v !== "")
                .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
                .join("&")}`
            : "";
        return {
          url: `/home/delivery-partner${qs}`,
          method: "GET",
        };
      },
    }),

    storeLocator: builder.query<any, void>({
      // <ResponseType, ArgType>
      query: () => ({
        url: "/home/store-locator",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useAddtoCartMutation,
  useGetHomeSectionsQuery,
  useSendNewsletterMutation,
  useStoreLocatorQuery,
  useGetCartCountQuery,
  useGetRecentlyViewedQuery,
  useGetDeliveryPartnersQuery,
} = homeApi;
