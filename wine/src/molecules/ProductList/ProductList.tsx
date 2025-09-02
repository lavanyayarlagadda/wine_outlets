import React from 'react'
import {
  Box,
  Chip,
  FormControl,
  MenuItem,
  Select,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { GridView, ListAlt } from "@mui/icons-material";
import FilterComponent from "../../molecules/ProductList/Filter";
import { filtersData as categories } from "../../constant/curatedData";
import { DEAL_PRODUCT } from "../../constant/dealProduct";
import ProductCard from "../../molecules/ProductCard/ProductCard";
import ProductListCard from './ProductListCard';
import { CustomDropdown } from '../../atoms';
import FilterPanel from '../../organisms/Filter/FilterPanel';

const ProductList = () => {

  const [sortBy, setSortBy] = React.useState("relevance");
  const [view, setView] = React.useState("grid");
  const [cartItems, setCartItems] = React.useState<number[]>([]);
  const [wishlist, setWishlist] = React.useState<number[]>([]);

  const isMobileOrTablet = useMediaQuery((theme: any) => theme.breakpoints.down("md"));

  const handleFilters = (filters: Record<string, any>) => {
    console.log("Applied Filters:", filters);
  };

  const getCurrentProducts = () => DEAL_PRODUCT;

  const handleAddToCart = (productId: any) => {
    setCartItems((prev) => (prev.includes(productId) ? prev : [...prev, productId]));
  };

  const handleToggleFavorite = (productId: any) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

const alcoholPreferences = [
  { label: "Relevance", value: "relevance" },
  { label: "Price (Low to High)", value: "price_low_high" },
  { label: "Price (High to Low)", value: "price_high_low" },
  { label: "Rating", value: "rating" },
];

  return (
  
      <Box
        sx={{
          pt: 4,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "100%",
          height: "100%",
        }}
      >
        {/* Left: Filter Sidebar / Drawer */}
        <Box
          sx={{
            flex: { xs: "0 0 auto", md: "0 0 25%" },
          p:4,
            mb: { xs: 2, md: 0 },
          }}
        >
          <FilterPanel
            categories={categories.categories}
            onFilterChange={handleFilters}
          />
        </Box>

        {/* Right: Main Content */}
        <Box
          sx={{
            flex: { xs: "1 1 auto", md: "0 0 75%" },
            pl: { md: 2 },
          }}
        >
          {/* Applied Filters & Sort/View */}
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            flexWrap={isMobileOrTablet ? "wrap" : "nowrap"}
            py={1}
            px={isMobileOrTablet ? 1 : 3}
            gap={2}
          >
            <Box display="flex" flexDirection="column" alignItems="flex-start" gap={1}>
              <Typography variant="body2" color="text.secondary">
                Applied filters:
              </Typography>
              <Chip label="Wines (30)" onDelete={() => {}} size="medium" variant="outlined" />
            </Box>

            <Box display="flex" alignItems="center" gap={2}>
              <FormControl size="small" sx={{ minWidth: 160 }}>
                  <CustomDropdown
  label="Sort by:"
  value={sortBy}
  onChange={
    setSortBy
  }
  options={alcoholPreferences}
  placeholder="Select Preference"
  side={true}
/>

              </FormControl>
              <ToggleButtonGroup
                value={view}
                exclusive
                onChange={(e, val) => val && setView(val)}
                size="small"
              >
                <ToggleButton value="grid">
                  <GridView />
                </ToggleButton>
                <ToggleButton value="list">
                  <ListAlt />
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>
          </Box>

{/* Products Grid/List */}
<Box
  sx={{
    display: "grid",
    gridTemplateColumns:
      view === "grid"
        ? { xs: "repeat(1, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }
        : "repeat(1, 1fr)",
    gap: 3,
    mb: 3,
    mt: 7,
  }}
>
  {getCurrentProducts().map((product) =>
    view === "list" ? (
 <ProductListCard
      key={product.id}
      id={product.id}
      name={product.name}
      image={product.media.url}          // map imageUrl -> image
      price={product.price}      // map regularPrice -> price
      vipPrice={product.vipPrice}
      location={product.region}         // map region -> location
      year={product.year}
      size={product.size}             // map volume -> size
      rating={product.rating}
      description={product.description} // if available
      onAddToCart={() => handleAddToCart(product.id)}
      onToggleFavorite={() => handleToggleFavorite(product.id)}
      isFavorite={wishlist.includes(Number(product.id))}
    />
    ) : (
      <ProductCard
        key={product.id}
        product={product}
        onAddToCart={() => handleAddToCart(product.id)}
        onToggleFavorite={() => handleToggleFavorite(product.id)}
        // isFavorite={wishlist.includes(product.id)}
      />
    )
  )}
</Box>

        </Box>
      </Box>
  )
}

export default ProductList