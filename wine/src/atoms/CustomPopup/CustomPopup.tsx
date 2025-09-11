import React from "react";
import { IconButton, Typography, Divider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import * as Styled from "../../molecules/AgePopup/AgePopup.style";
import { Content, Footer, Header } from "./CustomPopup.style";

interface BasePopupProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  navigation?: boolean;
}

const CustomPopup: React.FC<BasePopupProps> = ({
  open,
  onClose,
  title,
  children,
  footer,
}) => {
  return (
    <Styled.StyledDialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      {/* Header */}
      {title && (
        <Header>
          <Typography variant="h6" fontWeight="bold">
            {title}
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Header>
      )}

      <Divider />

      {/* Content */}
      <Content> {children}</Content>

      {/* Sticky Footer */}
      {footer && <Footer>{footer}</Footer>}
    </Styled.StyledDialog>
  );
};

export default CustomPopup;
