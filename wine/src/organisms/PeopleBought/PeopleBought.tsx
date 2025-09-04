import { Box, Typography, Link, Divider } from "@mui/material";
import React, { useState } from "react";
import palette from "../../themes/palette";
import { suggestedProducts } from "../../constant/dealProduct";
import { ProductWithDivider, SummaryCard } from "../../molecules";


const PeopleBought = () => {
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [cartItems, setCartItems] = useState<string[]>([]);

  const currentProducts = suggestedProducts.products;

  const handleAddToCart = (productId: string) => {
    setCartItems((prev) => (prev.includes(productId) ? prev : [...prev, productId]));
  };

  const handleToggleFavorite = (productId: string) => {
    setWishlist((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  return (
    <Box sx={{ py: 4 }}>
      {/* Header Row */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
        <Typography variant="h6" sx={{ color: palette.black[800], fontWeight: 600 }}>
          People bought it along with
        </Typography>
        <Link href="#" underline="hover" sx={{ fontSize: 14, fontWeight: 500 }}>
          See more
        </Link>
      </Box>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 2, width: "100%" }}>
        <Box sx={{ flex: 1, display: "flex", flexDirection: { xs: "column", md: "row" },alignItems: "center", gap: 2 }}>
          {currentProducts.map((product, index) => (
            <ProductWithDivider
              key={product.id}
              product={{ ...product, id: String(product.id) }}
              showDivider={index < currentProducts.length - 1}
              onAddToCart={() => handleAddToCart(product.id)}
              onToggleFavorite={() => handleToggleFavorite(product.id)}
            />
          ))}
        </Box>
        <Divider orientation="vertical" flexItem sx={{ display: { xs: "none", md: "block" }, borderColor: "#e0e0e0" }} />
        <SummaryCard totalVipPrice={suggestedProducts.totalVipPrice} totalPrice={suggestedProducts.totalPrice} />
      </Box>
    </Box>
  );
};

export default PeopleBought;
