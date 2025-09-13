import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import type { RootState } from "../../store";
import { setSelectedNames } from "../../store/slices/ProductList/productListSlice";

export interface Filters {
  [key: string]: any;
}

export const useFilterPanel = (categories: any[], onFilterChange?: (filters: Filters) => void) => {
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category");
  const selectedId = searchParams.get("id");
  const [selectedSub, setSelectedSub] = useState<string | null>(null);
  const [selectedNestedSub, setSelectedNestedSub] = useState<string | null>(null);
  const [filters, setFilters] = useState<Filters>({});
  const [openDrawer, setOpenDrawer] = useState(false);

  const { selectedNames } = useSelector((state: RootState) => state.productListSlice);
  const dispatch = useDispatch();

  const handleNestedSubSelect = (id: string) => {
    setSelectedNestedSub(id === selectedNestedSub ? null : id);
  };

  const handleSubSelect = (sub: {
    categoryId: string;
    categoryName: string;
    categoryCount: number;
  }) => {
    const hasSelections = filters[sub.categoryId]?.length > 0;

    if (selectedSub === sub.categoryId) {
      // deselect subcategory
      setSelectedSub(null);
      if (!hasSelections) {
        dispatch(setSelectedNames([]));
      }
    } else {
      setSelectedSub(sub.categoryId);

      // ✅ Only save subcategory name if no children are checked
      if (!hasSelections) {
        const displayName = `${sub.categoryName} (${sub.categoryCount})`;
        dispatch(setSelectedNames([displayName]));
      }
    }
  };

  const handleCheckboxChange = (
    categoryId: string,
    value: string,
    label: string,
    type: "category" | "sub" | "nested" = "nested",
    count?: number
  ) => {
    // --- 1. Update IDs for API ---
    setFilters((prev) => {
      const existing = prev[categoryId] || [];
      const updated = existing.includes(value)
        ? existing.filter((v: string) => v !== value)
        : [...existing, value];

      const newFilters = { ...prev, [categoryId]: updated };
      onFilterChange?.(newFilters);
      return newFilters;
    });

    // --- 2. Update Names for UI ---
    let displayName = label;
    if (type === "sub" && count !== undefined) {
      displayName = `${label} (${count})`;
    }

    let updatedNames: string[];

    if (selectedNames.includes(displayName)) {
      // remove name
      updatedNames = selectedNames.filter((v) => v !== displayName);
    } else {
      // add name
      updatedNames = [...selectedNames.filter((n) => !n.includes("(")), displayName];
    }

    // ✅ Remove parent subcategory name if child/nested is selected
    if (type === "sub" || type === "nested") {
      updatedNames = updatedNames.filter((n) => !n.endsWith(")"));
    }

    dispatch(setSelectedNames(updatedNames));
  };

  const handleSliderChange = (categoryId: string, value: number | number[]) => {
    const valArray = Array.isArray(value) ? value.map(String) : [String(value)];
    setFilters((prev) => {
      const newFilters = { ...prev, [categoryId]: valArray };
      onFilterChange?.(newFilters);
      return newFilters;
    });

    // treat slider as a single "range" label
    dispatch(setSelectedNames([`Range: ${valArray.join(" - ")}`]));
  };

  const handleClearAll = () => {
    setFilters({});
    dispatch(setSelectedNames([]));
    onFilterChange?.({});
  };

  useEffect(() => {
    if (categories.length === 0) return;

    const params = new URLSearchParams(window.location.search);
    const subCategoryId = params.get("subCategoryId");

    let subFound = false;

    for (const cat of categories) {
      for (const sub of cat.subCategories || []) {
        // Priority 1: selectedId → save only item
        if (!subFound && selectedId) {
          const selectedItem = sub.categoryList?.find((item: any) => item.listId === selectedId);
          if (selectedItem) {
            setFilters({ [sub.categoryId]: [selectedItem.listId] });

            // ✅ item only
            const displayName = `${selectedItem.listName} (${selectedItem.count ?? 0})`;
            dispatch(setSelectedNames([displayName]));

            setSelectedSub(sub.categoryId);
            subFound = true;
            break;
          }
        }

        // Priority 2: subCategoryId → only if no children are pre-selected
        if (!subFound && subCategoryId && sub.categoryId === subCategoryId) {
          const count = Number(sub.categoryCount ?? 0);

          setSelectedSub(sub.categoryId);

          // ✅ only subcategory name (not items)
          dispatch(setSelectedNames([`${sub.categoryName} (${count})`]));
          subFound = true;
          break;
        }

        // Priority 3: selectedCategory by name → only sub
        if (
          !subFound &&
          selectedCategory &&
          sub.categoryName.toLowerCase() === selectedCategory.toLowerCase()
        ) {
          setFilters({ [cat.categoryId]: [sub.categoryId] });

          const displayName = `${sub.categoryName} (${sub.categoryCount ?? 0})`;
          dispatch(setSelectedNames([displayName]));

          setSelectedSub(sub.categoryId);
          subFound = true;
          break;
        }
      }

      // Fallback: main category directly
      if (
        !subFound &&
        selectedCategory &&
        cat.categoryName.toLowerCase() === selectedCategory.toLowerCase()
      ) {
        setFilters({ [cat.categoryId]: [cat.categoryId] });

        // ✅ category only
        dispatch(setSelectedNames([cat.categoryName]));
        subFound = true;
      }

      if (subFound) break;
    }
  }, [categories, selectedCategory, selectedId]);

  return {
    filters, // ids
    selectedNames, // flat names (category / sub / nested w count)
    openDrawer,
    setOpenDrawer,
    handleCheckboxChange,
    handleSliderChange,
    handleClearAll,
    handleSubSelect,
    selectedSub,
    selectedNestedSub,
    setSelectedNestedSub,
    handleNestedSubSelect,
  };
};
