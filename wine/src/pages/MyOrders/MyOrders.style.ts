import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import shape from "../../themes/shape";

export const PageContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(3),
  padding: theme.spacing(4),
  background: theme.palette.background.default,
  minHeight: "100%",
}));

export const Sidebar = styled(Paper)(({ theme }) => ({
  width: 260,
  height: "fit-content",
  padding: theme.spacing(2),
  borderRadius: shape.baseBorderRadius * 2,
  background: theme.palette.primary.light,
  boxShadow: "none",
}));

export const SidebarButton = styled(Box)<{ active?: boolean }>(({ theme, active }) => ({
  display: "block",
  width: "100%",
  textTransform: "none",
  justifyContent: "flex-start",
  fontSize: theme.typography.body2.fontSize,
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  marginBottom: theme.spacing(1),
  color: active ? theme.palette.black[800] : theme.palette.text.primary,
  background: active ? theme.palette.white.main : "transparent",
  borderRadius: shape.baseBorderRadius,
  border: active ? `1px solid ${theme.palette.success.main}` : "1px solid transparent",
  cursor: "pointer",
}));

export const ReadyForPickUp = styled(Typography)(({ theme }) => ({
  display: "block",
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: theme.typography.subtitle2.fontSize,
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  marginBottom: theme.spacing(1),
  color: theme.palette.primary.main,
  //   background:  theme.palette.white.main ,
  borderRadius: shape.baseBorderRadius * 1.5,
  border: `1px solid ${theme.palette.primary.main}`,
  cursor: "pointer",
}));

export const CancelOrder = styled(Typography)(({ theme }) => ({
  display: "block",
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: theme.typography.subtitle2.fontSize,
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  marginBottom: theme.spacing(1),
  color: theme.palette.grey[200],
  borderRadius: shape.baseBorderRadius * 1.5,
  border: `1px solid ${theme.palette.grey[200]}`,
  cursor: "pointer",
}));

export const Content = styled(Box)(() => ({
  flex: 1,
  minHeight: "75vh",
}));

export const OrdersList = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2.5),
}));

export const OrderCard = styled(Card)(({ theme }) => ({
  border: `1px solid ${theme.palette.success.main}`,
  borderRadius: shape.baseBorderRadius * 2.5,
  padding: theme.spacing(2),
  boxShadow: "none",
}));

export const OrderHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(2),
  marginBottom: theme.spacing(1.5),
}));

export const OrderMeta = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
}));

export const OrderIdChip = styled(Chip)(({ theme }) => ({
  borderRadius: shape.baseBorderRadius * 3,
  height: theme.spacing(4),
  fontWeight: theme.typography.fontWeightMedium,
  borderColor: `1px solid ${theme.palette.warning.light}`,
  backgroundColor: theme.palette.white[400],
  color: theme.palette.warning.light,
}));

export const PriceTag = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: theme.typography.h6.fontSize,
  color: theme.palette.warning.light,
}));

export const OrderBody = styled(Box)(({ theme }) => ({
  //   display: "flex",
  gap: theme.spacing(2.5),
  alignItems: "flex-start",
  borderTop: `1px solid ${theme.palette.divider}`,

  //   paddingTop: theme.spacing(2),
}));

export const ProductImage = styled(Box)(({ theme }) => ({
  width: theme.spacing(13),
  height: theme.spacing(15),
  padding: theme.spacing(0.5),
  borderRadius: 6,
  background: theme.palette.background.paper,
  boxShadow: theme.shadows[1],
  border: `1px solid ${theme.palette.success.main}`,
}));

export const ProductInfo = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "flex",
  //   flexDirection: "column",
  gap: theme.spacing(0.5),
}));

export const ProductTitle = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.typography.body2.fontSize,
}));

export const SmallMeta = styled(Typography)(({ theme }) => ({
  fontSize: 13,
  color: theme.palette.text.secondary,
}));

export const ActionRow = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1.5),
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: theme.spacing(2),
}));

export const LeftActions = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
}));

export const RightAction = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  alignItems: "center",
}));

export const PrimaryButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  borderRadius: shape.baseBorderRadius * 1.5,
  padding: `${theme.spacing(1)} ${theme.spacing(2.5)}`,
}));

export const SecondaryButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  borderRadius: shape.baseBorderRadius * 1.5,
  padding: `${theme.spacing(0.8)} ${theme.spacing(2)}`,
}));

export const DateText = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.body2.fontSize,
  color: theme.palette.black[800],
  ml: 1,
}));
