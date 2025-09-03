import React from "react";
import { Box, FormControl, ToggleButtonGroup } from "@mui/material";
import { CustomDropdown,CustomToggleButton } from "../../atoms";
import {
  listImage,
  listImageGrey,
  gridImage,
  gridImageGrey,
} from "../../assets";
import palette from "../../themes/palette";

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
    <Box display="flex" alignItems="center" gap={1.5} flexWrap="wrap" >
      <FormControl size="small" sx={{ minWidth: 140,pr:'20px' }}>
        <CustomDropdown
          label="Sort by:"
          value={sortBy}
          onChange={onSortChange}
          options={options}
          placeholder="Select Preference"
          side
        />
      </FormControl>

      <Box
        sx={{
          backgroundColor: palette.grey.light,
          p: 1,
          border: `1px solid ${palette.grey.light}`,
          borderRadius: "8px",
          display: "flex",
          justifyContent: "center",
          
        }}
      >
        <ToggleButtonGroup
          value={view}
          exclusive
          onChange={(e, val) => val && onViewChange(val)}
          size="small"
           sx={{
      border: "none", 
      "& .MuiToggleButton-root": {
        border: "none",          
        backgroundColor: "transparent", 
        "&.Mui-selected": {
          backgroundColor: "transparent",
        },
        "&:hover": {
          backgroundColor: "transparent", 
        },
      },
    }}
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
        </ToggleButtonGroup>
      </Box>
    </Box>
  );
};

export default SortAndViewControls;
