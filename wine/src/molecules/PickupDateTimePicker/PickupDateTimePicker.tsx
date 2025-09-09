import React, { useState } from "react";
import { Popover, Box } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers";
import { format } from "date-fns";

import {
  PopoverContent,
  PickerContainer,
  TimeSlotsContainer,
  TimeSlotsTitle,
  TimeSlotButton,
  Footer,
  VerticalDivider,
  SelectedSlotsBtn,
  Container,
  FooterButtons,
  FooterConfirmButtons,
} from "./PickupDateTimeSelector.style";

const timeSlots = [
  "09:15 am - 12:00 pm",
  "12:00 pm - 03:00 pm",
  "03:00 pm - 06:00 pm",
  "06:00 pm - 09:45 pm",
];

const PickupDateTimeSelector = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");

  const handleOpenPopover = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Container>
      <SelectedSlotsBtn onClick={handleOpenPopover}>
        {/* Select Date & Time */}
        {selectedDate
          ? `${format(selectedDate, "MMM dd, yyyy")} - ${selectedTime}`
          : "Select Pickup Date & Time"}
      </SelectedSlotsBtn>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <PopoverContent>
         
          <PickerContainer>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <StaticDatePicker
                displayStaticWrapperAs="desktop"
                value={selectedDate}
                onChange={(newDate) => setSelectedDate(newDate)}
                slotProps={{ actionBar: { actions: [] } }}
              />
            </LocalizationProvider>

            <VerticalDivider />

            <TimeSlotsContainer>
              <TimeSlotsTitle>Available Time</TimeSlotsTitle>
              {timeSlots.map((slot) => (
                <TimeSlotButton
                  key={slot}
                  selected={selectedTime === slot}
                  disabledSlot={slot === "12:00 pm - 03:00 pm"}
                  variant={selectedTime === slot ? "outlined" : "text"}
                  color={selectedTime === slot ? "error" : "primary"}
                  onClick={() => setSelectedTime(slot)}
                >
                  {slot}
                </TimeSlotButton>
              ))}
            </TimeSlotsContainer>
          </PickerContainer>
          <Footer>
            <Box display="flex" gap={1} flexWrap="wrap">
              {selectedDate && (
                <FooterButtons variant="outlined">
                  {format(selectedDate, "MMM dd, yyyy")}
                </FooterButtons>
              )}
              {selectedTime && <FooterButtons variant="outlined">{selectedTime}</FooterButtons>}
            </Box>

            {/* Actions (Always present and aligned to the left) */}
            <Box display="flex" gap={1}>
              <FooterButtons onClick={handleClosePopover}>Cancel</FooterButtons>
              <FooterConfirmButtons
              disabled={!selectedDate || !selectedTime}
                onClick={() => {
                  handleClosePopover();
                  console.log("Confirmed:", selectedDate, selectedTime);
                }}
              >
                Confirm
              </FooterConfirmButtons>
            </Box>
          </Footer>

        </PopoverContent>
      </Popover>
    </Container>
  );
};

export default PickupDateTimeSelector;
