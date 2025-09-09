import CircularProgress from "@mui/material/CircularProgress";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import {
  PageContainer,
  Sidebar,
  SidebarButton,
  ReadyForPickUp,
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
  CancelOrder,
  PageTitle,
  PageSubtitle,
  SectionDivider,
  ProductInfoGrid,
} from "./MyOrders.style";

import { InfoIcon } from "../../molecules/ProductListCard/ProductListCard.style";
import { InfoItem } from "../../organisms/ProductView/ProductDetails";
import { starIcon, calendarRed, sizeIcon, originIcon } from "../../assets";

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
          View active orders with live tracking and estimated delivery
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
                          <ReadyForPickUp
                            onClick={() => markReadyForPickup(order.orderId)}
                            //   disabled={isReady || isCancelled}
                            aria-label="mark ready"
                          >
                            Ready for Pickup
                          </ReadyForPickUp>

                          <CancelOrder onClick={() => cancelOrder(order.orderId)}>
                            Cancel Order
                          </CancelOrder>
                        </LeftActions>

                        <RightAction>
                          <CancelOrder onClick={() => viewInvoice(order.orderId)}>
                            Ready for Pickup
                          </CancelOrder>
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
    </PageContainer>
  );
}
