import { Box, Drawer, IconButton, Typography, useMediaQuery } from "@mui/material";
import { Check, Close, FilterList, Liquor, LocalBar, SportsBar } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { CustomCheckbox, CustomRangeSelector } from "../../atoms";
import { useFilterPanel } from "./FilterPanel.hook";
import { FilterAccordion } from "../../molecules";

import {
  FilterWrapper,
  Header,
  HeaderTitle,
  ClearButton,
  StyledDivider,
  SubCategoryButton,
  Row,
  DrawerHeader,
  ContentStack,
  PercentageText,
} from "./FilterPanel.style";
// import { useSearchParams } from "react-router-dom";

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
    selectedSub,
    handleSubSelect,
  } = useFilterPanel(categories, onFilterChange); // ✅ pass categories here

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const getIcon = (name: string) => iconMap[name.toLowerCase()] ?? <LocalBar fontSize="small" />;

  const renderCategory = (cat: Category, idx: number) => (
    <FilterAccordion
      key={cat.categoryId}
      title={cat.categoryName}
      isLast={categories.length - 1 === idx}
    >
      <ContentStack>
        {cat.categoryList?.map((item) => (
          <CustomCheckbox
            key={item.listId}
            label={item.listName}
            checked={(filters[cat.categoryId] || []).includes(item.listId)}
            onChange={() => handleCheckboxChange(cat.categoryId, item.listId)}
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
          <Row>
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
            <PercentageText variant="body2">
              {filters[cat.categoryId] ?? parseInt(cat.categoryRange)}%
            </PercentageText>
          </Row>
        )}

        {cat.subCategories?.map((sub) => (
          <Box key={sub.categoryId}>
            <SubCategoryButton
              onClick={() => handleSubSelect(sub.categoryId)}
              variant={selectedSub === sub.categoryId ? "contained" : "outlined"}
              selected={selectedSub === sub.categoryId}
            >
              <Row>
                {getIcon(sub.categoryName)}
                <Typography>
                  {sub.categoryName} ({sub.categoryCount})
                </Typography>
              </Row>
              <Row>{selectedSub === sub.categoryId && <Check fontSize="small" />}</Row>
            </SubCategoryButton>

            {selectedSub === sub.categoryId && (
              <ContentStack>
                {sub.categoryList?.map((item: any) => (
                  <CustomCheckbox
                    key={item.listId}
                    label={item.listName}
                    checked={(filters[sub.categoryId] || []).includes(item.listId)}
                    onChange={() => handleCheckboxChange(sub.categoryId, item.listId)}
                  />
                ))}
                {sub.subCategories?.map((innerSub, index) => renderCategory(innerSub, index))}
              </ContentStack>
            )}
          </Box>
        ))}
      </ContentStack>
    </FilterAccordion>
  );

  const content = (
    <Box>
      <Header>
        <HeaderTitle variant="subtitle1">Main Filter</HeaderTitle>
        <ClearButton size="small" onClick={handleClearAll}>
          Clear All
        </ClearButton>
      </Header>
      <StyledDivider />
      {categories.map((cat, index) => renderCategory(cat, index))}
    </Box>
  );

  return isMobile ? (
    <>
      <IconButton onClick={() => setOpenDrawer(true)}>
        <FilterList /> Filter
      </IconButton>
      <Drawer anchor="left" open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <DrawerHeader>
          <IconButton onClick={() => setOpenDrawer(false)}>
            <Close />
          </IconButton>
        </DrawerHeader>
        {content}
      </Drawer>
    </>
  ) : (
    <FilterWrapper>{content}</FilterWrapper>
  );
};

export default FilterPanel;
