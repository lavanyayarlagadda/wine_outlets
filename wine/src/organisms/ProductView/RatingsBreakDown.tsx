import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { CustomReviewForm } from "../../atoms";
import AverageRatingCard from "../../atoms/CustomCircularProgressBar/CustomCircularProgressBar";
import RatingDistributionRow from "../../molecules/ProductView/RatingDistributionRow";
import FilterButton from "../../atoms/FilterButtons/FilterButtons";
import ReviewCard from "../../molecules/ProductView/ReviewCard";

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

  const totalRatings = Object.values(ratings_distribution).reduce(
    (a, b) => a + b,
    0
  );

  const getPercentage = (count: number) =>
    totalRatings > 0 ? (count / totalRatings) * 100 : 0;

  // ✅ State for selected filter
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  // ✅ Filtered reviews
  const filteredReviews =
    selectedFilter === "All"
      ? sample_reviews
      : sample_reviews.filter(
          (review) => review.rating === Number(selectedFilter)
        );

  const filterButtons = [
    { label: `All (${totalRatings})`, value: "All" },
    { label: `5 Stars (${ratings_distribution["5_star"] || 0})`, value: "5" },
    { label: `4 Stars (${ratings_distribution["4_star"] || 0})`, value: "4" },
    { label: `3 Stars (${ratings_distribution["3_star"] || 0})`, value: "3" },
    { label: `2 Stars (${ratings_distribution["2_star"] || 0})`, value: "2" },
    { label: `1 Star (${ratings_distribution["1_star"] || 0})`, value: "1" },
  ];

  return (
    <>
      <Box sx={{ width: "100%", p: { xs: 2, md: 4 } }}>
        {/* Header */}
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Ratings Breakdown
        </Typography>

        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          gap={4}
          flexWrap="wrap"
        >
          {/* Left: Average Rating */}
          <AverageRatingCard
            averageRating={average_rating}
            satisfaction={satisfaction_percentage}
            ratingCount={rating_count}
            reviewCount={review_count}
          />

          {/* Middle: Distribution */}
          <Box
            display="flex"
  flexDirection={{ xs: "column", md: "column", lg: "row" }}
            gap={4}
            flex={1}
          >
             <Box
               flex={{ xs: "1 1 100%", md: "1 1 100%", lg: "0 0 70%" }}
               width={{ xs: "100%", md: "100%", lg: "60%" }}
               display="flex"
               flexDirection="column"
               gap={1}
             >
              {Object.entries(ratings_distribution)
                .sort((a, b) => Number(b[0][0]) - Number(a[0][0]))
                .map(([key, count]) => {
                  const stars = parseInt(key.split("_")[0], 10);
                  return (
                    <RatingDistributionRow
                      key={key}
                      stars={stars}
                      percentage={getPercentage(count)}
                      count={count}
                    />
                  );
                })}
            </Box>

            {/* Right: Filter Buttons */}
            <Box display="flex" flexWrap="wrap" gap={2}>
              {filterButtons.map((btn, idx) => (
                <FilterButton
                  key={idx}
                  label={btn.label}
                  isActive={selectedFilter === btn.value}
                  onClick={() => setSelectedFilter(btn.value)}
                />
              ))}
            </Box>
          </Box>
        </Box>

        {/* Sample Reviews */}
        <Grid container spacing={2} mt={2}>
          {filteredReviews.map((review, idx) => (
            <Grid key={idx}  size={{xs:12,sm:6,md:6}}>
              <ReviewCard
                rating={review.rating}
                title={review.title}
                size={review.size}
                text={review.text}
                vintage={review.vintage}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Review Form */}
      <Box sx={{ p: 4 }}>
        <CustomReviewForm
          title="Write a Review"
          placeholder="Write a Comment"
          buttonText="Submit Feedback"
          initialRating={4}
          initialComment="Great product!"
          onSubmit={(review) => console.log("Submitted:", review)}
        />
      </Box>
    </>
  );
};

export default RatingsBreakdown;
