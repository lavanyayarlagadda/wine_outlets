import { Box, Drawer, IconButton, Skeleton, useMediaQuery } from "@mui/material";
import {
  Check,
  Close,
  ExpandLess,
  ExpandMore,
  FilterList,
  Liquor,
  LocalBar,
  SportsBar,
} from "@mui/icons-material";
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
  ExpandButton,
  NestedContainer,
  SeeMoreText,
  LimitedListWrapper,
  SubLimitedListWrapper,
  SkeletonWrapper,
  StyledSkeletonRect,
  SkeletonItem,
  EllipsisTooltip,
  TruncatedText,
} from "./FilterPanel.style";
import { useState } from "react";
// import { useState } from "react";
// import { useSearchParams } from "react-router-dom";

export interface Category {
  categoryId: string;
  categoryName: string;
  categoryList?: { listId: string; listName: string }[];
  categoryRange?: { min: number; max: number } | string;
  subCategories?: Category[];
  categoryCount?: string;
  categories?: [{ categoryId: string; categoryName: string }];
}

interface Props {
  categories: Category[];
  onFilterChange?: (filters: Record<string, any>) => void;
  isLoading: boolean;
}

const iconMap: Record<string, React.ReactNode> = {
  wines: <LocalBar fontSize="small" />,
  beer: <SportsBar fontSize="small" />,
  liquor: <Liquor fontSize="small" />,
};

