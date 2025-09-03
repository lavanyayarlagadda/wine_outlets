import React from "react";
import { Box, Typography } from "@mui/material";
import { CustomChip} from "../../atoms";

interface FilterTagListProps {
  filters: { label: string; count: number }[];
  onDelete: (label: string) => void;
}

const FilterTagList: React.FC<FilterTagListProps> = ({ filters, onDelete }) => (
  <Box display="flex" flexDirection="column" alignItems="flex-start" gap={1}>
    <Typography variant="body2" color="text.secondary">
      Applied filters:
    </Typography>
    <Box display="flex" flexWrap="wrap" gap={1}>
      {filters.map((filter) => (
        <CustomChip
          key={filter.label}
          label={`${filter.label} (${filter.count})`}
          onDelete={() => onDelete(filter.label)}
        />
      ))}
    </Box>
  </Box>
);

export default FilterTagList;
