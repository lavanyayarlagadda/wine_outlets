import { styled } from "@mui/material/styles";
import { Box, Typography, Grid, Skeleton } from "@mui/material";

// Wrapper for the whole Ratings Breakdown section
export const RatingsWrapper = styled(Box)(() => ({
  width: "100%",
  padding: "16px",
  "@media (min-width: 900px)": {
    padding: "32px",
  },
}));

// Header Typography
export const RatingsHeader = styled(Typography)(() => ({
  fontWeight: "bold",
  marginBottom: 16,
}));

// Flex container for left + middle section
export const RatingsContent = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: 32,
  flexWrap: "wrap",
  "@media (min-width: 900px)": {
    flexDirection: "row",
  },
}));

// Container for distribution + buttons
export const DistributionContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: 32,
  flex: 1,
  "@media (min-width: 1200px)": {
    flexDirection: "row",
  },
}));

// Rating Distribution wrapper
export const RatingDistributionWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: 8,
  flex: "1 1 100%",
  width: "100%",
  "@media (min-width: 1200px)": {
    flex: "0 0 70%",
    width: "60%",
  },
}));

// Filter Buttons wrapper
export const FilterButtonsWrapper = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  gap: 16,
}));

// Wrapper for reviews grid
export const ReviewsGrid = styled(Grid)(() => ({
  marginTop: 16,
}));

// Wrapper for review form
export const ReviewFormWrapper = styled(Box)(() => ({
  padding: 32,
}));

export const ReviewGridItem = styled(Grid)(() => ({
  width: "100%",
  "@media (min-width: 600px)": {
    width: "48%",
  },
  "@media (min-width: 900px)": {
    width: "49%",
  },
}));
export const SkeletonCircle = styled(Skeleton)(() => ({
  width: 80,
  height: 80,
}));

export const SkeletonTextShort = styled(Skeleton)(() => ({
  width: 120,
  height: 20,
}));

export const SkeletonTextMedium = styled(Skeleton)(() => ({
  width: 80,
  height: 20,
}));

export const NoDataWrapper = styled(Box)(() => ({
  width: "100%",
  textAlign: "center",
  padding: "48px 0",
}));
