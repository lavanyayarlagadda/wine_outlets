import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { SearchState } from "../../Interfaces/Home/Home";

const initialState: SearchState = {
  searchTerm: "",
};

const HomeSlice = createSlice({
  name: "homeSlice",
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setSearchTerm } = HomeSlice.actions;
export default HomeSlice.reducer;
