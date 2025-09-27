import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CustomerProfile, ProfileState } from "../../Interfaces/MyProfile/MyProfileInterface";

const initialState: ProfileState = {
  profile: null,
  loading: false,
  error: null,
};

const MyProfileSlice = createSlice({
  name: "profileSlice",
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<CustomerProfile>) => {
      state.profile = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    clearProfile: (state) => {
      state.profile = null;
      state.error = null;
      state.loading = false;
    },
  },
});

export const { setProfile, setLoading, setError, clearProfile } = MyProfileSlice.actions;
export default MyProfileSlice.reducer;
