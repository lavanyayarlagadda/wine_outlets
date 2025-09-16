import React, { useState } from "react";
import { Dialog, Box, DialogContent } from "@mui/material";
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
import { StyledSkeletonRect } from "../../organisms/Filter/FilterPanel.style";
import { NoDataText } from "../../organisms/CartOverview/CartOverview.style";

interface PickupDateTimeSelectorProps {
  slotsData?: any;
  slotDataLoading?: boolean;
}

const PickupDateTimeSelector: React.FC<PickupDateTimeSelectorProps> = ({
  slotsData,
  slotDataLoading,
}) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Container>
      <SelectedSlotsBtn onClick={handleOpenDialog}>
        {/* Select Date & Time */}
        {selectedDate
          ? `${format(selectedDate, "MMM dd, yyyy")} - ${selectedTime}`
          : "Select Pickup Date & Time"}
      </SelectedSlotsBtn>

      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="md">
        <DialogContent>
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
                {slotDataLoading ? (
                  <Box display="flex" gap={2} flexWrap="wrap">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <StyledSkeletonRect key={i} />
                    ))}
                  </Box>
                ) : slotsData?.pickupSlots?.[0]?.slots?.length > 0 ? (
                  <Box display="flex" gap={2} flexWrap="wrap" flexDirection="column">
                    {slotsData.pickupSlots[0].slots.map((slot: any) => (
                      <TimeSlotButton
                        key={slot.slotId}
                        selected={selectedTime === slot.time}
                        // disabledSlot={slot.time === "12:00 pm - 03:00 pm"}
                        variant={selectedTime === slot.time ? "outlined" : "text"}
                        color={selectedTime === slot.time ? "error" : "primary"}
                        onClick={() => setSelectedTime(slot.time)}
                      >
                        {slot.time}
                      </TimeSlotButton>
                    ))}
                  </Box>
                ) : (
                  <NoDataText>No times available</NoDataText>
                )}
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
                <FooterButtons
                  onClick={() => {
                    setSelectedDate(null);
                    setSelectedTime("");
                    handleCloseDialog();
                  }}
                >
                  Cancel
                </FooterButtons>
                <FooterConfirmButtons
                  disabled={!selectedDate || !selectedTime}
                  onClick={() => {
                    handleCloseDialog();
                  }}
                >
                  Confirm
                </FooterConfirmButtons>
              </Box>
            </Footer>
          </PopoverContent>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default PickupDateTimeSelector;
