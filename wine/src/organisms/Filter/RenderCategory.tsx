import {
  Box,
  Stack,
  Typography,
  IconButton,
  Collapse,
  Checkbox,
} from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import React, { useState } from "react";
import type { Category } from "./FilterPanel";

const RenderCategory: React.FC<{
  cat: Category;
  filters: Record<string, any>;
  handleCheckboxChange: (catId: string, val: string) => void;
  handleSliderChange: (catId: string, val: number | number[]) => void;
}> = ({ cat, filters, handleCheckboxChange, handleSliderChange }) => {
  const [open, setOpen] = useState(false);

  const hasSubCats = !!cat.subCategories?.length;

  return (
    <Box mb={1}>
      {/* Top-level category row */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p={1.2}
        border="1px solid #ddd"
        borderRadius={2}
        sx={{
          cursor: "pointer",
          bgcolor: filters[cat.categoryId]?.length ? "#fdeaea" : "transparent",
        }}
        onClick={() => hasSubCats && setOpen((prev) => !prev)}
      >
        <Typography fontWeight={filters[cat.categoryId]?.length ? "bold" : "normal"}>
          {cat.categoryName}
          {cat.categoryList?.length ? ` (${cat.categoryList.length})` : ""}
        </Typography>

        {hasSubCats && (
          <IconButton size="small">
            {open ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        )}
      </Box>

      {/* Subcategories (checkboxes + recursive call) */}
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Stack pl={3} spacing={1} mt={1}>
          {cat.categoryList?.map((item) => (
            <Box key={item.listId} display="flex" alignItems="center">
              <Checkbox
                size="small"
                checked={(filters[cat.categoryId] || []).includes(item.listName)}
                onChange={() => handleCheckboxChange(cat.categoryId, item.listName)}
              />
              <Typography>{item.listName}</Typography>
            </Box>
          ))}

          {/* Recursive rendering for nested subcategories */}
          {cat.subCategories?.map((sub) => (
            <RenderCategory
              key={sub.categoryId}
              cat={sub}
              filters={filters}
              handleCheckboxChange={handleCheckboxChange}
              handleSliderChange={handleSliderChange}
            />
          ))}
        </Stack>
      </Collapse>
    </Box>
  );
};
export default RenderCategory
