import React from "react";
import CartOverview from "../../organisms/CartOverview/CartOverview";
import { Newsletter, RecentlyView } from "../../molecules";
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
          <RecentlyView />
        </>
      )}

      <Newsletter />
    </>
  );
};

export default CartOverViewPage;
