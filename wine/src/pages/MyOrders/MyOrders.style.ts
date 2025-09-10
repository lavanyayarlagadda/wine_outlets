import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import shape from "../../themes/shape";
import palette from "../../themes/palette";

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
  color: active
    ? (theme.palette.black?.[800] ?? theme.palette.text.primary)
    : theme.palette.text.primary,
  background: active ? (theme.palette.white?.main ?? "transparent") : "transparent",
  borderRadius: shape.baseBorderRadius,
  border: active ? `1px solid ${theme.palette.success.main}` : "1px solid transparent",
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
  backgroundColor: theme.palette.white?.[400] ?? theme.palette.background.paper,
  color: theme.palette.warning.light,
}));

export const DateText = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.body2.fontSize,
  color: theme.palette.black?.[800] ?? theme.palette.text.primary,
  marginLeft: theme.spacing(1),
}));

export const PriceTag = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: theme.typography.h6.fontSize,
  color: theme.palette.warning.light,
}));

export const OrderBody = styled(Box)(({ theme }) => ({
  gap: theme.spacing(2.5),
  alignItems: "flex-start",
  borderTop: `1px solid ${theme.palette.divider}`,
}));

export const OrderBodyRow = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  padding: `${theme.spacing(2)} 0`,
  borderBottom: `1px solid ${theme.palette.divider}`,
  alignItems: "center",
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

export const ProductImageImg = styled("img")(() => ({
  width: "100%",
  height: "100%",
  objectFit: "contain",
  display: "block",
}));

export const ProductInfoGrid = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  gap: theme.spacing(3),
  flex: 1,
}));

export const ItemCol = styled(Box)(({ theme }) => ({
  width: "50%",
  height: theme.spacing(15),
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

export const ItemColRight = styled(ItemCol)(() => ({
  alignItems: "flex-end",
}));

export const ProductTitle = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.typography.body2.fontSize,
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

export const RedOutlineBtn = styled(PrimaryButton)(({ theme }) => ({
  color: theme.palette.primary.main,
  border: `1px solid ${theme.palette.primary.main}`,
}));

export const GreyOutlineBtn = styled(SecondaryButton)(({ theme }) => ({
  color: palette.grey.main ?? theme.palette.text.primary,
  border: shape.borderSuccess ?? "transparent",
  maxWidth: theme.spacing(18),
}));

export const PageTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(0.5),
  fontWeight: theme.typography.fontWeightMedium,
}));

export const PageSubtitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: theme.palette.text.secondary,
  fontSize: theme.typography.body2.fontSize,
}));

export const SectionDivider = styled(Divider)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

/* add near the bottom of MyOrders.style.tsx */

export const ItemRow = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  alignItems: "center",
  padding: `${theme.spacing(1.5)} 0`,
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

export const ItemDetails = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  alignItems: "center",
  flex: 1,
}));

export const ItemRight = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  gap: theme.spacing(1),
  minWidth: 160,
  fontSize: theme.typography.body2.fontSize,
}));

export const ItemPrice = styled("span")(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: theme.typography.body1.fontSize,
  color: theme.palette.warning.light,
}));

export const ItemSubPrice = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.body2.fontSize,
  color: theme.palette.text.primary,
}));

export const AddReviewButton = styled(SecondaryButton)(({ theme }) => ({
  textTransform: "none",
  padding: `${theme.spacing(0.5)} ${theme.spacing(2)}`,
  borderRadius: shape.baseBorderRadius,
  fontSize: theme.typography.body2.fontSize,
}));

export const OrderFooter = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  gap: theme.spacing(2),
  padding: `${theme.spacing(1.5)} 0 0 0`,
}));
export const ReorderButton = styled(PrimaryButton)(({ theme }) => ({
  color: theme.palette.primary.dark,
  border: `1px solid ${theme.palette.primary.dark}`,
  background: "transparent",
}));
export const ViewInvoiceButton = styled(SecondaryButton)(({ theme }) => ({
  background: "transparent",
  border: `1px solid ${theme.palette.divider}`,
}));
