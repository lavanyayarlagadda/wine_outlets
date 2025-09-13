import React from "react";
import { Pagination } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useTheme, useMediaQuery } from "@mui/material";

import {
  Container,
  ButtonWrapper,
  PrevButton,
  NextButton,
  StyledPaginationItem,
} from "./Pagination.style";

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
    <Container>
      <ButtonWrapper justify={isMobile ? "center" : "flex-start"}>
        <PrevButton
          variant="outlined"
          startIcon={<ArrowBackIcon />}
          onClick={handlePrevious}
          disabled={page === 1}
        >
          Previous
        </PrevButton>
      </ButtonWrapper>

      <ButtonWrapper justify="center">
        <Pagination
          count={count}
          page={page}
          onChange={(e, value) => onChange(value)}
          shape="rounded"
          siblingCount={1}
          boundaryCount={1}
          hidePrevButton
          hideNextButton
          renderItem={(item) => <StyledPaginationItem {...item} />}
        />
      </ButtonWrapper>

      <ButtonWrapper justify={isMobile ? "center" : "flex-end"}>
        <NextButton
          variant="outlined"
          endIcon={<ArrowForwardIcon />}
          onClick={handleNext}
          disabled={page === count}
        >
          Next
        </NextButton>
      </ButtonWrapper>
    </Container>
  );
};

export default CustomPagination;
