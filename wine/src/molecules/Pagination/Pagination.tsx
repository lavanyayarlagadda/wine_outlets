import React from "react";
import { Box, Pagination, PaginationItem, Button, useMediaQuery, useTheme } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import palette from "../../themes/palette";

interface CustomPaginationProps {
  count: number;
  page: number;
  onChange: (page: number) => void;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({ count, page, onChange }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handlePrevious = () => onChange(Math.max(page - 1, 1));
  const handleNext = () => onChange(Math.min(page + 1, count));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        justifyContent: "space-between", // spread previous, numbers, next
        mt: 3,
        mb: 3,
        gap: isMobile ? 2 : 0,
      }}
    >
      {/* Previous Button */}
      <Box sx={{ flex: 1, display: "flex", justifyContent: isMobile ? "center" : "flex-start" }}>
        <Button
          variant="outlined"
          startIcon={<ArrowBackIcon />}
          onClick={handlePrevious}
          disabled={page === 1}
          sx={{
            textTransform: "none",
            px: 3,
            borderRadius: '8px',
            width: isMobile ? "100%" : "auto",
               color: palette.black[800],           // text color
          border: `1px solid ${palette.grey[200]}`, // border color
          fontWeight:600
          }}
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
            <PaginationItem
              {...item}
              sx={{
                "&.Mui-selected": {
                  bgcolor: palette.primary.light,
                  color: palette.primary.dark,
                  borderRadius: '8px',
                },
                fontWeight: 500,
                minWidth: 36,
                height: 36,
                mx: 0.5,
              }}
            />
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
          sx={{
            textTransform: "none",
            px: 3,
            borderRadius: '8px',
            width: isMobile ? "100%" : "auto",
            color: palette.black[800],           // text color
          border: `1px solid ${palette.grey[200]}`, // border color
         fontWeight:600,
          }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default CustomPagination;
