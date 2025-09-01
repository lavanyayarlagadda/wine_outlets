import React, { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  FormControlLabel,
  Button,
  Divider,
  Slider,
  TextField,
  Stack,
  Drawer,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import { Liquor, SportsBar, FilterList, Close } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

interface CategoryListItem {
  listId: string;
  listName: string;
}

interface Category {
  categoryId: string;
  categoryName: string;
  categoryCount?: string;
  categoryList?: CategoryListItem[];
  categoryRange?: { min?: number; max?: number } | string;
  subCategories?: Category[];
}

interface FilterProps {
  categories: Category[];
  onFilterChange?: (selectedFilters: Record<string, any>) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  wines: <LocalBarIcon fontSize="small" />,
  beer: <SportsBar fontSize="small" />,
  liquor: <Liquor fontSize="small" />,
};

const FilterComponent: React.FC<FilterProps> = ({ categories, onFilterChange }) => {
  const [filters, setFilters] = useState<Record<string, any>>({});
  const [selectedSub, setSelectedSub] = useState<string | null>(null);
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [openDrawer, setOpenDrawer] = useState(false);

  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("md"));

  const handleCheckboxChange = (categoryId: string, listName: string) => {
    setFilters((prev) => {
      const existing = prev[categoryId] || [];
      const updated = existing.includes(listName)
        ? existing.filter((x: string) => x !== listName)
        : [...existing, listName];
      const newFilters = { ...prev, [categoryId]: updated };
      onFilterChange?.(newFilters);
      return newFilters;
    });
  };

  const handleSliderChange = (categoryId: string, newValue: number | number[]) => {
    setFilters((prev) => {
      const newFilters = { ...prev, [categoryId]: newValue };
      onFilterChange?.(newFilters);
      return newFilters;
    });
  };

  const handleAlcoholSliderChange = (categoryId: string, newValue: number | number[]) => {
    const value = Array.isArray(newValue) ? newValue[0] : newValue;
    setFilters((prev) => {
      const newFilters = { ...prev, [categoryId]: value };
      onFilterChange?.(newFilters);
      return newFilters;
    });
  };

  const handleClearAll = () => {
    setFilters({});
    setSelectedSub(null);
    setChecked({});
    onFilterChange?.({});
  };

  const handleSubSelect = (id: string) => {
    setSelectedSub(id === selectedSub ? null : id);
  };

  const handleCheckbox = (listId: string) => {
    setChecked((prev) => ({ ...prev, [listId]: !prev[listId] }));
  };

  const getIcon = (name: string) =>
    iconMap[name.toLowerCase()] ?? <LocalBarIcon fontSize="small" />;

  const filterContent = (
    <Box>
      {/* Header */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={1}
        p={2}
      >
        <Typography variant="subtitle1" fontWeight="bold">
          Main Filter
        </Typography>
        <Button size="small" color="error" onClick={handleClearAll}>
          Clear All
        </Button>
      </Box>
      <Divider sx={{ mb: 1, mx: -2 }} />

      {/* Categories */}
      {categories.map((cat) => (
        <Accordion key={cat.categoryId} disableGutters>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1">{cat.categoryName}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack spacing={1}>
              {(cat.subCategories ?? []).map((sub) => (
                <Box key={sub.categoryId}>
                  {/* Main Category Button */}
                  <Button
                    startIcon={getIcon(sub.categoryName)}
                    onClick={() => handleSubSelect(sub.categoryId)}
                    variant={selectedSub === sub.categoryId ? "contained" : "outlined"}
                    color={selectedSub === sub.categoryId ? "error" : "inherit"}
                    sx={{
                      width: "100%",
                      justifyContent: "flex-start",
                      borderRadius: 2,
                      textTransform: "none",
                      fontWeight: 500,
                      mb: 1,
                    }}
                  >
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      width="100%"
                    >
                      <Typography>{sub.categoryName}</Typography>
                      <Typography color="text.secondary">
                        ({sub.categoryCount})
                      </Typography>
                    </Box>
                  </Button>

                  {/* Sub-list checkboxes */}
                  {selectedSub === sub.categoryId && (
                    <Box sx={{ ml: 3, mt: 1 }}>
                      {sub.categoryList?.map((item: any) => (
                        <FormControlLabel
                          key={item.listId}
                          control={
                            <Checkbox
                              checked={checked[item.listId] || false}
                              onChange={() => handleCheckbox(item.listId)}
                            />
                          }
                          label={item.listName}
                        />
                      ))}
                    </Box>
                  )}
                </Box>
              ))}
            </Stack>

            {/* Regular category list */}
            {cat.categoryList &&
              !cat.subCategories &&
              cat.categoryList.map((item) => (
                <FormControlLabel
                  key={item.listId}
                  control={
                    <Checkbox
                      checked={(filters[cat.categoryId] || []).includes(item.listName)}
                      onChange={() => handleCheckboxChange(cat.categoryId, item.listName)}
                    />
                  }
                  label={item.listName}
                />
              ))}

            {/* Price Range Slider */}
            {cat.categoryRange && typeof cat.categoryRange !== "string" && (
    <Box>
                <Slider
                  value={filters[cat.categoryId] || [cat.categoryRange.min, cat.categoryRange.max]}
                  onChange={(_, value) => handleSliderChange(cat.categoryId, value)}
                  valueLabelDisplay="auto"
                  min={cat.categoryRange.min}
                  max={cat.categoryRange.max}
                  sx={{
                    color: "error.main",
                    "& .MuiSlider-thumb": { border: "2px solid white" },
                  }}
                />
                <Box display="flex" gap={1}>
                  <TextField
                    size="small"
                    value={`$${filters[cat.categoryId]?.[0] ?? cat.categoryRange.min}`}
                    onChange={() => {}}
                    fullWidth
                  />
                  <TextField
                    size="small"
                    value={`$${filters[cat.categoryId]?.[1] ?? cat.categoryRange.max}`}
                    onChange={() => {}}
                    fullWidth
                  />
                </Box>
              </Box>
            )}

            {/* Alcohol Content Slider */}
            {cat.categoryRange && typeof cat.categoryRange === "string" && (
              <Box display="flex" alignItems="center" gap={2}>
                <Slider
                  value={
                    filters[cat.categoryId] !== undefined
                      ? Number(filters[cat.categoryId])
                      : parseInt(cat.categoryRange)
                  }
                  onChange={(_, value) =>
                    handleAlcoholSliderChange(cat.categoryId, value)
                  }
                  sx={{ color: "error.main" }}
                />
                <Typography variant="body2" color="text.secondary">
                  {filters[cat.categoryId] ?? parseInt(cat.categoryRange)}%
                </Typography>
              </Box>
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );

  return (
    <>
      {isMobileOrTablet ? (
        <>
          <IconButton
            color="primary"
            onClick={() => setOpenDrawer(true)}
            sx={{ mb: 2 }}
          >
            <FilterList />
          </IconButton>

          <Drawer
            anchor="left"
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
          >
            <Box display="flex" justifyContent="flex-end" p={1}>
              <IconButton onClick={() => setOpenDrawer(false)}>
                <Close />
              </IconButton>
            </Box>
            {filterContent}
          </Drawer>
        </>
      ) : (
        <Box
          sx={{
            border: "1px solid #ddd",
            borderRadius: 2,
            bgcolor: "background.paper",
            p: 2,
          }}
        >
          {filterContent}
        </Box>
      )}
    </>
  );
};

export default FilterComponent;
