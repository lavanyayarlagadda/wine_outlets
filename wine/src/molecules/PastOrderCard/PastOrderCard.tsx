// src/components/molecules/PastOrderCard/PastOrderCard.tsx
import React from "react";
import {
  OrderCard,
  OrderHeader,
  OrderMeta,
  OrderIdChip,
  DateText,
  PriceTag,
  OrderBody,
  ItemRow,
  ProductImage,
  ProductImageImg,
  ItemDetails,
  ProductTitle,
  ItemRight,
  ItemPrice,
  ItemSubPrice,
  GreyOutlineBtn,
  OrderFooter,
  RedOutlineBtn,
} from "../../pages/MyOrders/MyOrders.style";
import { InfoItem } from "../../organisms/ProductView/ProductDetails";
import { InfoIcon } from "../ProductListCard/ProductListCard.style";
import { sizeIcon, starIcon, calendarRed } from "../../assets";
import type { Order } from "../../pages/MyOrders/MyOrders.hook";
import { formatOrderDate } from "../../pages/MyOrders/MyOrders.hook";

export interface PastOrderCardProps {
  order: Order;
  onReorder?: (orderId: string) => void;
  onViewInvoice?: (orderId: string) => void;
}

export default function PastOrderCard({ order, onReorder, onViewInvoice }: PastOrderCardProps) {
  return (
    <OrderCard>
      <OrderHeader>
        <OrderMeta>
          <OrderIdChip label={order.orderId} color="default" />
          <DateText>{formatOrderDate(order.date)}</DateText>
        </OrderMeta>

        <PriceTag variant="body1">
          {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(order.totalAmount)}
        </PriceTag>
      </OrderHeader>

      <OrderBody>
        {order.items.map((item) => {
          const subtotal = item.price * item.quantity;
          return (
            <ItemRow key={item.productId}>
              <ItemDetails>
                <ProductImage>
                  <ProductImageImg src={item.imageUrl} alt={item.name} />
                </ProductImage>

                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <ProductTitle>{item.name}</ProductTitle>

                  <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <InfoItem icon={<InfoIcon src={sizeIcon} alt="size" />} label="Size:" value={item.size ?? "—"} />
                  </div>

                  <GreyOutlineBtn onClick={() => console.log("add review", item.productId)}>Add Review</GreyOutlineBtn>
                </div>
              </ItemDetails>

              <ItemRight>
                <div style={{ display: "flex", gap: 12, alignItems: "center", color: "#b00020" }}>
                  <InfoIcon src={starIcon} alt="qty" />
                  <div>Qty: {item.quantity}</div>
                </div>

                <div style={{ display: "flex", gap: 12, alignItems: "center", color: "#b00020" }}>
                  <InfoIcon src={calendarRed} alt="year" />
                  <div>Year: {item.year ?? "—"}</div>
                </div>

                <div style={{ height: 8 }} />

                <ItemSubPrice>{new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(item.price)} Each x 2 = <ItemPrice>
                  {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(subtotal)}
                </ItemPrice></ItemSubPrice>
                
              </ItemRight>
            </ItemRow>
          );
        })}

        <OrderFooter>
          <RedOutlineBtn onClick={() => onReorder?.(order.orderId)}>Reorder</RedOutlineBtn>
          <GreyOutlineBtn onClick={() => onViewInvoice?.(order.orderId)}>View Invoice</GreyOutlineBtn>
        </OrderFooter>
      </OrderBody>
    </OrderCard>
  );
}
