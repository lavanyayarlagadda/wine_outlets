import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_API_URL_BASE } from "../../../api.config";
import type { SignUpForm, SignUpResponse } from "../../Interfaces/AuthInterface/AuthIterface";

export const AuthAPI = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL_BASE,
  }),
  endpoints: (builder) => ({
    signIn: builder.mutation<any, { username: string; password: string }>({
      query: (credentials) => ({
        url: `/customer/signin`,
        method: "POST",
        body: credentials,
      }),
    }),

    signUp: builder.mutation<SignUpResponse, SignUpForm>({
      query: (newCustomer) => ({
        url: `/customer/signup`,
        method: "POST",
        body: newCustomer,
      }),
    }),
  }),
});
export const { useSignInMutation, useSignUpMutation } = AuthAPI;
