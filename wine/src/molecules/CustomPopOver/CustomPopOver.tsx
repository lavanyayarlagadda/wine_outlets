import React from "react";
import { IconButton, Divider } from "@mui/material";
import { Close } from "@mui/icons-material";
// import { empty_star, expandIcon, calendar, cityMap } from "../../assets";
import { listImageGrey } from "../../assets";
import {
  PopoverContainer,
  PopOverWrapper,
  // PopOverHeading,
  PopoverContent,
  PopOverHeading,
  PopOverHeader,
  HeaderIconWrapper,
  CartText,
  CartIconImage,
} from "./CustomPopOver.style";

interface CustomPopoverProps {
  open: boolean;
  anchorEl: HTMLElement | null;
  onClose: () => void;
  title?: string;
  titleAlign?: "center" | "left";
  showDivider?: boolean;
  headerRightIcon?: "close" | "edit" | React.ReactNode;
  children: React.ReactNode;
}

const CustomPopover: React.FC<CustomPopoverProps> = ({
  open,
  anchorEl,
  onClose,
  title = "",
  titleAlign = "center",
  showDivider = true,
  headerRightIcon,
  children,
}) => {
  const renderHeaderIcon = () => {
    if (headerRightIcon === "close") {
      return (
        <IconButton size="small" onClick={onClose}>
          <Close />
        </IconButton>
      );
    }

    if (headerRightIcon === "cart") {
      return (
        <IconButton size="small" onClick={() => console.log("Edit clicked")}>
          <HeaderIconWrapper>
            <CartIconImage src={listImageGrey} alt="Cart" />
            <CartText>View Cart List</CartText>
          </HeaderIconWrapper>
        </IconButton>
      );
    }

    // If a React node is passed directly
    return headerRightIcon;
  };

  return (
    <PopoverContainer
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      transformOrigin={{ vertical: "top", horizontal: "left" }}
    >
      <PopOverWrapper>
        {title && (
          <PopOverHeader titleAlign={titleAlign}>
            <PopOverHeading title={title}>{title}</PopOverHeading>
            {titleAlign === "center" ? null : renderHeaderIcon()}
          </PopOverHeader>
        )}

        {showDivider && <Divider />}

        <PopoverContent>{children}</PopoverContent>
      </PopOverWrapper>
    </PopoverContainer>
  );
};

export default CustomPopover;
