import React from "react";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { StyledButton, ButtonText, IconWrapper } from "./CustomButton.style";

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
}: CustomButtonProps) => {
  return (
    <StyledButton
      onClick={onClick}
      bgColor={bgColor}
      btnBorderColor={btnBorderColor}
      profile={profile}
    >
      <ButtonText style={{ color }}>{text}</ButtonText>
      <IconWrapper border={border} bgcolor={btnbgColor} color={btnColor}>
        <NorthEastIcon fontSize="small" />
      </IconWrapper>
    </StyledButton>
  );
};

export default CustomButton;
