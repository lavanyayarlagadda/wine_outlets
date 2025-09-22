import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { MenuResponse, MenuSection, MenuItem } from "../../Interfaces/Home/Home";

const initialState: MenuResponse = {
  menuList: [],
};

const MenuItemsSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    // Replace full menu list
    setMenuList: (state, action: PayloadAction<MenuSection[]>) => {
      state.menuList = action.payload;
    },

    // Add a new item to a section
    addItemToSection: (state, action: PayloadAction<{ sectionName: string; item: MenuItem }>) => {
      const section = state.menuList.find((s) => s.name === action.payload.sectionName);
      if (section) {
        section.itemsList.push(action.payload.item);
      }
    },
  },
});

export const { setMenuList, addItemToSection } = MenuItemsSlice.actions;
export default MenuItemsSlice.reducer;
