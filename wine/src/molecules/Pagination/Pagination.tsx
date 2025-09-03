// atoms/Pagination/index.tsx
import React from "react";
import {
  Box,
  Pagination,
  PaginationItem,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  container,
  prevButton,
  nextButton,
  paginationItem,
} from "./Pagination.style";

interface CustomPaginationProps {
  count: number;
  page: number;
  onChange: (page: number) => void;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({
  count,
  page,
  onChange,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handlePrevious = () => onChange(Math.max(page - 1, 1));
  const handleNext = () => onChange(Math.min(page + 1, count));

  return (
    <Box sx={container}>
      {/* Previous Button */}
      <Box sx={{ flex: 1, display: "flex", justifyContent: isMobile ? "center" : "flex-start" }}>
        <Button
          variant="outlined"
          startIcon={<ArrowBackIcon />}
          onClick={handlePrevious}
          disabled={page === 1}
          sx={prevButton(isMobile)}
        >
          Previous
        </Button>
      </Box>

      {/* Page Numbers */}
      <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <Pagination
          count={count}
          page={page}
          onChange={(e, value) => onChange(value)}
          shape="rounded"
          siblingCount={1}
          boundaryCount={1}
          hidePrevButton
          hideNextButton
          renderItem={(item) => (
            <PaginationItem {...item} sx={paginationItem} />
          )}
        />
      </Box>

      {/* Next Button */}
      <Box sx={{ flex: 1, display: "flex", justifyContent: isMobile ? "center" : "flex-end" }}>
        <Button
          variant="outlined"
          endIcon={<ArrowForwardIcon />}
          onClick={handleNext}
          disabled={page === count}
          sx={nextButton(isMobile)}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default CustomPagination;
