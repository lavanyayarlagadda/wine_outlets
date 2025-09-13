import React from "react";
import FilterPanel from "../../organisms/Filter/FilterPanel";
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
import { StyledCard, StyledCardContent } from "../ProductListCard/ProductListCard.style";
import { Skeleton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import { setSelectedNames } from "../../store/slices/ProductList/productListSlice";

const ProductList = () => {
  const {
    sortBy,
    setSortBy,
    view,
    setView,
    wishlist,
    currentPage,
    topRef,
    currentProducts,
    totalPages,
    productsPerRow,
    handleAddToCart,
    handleToggleFavorite,
    handlePageChange,
    data,
    isLoading,
    loadingProduct,
    ProductListLoading,
    wishListLoading,
  } = useProductList();

  const breadcrumbItems: BreadcrumbItem[] = [{ label: "Home", href: "/" }, { label: "Wine" }];

  const dispatch = useDispatch();
  const { selectedNames } = useSelector((state: RootState) => state.productListSlice);

  if (selectedNames.length === 0) return null;

  const handleDelete = (name: string) => {
    dispatch(setSelectedNames(selectedNames.filter((n) => n !== name)));
  };

  return (
    <>
      <BreadcrumbHeader items={breadcrumbItems} productCount={totalPages} />

      <LayoutContainer>
        <SidebarWrapper>
          <FilterPanel
            categories={data ? data?.categories : []}
            onFilterChange={() => {}}
            isLoading={isLoading}
          />
        </SidebarWrapper>

        <ContentWrapper>
          <ControlsWrapper>
            <FilterTagList filters={selectedNames} onDelete={() => handleDelete} />
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
              {ProductListLoading
                ? Array.from({ length: productsPerRow * 2 }).map((_, index) =>
                    view === "list" ? (
                      <StyledCard key={`skeleton-${index}`} elevation={0}>
                        <Skeleton variant="rectangular" width="100%" height={200} />
                        <StyledCardContent>
                          <Skeleton variant="text" width="60%" height={30} />
                          <Skeleton variant="text" width="40%" height={20} />
                          <Skeleton variant="rectangular" width="100%" height={60} />
                          <Skeleton variant="text" width="30%" height={40} />
                          <Skeleton
                            variant="rectangular"
                            width="100%"
                            height={40}
                            style={{ marginTop: 8 }}
                          />
                        </StyledCardContent>
                      </StyledCard>
                    ) : (
                      <StyledCard key={`skeleton-${index}`} elevation={0}>
                        <Skeleton variant="rectangular" width="100%" height={150} />
                        <StyledCardContent>
                          <Skeleton variant="text" width="70%" height={25} />
                          <Skeleton variant="text" width="50%" height={20} />
                          <Skeleton
                            variant="rectangular"
                            width="100%"
                            height={40}
                            style={{ marginTop: 8 }}
                          />
                        </StyledCardContent>
                      </StyledCard>
                    )
                  )
                : currentProducts?.map((product: any) =>
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
                        isLoading={loadingProduct}
                        wishListLoading={wishListLoading}
                      />
                    ) : (
                      <ProductGridCard
                        key={product.id}
                        product={product}
                        onAddToCart={() => handleAddToCart(product.id)}
                        onToggleFavorite={() => handleToggleFavorite(product.id)}
                        isFavorite={wishlist.includes(product.id)}
                        isLoading={loadingProduct}
                        wishListLoading={wishListLoading}
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
