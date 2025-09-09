import React from "react";
import CartOverview from "../../organisms/CartOverview/CartOverview";
import RecentlyViewed from "../../molecules/RecentlyViewed/RecentlyView";
import { Newsletter } from "../../molecules";
import OrderConfirmed from "../../organisms/CartOverview/OrderConfirmed";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";

const CartOverViewPage = () => {
  const { placeOrder } = useSelector((store: RootState) => store.cartOverViewSlice);
  return (
    <>
      {placeOrder ? (
        <OrderConfirmed />
      ) : (
        <>
          <CartOverview />
          <RecentlyViewed />
        </>
      )}

      <Newsletter />
    </>
  );
};

export default CartOverViewPage;
