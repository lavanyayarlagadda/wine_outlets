import { Box, Typography, Button, Divider } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { PriceText, VIPPriceText } from "../ProductList/ProductGridCard.style";


interface Props {
  totalVipPrice: number;
  totalPrice: number;
}

const SummaryCard: React.FC<Props> = ({ totalVipPrice, totalPrice }) => {
  return (
    <Box
      sx={{
        flexShrink: 0,
        borderRadius: 2,
        border: "1px solid #f2f2f2",
        p: 2,
        backgroundColor: "#ffffff",
        maxWidth: 320,
        minWidth: 250,
        boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
        alignSelf: "center",
      }}
    >
      <Typography variant="body2" sx={{ color: "green", fontWeight: 500, mb: 1 }}>
        In Stock
      </Typography>
      <Box display="flex" alignItems="center" gap={1.5} mb={2}>
        <VIPPriceText>VIP: ${totalVipPrice.toFixed(2)}</VIPPriceText>
        <Divider orientation="vertical" flexItem sx={{ borderColor: "#ccc" }} />
        <PriceText>${totalPrice.toFixed(2)}</PriceText>
      </Box>
      <Button
        variant="contained"
        fullWidth
        sx={{
          backgroundColor: "#a62828",
          borderRadius: "8px",
          textTransform: "none",
          fontWeight: 600,
          "&:hover": { backgroundColor: "#861f1f" },
        }}
        startIcon={<ShoppingCart />}
      >
        Add to Cart
      </Button>
    </Box>
  );
};

export default SummaryCard;
