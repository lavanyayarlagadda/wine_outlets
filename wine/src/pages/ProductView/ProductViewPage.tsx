import { Newsletter, RecentlyView } from "../../molecules";
import ProductViewBreadCrumbs from "../../organisms/ProductView/ProductViewBreadCrumbs";
import Product from "../../organisms/ProductView/Product";
import ProfessionalRating from "../../organisms/ProductView/ProfessionalRating";
import RatingsBreakdown from "../../organisms/RatingsBreakDown/RatingsBreakDown";
import { useProductView } from "../../organisms/ProductView/UseProductView.hook";
import {
  BreadcrumbSkeleton,
  ButtonSkeleton,
  ButtonSkeletonRow,
  PriceSkeleton,
  ProductImageSkeleton,
  ProductNameSkeleton,
  RatingSkeleton,
  SkeletonWrapper,
} from "./ProductViewPage.style";
import { useRatingsBreakdown } from "../../organisms/RatingsBreakDown/RatingsBreakDown.hook";

const ProductViewPage = () => {
  const {
    productDetailLoading,
    productViewData,
    expanded,
    toggleExpand,
    productDetailsData,
    selectedSize,
    setSelectedSize,
    selectedVintage,
    setSelectedVintage,
    count,
    setCount,
    handleAddToCart,
    handleToggleFavorite,
    wishListLoading,
    loadingProduct,
    data,
    productId,
    vintageYearData,
  } = useProductView();
  const {
    selectedFilter,
    setSelectedFilter,
    getPercentage,
    filterButtons,
    filteredReviews,
    handleSubmit,
    ReviewLoading,
    rating,
    comment,
    setComment,
    setRating,
    reviewSummary,
    isLoading,
  } = useRatingsBreakdown();

  return (
    <>
      {productDetailLoading ? (
        <SkeletonWrapper>
          <BreadcrumbSkeleton variant="text" />
          <ProductImageSkeleton variant="rectangular" />
          <ProductNameSkeleton variant="text" />
          <RatingSkeleton variant="text" />
          <PriceSkeleton variant="text" />
          <ButtonSkeletonRow>
            <ButtonSkeleton variant="rectangular" />
            <ButtonSkeleton variant="rectangular" />
          </ButtonSkeletonRow>
        </SkeletonWrapper>
      ) : (
        <>
          <ProductViewBreadCrumbs />
          <Product
            productViewData={productViewData}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            selectedVintage={selectedVintage}
            setSelectedVintage={setSelectedVintage}
            count={count}
            setCount={setCount}
            handleAddToCart={handleAddToCart}
            handleToggleFavorite={handleToggleFavorite}
            wishListLoading={wishListLoading}
            loadingProduct={loadingProduct}
            data={data}
            productId={productId}
            vintageYearData={vintageYearData}
          />
          {productDetailsData?.productDetails?.professionalRating?.length > 0 && (
            <ProfessionalRating
              expanded={expanded}
              toggleExpand={toggleExpand}
              productDetailsData={productDetailsData}
              productDetailLoading={productDetailLoading}
            />
          )}
        </>
      )}
      <RatingsBreakdown
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
        getPercentage={getPercentage}
        filterButtons={filterButtons}
        filteredReviews={filteredReviews}
        isLoading={isLoading}
        handleSubmit={handleSubmit}
        ReviewLoading={ReviewLoading}
        rating={rating}
        comment={comment}
        setComment={setComment}
        setRating={setRating}
        reviewSummary={reviewSummary}
      />

      <RecentlyView />
      <Newsletter />
    </>
  );
};

export default ProductViewPage;
