import React, { useState } from "react";
import { Popover, Button } from "@mui/material";
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
  Container
} from "./PickupDateTimeSelector.style";

const timeSlots = [
  "09:15 am - 12:00 pm",
  "12:00 pm - 03:00 pm",
  "03:00 pm - 06:00 pm",
  "06:00 pm - 09:45 pm",
];

const PickupDateTimeSelector = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>(timeSlots[0]);

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
                slotProps={{
                  actionBar: {
                    actions: [],
                  },
                }}
              />
            </LocalizationProvider>

            {/* Vertical Divider */}
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
            <Button variant="outlined">{selectedDate ? format(selectedDate, "MMM dd, yyyy") : "-"}</Button>
            -
            <Button variant="outlined">{selectedTime}</Button>
            <Button onClick={handleClosePopover}>Cancel</Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                handleClosePopover();
                console.log("Confirmed:", selectedDate, selectedTime);
              }}
            >
              Confirm
            </Button>
          </Footer>
        </PopoverContent>
      </Popover>
    </Container>
  );
};

export default PickupDateTimeSelector;
