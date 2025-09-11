import React from "react";
// import { CartLeft, CartOverviewContainer, CartRight } from './CartOverview.style'
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
} from "../CartOverview/CartOverview.style";
import { Typography } from "@mui/material";
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

const CartOverview = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error } = useCartOverView();
  if (error !== "") return <Typography color="error">{error}</Typography>;

  return (
    <MainContainer>
      <CartOverViewHeader>Cart Overview</CartOverViewHeader>
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
            {cartOverviewData.items.map((item) => (
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
                  unitPrice={item.unitPrice}
                  quantity={item.quantity}
                />
              </>
            ))}
          </LeftContent>
        </ProductListWrapper>
        <ContentWrapper>
          {cartOverviewData.cartSummary && (
            <OrderSummary
              title="Order Summary"
              itemCount={cartOverviewData.cartSummary.itemCount}
              items={[
                { label: "Subtotal", value: cartOverviewData.cartSummary.subtotal },
                { label: "Estimated Tax", value: cartOverviewData.cartSummary.estimatedTax },
              ]}
              totalItem={{ label: "Total", value: cartOverviewData.cartSummary.total }}
              vipCodeMessage={cartOverviewData.cartSummary.vipCodeMessage}
            />
          )}
          {cartOverviewData && (
            <PickupInformation
              title="Pickup Information"
              storeName={cartOverviewData.pickupInfo.storeName}
              address={cartOverviewData.pickupInfo.address}
              phone={cartOverviewData.pickupInfo.phone}
              hours={cartOverviewData.pickupInfo.hours}
              footerTitle="Pickp Date & Time"
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
    </MainContainer>
  );
};

export default CartOverview;
