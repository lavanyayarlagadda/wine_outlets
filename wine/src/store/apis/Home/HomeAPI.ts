import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_API_URL_BASE } from "../../../api.config";
// import type { RecentlyViewedSection } from "../../Interfaces/LandingPageInterface/HomePageSectionsDataInterface";
import type { MenuResponse } from "../../Interfaces/Home/Home";
import type { ProductCategoryItem, SiteSettings } from "../../../constant/LandingPageData";

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
        itemNumber: number | string;
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
    getHomeSections: builder.mutation<
      SiteSettings,
      {
        userId: string | number;
        userIp: string;
        storeId: string | number;
      }
    >({
      query: (body) => ({
        url: "/home/sections",
        method: "POST",
        body,
      }),
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
      { title?: string; isVisible?: boolean; products: ProductCategoryItem[] },
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

      // Transform the API response to match ProductCategoryItem[]
      transformResponse: (response: any) => {
        const rv = response?.recentlyViewed ?? {};
        const productsRaw: any[] = Array.isArray(rv.products) ? rv.products : [];

        const products: ProductCategoryItem[] = productsRaw.map((p) => {
          // robust conversions & fallbacks
          const id = p?.id ?? p?.itemNumber ?? Math.random();
          const priceNum = Number(p?.price ?? p?.vipPrice ?? 0); // ensure number
          const vipPriceNum = Number(p?.vipPrice ?? p?.price ?? 0);

          return {
            id: String(id),
            title: p?.itemName ?? p?.title ?? "",
            imageUrl: p?.media?.url ?? "",
            tags: p?.tag ? [String(p.tag)] : undefined,
            rating: Number(p?.rating ?? 0),
            price: Number.isFinite(priceNum) ? priceNum : 0,
            vipPrice: Number.isFinite(vipPriceNum) ? vipPriceNum : 0,
            origin: p?.originName ?? p?.region ?? "",
            vintage: p?.year ?? p?.vintage ?? "",
            producer: p?.brandName ?? "",
            size: p?.size ?? "",
          } as ProductCategoryItem;
        });

        return {
          title: rv?.title ?? "Recently Viewed",
          isVisible: rv?.isVisible === true || String(rv?.isVisible) === "true",
          products,
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
  useGetHomeSectionsMutation,
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
