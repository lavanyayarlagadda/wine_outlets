import { Newsletter, RecentlyView } from "../../molecules";
import ProductViewBreadCrumbs from "../../organisms/ProductView/ProductViewBreadCrumbs";
import Product from "../../organisms/ProductView/Product";
import ProfessionalRating from "../../organisms/ProductView/ProfessionalRating";
import { ProductView } from "../../molecules";

const ProductViewPage = () => {
  return (
    <>
      <ProductViewBreadCrumbs />
      <Product />
      <ProfessionalRating />

      <ProductView />
      <RecentlyView />
      <Newsletter />
    </>
  );
};

export default ProductViewPage;
