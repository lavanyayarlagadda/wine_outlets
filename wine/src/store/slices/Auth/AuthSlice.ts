import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthState } from "../../Interfaces/AuthInterface/AuthIterface";

const initialState: AuthState = {
  token: null,
  customer: null,
  isLoggedIn: false,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{ token: string; customer: any }>) => {
      state.token = action.payload.token;
      state.customer = action.payload.customer;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.token = null;
      state.customer = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setCredentials, logout } = AuthSlice.actions;
export default AuthSlice.reducer;
