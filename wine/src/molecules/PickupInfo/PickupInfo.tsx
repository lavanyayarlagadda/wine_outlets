import React from "react";
import {
  DividerLine,
  HeaderTitle,
  MainContainer,
  ProductContent,
  ProductHeader,
} from "../OrderSummary/OrderSummary.style";
import {
  SmallAccessTimeIcon,
  SmallLocalPhoneIcon,
  PhoneNumber,
  StoreName,
  StoreAddress,
  PhoneTimeRow,
  Wrapper,
  Row,
  SideBox,
  IconImage,
} from "./PickupInfo.style";
import PickupDateTimePicker from "../PickupDateTimePicker/PickupDateTimePicker";
import { Box, Typography } from "@mui/material";
import { calendarRed, time, call, mapIconSelected } from "../../assets";
import { MapButton, MapIconImage } from "../StoreSelectorPopUp/StoreSelectorPopup.style";

interface PickupInformationProps {
  title: string;
  storeName: string;
  address: string;
  hours?: string;
  vipCodeMessage?: string;
  phone: string;
  footerTitle: string;
  order?: boolean;
  pickupday?: string;
  pickupDate?: string;
  pickupTime?: string;
  slotsData?: any;
  slotDataLoading?: boolean;
  offDaysData?: any;
  selectedDate?: any;
  setSelectedDate?: any;
  selectedTime?: any;
  setSelectedTime?: any;
}
const PickupInformation: React.FC<PickupInformationProps> = ({
  title,
  storeName,
  address,
  hours,
  phone,
  footerTitle,
  order = false,
  pickupday,
  pickupDate,
  pickupTime,
  slotsData,
  slotDataLoading,
  offDaysData,
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
}) => {
  console.log("offDaysData", offDaysData);
  return (
    <MainContainer>
      <ProductHeader>
        <HeaderTitle>{title}</HeaderTitle>
      </ProductHeader>
      <DividerLine />
      <ProductContent>
        {order && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 1,
            }}
          >
            <StoreName>{storeName}</StoreName>
            <MapButton
              size="small"
              variant="outlined"
              endIcon={<MapIconImage src={mapIconSelected} alt="map" />}
              selected={true}
              onClick={(e) => e.stopPropagation()}
            >
              Open Map
            </MapButton>
          </Box>
        )}
        <StoreName>{storeName}</StoreName>
        <StoreAddress>{address}</StoreAddress>

        <PhoneTimeRow>
          <PhoneNumber>
            {order ? <IconImage src={time} alt="left" /> : <SmallAccessTimeIcon />}
            {hours}
          </PhoneNumber>
          <PhoneNumber>
            {order ? <IconImage src={call} alt="left" /> : <SmallLocalPhoneIcon />}
            {phone}
          </PhoneNumber>
        </PhoneTimeRow>
      </ProductContent>
      <DividerLine />
      <ProductContent>
        <HeaderTitle>{footerTitle}</HeaderTitle>
      </ProductContent>
      {order ? (
        <Wrapper>
          <Row>
            {/* Left side */}
            <SideBox>
              <IconImage src={calendarRed} alt="left" />
              <Box>
                <Typography variant="subtitle1" fontWeight="bold">
                  {pickupday}
                </Typography>
                <Typography variant="body2">{pickupDate}</Typography>
              </Box>
            </SideBox>

            {/* Right side */}
            <SideBox>
              <IconImage src={time} alt="right" />
              <Box>
                <Typography variant="subtitle1" fontWeight="bold">
                  {pickupTime}
                </Typography>
                <Typography variant="body2">Please arrive during this window</Typography>
              </Box>
            </SideBox>
          </Row>
        </Wrapper>
      ) : (
        <PickupDateTimePicker
          slotsData={slotsData}
          slotDataLoading={slotDataLoading}
          offDaysData={offDaysData}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
        />
      )}
    </MainContainer>
  );
};

export default PickupInformation;
