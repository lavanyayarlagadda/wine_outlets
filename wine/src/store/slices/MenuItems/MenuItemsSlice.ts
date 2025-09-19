import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { MenuResponse, MenuSection, Category } from "../../Interfaces/Home/Home";

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

    // Add a new category inside a specific menu section
    addCategory: (state, action: PayloadAction<{ sectionName: string; category: Category }>) => {
      const section = state.menuList.find((s) => s.name === action.payload.sectionName);
      if (section) {
        section.categories.push(action.payload.category);
      }
    },

    // Add a new item to a category in a section
    addItem: (
      state,
      action: PayloadAction<{
        sectionName: string;
        categoryTitle: string;
        item: string;
      }>
    ) => {
      const section = state.menuList.find((s) => s.name === action.payload.sectionName);
      const category = section?.categories.find((c) => c.title === action.payload.categoryTitle);
      if (category) {
        category.items.push(action.payload.item);
      }
    },
  },
});

export const { setMenuList, addCategory, addItem } = MenuItemsSlice.actions;
export default MenuItemsSlice.reducer;
