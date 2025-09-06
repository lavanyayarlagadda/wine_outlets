import React from "react";

import { BreadcrumbsWrapper, ActiveCrumb, CrumbLink, CrumbText } from "./BreadCrumbs.style";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, separator = ">" }) => {
  return (
    <BreadcrumbsWrapper separator={separator} aria-label="breadcrumb">
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;

        return isLast ? (
          <ActiveCrumb key={idx}>{item.label}</ActiveCrumb>
        ) : item.href ? (
          <CrumbLink key={idx} href={item.href}>
            {item.label}
          </CrumbLink>
        ) : (
          <CrumbText key={idx}>{item.label}</CrumbText>
        );
      })}
    </BreadcrumbsWrapper>
  );
};

export default Breadcrumbs;
