import React, { useRef, useState } from "react";
import { useMediaQuery } from "@mui/material";

import FilterPanel from "../../organisms/Filter/FilterPanel";
import { filtersData as categories } from "../../constant/curatedData";
import { DEAL_PRODUCT } from "../../constant/dealProduct";
import ProductListCard from "../ProductListCard/ProductListCard";
import ProductGridCard from "../ProductListGrid/ProductGridCard";
import CustomPagination from "../Pagination/Pagination";
import Breadcrumbs, { type BreadcrumbItem } from "../Breadcrumbs/BreadCrumbs";
import BreadcrumbHeader from "../Breadcrumbs/BreadCrumbsHeader";
import FilterTagList from "../FilterTag/FilterTagList";
import SortAndViewControls from "../SortAndView/SortAndViewControl";

import {
  LayoutContainer,
  SidebarWrapper,
  ContentWrapper,
  ControlsWrapper,
  ProductsWrapper,
  ProductsGrid,
} from "./ProductList.style";

const ProductList = () => {
  const [sortBy, setSortBy] = useState("relevance");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [cartItems, setCartItems] = useState<number[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const topRef = useRef<HTMLDivElement | null>(null);

  const isMobileOrTablet = useMediaQuery((theme: any) =>
    theme.breakpoints.down("md")
  );

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    { label: "Wine" },
  ];

  const PRODUCTS_PER_PAGE = 24;
  const PRODUCTS_PER_ROW = 3;

  const allProducts = DEAL_PRODUCT;

  const handleAddToCart = (productId: any) => {
    setCartItems((prev) =>
      prev.includes(productId) ? prev : [...prev, productId]
    );
  };

  const handleToggleFavorite = (productId: any) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const currentProducts = allProducts.slice(startIndex, endIndex);

  const filters = [
    {
      label: "wines",
      count: 28,
    },
  ];

  return (
    <>
      <BreadcrumbHeader
        items={breadcrumbItems}
        productCount={allProducts.length}
      />

      <LayoutContainer>
        <SidebarWrapper>
          <FilterPanel
            categories={categories.categories}
            onFilterChange={() => {}}
          />
        </SidebarWrapper>

        {/* Main Content */}
        <ContentWrapper>
          {/* Controls */}
          <ControlsWrapper>
            <FilterTagList filters={filters} onDelete={() => {}} />
            <SortAndViewControls
              sortBy={sortBy}
              onSortChange={setSortBy}
              view={view}
              onViewChange={setView}
            />
          </ControlsWrapper>

          {/* Products */}
          <ProductsWrapper>
            <div ref={topRef} />
<ProductsGrid view={view} columns={PRODUCTS_PER_ROW}>
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
</ProductsGrid>


            {/* Pagination */}
            <CustomPagination
              count={Math.ceil(allProducts.length / PRODUCTS_PER_PAGE)}
              page={currentPage}
              onChange={(newPage) => {
                setCurrentPage(newPage);
                topRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
            />
          </ProductsWrapper>
        </ContentWrapper>
      </LayoutContainer>
    </>
  );
};

export default ProductList;
