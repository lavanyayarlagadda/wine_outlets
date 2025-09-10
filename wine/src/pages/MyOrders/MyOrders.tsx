import CircularProgress from "@mui/material/CircularProgress";
import CancelOrderConfirm from "../../molecules/CancelOrderConfirm/CancelOrderConfirm";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import {
  PageContainer,
  Sidebar,
  SidebarButton,
  RedOutlineBtn,
  Content,
  OrdersList,
  OrderCard,
  OrderHeader,
  OrderMeta,
  OrderIdChip,
  DateText,
  PriceTag,
  OrderBody,
  ProductImage,
  ProductImageImg,
  ItemColRight,
  ItemCol,
  OrderBodyRow,
  ProductTitle,
  ActionRow,
  LeftActions,
  RightAction,
  GreyOutlineBtn,
  PageTitle,
  PageSubtitle,
  SectionDivider,
  ProductInfoGrid,
} from "./MyOrders.style";

import { InfoIcon } from "../../molecules/ProductListCard/ProductListCard.style";
import { InfoItem } from "../../organisms/ProductView/ProductDetails";
import { starIcon, calendarRed, sizeIcon, originIcon } from "../../assets";
import PastOrderCard from "../../molecules/PastOrderCard/PastOrderCard";
import { useNavigate } from "react-router-dom";

import { useMyOrders, formatOrderDate, formatCurrency } from "./MyOrders.hook";




export default function MyOrders() {
  const {
    orders,
    loading,
    selectedTab,
    setSelectedTab,
    cancelOrder,
    markReadyForPickup,
    viewInvoice,
    // activeOrderId,
    // clearActive,
  } = useMyOrders();
  const navigate = useNavigate();
   const [confirmOpen, setConfirmOpen] = useState(false);
 const [pendingCancelOrderId, setPendingCancelOrderId] = useState<string | null>(null);

  const filtered = orders.filter((o) =>
    selectedTab === "current"
      ? o.status !== "Cancelled" && o.status !== "Picked"
      : o.status === "Cancelled" || o.status === "Picked"
  );

  return (
    <PageContainer>
      <Sidebar elevation={0}>
        <SidebarButton active={selectedTab === "current"} onClick={() => setSelectedTab("current")}>
          Current Orders
        </SidebarButton>

        <SidebarButton active={selectedTab === "past"} onClick={() => setSelectedTab("past")}>
          Past Orders
        </SidebarButton>
      </Sidebar>

      <Content>
        <PageTitle variant="h6">
          {selectedTab === "current" ? "Current Orders" : "Past Orders"}
        </PageTitle>

        <PageSubtitle variant="body2">
          {selectedTab === "past" ? "Full order history with option to re-order or view invoice." : "View active orders with live tracking and estimated delivery" }
        </PageSubtitle>

        <SectionDivider />

        {loading ? (
          <CircularProgress />
        ) : (
          <OrdersList>
            {filtered.length === 0 ? (
              <Typography color="text.secondary">No orders found.</Typography>
            ) : (
              filtered.map((order) => {
                const item = order.items[0];
                // const isCancelled = order.status === "Cancelled";
                // const isReady = order.status === "Ready for Pickup";

                if (selectedTab === "past") {
                  return (
                    <PastOrderCard
                      key={order.orderId}
                      order={order}
                      onReorder={(id) => {
                        console.log("reorder", id);
                        // TODO: implement reorder flow
                      }}
                      onViewInvoice={(id) => viewInvoice(id)}
                    />
                  );
                }

                return (
                  <OrderCard key={order.orderId}>
                    <OrderHeader>
                      <OrderMeta>
                        <OrderIdChip label={order.orderId} color="default" />
                        <DateText>{formatOrderDate(order.date)}</DateText>
                      </OrderMeta>

                      <PriceTag variant="body1">{formatCurrency(order.totalAmount)}</PriceTag>
                    </OrderHeader>

                    <OrderBody>
                      <OrderBodyRow>
                        <ProductImage>
                          <ProductImageImg src={item.imageUrl} alt={item.name} />
                        </ProductImage>

                        <ProductInfoGrid>
                          <ItemCol>
                            <ProductTitle>{item.name}</ProductTitle>
                            <InfoItem
                              icon={<InfoIcon src={originIcon} alt="origin" />}
                              label="Origin:"
                              value={item.origin ?? "—"}
                            />
                            <InfoItem
                              icon={<InfoIcon src={sizeIcon} alt="size" />}
                              label="Size:"
                              value={item.size ?? "—"}
                            />
                          </ItemCol>

                          <ItemColRight>
                            <InfoItem
                              icon={<InfoIcon src={starIcon} alt="qty" />}
                              label="Qty:"
                              value={item.quantity ?? "—"}
                            />
                            <InfoItem
                              icon={<InfoIcon src={starIcon} alt="brand" />}
                              label="Brand:"
                              value={item.brand ?? "—"}
                            />
                            <InfoItem
                              icon={<InfoIcon src={calendarRed} alt="date" />}
                              label="Date:"
                              value={item.brand ?? "—"}
                            />
                          </ItemColRight>
                        </ProductInfoGrid>
                      </OrderBodyRow>

                      <ActionRow>
                        <LeftActions>
                          <RedOutlineBtn
                            onClick={() => markReadyForPickup(order.orderId)}
                            //   disabled={isReady || isCancelled}
                            aria-label="mark ready"
                          >
                            Ready for Pickup
                          </RedOutlineBtn>

                          <GreyOutlineBtn
                            onClick={() => {
                              setPendingCancelOrderId(order.orderId);
                              setConfirmOpen(true);
                            }}
                          >
                            Cancel Order
                          </GreyOutlineBtn>
                        </LeftActions>

                        <RightAction>
                          <GreyOutlineBtn
                            onClick={() => {
                              navigate(`/orders/invoice/${encodeURIComponent(order.orderId)}`);
                            }}
                          >
                            View Invoice
                          </GreyOutlineBtn>
                        </RightAction>
                      </ActionRow>
                    </OrderBody>
                  </OrderCard>
                );
              })
            )}
          </OrdersList>
        )}
      </Content>

      <CancelOrderConfirm
        open={confirmOpen}
        orderId={pendingCancelOrderId}
        onClose={() => {
          setConfirmOpen(false);
          setPendingCancelOrderId(null);
        }}
        onConfirm={(orderId) => {
          // call your existing cancelOrder from hook
          if (orderId) cancelOrder(orderId);
          setConfirmOpen(false);
          setPendingCancelOrderId(null);
        }}
      />
    </PageContainer>
  );
}
