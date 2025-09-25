import React from "react";
import {
  ContentWrapper,
  LayoutContainer,
  ProductListWrapper,
  MainContainer,
  ProductHeader,
  HeaderTitle,
  HeaderAction,
  BorderedIcon,
  SmallAddIcon,
  LeftContent,
  CartOverViewHeader,
  NoDataText,
} from "../CartOverview/CartOverview.style";
import CartProduct from "../../molecules/CartProduct/CartProduct";
import OrderSummary from "../../molecules/OrderSummary/OrderSummary";
import PickupInformation from "../../molecules/PickupInfo/PickupInfo";
import { DividerLine } from "../../molecules/OrderSummary/OrderSummary.style";
import AddToCart from "../../atoms/CustomButton/AddToCart";
// import { useDispatch } from "react-redux";
// import { setPlaceOrder } from "../../store/slices/CartOverView/CartOverView";
import { useCartOverView } from "./CartOverview.hook";
import { useNavigate } from "react-router-dom";
import { StyledSkeletonRect } from "../Filter/FilterPanel.style";
// import { setPlaceOrder } from "../../store/slices/CartOverView/CartOverView";

const CartOverview = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    isLoading,
    slotData,
    slotLoading,
    handleToggleFavorite,
    handleAddToCart,
    handleRemoveFromCart,
    cartOverview,
    offDaysData,
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
    handlePlaceOrder,
    // cartId
  } = useCartOverView();

  const isPlaceOrderDisabled = !selectedDate || !selectedTime;

  return (
    <MainContainer>
      <CartOverViewHeader>Cart Overview</CartOverViewHeader>
      {isLoading ? (
        Array.from({ length: 3 }).map((_, idx) => (
          <React.Fragment key={idx}>
            <DividerLine />
            <StyledSkeletonRect />
          </React.Fragment>
        ))
      ) : cartOverview?.products?.length > 0 ? (
        <LayoutContainer>
          <ProductListWrapper>
            <LeftContent>
              <ProductHeader>
                <HeaderTitle>Product List</HeaderTitle>

                <HeaderAction onClick={() => navigate("/")}>
                  <BorderedIcon>
                    <SmallAddIcon />
                  </BorderedIcon>
                  Continue Shopping
                </HeaderAction>
              </ProductHeader>

              {cartOverview?.products?.map((item: any) => (
                <>
                  <DividerLine />
                  <CartProduct
                    key={item.productId}
                    imageUrl={item.imageUrl}
                    name={item.name}
                    origin={item.origin}
                    brand={item.brand}
                    size={item.size}
                    year={item.year}
                    unitPrice={item.price}
                    quantity={item.Quantity}
                    isWishList={item.isWishList}
                    productId={item.productId}
                    handleToggleFavorite={handleToggleFavorite}
                    handleAddToCart={handleAddToCart}
                    handleRemoveFromCart={handleRemoveFromCart}
                    // wishListLoading={false}
                    PricingProps={{
                      price: item.price,
                      discountedPrice: item.discountedPrice,
                      Quantity: item.Quantity,
                      totalPrice: item.totalPrice,
                    }}
                    // orderId={item.id}
                    itemNumber={item.productId}
                  />
                </>
              ))}
            </LeftContent>
          </ProductListWrapper>
          <ContentWrapper>
            {cartOverview?.orderSummary && (
              <OrderSummary
                title="Order Summary"
                itemCount={cartOverview?.products?.length}
                items={[
                  { label: "Subtotal", value: cartOverview?.orderSummary?.subtotal },
                  { label: "Estimated Tax", value: cartOverview?.orderSummary?.tax },
                ]}
                totalItem={{ label: "Total", value: cartOverview?.orderSummary?.total }}
                // vipCodeMessage={cartOverviewData.cartSummary.vipCodeMessage}
              />
            )}
            {cartOverview?.pickup && (
              <PickupInformation
                title="Pickup Information"
                storeName={cartOverview.pickup.locationName}
                address={cartOverview.pickup.address}
                phone={cartOverview.pickup.phone}
                hours={cartOverview.pickup.timeSlot}
                footerTitle="Pickp Date & Time"
                slotsData={slotData}
                slotDataLoading={slotLoading}
                offDaysData={offDaysData}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                selectedTime={selectedTime}
                setSelectedTime={setSelectedTime}
              />
            )}

            <AddToCart
              label="Place Order"
              disabled={isPlaceOrderDisabled}
              id={0}
              onClick={() => handlePlaceOrder()}
              variantType="filled"
            />
          </ContentWrapper>
        </LayoutContainer>
      ) : (
        <NoDataText variant="body2">No data available</NoDataText>
      )}
    </MainContainer>
  );
};

export default CartOverview;
