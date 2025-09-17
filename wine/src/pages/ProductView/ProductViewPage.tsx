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
          <ProfessionalRating
            expanded={expanded}
            toggleExpand={toggleExpand}
            productDetailsData={productDetailsData}
            productDetailLoading={productDetailLoading}
          />
        </>
      )}

      <RatingsBreakdown />
      <RecentlyView />
      <Newsletter />
    </>
  );
};

export default ProductViewPage;
