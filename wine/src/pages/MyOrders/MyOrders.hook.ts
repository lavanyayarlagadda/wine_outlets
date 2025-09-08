// myOrder.hook.tsx
import { useCallback, useEffect, useState } from "react";

/** Types matching your mockData */
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
  status: string; // e.g. "Ready for Pickup", "Processing", "Cancelled"
  totalAmount: number;
  items: OrderItem[];
};

/** Your mock JSON (embedded for demo) */
const MOCK_DATA: { orders: Order[] } = {
  orders: [
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
          imageUrl: "https://example.com/images/wine-1.jpg",
        },
      ],
    },
  ],
};

export function formatOrderDate(
  value?: string | number | Date | null,
  locale = "en-US"
): string {
  if (value === undefined || value === null || value === "") return "";

  const date =
    value instanceof Date ? value : typeof value === "number" ? new Date(value) : new Date(String(value));

  if (!isFinite(date.getTime())) return String(value);

  return new Intl.DateTimeFormat(locale, {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

/** Hook */
export function useMyOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedTab, setSelectedTab] = useState<"current" | "past">("current");
  const [activeOrderId, setActiveOrderId] = useState<string | null>(null);

  useEffect(() => {
    // simulate API loading
    setLoading(true);
    const t = setTimeout(() => {
      // deep clone to avoid accidental mutation
      const cloned = JSON.parse(JSON.stringify(MOCK_DATA.orders)) as Order[];
      setOrders(cloned);
      setLoading(false);
    }, 300);

    return () => clearTimeout(t);
  }, []);

  const cancelOrder = useCallback((orderId: string) => {
    setOrders(prev =>
      prev.map(o =>
        o.orderId === orderId
          ? {
              ...o,
              status: "Cancelled",
            }
          : o
      )
    );
  }, []);

  const markReadyForPickup = useCallback((orderId: string) => {
    setOrders(prev =>
      prev.map(o =>
        o.orderId === orderId
          ? {
              ...o,
              status: "Ready for Pickup",
            }
          : o
      )
    );
  }, []);

  const viewInvoice = useCallback((orderId: string) => {
    // demo: set active order id so UI can open modal / route
    setActiveOrderId(orderId);
  }, []);

  const clearActive = useCallback(() => setActiveOrderId(null), []);

  return {
    orders,
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
