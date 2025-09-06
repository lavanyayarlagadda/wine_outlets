export interface Stores {
  id: number;
  name: string;
  address: string;
  phone: string;
  hours: string;
  distance: string;
  mapUrl: string;
}

export interface StoresResponse {
  stores: Stores[];
}

export const storesData: StoresResponse = {
  stores: [
    {
      id: 1,
      name: "Manasquan Wine Outlet",
      address: "2439 NJ-34, Manasquan, NJ 08736",
      phone: "123-456-7890",
      hours: "9AM–9PM",
      distance: "0.5 mi",
      mapUrl: "https://maps.google.com/?q=2439+NJ-34+Manasquan+NJ+08736",
    },
    {
      id: 2,
      name: "Point Pleasant Wine Outlet",
      address: "526 Arnold Ave, Point Pleasant Beach, NJ 08742",
      phone: "123-456-7891",
      hours: "10AM–8PM",
      distance: "2.1 mi",
      mapUrl: "https://maps.google.com/?q=526+Arnold+Ave+Point+Pleasant+Beach+NJ+08742",
    },
  ],
};
