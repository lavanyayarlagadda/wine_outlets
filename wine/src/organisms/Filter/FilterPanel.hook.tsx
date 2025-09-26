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

  const [expandedCats, setExpandedCats] = useState<{ [key: string]: boolean }>({});
  const [departmentCats, setDepartmentCats] = useState<{ [key: string]: boolean }>({});
  const [subDepartmentCats, setSubDepartmentCats] = useState<{ [key: string]: boolean }>({});

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

    // 🔹 Update selectedNames object
    const key = parentSubId.toLowerCase().replace(/\s+/g, "");
    const current = selectedNames[key] || [];
    const updated = isSelected
      ? current.filter((name) => name !== nested.categoryName)
      : [...current, nested.categoryName];
    dispatch(
      setSelectedNames({
        ...selectedNames,
        ["subDepartment"]: updated,
      })
    );
  };

  const handleSubSelect = (sub: {
    categoryId: string;
    categoryName: string;
    categoryCount: number;
  }) => {
    const hasSelections = filters[sub.categoryId]?.length > 0;
    const key = sub.categoryName.toLowerCase().replace(/\s+/g, "");

    if (selectedSub === sub.categoryId) {
      // ✅ Deselect this sub
      setSelectedSub(null);

      if (!hasSelections) {
        // 🔹 Remove only this sub from selectedNames
        const newSelectedNames = { ...selectedNames };
        delete newSelectedNames[key];
        dispatch(setSelectedNames(newSelectedNames));

        // 🔹 Remove only this category from productsData
        const newData = { ...productsData };
        delete newData[key];
        dispatch(setProductsData(newData));
      }
    } else {
      // ✅ Switch to new sub
      setSelectedSub(sub.categoryId);

      if (!hasSelections) {
        const displayName = `${sub.categoryName} (${sub.categoryCount})`;

        // 🔹 Merge into productsData instead of replacing everything
        const newData = {
          ...productsData,
          category: key, // assign the selected sub's key as "category"
          department: [],
          subDepartment: [],
        };
        dispatch(setProductsData(newData));

        // 🔹 Update selectedNames object
        const newSelectedNames = {
          ...selectedNames,
          category: [displayName],
        };
        dispatch(setSelectedNames(newSelectedNames));
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
    // 🔹 Update filters (unchanged)
    setFilters((prev) => {
      const existing = prev[categoryId] || [];
      const updated = existing.includes(value)
        ? existing.filter((v: string) => v !== value)
        : [...existing, value];

      const newFilters = { ...prev, [categoryId]: updated };
      onFilterChange?.(newFilters);
      return newFilters;
    });

    // 🔹 Display name handling
    let displayName = label;
    if (type === "sub" && count !== undefined) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      displayName = `${label} (${count})`;
    }

    // 🔹 Determine key for selectedNames
    let key: string;
    if (type === "sub") key = "department";
    else if (type === "nested") key = "subDepartment";
    // else if (type === "category") key = "category";
    else key = categoryName?.toLowerCase().replace(/\s+/g, "") || "misc";

    // 🔹 Use label without count for storing
    const normalizedName = label;

    // 🔹 Get current values for this key
    const currentValues = selectedNames[key] || [];

    // 🔹 Add or remove the selection while preserving previous selections
    const updatedValues = currentValues.includes(normalizedName)
      ? currentValues.filter((v) => v !== normalizedName)
      : [...currentValues, normalizedName];

    // 🔹 Update selectedNames in state
    dispatch(
      setSelectedNames({
        ...selectedNames,
        [key]: updatedValues,
      })
    );

    // 🔹 Update productsData
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
      const mappedKey = categoryKeyMap[normalizedCategory];
      const currentVals = currentProductsList[mappedKey] || [];
      newProductsList[mappedKey] = currentVals.includes(label)
        ? currentVals.filter((v: string) => v !== label)
        : [...currentVals, label];
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
    let storeValue: string = "";

    if (Array.isArray(value)) {
      if (categoryName === "Price Range") {
        // Price logic
        currentProductsList.price = { min: value[0], max: value[1] };
        storeValue = `${value[0]}-${value[1]}`;
      } else if (categoryName === "Alcohol Content") {
        // Alcohol Content logic
        currentProductsList.alcoholContent = { min: value[0], max: value[1] };
        storeValue = `${value[0]}-${value[1]}`;
      } else {
        // Generic case
        storeValue = value.join(",");
      }
    }

    dispatch(setProductsData(currentProductsList));

    // 🔹 Update filters
    const valArray = Array.isArray(value) ? value.map(String) : [String(value)];
    setFilters((prev) => {
      const newFilters = { ...prev, [categoryId]: valArray };
      onFilterChange?.(newFilters);
      return newFilters;
    });

    // 🔹 Save only the latest value in selectedNames
    const key =
      categoryName === "Price Range"
        ? "price"
        : categoryName === "Alcohol Content"
          ? "alcoholContent"
          : categoryId;

    dispatch(
      setSelectedNames({
        ...selectedNames,
        [key]: [storeValue], // always override with latest value
      })
    );
  };
  const handleNestedCheckboxChange = (parentId: string, nestedId: string, label: string) => {
    // Call your existing checkbox handler
    handleCheckboxChange(parentId, nestedId, label, "nested");

    // Ensure the sub-department expands automatically
    setSubDepartmentCats((prev) => ({
      ...prev,
      [parentId]: true, // force expand
    }));
  };
  const storedId = localStorage.getItem("selectedStore");
  const payload: any = {
    limit: 24,
    page: 1,
    sortBy: "relevance",
    sortOrder: "asc",
    storeId: storedId,
    category: "",
    department: [],
    subDepartment: [],
    size: [],
    price: {},
    occasion: [],
    customerRating: [],
    tags: [],
    origin: [],
    grapeVariety: [],
    brand: [],
    vintageYear: [],
    alcoholContent: {},
  };
  const handleClearAll = () => {
    // Clear filters
    setFilters({});

    // Clear selected names in Redux
    dispatch(setSelectedNames({}));

    // Reset products data
    dispatch(setProductsData(payload));

    // Clear all selected sub/nested
    setSelectedSub(null);
    setSelectedNestedSub(null);

    // Reset all expand/collapse states
    setExpandedCats({});
    setDepartmentCats({});
    setSubDepartmentCats({});

    // Notify any external listener
    onFilterChange?.({});
  };

  useEffect(() => {
    const hasValues = Object.values(selectedNames || {}).some(
      (arr) => Array.isArray(arr) && arr.length > 0
    );

    if (!hasValues) {
      setFilters({});
    }
  }, [selectedNames]);

  function toCamelCase(str: string): string {
    if (!str) return "";

    // Normalize: lowercase and split by space, dash, or underscore
    const words = str
      .toLowerCase()
      .split(/[\s\-_]+/) // handles " ", "-", "_"
      .filter(Boolean);

    if (words.length === 0) return "";

    // First word stays lowercase
    const firstWord = words[0];

    // Remaining words: capitalize first letter
    const restWords = words.slice(1).map((word) => word.charAt(0).toUpperCase() + word.slice(1));

    return firstWord + restWords.join("");
  }

  useEffect(() => {
    if (categories.length === 0) return;

    const newSelectedNames: Record<string, string[]> = {};

    if (selectedCategory) {
      let subFound = false;

      for (const cat of categories) {
        for (const sub of cat.subCategories || []) {
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

              newSelectedNames["department"] = [displayName];

              setSelectedSub(sub.categoryId);
              subFound = true;

              // Nested
              if (selectedNestedName && selectedItem.categories?.length > 0) {
                const nestedItem = selectedItem.categories.find(
                  (nested: any) =>
                    nested.categoryName.toLowerCase().replace(/\s+/g, "") ===
                    selectedNestedName.toLowerCase().replace(/\s+/g, "")
                );
                if (nestedItem) {
                  setSelectedNestedSub(nestedItem.categoryId);
                  setFilters((prev) => ({
                    ...prev,
                    [sub.categoryId]: [...(prev[sub.categoryId] || []), nestedItem.categoryId],
                  }));

                  // ✅ Store name, not ID
                  newSelectedNames["subDepartment"] = [nestedItem.categoryName];
                }
              }

              break;
            }
          }

          if (
            !subFound &&
            selectedCategory &&
            sub.categoryName.toLowerCase() === selectedCategory.toLowerCase()
          ) {
            setFilters({ [cat.categoryId]: [sub.categoryId] });

            const displayName = `${sub.categoryName} (${sub.categoryCount ?? 0})`;
            newSelectedNames["category"] = [displayName];

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
          const camelKey = toCamelCase(cat.categoryName);

          // Use camelKey as the object key
          newSelectedNames[camelKey] = [cat.categoryName];
          subFound = true;
        }

        if (subFound) break;
      }

      dispatch(setSelectedNames(newSelectedNames));
    } else {
      // No selectedCategory: parse URL params
      const urlFilters: Filters = {};
      const newProductsData: any = { ...productsData };

      searchParams.forEach((value, key) => {
        if (!value) return;
        const values = value.split(",").map((v) => decodeURIComponent(v.trim()));

        const matchedCategory = categories.find(
          (cat) => cat.categoryName.toLowerCase() === key.toLowerCase()
        );
        if (!matchedCategory) return;

        const categoryId = matchedCategory.categoryId;

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
            const camelKey = toCamelCase(matchedCategory.categoryName);

            // ✅ Save **keys/names** instead of IDs
            newSelectedNames[camelKey] = [`${minValue} - ${maxValue}`];

            newProductsData[categoryId] = [minValue, maxValue];
          }
        } else {
          const normalize = (str: string) => str.toLowerCase().replace(/[\s\-_]+/g, "");

          const matchedNames: string[] = [];
          const matchedIds: string[] = [];

          for (const item of matchedCategory.categoryList || []) {
            if (values.some((v) => normalize(v) === normalize(item.listName))) {
              matchedNames.push(item.listName); // keep proper display case
              matchedIds.push(item.listId);
            }
          }

          if (matchedNames.length > 0) {
            urlFilters[categoryId] = matchedIds;
            const camelKey = toCamelCase(matchedCategory.categoryName);
            newSelectedNames[camelKey] = matchedNames;
            newProductsData[categoryId] = matchedIds;
          }
        }
      });

      setFilters(urlFilters);
      dispatch(setSelectedNames(newSelectedNames)); // ✅ object with names
      dispatch(setProductsData(newProductsData));
    }
  }, [categories, selectedCategory, selectedSubName, selectedNestedName, searchParams]);
  // ✅ Run expansions whenever filters or categories change
  useEffect(() => {
    if (categories.length === 0) return;

    const expandedCats: { [key: string]: boolean } = {};
    const departmentCats: { [key: string]: boolean } = {};
    const subDepartmentCats: { [key: string]: boolean } = {};

    categories.forEach((cat) => {
      if (cat.categoryList?.length > 4) {
        const selectedIds = filters[cat.categoryId] || [];
        if (
          selectedIds.some(
            (id: any) => cat.categoryList!.findIndex((item: any) => item.listId === id) > 3
          )
        ) {
          expandedCats[cat.categoryId] = true;
        }
      }

      cat.subCategories?.forEach((sub: any) => {
        if (sub.categoryList?.length > 4) {
          const selectedIds = filters[sub.categoryId] || [];
          if (
            selectedIds.some(
              (id: any) => sub.categoryList!.findIndex((item: any) => item.listId === id) > 3
            )
          ) {
            departmentCats[sub.categoryId] = true;
          }

          sub.categoryList.forEach((item: any) => {
            if (item.categories?.length > 4) {
              const nestedSelectedIds = filters[sub.categoryId] || [];
              if (
                nestedSelectedIds.some(
                  (id: any) => item.categories!.findIndex((n: any) => n.categoryId === id) > 3
                )
              ) {
                subDepartmentCats[item.categoryId] = true;
              }
            }
          });
        }
      });
    });

    setExpandedCats(expandedCats);
    setDepartmentCats(departmentCats);
    setSubDepartmentCats(subDepartmentCats);
  }, [filters, categories]);

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
    setExpandedCats,
    setDepartmentCats,
    setSubDepartmentCats,
    expandedCats,
    departmentCats,
    subDepartmentCats,
    handleNestedCheckboxChange,
  };
};
