import React from "react";
import {
  Box,
  Grid,
  Typography,
  Rating,
  LinearProgress,
  Button,
  Card,
  CardContent,
  CircularProgress,
} from "@mui/material";
import palette from "../../themes/palette";

interface RatingsBreakdownProps {
  data: {
    average_rating: number;
    satisfaction_percentage: string;
    rating_count: string;
    review_count: string;
    ratings_distribution: {
      [key: string]: number;
    };
    sample_reviews: {
      rating: number;
      title: string;
      vintage: number;
      size: string;
      text: string;
    }[];
  };
}

const RatingsBreakdown: React.FC<RatingsBreakdownProps> = ({ data }) => {
  const {
    average_rating,
    satisfaction_percentage,
    rating_count,
    review_count,
    ratings_distribution,
    sample_reviews,
  } = data;

  const totalRatings = Object.values(ratings_distribution).reduce((a, b) => a + b, 0);

  const getPercentage = (count: number) => (count / totalRatings) * 100;

  return (
    <Box sx={{ width: "100%", p: { xs: 2, md: 4 } }}>
      {/* Header */}
      <Typography variant="h6" fontWeight="bold" mb={2}>
        Ratings breakdown
      </Typography>

      <Box display="flex" flexDirection="row" gap={4} flexWrap="wrap">
        {/* Left: Average Rating */}
        <Box flex="0 0 auto" minWidth={250} display="flex" flexDirection="row" alignItems="center">
          <Box position="relative" display="inline-flex">
            <CircularProgress
              variant="determinate"
              value={(average_rating / 5) * 100}
              size={100}
              thickness={4}
              sx={{ color: palette.black[800] }}
            />
            <Box
              position="absolute"
              top={0}
              left={0}
              bottom={0}
              right={0}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography variant="h4" fontWeight="bold">
                {average_rating.toFixed(1)}
              </Typography>
            </Box>
          </Box>

          <Box display="flex" flexDirection="column" alignItems="center" mt={1} ml={2}>
            <Rating value={average_rating} precision={0.1} readOnly />

            <Typography variant="body2" color="text.secondary" mt={1}>
              {satisfaction_percentage}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {rating_count} • {review_count}
            </Typography>
          </Box>
        </Box>

        {/* Right: Ratings distribution + Filters */}
        <Box
          flex="1 1 1"
          minWidth={300}
          display="flex"
          flexDirection="row" // <-- make it row
          alignItems="flex-start"
          gap={4} // space between progress bars and filters
        >
          {/* Progress Bars */}
          <Box flex="1 1 1" display="flex" flexDirection="column" gap={1}>
            {Object.entries(ratings_distribution)
              .sort((a, b) => Number(b[0][0]) - Number(a[0][0])) // Sort 5 → 1
              .map(([key, count]) => {
                const stars = key.split("_")[0];
                return (
                  <Box key={key} display="flex" alignItems="center">
                    <Typography width={40}>{stars}</Typography>
                    <Rating value={Number(stars)} readOnly size="small" />
                    <Box sx={{ width: 350, mx: 2 }}>
                      <LinearProgress
                        variant="determinate"
                        value={getPercentage(count)}
                        sx={{
                          height: 8,
                          borderRadius: 5,
                          backgroundColor: "#e0e0e0", // track color
                          "& .MuiLinearProgress-bar": {
                            backgroundColor: palette.black[800], // filled bar color
                          },
                        }}
                      />
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {count}
                    </Typography>
                  </Box>
                );
              })}
          </Box>

          {/* Filter Buttons */}
          <Box display="flex" flexDirection="row" gap={2}>
            <Box display="flex" flexDirection="column" gap={2}>
              <Box display="flex" flexDirection="row" gap={2}>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    color: palette.black[800], // text color
                    borderColor: palette.black[800], // border color
                    "&:hover": {
                      borderColor: palette.black[800], // border color on hover
                      backgroundColor: "#f5f5f5", // optional: subtle hover background
                    },
                  }}
                >
                  All ({totalRatings})
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    color: palette.black[800], // text color
                    borderColor: palette.black[800], // border color
                    "&:hover": {
                      borderColor: palette.black[800], // border color on hover
                      backgroundColor: "#f5f5f5", // optional: subtle hover background
                    },
                  }}
                >
                  5 Stars ({ratings_distribution["5_star"]})
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    color: palette.black[800], // text color
                    borderColor: palette.black[800], // border color
                    "&:hover": {
                      borderColor: palette.black[800], // border color on hover
                      backgroundColor: "#f5f5f5", // optional: subtle hover background
                    },
                  }}
                >
                  4 Stars ({ratings_distribution["4_star"]})
                </Button>
              </Box>
              <Box display="flex" flexDirection="row" gap={2}>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    color: palette.black[800], // text color
                    borderColor: palette.black[800], // border color
                    "&:hover": {
                      borderColor: palette.black[800], // border color on hover
                      backgroundColor: "#f5f5f5", // optional: subtle hover background
                    },
                  }}
                >
                  3 Stars ({ratings_distribution["3_star"]})
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    color: palette.black[800], // text color
                    borderColor: palette.black[800], // border color
                    "&:hover": {
                      borderColor: palette.black[800], // border color on hover
                      backgroundColor: "#f5f5f5", // optional: subtle hover background
                    },
                  }}
                >
                  2 Stars ({ratings_distribution["2_star"]})
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    color: palette.black[800], // text color
                    borderColor: palette.black[800], // border color
                    "&:hover": {
                      borderColor: palette.black[800], // border color on hover
                      backgroundColor: "#f5f5f5", // optional: subtle hover background
                    },
                  }}
                >
                  1 Star ({ratings_distribution["1_star"]})
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Sample reviews */}
      <Grid container spacing={2} mt={2}>
        {sample_reviews.map((review, idx) => (
          <Grid size={{ xs: 12, md: 6 }} key={idx}>
            <Card variant="outlined" sx={{ borderRadius: 2 }}>
              <CardContent>
                <Rating value={review.rating} readOnly size="small" />
                <Typography variant="subtitle1" fontWeight="bold" mt={1}>
                  {review.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={1}>
                  Color: Red • Size: {review.size}
                </Typography>
                <Typography variant="body2" color="text.primary">
                  {review.text}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RatingsBreakdown;
