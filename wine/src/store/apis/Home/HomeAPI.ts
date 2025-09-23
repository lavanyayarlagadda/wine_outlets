import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_API_URL_BASE } from "../../../api.config";
import type {
  LandingPageResponse,
  RecentlyViewedSection,
} from "../../Interfaces/LandingPageInterface/HomePageSectionsDataInterface";
import type { MenuResponse } from "../../Interfaces/Home/Home";

export const homeApi = createApi({
  reducerPath: "homeApi",
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
    addtoCart: builder.mutation<
      any,
      {
        itemNumber: number;
        quantity: number;
        userId: number | string;
        storeId: number;
        userIp: string;
      }[]
    >({
      query: (newItem) => ({
        url: "/home/add-to-cart",
        method: "POST",
        body: newItem,
      }),
    }),
    removeFromCart: builder.mutation<any, { orderId: number; itemNumber: string }>({
      query: (newItem) => ({
        url: "/home/remove-from-cart",
        method: "POST",
        body: newItem,
      }),
    }),
    getHeaderBanners: builder.query<
      { banners: { id?: number; message: string; action: { label?: string; url?: string } }[] },
      { StoreId: number }
    >({
      query: ({ StoreId }) => ({
        url: "/home/header-banners",
        method: "GET",
        params: { StoreId },
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
        userId: number | string;
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
    getCartCount: builder.query<
      any,
      { userId?: number | string; storeId?: string; userIp?: string } | void
    >({
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
    }),
    getRecentlyViewed: builder.query<
      RecentlyViewedSection,
      { userId?: number | string; limit?: number; userIp?: string } | void
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
                .filter(([, v]) => v !== undefined && v !== null) // remove only undefined/null
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
      query: () => ({
        url: "/home/store-locator",
        method: "GET",
      }),
    }),

    storeSearchlocator: builder.mutation<any, { storeSearchText: string }>({
      query: (newItem) => ({
        url: "/home/store-location-search",
        method: "POST",
        body: newItem,
      }),
    }),

    getMenuItems: builder.query<MenuResponse, void>({
      query: () => "/home/menu-items",
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
  useGetHeaderBannersQuery,
  useStoreSearchlocatorMutation,
  useGetMenuItemsQuery,
  useRemoveFromCartMutation,
} = homeApi;
