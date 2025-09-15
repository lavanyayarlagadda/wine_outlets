import { Newsletter, RecentlyView } from "../../molecules";
import ProductViewBreadCrumbs from "../../organisms/ProductView/ProductViewBreadCrumbs";
import Product from "../../organisms/ProductView/Product";
import ProfessionalRating from "../../organisms/ProductView/ProfessionalRating";
import RatingsBreakdown from "../../organisms/RatingsBreakDown/RatingsBreakDown";
import { UseProductView } from "../../organisms/ProductView/UseProductView.hook";
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
  const { productDetailLoading } = UseProductView();
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
          <Product />
          <ProfessionalRating />
        </>
      )}

      <RatingsBreakdown />
      <RecentlyView />
      <Newsletter />
    </>
  );
};

export default ProductViewPage;
