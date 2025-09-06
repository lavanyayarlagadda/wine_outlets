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

  const handleSubSelect = (id: string) => {
    setSelectedSub(id === selectedSub ? null : id);
  };

  useEffect(() => {
    if (!selectedCategory || !selectedId) return;

    categories.forEach((cat) => {
      cat.subCategories?.forEach((sub: any) => {
        if (sub.categoryName.toLowerCase() === selectedCategory.toLowerCase()) {
          const selectedItem = sub.categoryList?.find((item: any) => item.listId === selectedId);
          console.log(selectedId, selectedItem?.listId, "SELECEDITEM1");

          if (selectedItem) {
            // ✅ now store listId
            handleCheckboxChange(sub.categoryId, selectedItem.listId);

            // ✅ expand accordion
            setSelectedSub(sub.categoryId);
          }
        }
      });
    });
  }, [categories, selectedCategory, selectedId]);

  // Initialize filters state
  const [filters, setFilters] = useState<Filters>(() => {
    const initialFilters: Filters = {};

    if (selectedCategory && selectedId) {
      categories.forEach((cat) => {
        cat.subCategories?.forEach((sub: any) => {
          if (sub.categoryName.toLowerCase() === selectedCategory.toLowerCase()) {
            const selectedItem = sub.categoryList?.find((item: any) => item.listId === selectedId);
            if (selectedItem) {
              initialFilters[sub.categoryId] = [selectedItem.listId];
            }
          }
        });
      });
    }

    return initialFilters;
  });

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
    handleSubSelect,
    selectedSub,
  };
};
