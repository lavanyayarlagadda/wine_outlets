import React from "react";
import { CustomDropdown, CustomToggleButton } from "../../atoms";
import {
  Wrapper,
  StyledFormControl,
  ViewBox,
  StyledToggleButtonGroup,
} from "./SortAndViewControl.style";
import { ViewList, ViewModule } from "@mui/icons-material";

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
    { label: "Price: Low to High", value: "price_low_high" },
    { label: "Price: High to Low", value: "price_high_low" },
    // { label: "Customer Rating", value: "customer_rating" },
    { label: "Popularity", value: "popularity" },
    { label: "Newest Arrivals", value: "newest_arrivals" },
    { label: "Name: A-Z", value: "name_a_z" },
    { label: "Name: Z-A", value: "name_z_a" },
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
            icon={<ViewModule fontSize="small" />}
          />
          <CustomToggleButton
            value="list"
            selected={view === "list"}
            icon={<ViewList fontSize="small" />}
          />
        </StyledToggleButtonGroup>
      </ViewBox>
    </Wrapper>
  );
};

export default SortAndViewControls;
