import React from "react";
import uberImg from "../../assets/orderWith/uber.svg";
import doordashImg from "../../assets/orderWith/doordash.svg";
import {
  CustomDeliveryButton,
  PopoverContainer,
  PopoverContent,
  PopOverHeading,
  PopOverWrapper,
} from "./CustomPopOver.style";

const CustomPopover: React.FC<{
  open: boolean;
  anchorEl: HTMLElement | null;
  onClose: () => void;
}> = ({ open, anchorEl, onClose }) => {
  return (
    <PopoverContainer
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      transformOrigin={{ vertical: "top", horizontal: "left" }}
    >
      <PopOverWrapper>
        <PopOverHeading>Order with:</PopOverHeading>
        <PopoverContent>
          <CustomDeliveryButton>
            <img src={uberImg} alt="Uber Eats" />
            Uber Eats
          </CustomDeliveryButton>
          <CustomDeliveryButton>
            <img src={doordashImg} alt="DoorDash" />
            DoorDash
          </CustomDeliveryButton>
        </PopoverContent>
      </PopOverWrapper>
    </PopoverContainer>
  );
};

export default CustomPopover;
