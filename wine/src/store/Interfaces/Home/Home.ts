export interface SearchState {
  searchTerm: string;
}

export interface MenuItem {
  id: number;
  listName: string;
}

export interface MenuSection {
  id: number;
  name: string;
  itemsList: MenuItem[];
}

export interface MenuResponse {
  menuList: MenuSection[];
}
