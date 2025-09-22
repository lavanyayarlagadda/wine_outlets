import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { useAddtoCartMutation } from "../../store/apis/Home/HomeAPI";

export const useProductCard = () => {
  const userId = localStorage.getItem("userId");
  const [addToCartMutation, { isLoading: mutationLoading }] = useAddtoCartMutation();
  const [counts, setCounts] = useState<Record<string, number>>({});

  const callApi = useCallback(
    async (productId: string | number, quantity: number) => {
      try {
        const payload = [
          {
            itemNumber: Number(productId),
            quantity: Number(quantity),
            userId: Number(userId),
          },
        ];
        const res = await addToCartMutation(payload).unwrap();
        toast.success("Added to Cart");
        return res;
      } catch (err: any) {
        const msg = err?.data?.error || err?.message || "Failed to update cart";
        toast.error(msg);
        console.error("addToCart error", err);
        throw err;
      }
    },
    [addToCartMutation, userId]
  );

  const add = useCallback(
    async (productId: string, quantity = 1) => {
      // increment local count first (optimistic)
      //   setCounts((prev) => {
      //     const prevCount = prev[productId] ?? 0;
      //     return { ...prev, [productId]: prevCount + quantity };
      //   });
      setCounts((prev) => ({ ...prev, [productId]: 1 }));
      try {
        await callApi(productId, quantity);
      } catch (e) {
        setCounts((prev) => {
          const prevCount = prev[productId] ?? 0;
          const newCount = Math.max(0, prevCount - quantity);
          return { ...prev, [productId]: newCount };
        });
      }
    },
    [callApi]
  );

  const set = useCallback(
    async (productId: string, newCount: number) => {
      const prev = counts[productId] ?? 0;
      const delta = newCount - prev;
      if (delta === 0) return;
      try {
        setCounts((p) => ({ ...p, [productId]: newCount }));
        await callApi(productId, Math.abs(delta));
      } catch (e) {
        setCounts((p) => ({ ...p, [productId]: prev }));
      }
    },
    [callApi, counts]
  );

  const increment = useCallback(
    async (productId: string) => {
      await add(productId, 1);
    },
    [add]
  );

  const decrement = useCallback(
    async (productId: string) => {
      const prev = counts[productId] ?? 0;
      if (prev <= 0) return;
      setCounts((p) => ({ ...p, [productId]: Math.max(0, (p[productId] ?? 0) - 1) }));
      try {
        await callApi(productId, -1 as unknown as number);
      } catch (e) {
        setCounts((p) => ({ ...p, [productId]: prev }));
      }
    },
    [callApi, counts]
  );

  return {
    counts,
    add,
    set,
    increment,
    decrement,
    isLoading: mutationLoading,
  } as const;
};

export default useProductCard;
