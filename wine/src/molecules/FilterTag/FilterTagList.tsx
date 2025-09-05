import React from "react";
import { CustomChip } from "../../atoms";
import { Wrapper, FilterHeader, ChipsWrapper } from "./FilterTagList.style";

interface FilterTagListProps {
  filters: { label: string; count: number }[];
  onDelete: (label: string) => void;
}

const FilterTagList: React.FC<FilterTagListProps> = ({ filters, onDelete }) => (
  <Wrapper>
    <FilterHeader>Applied filters:</FilterHeader>
    <ChipsWrapper>
      {filters.map((filter) => (
        <CustomChip
          key={filter.label}
          label={`${filter.label} (${filter.count})`}
          onDelete={() => onDelete(filter.label)}
        />
      ))}
    </ChipsWrapper>
  </Wrapper>
);

export default FilterTagList;
