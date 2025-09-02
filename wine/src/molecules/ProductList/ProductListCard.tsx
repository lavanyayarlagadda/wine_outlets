import React from "react";
import {
  Box,
  Button,
  Typography,
  IconButton,
  Card,
  CardContent,
  CardMedia,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { ShoppingCart } from "@mui/icons-material";
import { empty_star, expandIcon, calendar, cityMap } from "../../assets";
import { PriceText, RatingBox, SmallChip, SmallText, VIPPriceText } from "./ProductGridCard.style";

export interface ProductCardProps {
  id: number | string;
  image: string;
  name: string;
  location?: string;
  year?: string | number;
  size?: string;
  rating?: string | number;
  description?: string;
  price: number;
  vipPrice?: number;
  onAddToCart: (id: number | string) => void;
  onToggleFavorite: (id: number | string) => void;
  isFavorite: boolean;
}

const ProductListCard: React.FC<ProductCardProps> = ({
  id,
  image,
  name,
  location,
  year,
  size,
  rating,
  description,
  price,
  vipPrice,
  onAddToCart,
  onToggleFavorite,
  isFavorite,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Card
      elevation={0}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "flex-start",
        borderRadius: 4,
        border: "1px solid #eee",
        p: 3,
        width: "100%",
        minHeight: 210,
        background: "#fff",
        boxShadow: "0 2px 12px 0 rgba(55, 84, 170, 0.04)",
      }}
    >
<Box
  position="relative"
  sx={{
    borderRadius: 4,
    border: "1px solid #eee",
    p: 2,
    display: "flex",
    justifyContent: "center", // horizontal center
    alignItems: "center",     // vertical center
    minWidth: { xs: "100%", sm: 140, md: 200 }, // responsive width
    minHeight: { xs: 180, sm: 210, md: 300 },   // responsive height
    mb: { xs: 2, sm: 0 }, // spacing on mobile
  }}
>
  <CardMedia
    component="img"
    sx={{
      width: { xs: 80, sm: 100, md: 120 },  // responsive width
      height: { xs: 150, sm: 210, md: 300 }, // responsive height
      objectFit: "contain",
      borderRadius: 2,
    }}
    image={image}
    alt={name}
  />
  <Box position="absolute" top={10} right={10} zIndex={1}>
    <IconButton
      onClick={() => onToggleFavorite(id)}
      sx={{
        bgcolor: "#fff",
        borderRadius: "50%",
        boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
        "&:hover": { bgcolor: "#f8f8f8" },
      }}
    >
      {isFavorite ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
    </IconButton>
  </Box>
</Box>
<CardContent
  sx={{
    flex: "1 1 auto",
    pl: { xs: 0, sm: 2 },
    pr: 1,
    pb: "8px!important",
    display: "flex",
    flexDirection: "column",
    gap: 1.5, // space between sections
  }}
>
  {/* Product Name */}
  <Typography variant="h6" fontWeight={700} mt={1} mb={0.5}>
    {name}
  </Typography>

  {/* Icons and Info */}
  <Box
    display="flex"
    flexWrap="wrap" // wrap on small screens
    alignItems="center"
    gap={{ xs: 1, sm: 2 }} // smaller gap on mobile
    mb={1}
  >
    {location && (
      <SmallText>
        <img src={cityMap} alt="region" style={{ width: 16, height: 16, marginRight: 4 }} />
        {location}
      </SmallText>
    )}
    {year && (
      <Box display="flex" alignItems="center">
        <img src={calendar} alt="year" style={{ width: 16, height: 16, marginRight: 4 }} />
        <SmallChip label={year} size="small" />
      </Box>
    )}
    {size && (
      <SmallText>
        <img src={expandIcon} alt="size" style={{ width: 16, height: 16, marginRight: 4 }} />
        {size}
      </SmallText>
    )}
    {rating && (
      <RatingBox>
        <img src={empty_star} alt="star" style={{ width: 16, height: 16 }} />
        <SmallText sx={{ fontWeight: 600, marginLeft: 2 }}>{rating}</SmallText>
      </RatingBox>
    )}
  </Box>

  {/* Description */}
  {description && (
    <Typography variant="body2" color="text.secondary" sx={{ mb: 2, minHeight: 48 }}>
      {description}
    </Typography>
  )}

  {/* Price & Button */}
  <Box
    display="flex"
    flexDirection={{ xs: "column", sm: "row" }} // stack on mobile
    justifyContent={{ xs: "flex-start", sm: "flex-end" }}
    alignItems="center"
    gap={2}
  >
    {typeof vipPrice === "number" && <VIPPriceText>VIP: ${vipPrice.toFixed(2)}</VIPPriceText>}
    <PriceText>${price.toFixed(2)}</PriceText>

    <Button
      variant="contained"
      fullWidth={isMobile}
      onClick={() => onAddToCart(id)}
      startIcon={<ShoppingCart />}
      sx={{
        borderColor: theme.palette.primary.dark,
        color: theme.palette.primary.dark,
        backgroundColor: theme.palette.primary.light,
        padding: "12px 0px",
        textTransform: "none",
        fontWeight: 600,
        width: { xs: "100%", sm: "30%" },
        whiteSpace: "nowrap",
      }}
    >
      Add to Cart
    </Button>
  </Box>
</CardContent>

    </Card>
  );
};

export default ProductListCard;
