import React from "react";

import { Newsletter, ProductListBanner } from "../../molecules";
import ProductList from "../../molecules/ProductList/ProductList";
import { useProductList } from "../../molecules/ProductList/ProductList.hook";

const ProductListPage = () => {
  const {
    currentSlide,
    slides,
    goToSlide,
    current,
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
    totalProducts,
    handleSortChange,
  } = useProductList();
  return (
    <>
      <ProductListBanner
        currentSlide={currentSlide}
        slides={slides}
        goToSlide={goToSlide}
        current={current}
      />
      <ProductList
        sortBy={sortBy}
        view={view}
        setView={setView}
        wishlist={wishlist}
        currentPage={currentPage}
        topRef={topRef}
        currentProducts={currentProducts}
        totalPages={totalPages}
        productsPerRow={productsPerRow}
        handleAddToCart={handleAddToCart}
        handleToggleFavorite={handleToggleFavorite}
        handlePageChange={handlePageChange}
        data={data}
        isLoading={isLoading}
        loadingProduct={loadingProduct}
        ProductListLoading={ProductListLoading}
        wishListLoading={wishListLoading}
        totalProducts={totalProducts}
        handleSortChange={handleSortChange}
      />

      <Newsletter />
    </>
  );
};

export default ProductListPage;
