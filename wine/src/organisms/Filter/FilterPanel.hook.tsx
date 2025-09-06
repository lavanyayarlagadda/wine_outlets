import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export interface Filters {
  [key: string]: any;
}

export const useFilterPanel = (categories: any[], onFilterChange?: (filters: Filters) => void) => {
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category"); // e.g., "wine"
  const selectedId = searchParams.get("id"); // e.g., "1"

  const [selectedSub, setSelectedSub] = useState<string | null>(null);
  const [filters, setFilters] = useState<Filters>({});
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleSubSelect = (id: string) => {
    setSelectedSub(id === selectedSub ? null : id);
  };

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

  useEffect(() => {
    if (categories.length === 0) return;

    let subFound = false; // track if we already selected

    for (const cat of categories) {
      for (const sub of cat.subCategories || []) {
        // Priority 1: selectedId
        if (selectedId) {
          const selectedItem = sub.categoryList?.find((item: any) => item.listId === selectedId);
          if (selectedItem) {
            setFilters((prev) => {
              const newFilters = { ...prev, [sub.categoryId]: [selectedItem.listId] };
              onFilterChange?.(newFilters);
              return newFilters;
            });
            setSelectedSub(sub.categoryId);
            subFound = true;
            break; // exit inner loop
          }
        }

        // Priority 2: selectedCategory (only if selectedId not found yet)
        if (
          !subFound &&
          selectedCategory &&
          sub.categoryName.toLowerCase() === selectedCategory.toLowerCase()
        ) {
          setSelectedSub(sub.categoryId);
          subFound = true;
          break; // exit inner loop
        }
      }
      if (subFound) break; // exit outer loop
    }
  }, [categories, selectedCategory, selectedId, onFilterChange]);

  return {
    filters,
    openDrawer,
    setOpenDrawer,
    handleCheckboxChange,
    handleSliderChange,
    handleClearAll,
    handleSubSelect,
    selectedSub,
  };
};
