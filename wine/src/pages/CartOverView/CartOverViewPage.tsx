import React from "react";
import CartOverview from "../../organisms/CartOverview/CartOverview";
import { Newsletter, RecentlyView } from "../../molecules";
import OrderConfirmed from "../../organisms/CartOverview/OrderConfirmed";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import { useGetRecentlyViewedQuery } from "../../store/apis/Home/HomeAPI";
import { getClientIdentifierForPayload } from "../../utils/useClientIdentifier";
import { Typography } from "@mui/material";

const CartOverViewPage = () => {
  const { placeOrder } = useSelector((store: RootState) => store.cartOverViewSlice);
  const {
    data: rvData,
    isLoading: rvLoading,
    isError: rvError,
  } = useGetRecentlyViewedQuery({
    ...getClientIdentifierForPayload(),
  });
    
  return (
    <>
      {placeOrder ? (
        <OrderConfirmed />
      ) : (
        <>
          <CartOverview />
         {rvLoading ? <Typography>Recently Viewd Products Loading</Typography> : rvError ? <Typography>Error loading Recently Viewed Products</Typography> :
        <RecentlyView
          content={rvData?.products ?? []}
          title={rvData?.title}
          isVisible={rvData?.isVisible ?? true}
          cardsPerSlide={4}
        />}
        </>
      )}

      <Newsletter />
    </>
  );
};

export default CartOverViewPage;
