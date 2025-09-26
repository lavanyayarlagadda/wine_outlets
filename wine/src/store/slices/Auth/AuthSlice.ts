import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthState } from "../../Interfaces/AuthInterface/AuthIterface";

const initialState: AuthState = {
  token: null,
  customer: null,
  isLoggedIn: false,
  isSignedIn:'guest'
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
    setIsSignedIn:(state,action:PayloadAction<any>)=>{
      state.isSignedIn = action.payload
    }
  },
});

export const { setCredentials, logout,setIsSignedIn } = AuthSlice.actions;
export default AuthSlice.reducer;
