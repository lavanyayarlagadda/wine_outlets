import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Check, Close, FilterList, Liquor, LocalBar, SportsBar } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { CustomCheckbox, CustomRangeSelector } from "../../atoms";
import { useFilters } from "../../hooks/useFiters";
import { FilterAccordion } from "../../molecules";
import { useState } from "react";
import Theme from "../../themes";
import palette from "../../themes/palette";
import shape from "../../themes/shape";

export interface Category {
  categoryId: string;
  categoryName: string;
  categoryList?: { listId: string; listName: string }[];
  categoryRange?: { min: number; max: number } | string;
  subCategories?: Category[];
  categoryCount?: string;
}

interface Props {
  categories: Category[];
  onFilterChange?: (filters: Record<string, any>) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  wines: <LocalBar fontSize="small" />,
  beer: <SportsBar fontSize="small" />,
  liquor: <Liquor fontSize="small" />,
};

const FilterPanel: React.FC<Props> = ({ categories, onFilterChange }) => {
  const {
    filters,
    openDrawer,
    setOpenDrawer,
    handleCheckboxChange,
    handleSliderChange,
    handleClearAll,
  } = useFilters(onFilterChange);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [selectedSub, setSelectedSub] = useState<string | null>(null);

  const handleSubSelect = (id: string) => {
    setSelectedSub(id === selectedSub ? null : id);
  };

  const getIcon = (name: string) => iconMap[name.toLowerCase()] ?? <LocalBar fontSize="small" />;

  const renderCategory = (cat: Category,idx:number) => (
    <FilterAccordion key={cat.categoryId} title={cat.categoryName} isLast={categories.length - 1===idx} >
      <Stack spacing={1}>
        {cat.categoryList?.map((item) => (
          <CustomCheckbox
            key={item.listId}
            label={item.listName}
            checked={(filters[cat.categoryId] || []).includes(item.listName)}
            onChange={() => handleCheckboxChange(cat.categoryId, item.listName)}
          />
        ))}
        {cat.categoryRange && typeof cat.categoryRange !== "string" && (
          <CustomRangeSelector
            value={filters[cat.categoryId] || [cat.categoryRange.min, cat.categoryRange.max]}
            min={cat.categoryRange.min}
            max={cat.categoryRange.max}
            onChange={(val: number | number[]) => handleSliderChange(cat.categoryId, val)}
          />
        )}
        {typeof cat.categoryRange === "string" && (
          <Box display="flex" alignItems="center" gap={2}>
            <CustomRangeSelector
              single
              value={
                filters[cat.categoryId] !== undefined
                  ? Number(filters[cat.categoryId])
                  : parseInt(cat.categoryRange)
              }
              min={0}
              max={100}
              onChange={(val: number | number[]) => handleSliderChange(cat.categoryId, val)}
            />
            <Typography variant="body2" color="text.secondary">
              {filters[cat.categoryId] ?? parseInt(cat.categoryRange)}%
            </Typography>
          </Box>
        )}
        {cat.subCategories?.map((sub) => (
          <Box key={sub.categoryId} sx={{ mt: 1 }}>
            <Button
              onClick={() => handleSubSelect(sub.categoryId)}
              variant={selectedSub === sub.categoryId ? "contained" : "outlined"}
              color={selectedSub === sub.categoryId ? "error" : "inherit"}
              sx={{
                width: "100%",
                justifyContent: "space-between",
                borderRadius: shape.borderRadius,
                textTransform: "none",
                fontWeight: 500,
                border: selectedSub === sub.categoryId ? `1px solid ${ palette.primary.dark}`:`1px solid ${ palette.grey[200]}`,
                backgroundColor: selectedSub === sub.categoryId ? palette.primary.light: "white",
                color: selectedSub === sub.categoryId ? palette.primary.dark: palette.grey[200],
                mb: 1,
              }}
            >
              {/* Left side: Icon + Name */}
              <Box display="flex" alignItems="center" gap={1}>
                {getIcon(sub.categoryName)}
                <Typography>
                  {sub.categoryName} ({sub.categoryCount})
                </Typography>
              </Box>

              {/* Right side: Count + Tick */}
              <Box display="flex" alignItems="center" gap={1}>
                {selectedSub === sub.categoryId && <Check fontSize="small" />}
              </Box>
            </Button>

            {selectedSub === sub.categoryId && (
               <Stack spacing={1}>
                {sub.categoryList?.map((item: any) => (
                  <CustomCheckbox
                    key={item.listId}
                    label={item.listName}
                    checked={(filters[cat.categoryId] || []).includes(item.listName)}
                    onChange={() => handleCheckboxChange(cat.categoryId, item.listName)}
                  />
                ))}
                {sub.subCategories?.map((innerSub,index) => renderCategory(innerSub,index))}
              </Stack>
            )}
          </Box>
        ))}
      </Stack>
    </FilterAccordion>
  );

  const content = (
    <Box p={0}>
      <Box display="flex" justifyContent="space-between" alignItems="center" p={1}>
        <Typography
          variant="subtitle1"
          fontWeight="bold"
          sx={{ color: palette.black[800], fontSize: "18px" }}
        >
          Main Filter
        </Typography>
        <Button
          size="small"
          sx={{
            border: `1px solid ${palette.grey[200]}`,
            borderRadius: shape.borderRadius,
            color: palette.black[800],
            fontSize: "14px",
             textTransform: "capitalize"
          }}
          onClick={handleClearAll}
        >
          Clear All
        </Button>
      </Box>
       <Divider sx={{ mb: 1, mx: -2 }} />

      {categories.map((cat,index) => renderCategory(cat,index))}
    </Box>
  );

  return isMobile ? (
    <>
      <IconButton onClick={() => setOpenDrawer(true)}>
        <FilterList /> Filter
      </IconButton>
      <Drawer anchor="left" open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <Box display="flex" justifyContent="flex-end" p={1}>
          <IconButton onClick={() => setOpenDrawer(false)}>
            <Close />
          </IconButton>
        </Box>
        {content}
      </Drawer>
    </>
  ) : (
    <Box border="1px solid #ddd" borderRadius={2} bgcolor="background.paper" p={2}>
      {content}
    </Box>
  );
};

export default FilterPanel;
