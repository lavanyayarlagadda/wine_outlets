export interface SubDepartment {
  id: number;
  name: string;
}

export interface SearchState {
 searchTerm: string;
}

export interface Department {
  title: string;
  subDepartments: SubDepartment[];
}

export interface MenuSection {
  id: number;
  groupName: string;
  departments: Department[];
}

export interface MenuResponse {
  menuList: MenuSection[];
}
