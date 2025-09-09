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
  ProductInfo,
  ProductTitle,
  ActionRow,
  LeftActions,
  RightAction,
  CancelOrder,
} from "./MyOrders.style";

import { InfoIcon } from "../../molecules/ProductListCard/ProductListCard.style";
import { InfoItem } from "../../organisms/ProductView/ProductDetails";
import { starIcon, calendarRed, sizeIcon, originIcon } from "../../assets";

import { useMyOrders, formatOrderDate } from "./MyOrders.hook";

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);

/** Component */
export default function MyOrders() {
  const {
    orders,
    loading,
    selectedTab,
    setSelectedTab,
    cancelOrder,
    markReadyForPickup,
    viewInvoice,
    activeOrderId,
    clearActive,
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
        <Typography variant="h6" sx={{ mb: 0.5 }}>
          {selectedTab === "current" ? "Current Orders" : "Past Orders"}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          View active orders with live tracking and estimated delivery
        </Typography>

        <Divider sx={{ mb: 4 }} />

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
                      <div
                        style={{
                          display: "flex",
                          gap: "16px",
                          padding: "16px 0",
                          borderBottom: "1px solid #E0E0E0",
                          alignItems: "center",
                        }}
                      >
                        <ProductImage sx={{}}>
                          <img
                            src={item.imageUrl}
                            alt={item.name}
                            style={{ width: "100%", height: "100%", objectFit: "contain" }}
                          />
                        </ProductImage>

                        <ProductInfo
                          sx={{ display: "flex", justifyContent: "space-between", gap: "24px" }}
                        >
                          <div
                            style={{
                              width: "50%",
                              height: "120px",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "space-between",
                            }}
                          >
                            <ProductTitle>{item.name}</ProductTitle>

                            <InfoItem
                              icon={<InfoIcon src={originIcon} alt="origin" />}
                              label="Origin:"
                              value={item.origin ?? "—"}
                            />

                            <InfoItem
                              icon={<InfoIcon src={sizeIcon} alt="origin" />}
                              label="Size:"
                              value={item.size ?? "—"}
                            />
                          </div>

                          <div
                            style={{
                              width: "50%",
                              height: "120px",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "space-between",
                              alignItems: "flex-end",
                            }}
                          >
                            <InfoItem
                              icon={<InfoIcon src={starIcon} alt="origin" />}
                              label="Qty:"
                              value={item.quantity ?? "—"}
                            />
                            <InfoItem
                              icon={<InfoIcon src={starIcon} alt="origin" />}
                              label="Brand:"
                              value={item.brand ?? "—"}
                            />
                            <InfoItem
                              icon={<InfoIcon src={calendarRed} alt="origin" />}
                              label="Brand:"
                              value={item.brand ?? "—"}
                            />
                          </div>
                        </ProductInfo>
                      </div>
                      {/* <SmallMeta>
                          <strong>Item Price:</strong> {formatCurrency(item.price)}
                        </SmallMeta> */}

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

        {/* small invoice indicator for demo */}
        {activeOrderId ? (
          <Typography
            variant="caption"
            sx={{ mt: 2, display: "flex", alignItems: "center", gap: 1 }}
            color="text.secondary"
          >
            Viewing invoice for <strong>{activeOrderId}</strong>
            <button
              onClick={() => clearActive()}
              style={{
                marginLeft: 8,
                padding: "4px 8px",
                borderRadius: 6,
                border: "1px solid rgba(0,0,0,0.12)",
                background: "transparent",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </Typography>
        ) : null}
      </Content>
    </PageContainer>
  );
}
