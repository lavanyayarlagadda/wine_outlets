// Myorders.tsx
import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CancelIcon from "@mui/icons-material/Cancel";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

import {
  PageContainer,
  Sidebar,
  SidebarButton,
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
  SmallMeta,
  ActionRow,
  LeftActions,
  RightAction,
  PrimaryButton,
  SecondaryButton,
} from "./MyOrders.style";

import { useMyOrders, formatOrderDate } from "./MyOrders.hook";

/** Helper to format currency */
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
        <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
          Orders
        </Typography>

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

        <Divider sx={{ mb: 2 }} />

        {loading ? (
          <CircularProgress />
        ) : (
          <OrdersList>
            {filtered.length === 0 ? (
              <Typography color="text.secondary">No orders found.</Typography>
            ) : (
              filtered.map((order) => {
                const item = order.items[0];
                const isCancelled = order.status === "Cancelled";
                const isReady = order.status === "Ready for Pickup";

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
                      <ProductImage
                        src={item.imageUrl}
                        alt={item.name}
                        variant="square"
                        sx={{ objectFit: "cover" }}
                      />

                      <ProductInfo>
                        <ProductTitle variant="subtitle1">{item.name}</ProductTitle>

                        <SmallMeta>
                          <strong>Origin:</strong> {item.origin ?? "—"} {" • "}
                          <strong>Brand:</strong> {item.brand ?? "—"}
                        </SmallMeta>

                        <SmallMeta>
                          <strong>Size:</strong> {item.size ?? "—"} {" • "}
                          <strong>Year:</strong> {item.year ?? "—"} {" • "}
                          <strong>Qty:</strong> {item.quantity}
                        </SmallMeta>

                        <SmallMeta>
                          <strong>Item Price:</strong> {formatCurrency(item.price)}
                        </SmallMeta>

                        <ActionRow>
                          <LeftActions>
                            <PrimaryButton
                              variant="contained"
                              startIcon={<LocalShippingIcon />}
                              onClick={() => markReadyForPickup(order.orderId)}
                              disabled={isReady || isCancelled}
                              aria-label="mark ready"
                            >
                              {isReady ? "Ready" : "Ready for Pickup"}
                            </PrimaryButton>

                            <SecondaryButton
                              variant="outlined"
                              startIcon={<CancelIcon />}
                              onClick={() => cancelOrder(order.orderId)}
                              disabled={isCancelled}
                              aria-label="cancel order"
                            >
                              {isCancelled ? "Cancelled" : "Cancel Order"}
                            </SecondaryButton>
                          </LeftActions>

                          <RightAction>
                            <IconButton
                              size="small"
                              aria-label="view invoice"
                              onClick={() => viewInvoice(order.orderId)}
                            >
                              <OpenInNewIcon />
                            </IconButton>

                            <Typography variant="caption" color="text.secondary">
                              {order.status}
                            </Typography>
                          </RightAction>
                        </ActionRow>
                      </ProductInfo>
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
