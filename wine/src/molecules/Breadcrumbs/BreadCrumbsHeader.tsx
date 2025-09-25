import React from "react";
import Breadcrumbs, { type BreadcrumbItem } from "../Breadcrumbs/BreadCrumbs";
import {
  BreadcrumbHeaderWrapper,
  BreadcrumbsBox,
  ProductCountBox,
  ProductCountText,
} from "./BreadCrumbs.style";

interface BreadcrumbHeaderProps {
  items?: BreadcrumbItem[];
  productCount?: number;
  showProductCount?: boolean;
}

const BreadcrumbHeader: React.FC<BreadcrumbHeaderProps> = ({
  items,
  productCount,
  showProductCount = true,
}) => (
  <BreadcrumbHeaderWrapper>
    <BreadcrumbsBox>{items && <Breadcrumbs items={items} separator=">" />}</BreadcrumbsBox>

    {showProductCount && (
      <ProductCountBox>
        <ProductCountText>{productCount} Products Found</ProductCountText>
      </ProductCountBox>
    )}
  </BreadcrumbHeaderWrapper>
);

export default BreadcrumbHeader;
