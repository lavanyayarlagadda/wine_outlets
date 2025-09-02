// Breadcrumbs.tsx
import React from "react";
import { Breadcrumbs as MUIBreadcrumbs, Link, Typography } from "@mui/material";
import palette from "../../themes/palette";

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
    <MUIBreadcrumbs separator={separator} aria-label="breadcrumb" sx={{p:2}}>
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;

        return isLast ? (
          <Typography key={idx} color={palette.primary.dark} sx={{ fontWeight: 500 }}>
            {item.label}
          </Typography>
        ) : item.href ? (
          <Link
            key={idx}
            href={item.href}
            underline="none"
            color={palette.black[800]}
            sx={{ "&:hover": { textDecoration: "underline" } }}
          >
            {item.label}
          </Link>
        ) : (
          <Typography key={idx} color={palette.black[800]}>
            {item.label}
          </Typography>
        );
      })}
    </MUIBreadcrumbs>
  );
};

export default Breadcrumbs;
