import React from 'react';
import CartOverview from '../../organisms/CartOverview/CartOverview';
import RecentlyViewed from '../../molecules/RecentlyViewed/RecentlyView';
import { Newsletter } from '../../molecules';

const CartOverViewPage = () => {
  return (
    <>
    <CartOverview/>
    <RecentlyViewed/>
    <Newsletter/>
    </>
  )
}

export default CartOverViewPage