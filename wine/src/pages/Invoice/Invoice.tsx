import { useNavigate, useParams } from "react-router-dom";
import OrderConfirmed from "../../organisms/CartOverview/OrderConfirmed";
import { Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import * as StyledInvoice from "./Invoice.style";

export default function Invoice() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  return (
    <Box sx={{ padding: 4 }}>
      <StyledInvoice.InvoiceHeader>
        <StyledInvoice.BackPill
          aria-label="back"
          onClick={() => navigate("/myorders")} // explicit navigation to MyOrders
          size="large"
        >
          <ArrowBackIcon fontSize="small" />
        </StyledInvoice.BackPill>

        <StyledInvoice.Breadcrumb>
          <StyledInvoice.BreadcrumbLabel>Current Order /</StyledInvoice.BreadcrumbLabel>
          <StyledInvoice.BreadcrumbOrderId>{id}</StyledInvoice.BreadcrumbOrderId>
        </StyledInvoice.Breadcrumb>
      </StyledInvoice.InvoiceHeader>
      <OrderConfirmed orderId={id} />
    </Box>
  );
}
