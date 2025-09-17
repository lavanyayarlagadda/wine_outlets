import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import type { RootState } from "../../store";
import { setProductsData, setSelectedNames } from "../../store/slices/ProductList/productListSlice";

export interface Filters {
  [key: string]: any;
}

export const useFilterPanel = (categories: any[], onFilterChange?: (filters: Filters) => void) => {
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category");
  const selectedSubName = searchParams.get("subName");
  const selectedNestedName = searchParams.get("nestedName");
  const [selectedSub, setSelectedSub] = useState<string | null>(null);
  const [selectedNestedSub, setSelectedNestedSub] = useState<string | null>(null);
  const [filters, setFilters] = useState<Filters>({});
  const [openDrawer, setOpenDrawer] = useState(false);

  const { selectedNames, productsData } = useSelector((state: RootState) => state.productListSlice);
  const dispatch = useDispatch();

  const handleNestedSubSelect = (
    nested: { categoryId: string; categoryName: string },
    parentSubId: string
  ) => {
    const isSelected = selectedNestedSub === nested.categoryId;
    const newNestedId = isSelected ? null : nested.categoryId;
    setSelectedNestedSub(newNestedId);

    // ✅ Update filters for this nested category under parent sub
    setFilters((prev) => {
      const parentFilters = prev[parentSubId] || [];
      const updated = isSelected
        ? parentFilters.filter((id: string) => id !== nested.categoryId)
        : [...parentFilters, nested.categoryId];
      return { ...prev, [parentSubId]: updated };
    });

    let updatedNames: string[];
    if (isSelected) {
      updatedNames = selectedNames.filter((name) => name !== nested.categoryName);
    } else {
      updatedNames = [...selectedNames, nested.categoryName];
    }
    dispatch(setSelectedNames(updatedNames));
  };

  const handleSubSelect = (sub: {
    categoryId: string;
    categoryName: string;
    categoryCount: number;
  }) => {
    const hasSelections = filters[sub.categoryId]?.length > 0;
    const categoryKey = sub.categoryName.toLowerCase();

    if (selectedSub === sub.categoryId) {
      // Deselect this sub only
      setSelectedSub(null);

      if (!hasSelections) {
        // Remove only this sub from selectedNames
        dispatch(
          setSelectedNames(
            selectedNames.filter((name: string) => !name.startsWith(sub.categoryName))
          )
        );

        // Remove only this category from productsData
        const newData = { ...productsData };
        delete newData[categoryKey];
        dispatch(setProductsData(newData));
      }
    } else {
      // Switch to new sub
      setSelectedSub(sub.categoryId);

      if (!hasSelections) {
        const displayName = `${sub.categoryName} (${sub.categoryCount})`;

        // Merge into productsData instead of replacing
        const newData = {
          ...productsData,
          category: categoryKey,
          department: "",
          subDepartment: "", // add/override only this key
        };
        dispatch(setProductsData(newData));

        // Keep existing names, remove duplicates of this sub, then add new one
        const updatedNames = [
          ...selectedNames.filter((name: string) => !name.startsWith(sub.categoryName)),
          displayName,
        ];
        dispatch(setSelectedNames(updatedNames));
      }
    }
  };

  const handleCheckboxChange = (
    categoryId: string,
    value: string,
    label: string,
    type: "category" | "sub" | "nested" = "nested",
    count?: number,
    categoryName?: any
  ) => {
    setFilters((prev) => {
      const existing = prev[categoryId] || [];
      const updated = existing.includes(value)
        ? existing.filter((v: string) => v !== value)
        : [...existing, value];

      const newFilters = { ...prev, [categoryId]: updated };
      onFilterChange?.(newFilters);
      return newFilters;
    });
    let displayName = label;
    if (type === "sub" && count !== undefined) {
      displayName = `${label} (${count})`;
    }
    let updatedNames: string[];
    if (selectedNames.includes(displayName)) {
      updatedNames = selectedNames.filter((v) => v !== displayName);
    } else {
      updatedNames = [...selectedNames.filter((n) => !n.includes("(")), displayName];
    }
    if (type === "sub" || type === "nested") {
      updatedNames = updatedNames.filter((n) => !n.endsWith(")"));
    }
    dispatch(setSelectedNames(updatedNames));
    const currentProductsList = productsData;
    const newProductsList = { ...currentProductsList };
    const categoryKeyMap: Record<string, string> = {
      size: "size",
      occasion: "occasion",
      vintageyear: "vintageYear",
      brand: "brand",
      tags: "tags",
      customerrating: "customerRating",
      grapevariety: "grapeVariety",
      origin: "origin",
    };

    const normalizedCategory = categoryName?.toLowerCase().replace(/\s+/g, "");

    if (normalizedCategory && categoryKeyMap[normalizedCategory]) {
      const key = categoryKeyMap[normalizedCategory];
      const currentValues = currentProductsList[key] || [];
      newProductsList[key] = currentValues.includes(label)
        ? currentValues.filter((v: string) => v !== label)
        : [...currentValues, label];
    } else if (type === "sub") {
      const currentDept = currentProductsList.department || [];
      newProductsList.department = currentDept.includes(label)
        ? currentDept.filter((v: string) => v !== label)
        : [...currentDept, label];
    } else if (type === "nested") {
      const currentSubDept = currentProductsList.subDepartment || [];
      newProductsList.subDepartment = currentSubDept.includes(label)
        ? currentSubDept.filter((v: string) => v !== label)
        : [...currentSubDept, label];
    }

    dispatch(setProductsData(newProductsList));
  };

  const handleSliderChange = (
    categoryId: string,
    value: number | number[],
    categoryName: string
  ) => {
    const currentProductsList = { ...productsData };
    if (categoryName === "Price Range" && Array.isArray(value)) {
      currentProductsList.price = { min: value[0], max: value[1] };
    } else {
      currentProductsList["alcoholContent"] = Array.isArray(value) ? value[0] : value;
    }

    dispatch(setProductsData(currentProductsList));
    const valArray = Array.isArray(value) ? value.map(String) : [String(value)];
    setFilters((prev) => {
      const newFilters = { ...prev, [categoryId]: valArray };
      onFilterChange?.(newFilters);
      return newFilters;
    });
    const rangeLabel =
      categoryId === "price"
        ? `Price: ${valArray.join(" - ")}`
        : `${categoryId}: ${valArray.join(" - ")}`;

    const currentSelectedNames = selectedNames || [];
    const filtered = currentSelectedNames.filter(
      (name) => !name.startsWith(categoryId + ":") && !name.startsWith("Price:")
    );

    dispatch(setSelectedNames([...filtered, rangeLabel]));
  };

  const handleClearAll = () => {
    setFilters({});
    dispatch(setSelectedNames([]));
    onFilterChange?.({});
  };

  useEffect(() => {
    if (selectedNames?.length === 0) {
      setFilters({});
    }
  }, [selectedNames]);
  useEffect(() => {
    if (categories.length === 0) return;
    if (selectedCategory) {
      let subFound = false;

      for (const cat of categories) {
        for (const sub of cat.subCategories || []) {
          // Match the subCategory first
          if (!subFound && selectedSubName) {
            const selectedItem = sub.categoryList?.find(
              (item: any) =>
                item.listName.toLowerCase().replace(/\s+/g, "") ===
                selectedSubName.toLowerCase().replace(/\s+/g, "")
            );

            if (selectedItem) {
              setFilters({ [sub.categoryId]: [selectedItem.listId] });
              const displayName = selectedItem.count
                ? `${selectedItem.listName} (${selectedItem.count})`
                : selectedItem.listName;
              dispatch(setSelectedNames([displayName]));
              setSelectedSub(sub.categoryId);
              subFound = true;

              // ✅ Check for nested category
              if (selectedNestedName && selectedItem.categories?.length > 0) {
                const nestedItem = selectedItem.categories.find(
                  (nested: any) =>
                    nested.categoryName.toLowerCase().replace(/\s+/g, "") ===
                    selectedNestedName.toLowerCase().replace(/\s+/g, "")
                );
                if (nestedItem) {
                  setSelectedNestedSub(nestedItem.categoryId);

                  // ✅ Update filters for parent sub to include nested id
                  setFilters((prev) => ({
                    ...prev,
                    [sub.categoryId]: [...(prev[sub.categoryId] || []), nestedItem.categoryId],
                  }));

                  const updatedNames = [...selectedNames, nestedItem.categoryName];
                  dispatch(setSelectedNames(updatedNames));
                }
              }

              break;
            }
          }

          // Existing category/sub fallback logic
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

        if (
          !subFound &&
          selectedCategory &&
          cat.categoryName.toLowerCase() === selectedCategory.toLowerCase()
        ) {
          setFilters({ [cat.categoryId]: [cat.categoryId] });
          dispatch(setSelectedNames([cat.categoryName]));
          subFound = true;
        }

        if (subFound) break;
      }
    } else if (!selectedCategory) {
      // ✅ Now handle URL filters
      const urlFilters: Filters = {};
      const urlSelectedNames: string[] = [];
      const newProductsData: any = { ...productsData };

      searchParams.forEach((value, key) => {
        if (!value) return;
        const values = value.split(",").map((v) => decodeURIComponent(v.trim()));

        // Match category by name (case-insensitive)
        const matchedCategory = categories.find(
          (cat) => cat.categoryName.toLowerCase() === key.toLowerCase()
        );
        if (!matchedCategory) return;

        const categoryId = matchedCategory.categoryId;

        // ✅ Handle range filters
        const isRange = values.some((v) => v.includes("min:") || v.includes("max:"));

        if (isRange) {
          let minValue: string | undefined;
          let maxValue: string | undefined;

          values.forEach((v) => {
            const [prefix, num] = v.split(":");
            if (prefix === "min") minValue = num;
            if (prefix === "max") maxValue = num;
          });

          if (minValue && maxValue) {
            urlFilters[categoryId] = [minValue, maxValue];
            urlSelectedNames.push(`${matchedCategory.categoryName}: ${minValue} - ${maxValue}`);
            newProductsData[categoryId] = [minValue, maxValue];
          }
        } else {
          // ✅ Normal list filters
          const matchedIds: string[] = [];
          for (const item of matchedCategory.categoryList || []) {
            if (values.includes(item.listName)) {
              matchedIds.push(item.listId);
              urlSelectedNames.push(item.listName);
            }
          }
          if (matchedIds.length > 0) {
            urlFilters[categoryId] = matchedIds;
            newProductsData[categoryId] = matchedIds;
          }
        }
      });

      // ✅ Apply once at the end
      setFilters(urlFilters);
      dispatch(setSelectedNames(urlSelectedNames));

      dispatch(setProductsData(newProductsData));
    }
  }, [categories, selectedCategory, selectedSubName, selectedNestedName, searchParams]);
  return {
    filters,
    selectedNames,
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
    setFilters,
  };
};
