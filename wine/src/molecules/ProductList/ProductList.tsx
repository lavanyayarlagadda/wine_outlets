import React from "react";
import FilterPanel from "../../organisms/Filter/FilterPanel";
import { filtersData as categories } from "../../constant/curatedData";
import ProductListCard from "../ProductListCard/ProductListCard";
import ProductGridCard from "../ProductListGrid/ProductGridCard";
import CustomPagination from "../Pagination/Pagination";
import { type BreadcrumbItem } from "../Breadcrumbs/BreadCrumbs";
import BreadcrumbHeader from "../Breadcrumbs/BreadCrumbsHeader";
import FilterTagList from "../FilterTag/FilterTagList";
import SortAndViewControls from "../SortAndView/SortAndViewControl";

import { useProductList } from "./ProductList.hook";

import {
  LayoutContainer,
  SidebarWrapper,
  ContentWrapper,
  ControlsWrapper,
  ProductsWrapper,
  ProductsGrid,
} from "./ProductList.style";

const ProductList = () => {
  const {
    sortBy,
    setSortBy,
    view,
    setView,
    wishlist,
    currentPage,
    topRef,
    allProducts,
    currentProducts,
    totalPages,
    productsPerRow,
    handleAddToCart,
    handleToggleFavorite,
    handlePageChange,
  } = useProductList();

  const breadcrumbItems: BreadcrumbItem[] = [{ label: "Home", href: "/" }, { label: "Wine" }];

  const filters = [{ label: "wines", count: 28 }];

  return (
    <>
      <BreadcrumbHeader items={breadcrumbItems} productCount={allProducts.length} />

      <LayoutContainer>
        <SidebarWrapper>
          <FilterPanel categories={categories.categories} onFilterChange={() => {}} />
        </SidebarWrapper>

        <ContentWrapper>
          <ControlsWrapper>
            <FilterTagList filters={filters} onDelete={() => {}} />
            <SortAndViewControls
              sortBy={sortBy}
              onSortChange={setSortBy}
              view={view}
              onViewChange={setView}
            />
          </ControlsWrapper>

          <ProductsWrapper>
            <div ref={topRef} />
            <ProductsGrid view={view} columns={productsPerRow}>
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
                    isFavorite={wishlist.includes(product.id)}
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

            <CustomPagination count={totalPages} page={currentPage} onChange={handlePageChange} />
          </ProductsWrapper>
        </ContentWrapper>
      </LayoutContainer>
    </>
  );
};

export default ProductList;
