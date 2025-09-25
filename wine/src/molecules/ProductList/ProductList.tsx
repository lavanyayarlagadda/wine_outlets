import React from "react";
import FilterPanel from "../../organisms/Filter/FilterPanel";
import ProductListCard from "../ProductListCard/ProductListCard";
import ProductGridCard from "../ProductListGrid/ProductGridCard";
import CustomPagination from "../Pagination/Pagination";
// import { type BreadcrumbItem } from "../Breadcrumbs/BreadCrumbs";
// import BreadcrumbHeader from "../Breadcrumbs/BreadCrumbsHeader";
import FilterTagList from "../FilterTag/FilterTagList";
import SortAndViewControls from "../SortAndView/SortAndViewControl";

import type { ProductListHookReturn } from "./ProductList.hook";

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
import { StyledSkeletonRect } from "../../organisms/Filter/FilterPanel.style";
import { NoDataText } from "../../organisms/CartOverview/CartOverview.style";

interface ProductListProps {
  sortBy: ProductListHookReturn["sortBy"];
  view: ProductListHookReturn["view"];
  setView: ProductListHookReturn["setView"];
  wishlist: ProductListHookReturn["wishlist"];
  currentPage: ProductListHookReturn["currentPage"];
  topRef: ProductListHookReturn["topRef"];
  currentProducts: ProductListHookReturn["currentProducts"];
  totalPages: ProductListHookReturn["totalPages"];
  productsPerRow: ProductListHookReturn["productsPerRow"];
  handleAddToCart: ProductListHookReturn["handleAddToCart"];
  handleToggleFavorite: ProductListHookReturn["handleToggleFavorite"];
  handlePageChange: ProductListHookReturn["handlePageChange"];
  data: ProductListHookReturn["data"];
  isLoading: ProductListHookReturn["isLoading"];
  loadingProduct: ProductListHookReturn["loadingProduct"];
  ProductListLoading: ProductListHookReturn["ProductListLoading"];
  wishListLoading: ProductListHookReturn["wishListLoading"];
  totalProducts: ProductListHookReturn["totalProducts"];
  handleSortChange: ProductListHookReturn["handleSortChange"];
}

const ProductList: React.FC<ProductListProps> = ({
  sortBy,
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
  // totalProducts,
  handleSortChange,
}) => {
  // const breadcrumbItems: BreadcrumbItem[] = [{ label: "Home", href: "/" }, { label: "Wine" }];

  const dispatch = useDispatch();
  const { selectedNames } = useSelector((state: RootState) => state.productListSlice);

  // Flatten selectedNames to just values for display
  const selectedValues = Object.values(selectedNames).flat();

  // Handle delete
  const handleDelete = (value: string) => {
    // Remove the value from all keys
    const updatedSelectedNames: Record<string, string[]> = {};
    Object.entries(selectedNames).forEach(([key, values]) => {
      const filtered = values.filter((v) => v !== value);
      if (filtered.length > 0) updatedSelectedNames[key] = filtered;
    });

    dispatch(setSelectedNames(updatedSelectedNames));
  };

  return (
    <>
      {/* <BreadcrumbHeader items={breadcrumbItems} productCount={totalProducts} /> */}

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
            <FilterTagList filters={selectedValues} onDelete={handleDelete} />
            <SortAndViewControls
              sortBy={sortBy}
              onSortChange={handleSortChange}
              view={view}
              onViewChange={setView}
            />
          </ControlsWrapper>

          <ProductsWrapper>
            <div ref={topRef} />
            <ProductsGrid view={view} columns={productsPerRow}>
              {ProductListLoading ? (
                Array.from({ length: productsPerRow * 2 }).map((_, index) =>
                  view === "list" ? (
                    <StyledCard key={`skeleton-${index}`} elevation={0}>
                      <StyledSkeletonRect />
                      <StyledCardContent>
                        <Skeleton variant="text" width="60%" height={30} />
                        <Skeleton variant="text" width="40%" height={20} />
                        <StyledSkeletonRect />
                        <Skeleton variant="text" width="30%" height={40} />
                        <StyledSkeletonRect />
                      </StyledCardContent>
                    </StyledCard>
                  ) : (
                    <StyledCard key={`skeleton-${index}`} elevation={0}>
                      <StyledSkeletonRect />
                      <StyledCardContent>
                        <Skeleton variant="text" width="70%" height={25} />
                        <Skeleton variant="text" width="50%" height={20} />
                        <StyledSkeletonRect />
                      </StyledCardContent>
                    </StyledCard>
                  )
                )
              ) : currentProducts && currentProducts?.length > 0 ? (
                currentProducts?.map((product: any) =>
                  view === "list" ? (
                    <ProductListCard
                      key={product.id}
                      itemNumber={product.itemNumber}
                      itemName={product.itemName}
                      image={product.media.url}
                      price={product.price}
                      vipPrice={product.vipPrice}
                      location={product.region}
                      year={product.year}
                      size={product.size}
                      rating={product.rating}
                      description={product.description}
                      onAddToCart={() => handleAddToCart(product.itemNumber)}
                      onToggleFavorite={() => handleToggleFavorite(product.itemNumber)}
                      isFavorite={wishlist.includes(product.itemNumber)}
                      isLoading={loadingProduct}
                      wishListLoading={wishListLoading}
                    />
                  ) : (
                    <ProductGridCard
                      key={product.id}
                      product={product}
                      onAddToCart={() => handleAddToCart(product.itemNumber)}
                      onToggleFavorite={() => handleToggleFavorite(product.itemNumber)}
                      isFavorite={wishlist.includes(product.itemNumber)}
                      isLoading={loadingProduct}
                      wishListLoading={wishListLoading}
                    />
                  )
                )
              ) : (
                <NoDataText variant="body2">No data available</NoDataText>
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
