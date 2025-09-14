import { Container } from "./CategorySection.style";
import { CustomTitleSection } from "../../atoms";
import ProductCardSection from "./layout/ProductCard";
import type { ShopByCategorySection } from "../../store/Interfaces/LandingPageInterface/HomePageSectionsDataInterface";
import { useGetHomeSectionsQuery } from "../../store/apis/Home/homeAPI";

const CategorySection = () => {
  const { data: sections } = useGetHomeSectionsQuery();
  const shopSection: ShopByCategorySection = sections?.sections?.shopByCategory ?? {};
  const isVisible = shopSection.isVisible ?? "";
  const title = shopSection.title ?? "";
  const subtitle = shopSection.subtitle ?? "";
  const categories = shopSection.categories ?? [];

  if (!isVisible) return null;

  return (
    <Container>
      <CustomTitleSection title={title} subtitle={subtitle} />
      <ProductCardSection categories={categories} />
    </Container>
  );
};

export default CategorySection;
