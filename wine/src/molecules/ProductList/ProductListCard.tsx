
import React from "react";
import {
  Box,
  Button,
  Typography,
  IconButton,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import { ShoppingCart } from "@mui/icons-material";
import { empty_star, expandIcon, calendar, cityMap } from "../../assets";

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
}) => (
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
    <Box position="relative" minWidth={140} sx={{   borderRadius: 4,
      border: "1px solid #eee",
      p: 3,}}>
      <CardMedia
        component="img"
        sx={{ width: 100, height: 150, objectFit: "contain", borderRadius: 2 }}
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
    <CardContent sx={{ flex: "1 1 auto", pl: { xs: 0, sm: 2 }, pr: 1, pb: "8px!important" }}>
      <Typography variant="h6" fontWeight={700} mt={1} mb={0.5}>
        {name}
      </Typography>
      <Box display="flex" alignItems="center" gap={2} mb={1}>
        {location && (
          <Box display="flex" alignItems="center" gap={0.5}>
              <img
                         src={cityMap}
                         alt={"city map"}
                         style={{ width: "12px", height: "12px", marginRight: "5px" }}
                       />
            <Typography fontSize={14}>{location}</Typography>
          </Box>
        )}
        {year && (
          <Box display="flex" alignItems="center" gap={0.5}>
             <img
                          src={calendar}
                          alt={"calendar icon"}
                          style={{ width: "12px", height: "12px", marginRight: "5px" }}
                        />
            <Typography fontSize={14}>{year}</Typography>
          </Box>
        )}
        {size && (
          <Box display="flex" alignItems="center" gap={0.5}>
              <img
                          src={expandIcon}
                          alt={"expand icon"}
                          style={{ width: "12px", height: "12px", marginRight: "5px" }}
                        />
            <Typography fontSize={14}>{size}</Typography>
          </Box>
        )}
        {rating && (
          <Box display="flex" alignItems="center" gap={0.5}>
           <img
                        src={empty_star}
                        alt="empty-star"
                        style={{ height: "12px", marginBottom: "2px" }}
                      />
            <Typography fontSize={14}>{rating}</Typography>
          </Box>
        )}
      </Box>
      {description && (
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, minHeight: 48 }}>
          {description}
        </Typography>
      )}
<Box
  display="flex"
  justifyContent="flex-end" // aligns everything to the right
  alignItems="center"
  mt={1}
  gap={2} // space between the three items
>
  {typeof vipPrice === "number" && (
    <Typography fontWeight={700} sx={{ color: "#BFA14A", fontSize: 18 }}>
      VIP: ${vipPrice.toFixed(2)}
    </Typography>
  )}
  <Typography fontWeight={700} fontSize={18} sx={{ color: "#222" }}>
    ${price.toFixed(2)}
  </Typography>
  <Button
    sx={{
      px: 3,
      py: 1.2,
      color: "#B72136",
      border: "1px solid #B72136",
      fontWeight: 700,
      borderRadius: 2,
      textTransform: "none",
      fontSize: 16,
      background: "#fff",
      "&:hover": {
        background: "#ffeef1",
        borderColor: "#B72136",
      },
    }}
    variant="outlined"
    onClick={() => onAddToCart(id)}
    startIcon={<ShoppingCart />}
  >
    Add to Cart
  </Button>
</Box>


    </CardContent>
  </Card>
);

export default ProductListCard;
