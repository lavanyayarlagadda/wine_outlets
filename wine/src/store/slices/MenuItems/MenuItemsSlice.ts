import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type {
  MenuResponse,
  MenuSection,
  Department,
  SubDepartment,
} from "../../Interfaces/Home/Home";

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
    addDepartment: (state, action: PayloadAction<{ groupId: number; department: Department }>) => {
      const section = state.menuList.find((s) => s.id === action.payload.groupId);
      if (section) {
        section.departments.push(action.payload.department);
      }
    },

    addSubDepartment: (
      state,
      action: PayloadAction<{ groupId: number; departmentTitle: string; subDept: SubDepartment }>
    ) => {
      const section = state.menuList.find((s) => s.id === action.payload.groupId);
      if (section) {
        const dept = section.departments.find((d) => d.title === action.payload.departmentTitle);
        if (dept) {
          dept.subDepartments.push(action.payload.subDept);
        }
      }
    },
  },
});

export const {  setMenuList, addDepartment, addSubDepartment  } = MenuItemsSlice.actions;
export default MenuItemsSlice.reducer;