const FilterPanel: React.FC<Props> = ({ categories, onFilterChange, isLoading }) => {
  const {
    filters,
    openDrawer,
    setOpenDrawer,
    handleCheckboxChange,
    handleSliderChange,
    handleClearAll,
    selectedSub,
    handleSubSelect,
    setDepartmentCats,
    setSubDepartmentCats,
    setExpandedCats,
    expandedCats,
    subDepartmentCats,
    departmentCats,
    handleNestedCheckboxChange,
  } = useFilterPanel(categories, onFilterChange);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});
  const [seeMore, setSeeMore] = useState(false);
  const toggleExpandDropdown = (listId: string) => {
    setExpanded((prev) => ({
      ...prev,
      [listId]: !prev[listId],
    }));
  };

  const toggleExpand = (categoryId: string) => {
    setExpandedCats((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  const toggleDepartmentExpand = (categoryId: string) => {
    setDepartmentCats((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  const toggleSubDepartmentExpand = (categoryId: string) => {
    setSubDepartmentCats((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  const getIcon = (name: string) => iconMap[name.toLowerCase()] ?? <LocalBar fontSize="small" />;
  const renderSubCategory = (item: any, sub: any) => {
    const hasNested = item.categories?.length > 0;
    return (
      <Box key={item.listId}>
        <Row>
          <CustomCheckbox
            label={item.listName}
            checked={(filters[sub.categoryId] || []).includes(item.listId)}
            onChange={() => handleCheckboxChange(sub.categoryId, item.listId, item.listName, "sub")}
          />
          {hasNested && (
            <ExpandButton onClick={() => toggleExpandDropdown(item.listId)}>
              {expanded[item.listId] ? <ExpandLess /> : <ExpandMore />}
            </ExpandButton>
          )}
        </Row>

        {hasNested && expanded[item.listId] && !seeMore && (
          <NestedContainer>
            {item.categories.slice(0, 4).map((nestedItem: any) => (
              <CustomCheckbox
                key={nestedItem.categoryId}
                label={nestedItem.categoryName}
                checked={(filters[sub.categoryId] || []).includes(nestedItem.categoryId)}
                onChange={() =>
                  handleNestedCheckboxChange(
                    sub.categoryId,
                    nestedItem.categoryId,
                    nestedItem.categoryName
                  )
                }
              />
            ))}

            {item.categories.length > 4 && (
              <SeeMoreText
                onClick={() => {
                  (toggleSubDepartmentExpand(item.listId), setSeeMore(true));
                }}
              >
                See More
              </SeeMoreText>
            )}
          </NestedContainer>
        )}

        {/* Show full list in SubLimitedListWrapper when See More is clicked */}
        {hasNested && expanded[item.listId] && subDepartmentCats[item.listId] && seeMore && (
          <SubLimitedListWrapper>
            {item.categories.map((nestedItem: any) => (
              <CustomCheckbox
                key={nestedItem.categoryId}
                label={nestedItem.categoryName}
                checked={(filters[sub.categoryId] || []).includes(nestedItem.categoryId)}
                onChange={() =>
                  handleNestedCheckboxChange(
                    sub.categoryId,
                    nestedItem.categoryId,
                    nestedItem.categoryName
                  )
                }
              />
            ))}
            <SeeMoreText
              onClick={() => {
                (toggleSubDepartmentExpand(item.listId), setSeeMore(false));
              }}
            >
              See Less
            </SeeMoreText>
          </SubLimitedListWrapper>
        )}
      </Box>
    );
  };

  const renderCategory = (cat: Category, idx: number) => (
    <FilterAccordion
      key={cat.categoryId}
      title={cat.categoryName}
      isLast={categories.length - 1 === idx}
    >
      <ContentStack>
        {cat.categoryList && cat.categoryList.length > 0 && (
          <>
            {!expandedCats[cat.categoryId] ? (
              <>
                {cat.categoryList.slice(0, 4).map((item) => (
                  <CustomCheckbox
                    key={item.listId}
                    label={item.listName}
                    checked={(filters[cat.categoryId] || []).includes(item.listId)}
                    onChange={() => {
                      handleCheckboxChange(
                        cat.categoryId,
                        item.listId,
                        item.listName,
                        "category",
                        undefined,
                        cat.categoryName
                      );
                    }}
                  />
                ))}

                {cat.categoryList.length > 4 && (
                  <SeeMoreText onClick={() => toggleExpand(cat.categoryId)}>See More</SeeMoreText>
                )}
              </>
            ) : (
              <LimitedListWrapper>
                {cat.categoryList.map((item) => (
                  <CustomCheckbox
                    key={item.listId}
                    label={item.listName}
                    checked={(filters[cat.categoryId] || []).includes(item.listId)}
                    onChange={() =>
                      handleCheckboxChange(cat.categoryId, item.listId, item.listName, "category")
                    }
                  />
                ))}
                {cat.categoryList.length > 4 && expandedCats[cat.categoryId] && (
                  <SeeMoreText onClick={() => toggleExpand(cat.categoryId)}>See Less</SeeMoreText>
                )}
              </LimitedListWrapper>
            )}
          </>
        )}

        {cat.categoryRange && typeof cat.categoryRange !== "string" && (
          <CustomRangeSelector
            value={filters[cat.categoryId] || [cat.categoryRange.min, cat.categoryRange.max]}
            min={cat.categoryRange.min}
            max={cat.categoryRange.max}
            onChange={(val: number | number[]) =>
              handleSliderChange(cat.categoryId, val, cat.categoryName)
            }
            symbol={cat.categoryName === "Price Range" ? "$" : "%"}
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
              onChange={(val: number | number[]) =>
                handleSliderChange(cat.categoryId, val, cat.categoryName)
              }
              symbol={cat.categoryName === "Price Range" ? "$" : "%"}
            />
            <PercentageText variant="body2">
              {filters[cat.categoryId] ?? parseInt(cat.categoryRange)}%
            </PercentageText>
          </Row>
        )}

        {cat.subCategories?.map((sub) => (
          <Box key={sub.categoryId}>
            <SubCategoryButton
              onClick={() =>
                handleSubSelect({
                  categoryId: sub.categoryId,
                  categoryName: sub.categoryName,
                  categoryCount: Number(sub.categoryCount ?? 0),
                })
              }
              variant={selectedSub === sub.categoryId ? "contained" : "outlined"}
              selected={selectedSub === sub.categoryId}
            >
              <Row>
                {getIcon(sub.categoryName)}
                <EllipsisTooltip title={`${sub.categoryName} (${sub.categoryCount})`} arrow>
                  <TruncatedText>
                    {sub.categoryName} ({sub.categoryCount})
                  </TruncatedText>
                </EllipsisTooltip>
              </Row>

              <Row>{selectedSub === sub.categoryId && <Check fontSize="small" />}</Row>
            </SubCategoryButton>
            {selectedSub === sub.categoryId && (
              <ContentStack>
                {!departmentCats[sub.categoryId] ? (
                  <>
                    {/* Show only 4 items */}
                    {sub.categoryList?.slice(0, 4).map((item: any) => renderSubCategory(item, sub))}

                    {/* Show More button */}
                    {sub.categoryList && sub.categoryList?.length > 4 && (
                      <SeeMoreText onClick={() => toggleDepartmentExpand(sub.categoryId)}>
                        See More
                      </SeeMoreText>
                    )}
                  </>
                ) : (
                  <>
                    <LimitedListWrapper>
                      {sub.categoryList?.map((item: any) => renderSubCategory(item, sub))}
                    </LimitedListWrapper>
                    <SeeMoreText onClick={() => toggleDepartmentExpand(sub.categoryId)}>
                      See Less
                    </SeeMoreText>
                  </>
                )}
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

      {isLoading ? (
        <SkeletonWrapper>
          {[...Array(4)].map((_, i) => (
            <SkeletonItem key={i}>
              <Skeleton variant="text" width={120} height={20} />
              <StyledSkeletonRect variant="rectangular" />
              <StyledSkeletonRect variant="rectangular" />
            </SkeletonItem>
          ))}
        </SkeletonWrapper>
      ) : (
        categories.map((cat, index) => renderCategory(cat, index))
      )}
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
