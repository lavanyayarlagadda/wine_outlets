export interface Range {
  min: number;
  max: number;
}

export interface ProductListItems {
  cartList: string[];
  selectedNames: Record<string, string[]>;
  productsData: any;
  productsViewData: any;
  vintageYearsData: any;
}
