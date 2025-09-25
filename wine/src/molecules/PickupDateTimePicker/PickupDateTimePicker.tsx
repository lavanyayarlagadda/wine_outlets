import React, { useMemo, useState } from "react";
import { Dialog, Box, DialogContent } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider, PickersDay, StaticDatePicker } from "@mui/x-date-pickers";
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
  DisabledDay,
} from "./PickupDateTimeSelector.style";
import { StyledSkeletonRect } from "../../organisms/Filter/FilterPanel.style";
import { NoDataText } from "../../organisms/CartOverview/CartOverview.style";

interface PickupDateTimeSelectorProps {
  slotsData?: any;
  slotDataLoading?: boolean;
  offDaysData?: any;
  selectedDate?: any;
  setSelectedDate?: any;
  selectedTime?: any;
  setSelectedTime?: any;
}

const PickupDateTimeSelector: React.FC<PickupDateTimeSelectorProps> = ({
  slotsData,
  slotDataLoading,
  offDaysData,
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
}) => {
  const [openDialog, setOpenDialog] = useState(false);

  const disabledDates: Date[] = [];

  if (offDaysData?.storeOffDays?.length) {
    const holidays = offDaysData.storeOffDays[0].offDaysByType.holidays || [];
    const weekOffs = offDaysData.storeOffDays[0].offDaysByType.weekOffs || [];
    const others = offDaysData.storeOffDays[0].offDaysByType.others || [];

    const allOffDays = [...holidays, ...weekOffs, ...others];

    allOffDays.forEach((day: any) => {
      disabledDates.push(new Date(day.offDate));
    });
  }

  const selectedWeekDay = selectedDate ? format(selectedDate, "EEEE") : "";

  const availableSlots = useMemo(() => {
    if (!slotsData?.pickupSlots?.[0]?.slotsByDay || !selectedWeekDay) return [];
    return slotsData.pickupSlots[0].slotsByDay[selectedWeekDay] || [];
  }, [slotsData, selectedWeekDay]);

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
        {selectedDate && selectedTime
          ? `${format(selectedDate, "MMM dd, yyyy")} - ${selectedTime.time}`
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
                  // onChange={(newDate) => setSelectedDate(newDate)}
                  onChange={(newDate) => {
                    setSelectedDate(newDate);
                    setSelectedTime("");
                  }}
                  slotProps={{ actionBar: { actions: [] } }}
                  shouldDisableDate={(date) =>
                    disabledDates.some(
                      (d) =>
                        d.getFullYear() === date.getFullYear() &&
                        d.getMonth() === date.getMonth() &&
                        d.getDate() === date.getDate()
                    )
                  }
                  slots={{
                    day: (props) => {
                      const { day, outsideCurrentMonth: _outsideCurrentMonth, ...other } = props;

                      const isDisabled = disabledDates.some(
                        (d) =>
                          d.getFullYear() === day.getFullYear() &&
                          d.getMonth() === day.getMonth() &&
                          d.getDate() === day.getDate()
                      );

                      if (isDisabled) {
                        return (
                          <DisabledDay
                            {...other}
                            day={day}
                            outsideCurrentMonth={_outsideCurrentMonth}
                          />
                        );
                      }

                      return (
                        <PickersDay
                          {...other}
                          day={day}
                          outsideCurrentMonth={_outsideCurrentMonth}
                        />
                      );
                    },
                  }}
                />
              </LocalizationProvider>

              <VerticalDivider />
              <TimeSlotsContainer>
                <TimeSlotsTitle>Available Time ({selectedWeekDay || "No Date"})</TimeSlotsTitle>

                {slotDataLoading ? (
                  <Box display="flex" gap={2} flexWrap="wrap">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <StyledSkeletonRect key={i} />
                    ))}
                  </Box>
                ) : availableSlots.length > 0 ? (
                  <Box display="flex" gap={2} flexWrap="wrap" flexDirection="column">
                    {availableSlots.map((slot: any) => (
                      // <TimeSlotButton
                      //   key={slot.slotId}
                      //   selected={selectedTime === slot.time}
                      //   variant={selectedTime === slot.time ? "outlined" : "text"}
                      //   color={selectedTime === slot.time ? "error" : "primary"}
                      //   onClick={() => setSelectedTime({ slotId: slot.slotId, time: slot.time })}
                      // >
                      //   {slot.time} ({slot.weekDay})
                      // </TimeSlotButton>

                      <TimeSlotButton
                        key={slot.slotId}
                        selected={selectedTime?.slotId === slot.slotId}
                        variant={selectedTime?.slotId === slot.slotId ? "outlined" : "text"}
                        color={selectedTime?.slotId === slot.slotId ? "error" : "primary"}
                        onClick={() => setSelectedTime({ slot: slot.slot, time: slot.time })}
                      >
                        {slot.time} ({slot.weekDay})
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
                {selectedTime && (
                  <FooterButtons variant="outlined">{selectedTime.time}</FooterButtons>
                )}
              </Box>

              {/* Actions (Always present and aligned to the left) */}
              <Box display="flex" gap={1}>
                <FooterButtons
                  onClick={() => {
                    // setSelectedDate(null);
                    setSelectedDate(new Date());
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
