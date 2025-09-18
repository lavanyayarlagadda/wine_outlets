export interface SearchState {
  searchTerm: string;
}

export interface Category {
  title: string;
  items: string[];
}


export interface MenuSection {
  name: string;
  categories: Category[];
}


export interface MenuResponse {
  menuList: MenuSection[];
}