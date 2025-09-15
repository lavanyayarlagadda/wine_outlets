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
import cartOverviewData from "../../constant/cartOverviewData";
import OrderSummary from "../../molecules/OrderSummary/OrderSummary";
import PickupInformation from "../../molecules/PickupInfo/PickupInfo";
import { DividerLine } from "../../molecules/OrderSummary/OrderSummary.style";
import AddToCart from "../../atoms/CustomButton/AddToCart";
import { useDispatch } from "react-redux";
import { setPlaceOrder } from "../../store/slices/CartOverView/CartOverView";
import { useCartOverView } from "./CartOverview.hook";
import { useNavigate } from "react-router-dom";
import { StyledSkeletonRect } from "../Filter/FilterPanel.style";

const CartOverview = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartDetails, isLoading, slotData, slotLoading, handleToggleFavorite } = useCartOverView();
  console.log(cartDetails, "CARTDETAILS");

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
      ) : cartDetails?.products?.length > 0 ? (
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

              {cartDetails?.products?.map((item: any) => (
                <>
                  <DividerLine />
                  <CartProduct
                    key={item.id}
                    imageUrl={item.imageUrl}
                    name={item.name}
                    origin={item.origin}
                    brand={item.brand}
                    size={item.size}
                    year={item.year}
                    unitPrice={item.discountedPrice}
                    quantity={item.Quantity}
                    isWishList={item.isWishList}
                    productId={item.productId}
                    handleToggleFavorite={handleToggleFavorite}
                    // wishListLoading={false}
                    PricingProps={{
                      price: item.price,
                      discountedPrice: item.discountedPrice,
                      Quantity: item.Quantity,
                      totalPrice: item.totalPrice,
                    }}
                  />
                </>
              ))}
            </LeftContent>
          </ProductListWrapper>
          <ContentWrapper>
            {cartDetails?.orderSummary && (
              <OrderSummary
                title="Order Summary"
                itemCount={cartDetails?.products?.length}
                items={[
                  { label: "Subtotal", value: cartDetails?.orderSummary?.subtotal },
                  { label: "Estimated Tax", value: cartDetails?.orderSummary?.tax },
                ]}
                totalItem={{ label: "Total", value: cartDetails?.orderSummary?.total }}
                // vipCodeMessage={cartOverviewData.cartSummary.vipCodeMessage}
              />
            )}
            {cartDetails?.pickup && (
              <PickupInformation
                title="Pickup Information"
                storeName={cartDetails.pickup.locationName}
                address={cartDetails.pickup.address}
                phone={cartOverviewData.pickupInfo.phone}
                hours={cartDetails.pickup.timeSlot}
                footerTitle="Pickp Date & Time"
                slotsData={slotData}
                slotDataLoading={slotLoading}
              />
            )}

            <AddToCart
              label="Place Order"
              onClick={() => {
                (dispatch(setPlaceOrder(true)), window.scrollTo(0, 0));
              }}
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
