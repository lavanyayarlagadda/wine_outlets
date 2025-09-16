import { useState } from "react";

export function useFilters(onFilterChange?: (filters: Record<string, any>) => void) {
  const [filters, setFilters] = useState<Record<string, any>>({});
  const [selectedSub, setSelectedSub] = useState<string | null>(null);
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [openDrawer, setOpenDrawer] = useState(false);

  const updateFilters = (newFilters: Record<string, any>) => {
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const handleCheckboxChange = (categoryId: string, listName: string) => {
    const existing = filters[categoryId] || [];
    const updated = existing.includes(listName)
      ? existing.filter((x: string) => x !== listName)
      : [...existing, listName];
    updateFilters({ ...filters, [categoryId]: updated });
  };

  const handleSliderChange = (categoryId: string, value: number | number[]) => {
    updateFilters({ ...filters, [categoryId]: value });
  };

  const handleClearAll = () => {
    setFilters({});
    setSelectedSub(null);
    setChecked({});
    onFilterChange?.({});
  };

  return {
    filters,
    checked,
    selectedSub,
    openDrawer,
    setOpenDrawer,
    setSelectedSub,
    setChecked,
    handleCheckboxChange,
    handleSliderChange,
    handleClearAll,
  };
}
