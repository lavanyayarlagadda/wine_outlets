import { Box, Typography, Button, Divider } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { PriceText, VIPPriceText } from "../ProductList/ProductGridCard.style";
import shape from "../../themes/shape";
import AddToCart from "../../atoms/CustomButton/AddToCart";
import palette from "../../themes/palette";


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
        <Divider orientation="vertical" flexItem sx={{ borderColor: palette.grey.divider }} />
        <PriceText>${totalPrice.toFixed(2)}</PriceText>
      </Box>
     <AddToCart onClick={() => console.log("Added to cart")} label='Add to Cart' />
    </Box>
  );
};

export default SummaryCard;
