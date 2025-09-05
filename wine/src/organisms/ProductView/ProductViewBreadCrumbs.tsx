import React from 'react';
import BreadcrumbHeader from '../../molecules/Breadcrumbs/BreadCrumbsHeader';
import Breadcrumbs, { type BreadcrumbItem }  from "../../molecules/Breadcrumbs/BreadCrumbs";

const ProductViewBreadCrumbs = () => {
    const breadcrumbItems: BreadcrumbItem[] = [
            { label: "Home", href: "/" },
            // { label: "Category", href: "/" },
            { label: "Wines", href: "/productsList" },
            { label: "Kim Crawford Wine" }, // current page, no href
          ];
  return (
      <BreadcrumbHeader items={breadcrumbItems} showProductCount={false} />
  )
}

export default ProductViewBreadCrumbs