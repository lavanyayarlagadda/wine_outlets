import React from "react";
import { Box } from "@mui/material";
import { FilterTagList, SortAndViewContainer } from "../../molecules";

interface ProductToolbarProps {
  filters: { label: string; count: number }[];
  onDeleteFilter: () => void;
  sortBy: string;
  onSortChange: () => void;
  view: "grid" | "list";
  onViewChange: () => void;
}

const ProductToolbar: React.FC<ProductToolbarProps> = ({
  filters,
  onDeleteFilter,
  sortBy,
  onSortChange,
  view,
  onViewChange,
}) => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="space-between"
    flexWrap={{ xs: "wrap", sm: "nowrap" }}
    py={1}
    px={{ xs: 0, sm: 1 }}
    gap={2}
  >
    <FilterTagList filters={filters.map((f) => f.label)} onDelete={onDeleteFilter} />
    <SortAndViewContainer
      sortBy={sortBy}
      onSortChange={onSortChange}
      view={view}
      onViewChange={onViewChange}
    />
  </Box>
);

export default ProductToolbar;
