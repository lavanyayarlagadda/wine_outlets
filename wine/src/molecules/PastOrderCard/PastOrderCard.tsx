// src/components/molecules/PastOrderCard/PastOrderCard.tsx
import {
  OrderCard,
  OrderHeader,
  OrderMeta,
  OrderIdChip,
  DateText,
  PriceTag,
  OrderBody,
  ProductImage,
  ProductImageImg,
  ProductTitle,
  ItemPrice,
  ItemSubPrice,
  GreyOutlineBtn,
  OrderFooter,
  RedOutlineBtn,
  OrderBodyRow,
  ProductInfoGrid,
  ItemCol,
  ItemColRight,
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
          {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
            order.totalAmount
          )}
        </PriceTag>
      </OrderHeader>

      <OrderBody>
        {order.items.map((item) => {
          const subtotal = item.price * item.quantity;
          return (
            <OrderBody key={item.productId}>
              {/* <ItemDetails> */}
              <OrderBodyRow>
                <ProductImage>
                  <ProductImageImg src={item.imageUrl} alt={item.name} />
                </ProductImage>

                <ProductInfoGrid>
                  <ItemCol>
                    <ProductTitle>{item.name}</ProductTitle>
                    <InfoItem
                      icon={<InfoIcon src={sizeIcon} alt="size" />}
                      label="Size:"
                      value={item.size ?? "—"}
                    />
                    <GreyOutlineBtn onClick={() => console.log("add review", item.productId)}>
                      Add Review
                    </GreyOutlineBtn>
                  </ItemCol>

                  <ItemColRight>
                    <InfoItem
                      icon={<InfoIcon src={starIcon} alt="qty" />}
                      label="Qty:"
                      value={item.quantity ?? "—"}
                    />
                    <InfoItem
                      label="Year:"
                      icon={<InfoIcon src={calendarRed} alt="brand" />}
                      value={item.year ?? "—"}
                    />
                    <ItemSubPrice>
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(item.price)}{" "}
                      Each x 2 ={" "}
                      <ItemPrice>
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                        }).format(subtotal)}
                      </ItemPrice>
                    </ItemSubPrice>
                  </ItemColRight>
                </ProductInfoGrid>
              </OrderBodyRow>
            </OrderBody>
          );
        })}

        <OrderFooter>
          <RedOutlineBtn onClick={() => onReorder?.(order.orderId)}>Reorder</RedOutlineBtn>
          <GreyOutlineBtn onClick={() => onViewInvoice?.(order.orderId)}>
            View Invoice
          </GreyOutlineBtn>
        </OrderFooter>
      </OrderBody>
    </OrderCard>
  );
}
