import { useCallback, useEffect, useState } from "react";
import { deal_img2 } from "../../assets";

export type OrderItem = {
  productId: string;
  name: string;
  brand?: string;
  origin?: string;
  size?: string;
  year?: number;
  quantity: number;
  price: number;
  imageUrl?: string;
};

export type Order = {
  orderId: string;
  date: string;
  status: string;
  totalAmount: number;
  items: OrderItem[];
};

const MOCK_DATA = {
  currentOrders: [
    {
      orderId: "ORD-2024-001",
      date: "2025-01-21",
      status: "Ready for Pickup",
      totalAmount: 18.14,
      items: [
        {
          productId: "P-1001",
          name: "Château Margaux - 2018",
          brand: "Château Margaux",
          origin: "California",
          size: "750ml - Standard",
          year: 2021,
          quantity: 1,
          price: 18.14,
          imageUrl: deal_img2,
        },
      ],
    },
    {
      orderId: "ORD-2024-002",
      date: "2025-02-05",
      status: "Processing",
      totalAmount: 42.5,
      items: [
        {
          productId: "P-1002",
          name: "Jim Beam Bourbon Whiskey",
          brand: "Jim Beam",
          origin: "Kentucky",
          size: "750ml - Standard",
          year: 2021,
          quantity: 2,
          price: 21.25,
          imageUrl: deal_img2,
        },
      ],
    },
  ],
  pastOrders: [
    {
      orderId: "ORD-2023-099",
      date: "2024-12-21",
      status: "Picked",
      totalAmount: 28.0,
      items: [
        {
          productId: "P-2001",
          name: "Old Vine Zinfandel",
          brand: "Old Vine",
          origin: "California",
          size: "750ml - Standard",
          year: 2020,
          quantity: 1,
          price: 28.0,
          imageUrl: deal_img2,
        },
      ],
    },
    {
      orderId: "ORD-2023-100",
      date: "2024-11-11",
      status: "Cancelled",
      totalAmount: 10.0,
      items: [
        {
          productId: "P-3001",
          name: "Sample Beer",
          brand: "Brew Co",
          origin: "Oregon",
          size: "330ml",
          year: 2022,
          quantity: 2,
          price: 5.0,
          imageUrl: deal_img2,
        },
      ],
    },
  ],
};

export function formatOrderDate(value?: string | number | Date | null, locale = "en-US"): string {
  if (value === undefined || value === null || value === "") return "";

  const date =
    value instanceof Date
      ? value
      : typeof value === "number"
      ? new Date(value)
      : new Date(String(value));

  if (!isFinite(date.getTime())) return String(value);

  return new Intl.DateTimeFormat(locale, {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);

/** Hook */
export function useMyOrders() {
  const [currentOrders, setCurrentOrders] = useState<Order[]>([]);
  const [pastOrders, setPastOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedTab, setSelectedTab] = useState<"current" | "past">("current");
  const [activeOrderId, setActiveOrderId] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => {
      setCurrentOrders(JSON.parse(JSON.stringify(MOCK_DATA.currentOrders)));
      setPastOrders(JSON.parse(JSON.stringify(MOCK_DATA.pastOrders)));
      setLoading(false);
    }, 250);

    return () => clearTimeout(t);
  }, []);

  const cancelOrder = useCallback((orderId: string) => {
    setCurrentOrders((prevCurrent) => prevCurrent.filter((o) => o.orderId !== orderId));
    setPastOrders((prevPast) => [
      ...prevPast,
      {
        orderId,
        date: new Date().toISOString(),
        status: "Cancelled",
        totalAmount: 0,
        items: [],
      },
    ]);
  }, []);

  const markReadyForPickup = useCallback((orderId: string) => {
    setCurrentOrders((prev) =>
      prev.map((o) => (o.orderId === orderId ? { ...o, status: "Ready for Pickup" } : o))
    );
  }, []);

  const viewInvoice = useCallback((orderId: string) => {
    setActiveOrderId(orderId);
  }, []);

  const clearActive = useCallback(() => setActiveOrderId(null), []);

  return {
    currentOrders,
    pastOrders,
    loading,
    selectedTab,
    setSelectedTab,
    activeOrderId,
    setActiveOrderId,
    clearActive,
    cancelOrder,
    markReadyForPickup,
    viewInvoice,
  };
}
