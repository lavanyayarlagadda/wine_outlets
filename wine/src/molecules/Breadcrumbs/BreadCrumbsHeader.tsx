import React from "react";
import { Box, Typography } from "@mui/material";
import Breadcrumbs, { type BreadcrumbItem } from "../Breadcrumbs/BreadCrumbs";
import palette from "../../themes/palette";

interface BreadcrumbHeaderProps {
  items: BreadcrumbItem[];
  productCount?: number;
  showProductCount?: boolean;
}

const BreadcrumbHeader: React.FC<BreadcrumbHeaderProps> = ({
  items,
  productCount,
   showProductCount = true,
}) => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="space-between"
    flexWrap={{ xs: "wrap", sm: "nowrap" }}
    px={{ xs: 2, md:4 }}
    gap={2}
  >
    <Box flex="1 1 auto">
      <Breadcrumbs items={items} separator=">" />
    </Box>
     {showProductCount && (
      <Box flex="0 0 auto" sx={{ pr: "12px" }}>
        <Typography variant="body2" color={palette.grey[200]}>
          {productCount} Products Found
        </Typography>
      </Box>
    )}
  </Box>
);

export default BreadcrumbHeader;
