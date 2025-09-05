import { useState } from "react";

export interface Filters {
  [key: string]: any;
}

export const useFilterPanel = (onFilterChange?: (filters: Filters) => void) => {
  const [filters, setFilters] = useState<Filters>({});
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleCheckboxChange = (categoryId: string, value: string) => {
    setFilters((prev) => {
      const existing = prev[categoryId] || [];
      const updated = existing.includes(value)
        ? existing.filter((v: string) => v !== value)
        : [...existing, value];
      const newFilters = { ...prev, [categoryId]: updated };
      onFilterChange?.(newFilters);
      return newFilters;
    });
  };

  const handleSliderChange = (categoryId: string, value: number | number[]) => {
    setFilters((prev) => {
      const newFilters = { ...prev, [categoryId]: value };
      onFilterChange?.(newFilters);
      return newFilters;
    });
  };

  const handleClearAll = () => {
    setFilters({});
    onFilterChange?.({});
  };

  return {
    filters,
    openDrawer,
    setOpenDrawer,
    handleCheckboxChange,
    handleSliderChange,
    handleClearAll,
  };
};
