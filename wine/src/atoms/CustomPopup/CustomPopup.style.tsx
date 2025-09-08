import { styled } from "@mui/material/styles";
import { Dialog, Box } from "@mui/material";
import shape from "../../themes/shape";

export const StyledDialog = styled(Dialog)(() => ({
  "& .MuiPaper-root": {
    borderRadius: shape.borderRadius,
  },
}));

export const Header = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(2),
}));

export const Content = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  maxHeight: "70vh",
  overflowY: "auto",
}));

export const Footer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.grey[200],
  position: "sticky",
  bottom: 0,
}));
