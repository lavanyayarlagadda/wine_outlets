import { Container } from "./CategorySection.style";
import { CustomTitleSection } from "../../atoms";
import ProductCardSection from "./layout/ProductCard";
// import type { ShopByCategorySection } from "../../store/Interfaces/LandingPageInterface/HomePageSectionsDataInterface";
// import { useGetHomeSectionsQuery } from "../../store/apis/Home/HomeAPI";
import {
  SITE_SETTING_DEMO_DATA,
  type BannerCollectionSection,
} from "../../constant/LandingPageData";

const CategorySection = () => {
  // const { data: sections } = useGetHomeSectionsQuery();
  const categorySelectionData = SITE_SETTING_DEMO_DATA.pageSections.find(
    (s) => s.id === "collection-3"
  ) as BannerCollectionSection;
  // const shopSection: ShopByCategorySection = sections?.sections?.shopByCategory ?? {};
  const { isVisible, title, subtitle, content } = categorySelectionData;
  // const isVisible = shopSection.isVisible ?? "";
  // const title = shopSection.title ?? "";
  // const subtitle = shopSection.subtitle ?? "";
  // const categories = shopSection.categories ?? [];

  if (!isVisible) return null;

  return (
    <Container>
      <CustomTitleSection title={title} subtitle={subtitle} />
      <ProductCardSection categories={content} />
    </Container>
  );
};

export default CategorySection;
