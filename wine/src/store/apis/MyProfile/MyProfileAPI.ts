import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_API_URL_BASE } from "../../../api.config";
import type { CustomerProfile } from "../../Interfaces/MyProfile/MyProfileInterface";

export const profileApi = createApi({
  reducerPath: "profileApi",
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
    getProfile: builder.mutation<CustomerProfile, { CustomerID: string }>({
      query: (body) => ({
        url: `/my-profile/profile`,
        method: "POST",
        body,
      }),
    }),
    updateProfile: builder.mutation<CustomerProfile, CustomerProfile>({
      query: (body) => ({
        url: `/my-profile/update-profile`,
        method: "POST",
        body,
      }),
    }),
    updatePassword: builder.mutation<
      { success: boolean },
      { CustomerID: string; oldPassword: string; newPassword: string }
    >({
      query: (body) => ({
        url: `/my-profile/update-password`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetProfileMutation, useUpdateProfileMutation, useUpdatePasswordMutation } = profileApi;
