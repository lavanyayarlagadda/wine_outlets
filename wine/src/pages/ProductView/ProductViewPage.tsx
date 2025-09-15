import { Newsletter, RecentlyView } from "../../molecules";
import ProductViewBreadCrumbs from "../../organisms/ProductView/ProductViewBreadCrumbs";
import Product from "../../organisms/ProductView/Product";
import ProfessionalRating from "../../organisms/ProductView/ProfessionalRating";
import RatingsBreakdown from "../../organisms/RatingsBreakDown/RatingsBreakDown";

const ProductViewPage = () => {
  return (
    <>
      <ProductViewBreadCrumbs />
      <Product />
      <ProfessionalRating />
      <RatingsBreakdown />
      <RecentlyView />
      <Newsletter />
    </>
  );
};

export default ProductViewPage;
