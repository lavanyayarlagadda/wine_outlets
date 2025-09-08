import { styled } from "@mui/material/styles";
import { Box, Button, Divider, IconButton, Stack, Typography } from "@mui/material";
import palette from "../../themes/palette";
import shape from "../../themes/shape";

export const FilterWrapper = styled(Box)(({ theme }) => ({
  border: shape.boderGrey200,
  borderRadius: shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2),
}));
export const NestedContainer = styled(Box)(() => ({
  paddingLeft: "16px",
  display: "flex",
  flexDirection: "column",
  gap: "4px",
}));

// Icon button for expand/collapse without any bg or border
export const ExpandButton = styled(IconButton)(() => ({
  padding: 0,
  backgroundColor: "transparent",
  border: "none",
  color: palette.black[800],
  "&:hover": {
    backgroundColor: "transparent",
  },
}));

export const PercentageText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

export const Header = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(1),
}));
export const DrawerHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  padding: theme.spacing(1),
}));
export const ContentStack = styled(Stack)(() => ({
  gap: "8px",
}));

export const HeaderTitle = styled(Typography)(() => ({
  fontWeight: "bold",
  color: palette.black[800],
  fontSize: "18px",
}));

export const ClearButton = styled(Button)(() => ({
  border: shape.boderGrey200,
  borderRadius: shape.borderRadiuspx,
  color: palette.black[800],
  fontSize: "14px",
  textTransform: "capitalize",
}));

export const StyledDivider = styled(Divider)(() => ({
  marginBottom: "8px",
  marginLeft: "-16px",
  marginRight: "-16px",
}));

export const SubCategoryButton = styled(Button)<{ selected?: boolean }>(({ selected, theme }) => ({
  width: "100%",
  justifyContent: "space-between",
  borderRadius: shape.borderRadiuspx,
  textTransform: "none",
  fontWeight: 500,
  marginBottom: "8px",
  border: selected ? shape.borderRed : shape.boderGrey200,
  backgroundColor: selected ? palette.primary.light : theme.palette.common.white,
  color: selected ? palette.primary.dark : palette.grey[200],
}));

export const Row = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
}));
