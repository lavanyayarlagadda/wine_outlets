import { Typography, Stack, Box, Skeleton } from "@mui/material";
import {
  Wrapper,
  HeaderBox,
  Illustration,
  Description,
  TwoColumnGrid,
  ColumnGrid,
  NoDataText,
} from "./CartOverview.style";
import OrderSummary from "../../molecules/OrderSummary/OrderSummary";
import StepsCard from "../../molecules/StepsCard/StepsCard";
import PickupInformation from "../../molecules/PickupInfo/PickupInfo";
import AddToCart from "../../atoms/CustomButton/AddToCart";
import { oderConfirmed } from "../../assets";
import { useNavigate } from "react-router-dom";
import { useOrderConfirmed } from "./OrderConfirmed.hook";
import { StyledSkeletonRect } from "../Filter/FilterPanel.style";

type Props = { orderId?: string | null };

const OrderConfirmed = ({ orderId }: Props) => {
  const navigate = useNavigate();
  const { data, isLoading } = useOrderConfirmed();

  const steps = [
    {
      title: "We’ll prepare your order",
      description: "Our team will hand-pick and pack your wines with care.",
    },
    {
      title: "You’ll receive a notification",
      description: "We’ll notify you by text/email once your order is ready for pickup.",
    },
    {
      title: "Pick up & pay in-store",
      description:
        "Visit us during your selected time slot, share your order number, and complete payment at the counter.",
    },
  ];

  const placeOrderData = data?.placeOrder?.[0];

  return (
    <Wrapper>
      {/* Header */}
      {!orderId && (
        <HeaderBox>
          {isLoading ? (
            <>
              <StyledSkeletonRect />
              <Skeleton variant="text" width={200} height={40} />
              <Skeleton variant="text" width={300} height={20} />
            </>
          ) : (
            <>
              <Illustration src={oderConfirmed} alt="Order Confirmed Illustration" />
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Order Confirmed
              </Typography>
              <Description variant="body1" color="text.secondary">
                Thank you for your order! Your wines will be ready for pickup as per your selected
                date and time.
              </Description>
            </>
          )}
        </HeaderBox>
      )}

      {/* Two Column Layout */}
      <TwoColumnGrid container spacing={4}>
        {/* Left Column */}
        <ColumnGrid size={{ xs: 12, md: 6 }}>
          <Stack spacing={3}>
            {isLoading ? (
              <>
                <StyledSkeletonRect />
                <StyledSkeletonRect />
              </>
            ) : placeOrderData?.length <= 0 ? (
              <NoDataText>No order data available</NoDataText>
            ) : (
              <>
                {placeOrderData?.orderDetails && (
                  <OrderSummary
                    title="Order Details"
                    items={[
                      { label: "Order Number", value: placeOrderData?.orderDetails.orderNumber },
                      { label: "Total Amount", value: placeOrderData?.orderDetails.total },
                      { label: "Payment Method", value: "Pay at pickup" },
                    ]}
                  />
                )}

                <PickupInformation
                  title="Pickup Information"
                  storeName={placeOrderData?.pickupInfo?.storeName}
                  address={placeOrderData?.pickupInfo?.address}
                  phone={placeOrderData?.pickupInfo?.phone}
                  hours={placeOrderData?.pickupInfo?.hours}
                  footerTitle="Pickup Date & Time"
                  order
                  pickupDate={placeOrderData?.pickupDateTime?.date}
                  pickupTime={placeOrderData?.pickupDateTime?.timeRange}
                  pickupday={placeOrderData?.pickupDateTime?.day}
                />
              </>
            )}
          </Stack>
        </ColumnGrid>

        {/* Right Column */}
        <ColumnGrid size={{ xs: 12, md: 6 }}>
          <Stack spacing={3} alignItems="center">
            <Box display="flex" flexDirection="column" gap={4}>
              {isLoading ? (
                <Skeleton variant="rectangular" height={200} sx={{ borderRadius: 2 }} />
              ) : (
                <StepsCard heading="What's Next?" steps={steps} />
              )}

              {!orderId && !isLoading && (
                <AddToCart
                  label="Continue Shopping"
                  variantType="filled"
                  onClick={() => navigate("/")}
                />
              )}
            </Box>
          </Stack>
        </ColumnGrid>
      </TwoColumnGrid>
    </Wrapper>
  );
};

export default OrderConfirmed;
