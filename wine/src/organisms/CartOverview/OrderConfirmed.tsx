import { Typography, Stack } from "@mui/material";
import {
  Wrapper,
  HeaderBox,
  Illustration,
  Description,
  TwoColumnGrid,
  ColumnGrid,
} from "./CartOverview.style";
import OrderSummary from "../../molecules/OrderSummary/OrderSummary";
import StepsCard from "../../molecules/StepsCard/StepsCard";
import PickupInformation from "../../molecules/PickupInfo/PickupInfo";
import AddToCart from "../../atoms/CustomButton/AddToCart";
import { oderConfirmed } from "../../assets";

type Props = { orderId?: string | null };

const OrderConfirmed = ({ orderId }: Props) => {
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

  const cartDetails = {
    orderDetails: {
      orderNumber: "#ORD-2024-001",
      total: "$18.14",
    },
    pickupInfo: {
      storeName: "Oceanview Spirits & Liquors",
      address: "1234 Coastal Blvd, Ocean City, NJ 08226",
      hours: "9:00 a.m - 10:00 p.m",
      phone: "827-377-72512",
    },
    pickupDateTime: {
      day: "Today",
      date: "Jan 21, 2025",
      timeRange: "02:00 pm - 03:00 pm",
    },
  };

  return (
    <Wrapper>
      {/* Header */}
      {!orderId && <HeaderBox>
        <Illustration src={oderConfirmed} alt="Order Confirmed Illustration" />
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Order Confirmed
        </Typography>
        <Description variant="body1" color="text.secondary">
          Thank you for your order! Your wines will be ready for pickup as per your selected date
          and time.
        </Description>
      </HeaderBox>}

      {/* Two Column Layout */}
      <TwoColumnGrid container spacing={4}>
        {/* Left Column */}
        <ColumnGrid size={{ xs: 12, md: 6 }}>
          <Stack spacing={3}>
            {cartDetails.orderDetails && (
              <OrderSummary
                title="Order Details"
                items={[
                  {
                    label: "Order Number",
                    value: cartDetails.orderDetails.orderNumber,
                  },
                  {
                    label: "Total Amount",
                    value: cartDetails.orderDetails.total,
                  },
                  {
                    label: "Payment Method",
                    value: "Pay at pickup",
                  },
                ]}
              />
            )}

            {cartDetails && (
              <PickupInformation
                title="Pickup Information"
                storeName={cartDetails.pickupInfo.storeName}
                address={cartDetails.pickupInfo.address}
                phone={cartDetails.pickupInfo.phone}
                hours={cartDetails.pickupInfo.hours}
                footerTitle="Pickup Date & Time"
                order
                pickupDate={cartDetails.pickupDateTime.date}
                pickupTime={cartDetails.pickupDateTime.timeRange}
                pickupday={cartDetails.pickupDateTime.day}
              />
            )}
          </Stack>
        </ColumnGrid>

        {/* Right Column */}
        <ColumnGrid size={{ xs: 12, md: 6 }}>
          <Stack spacing={3} alignItems="center">
            <StepsCard heading="What's Next?" steps={steps} />
            {!orderId && <AddToCart label="Continue Shopping" />}
          </Stack>
        </ColumnGrid>
      </TwoColumnGrid>
    </Wrapper>
  );
};

export default OrderConfirmed;
