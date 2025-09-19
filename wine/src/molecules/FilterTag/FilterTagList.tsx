import React from "react";
import { CustomChip } from "../../atoms";
import { Wrapper, FilterHeader, ChipsWrapper } from "./FilterTagList.style";

interface FilterTagListProps {
  filters: string[];
  onDelete: (name: string) => void;
}

const FilterTagList: React.FC<FilterTagListProps> = ({ filters }) => (
  <Wrapper>
    <FilterHeader>Applied filters:</FilterHeader>
    <ChipsWrapper>
      {filters.length > 0 ? (
        filters.map((name) => (
          <CustomChip
            key={name}
            label={name}
            // onDelete={() => onDelete(name)}
          />
        ))
      ) : (
        <span>No filters applied</span>
      )}
    </ChipsWrapper>
  </Wrapper>
);

export default FilterTagList;
