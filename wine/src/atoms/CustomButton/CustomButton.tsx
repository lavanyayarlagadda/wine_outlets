import React from "react";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { StyledButton, ButtonText, IconWrapper } from "./CustomButton.style";
import { AddToCartLoader } from "../../molecules/ProductListGrid/ProductGridCard.style";

interface CustomButtonProps {
  text: string;
  bgColor: string;
  onClick: () => void;
  color: string;
  border?: string;
  btnBorderColor?: string;
  btnbgColor?: string;
  btnColor?: string;
  profile?: boolean;
  isLoading?: boolean;
}

const CustomButton = ({
  text,
  bgColor,
  onClick,
  color = "",
  border = "",
  btnBorderColor = "",
  btnbgColor = "",
  btnColor = "",
  profile = false,
  isLoading = false,
}: CustomButtonProps) => {
  return (
    <StyledButton
      onClick={onClick}
      bgColor={bgColor}
      btnBorderColor={btnBorderColor}
      profile={profile}
      disabled={isLoading}
    >
      <ButtonText style={{ color }}>{isLoading ? <AddToCartLoader /> : text}</ButtonText>
      <IconWrapper
        border={border}
        bgcolor={isLoading ? "transparent" : btnbgColor}
        color={btnColor}
      >
        {isLoading ? null : <NorthEastIcon fontSize="small" />}
      </IconWrapper>
    </StyledButton>
  );
};

export default CustomButton;
