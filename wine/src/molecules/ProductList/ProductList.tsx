import React, { useRef, useState } from "react";
import {
  Box,
  Chip,
  FormControl,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { GridView, ListAlt } from "@mui/icons-material";
import FilterPanel from '../../organisms/Filter/FilterPanel';
import { filtersData as categories } from "../../constant/curatedData";
import { DEAL_PRODUCT } from "../../constant/dealProduct";
import ProductListCard from './ProductListCard';
import  ProductGridCard  from './ProductGridCard';
import { CustomDropdown } from '../../atoms';
import CustomPagination from "../Pagination/Pagination";
import Breadcrumbs, { type BreadcrumbItem } from "../Breadcrumbs/BreadCrumbs";
import palette from "../../themes/palette";
import { listImage,listImageGrey,gridImage,gridImageGrey } from "../../assets";
import BreadcrumbHeader from "../Breadcrumbs/BreadCrumbsHeader";
import FilterTagList from "../Filter/FilterTagList";
import SortAndViewControls from "../SortAndView/SortAndViewControl";


const ProductList = () => {
  const [sortBy, setSortBy] = useState("relevance");
const [view, setView] = useState<"grid" | "list">("grid");
  const [cartItems, setCartItems] = useState<number[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const topRef = useRef<HTMLDivElement | null>(null); 

  const isMobileOrTablet = useMediaQuery((theme: any) => theme.breakpoints.down("md"));
const breadcrumbItems: BreadcrumbItem[] = [
    { label: "Category", href: "/" },
    { label: "List" }, // current page, no href
  ];
  const PRODUCTS_PER_PAGE = 24;
  const PRODUCTS_PER_ROW = 3;

  const allProducts = DEAL_PRODUCT;

  const handleAddToCart = (productId: any) => {
    setCartItems(prev => (prev.includes(productId) ? prev : [...prev, productId]));
  };

  const handleToggleFavorite = (productId: any) => {
    setWishlist(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const currentProducts = allProducts.slice(startIndex, endIndex);

  const alcoholPreferences = [
    { label: "Relevance", value: "relevance" },
    { label: "Price (Low to High)", value: "price_low_high" },
    { label: "Price (High to Low)", value: "price_high_low" },
    { label: "Rating", value: "rating" },
  ];

  const filters = [{
    label:'wines',
    count:28
  }]

  return (
    <>
<BreadcrumbHeader items ={breadcrumbItems} productCount={allProducts.length}/>

<Box
  sx={{
    display: "flex",
    flexDirection: { xs: "column", md: "column",lg:"row" },
    overflowX: "hidden",
    width: "100%",
    boxSizing: "border-box",
    py:2
  }}
>

  <Box
    sx={{
      flex: { xs: "0 0 auto", md:"0 0 auto",lg: "0 0 20%" },
      mb: { xs: 2, md: 0 },
      px: { xs: 2, md: 2 }, 
    }}
  >
    <FilterPanel categories={categories.categories} onFilterChange={() => {}} />
  </Box>
  <Box
    sx={{
      flex: { xs: "1 1 auto", md: "0 0 69%",lg:"0 0 75%" },
      px: { xs: 2, md: '14px' },
      overflowX: "hidden",
      boxSizing: "border-box",
    }}
  >
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      flexWrap={{ xs: "wrap", sm: "nowrap" }}
      py={{ xs: 1, sm: 1 }}
      px={{ xs: 0, sm: 1 }}
      gap={2}
    >
<FilterTagList filters={filters} onDelete={()=>{}}/>
<SortAndViewControls sortBy={sortBy} onSortChange={setSortBy} view={view} onViewChange={setView} />
    </Box>

    <Box sx={{ width: "100%", overflowX: "hidden", p: { xs: 0, sm:'20px' } }}>
                  <Box ref={topRef} />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns:
            view === "grid"
              ? {
                  xs: "repeat(1, 1fr)",
                  sm: "repeat(2, 1fr)",
                  md: `repeat(${PRODUCTS_PER_ROW}, 1fr)`,
                }
              : "repeat(1, 1fr)",
          gap: { xs: 2, sm: 3 },
          mb: 3,
          mt: 3,
        }}
      >
        {currentProducts.map((product) =>
          view === "list" ? (
            <ProductListCard
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.media.url}
              price={product.price}
              vipPrice={product.vipPrice}
              location={product.region}
              year={product.year}
              size={product.size}
              rating={product.rating}
              description={product.description}
              onAddToCart={() => handleAddToCart(product.id)}
              onToggleFavorite={() => handleToggleFavorite(product.id)}
              isFavorite={wishlist.includes(Number(product.id))}
            />
          ) : (
            <ProductGridCard
              key={product.id}
              product={product}
              onAddToCart={() => handleAddToCart(product.id)}
              onToggleFavorite={() => handleToggleFavorite(product.id)}
            />
          )
        )}
      </Box>

      {/* Pagination */}
      <CustomPagination
        count={Math.ceil(allProducts.length / PRODUCTS_PER_PAGE)}
        page={currentPage}
      onChange={(newPage) => {
                setCurrentPage(newPage);
                topRef.current?.scrollIntoView({ behavior: "smooth" }); // 👈 scrolls only the list
              }}
      />
    </Box>
  </Box>
</Box>
</>
  );
};

export default ProductList;
