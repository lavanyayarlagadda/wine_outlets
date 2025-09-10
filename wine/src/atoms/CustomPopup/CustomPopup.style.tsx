import { styled } from "@mui/material/styles";
import { Dialog, Box } from "@mui/material";
import shape from "../../themes/shape";
import palette from "../../themes/palette";

export const StyledDialog = styled(Dialog)(() => ({
  "& .MuiPaper-root": {
    borderRadius: shape.borderRadius,
  },
}));

export const Header = styled(Box)<{ selected?: boolean; dropdown?: boolean }>(
  ({ theme, dropdown }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: dropdown ? theme.spacing(1) : theme.spacing(2),
  })
);

export const Content = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  maxHeight: "70vh",
  overflowY: "auto",
}));

export const Footer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: `1px solid ${theme.palette.divider}`,
  backgroundColor: palette.background.bg_light,
  position: "sticky",
  bottom: 0,
}));
