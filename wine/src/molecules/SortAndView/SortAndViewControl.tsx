import React from "react";
import { CustomDropdown, CustomToggleButton } from "../../atoms";
import {
  listImage,
  listImageGrey,
  gridImage,
  gridImageGrey,
} from "../../assets";
import {
  Wrapper,
  StyledFormControl,
  ViewBox,
  StyledToggleButtonGroup,
} from "./SortAndViewControl.style";

interface SortAndViewControlsProps {
  sortBy: string;
  onSortChange: (val: string) => void;
  view: "grid" | "list";
  onViewChange: (val: "grid" | "list") => void;
}

const SortAndViewControls: React.FC<SortAndViewControlsProps> = ({
  sortBy,
  onSortChange,
  view,
  onViewChange,
}) => {
  const options = [
    { label: "Relevance", value: "relevance" },
    { label: "Price (Low to High)", value: "price_low_high" },
    { label: "Price (High to Low)", value: "price_high_low" },
    { label: "Rating", value: "rating" },
  ];

  return (
    <Wrapper>
      <StyledFormControl size="small">
        <CustomDropdown
          label="Sort by:"
          value={sortBy}
          onChange={onSortChange}
          options={options}
          placeholder="Select Preference"
          side
        />
      </StyledFormControl>

      <ViewBox>
        <StyledToggleButtonGroup
          value={view}
          exclusive
          onChange={(e, val) => val && onViewChange(val)}
          size="small"
        >
          <CustomToggleButton
            value="grid"
            selected={view === "grid"}
            icon={view === "grid" ? gridImage : gridImageGrey}
            alt="grid view"
          />
          <CustomToggleButton
            value="list"
            selected={view === "list"}
            icon={view === "list" ? listImage : listImageGrey}
            alt="list view"
          />
        </StyledToggleButtonGroup>
      </ViewBox>
    </Wrapper>
  );
};

export default SortAndViewControls;
