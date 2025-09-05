
import React from "react";
import { Dialog, IconButton, Box, Typography, Divider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import * as Styled from "../../molecules/AgePopup/AgePopup.style";
import palette from "../../themes/palette";

interface BasePopupProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

const CustomPopup: React.FC<BasePopupProps> = ({ open, onClose, title, children, footer }) => {
  return (
        <Styled.StyledDialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      {/* Header */}
      {title && (
        <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
          <Typography variant="h6" fontWeight="bold">
            {title}
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      )}

      <Divider />

      {/* Content */}
      <Box p={2} sx={{ maxHeight: "70vh", overflowY: "auto" }}>
        {children}
      </Box>

      {/* Sticky Footer */}
      {footer && (
        <Box
          p={2}
          borderTop="1px solid"
          borderColor="divider"
          bgcolor={palette.grey.border}
          position="sticky"
          bottom={0}
        >
          {footer}
        </Box>
      )}
    </Styled.StyledDialog>
  );
};

export default CustomPopup;
