import React from "react";
import {
  RatingsWrapper,
  RatingsHeader,
  RatingsContent,
  DistributionContainer,
  RatingDistributionWrapper,
  FilterButtonsWrapper,
  ReviewsGrid,
  ReviewFormWrapper,
  ReviewGridItem,
} from "./RatingsBreakDown.style";
import AverageRatingCard from "../../atoms/CustomCircularProgressBar/CustomCircularProgressBar";
import RatingDistributionRow from "../../molecules/RatingDistributionRow/RatingDistributionRow";
import FilterButton from "../../atoms/FilterButtons/FilterButtons";
import ReviewCard from "../../molecules/ReviewCard/ReviewCard";
import { CustomReviewForm } from "../../atoms";
import { useRatingsBreakdown } from "./RatingsBreakDown.hook";
import { Skeleton, Box, Typography } from "@mui/material";

const RatingsBreakdown = () => {
  const {
    selectedFilter,
    setSelectedFilter,
    getPercentage,
    filterButtons,
    filteredReviews,
    ReviewsData,
    isLoading,
    handleSubmit,
    ReviewLoading,
    rating,
    comment,
    setComment,
    setRating,
  } = useRatingsBreakdown();

  const reviewSummary = ReviewsData?.reviews?.[0];

  const hasReviews = reviewSummary?.length <= 0;

  return (
    <>
      <RatingsWrapper>
        <RatingsHeader variant="h6">Ratings Breakdown</RatingsHeader>

        {isLoading ? (
          // 🔹 Unified skeleton while loading
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
            <Skeleton variant="circular" width={80} height={80} />
            <Skeleton variant="text" width={120} />
            <Skeleton variant="text" width={80} />
            <Skeleton variant="rectangular" height={30} sx={{ borderRadius: 1 }} />
            <Skeleton variant="rectangular" height={30} sx={{ borderRadius: 1 }} />
            <Skeleton variant="rectangular" height={30} sx={{ borderRadius: 1 }} />
            <Skeleton variant="rectangular" height={120} sx={{ borderRadius: 2 }} />
            <Skeleton variant="rectangular" height={120} sx={{ borderRadius: 2 }} />
            <Skeleton variant="rectangular" height={120} sx={{ borderRadius: 2 }} />
          </Box>
        ) : hasReviews ? (
          <Box sx={{ width: "100%", textAlign: "center", py: 6 }}>
            <Typography variant="body1" color="text.secondary" fontStyle="italic">
              No reviews available
            </Typography>
          </Box>
        ) : (
          <>
            <RatingsContent>
              <AverageRatingCard
                averageRating={reviewSummary?.average_rating}
                satisfaction={reviewSummary?.satisfaction_percentage}
                ratingCount={reviewSummary?.rating_count}
                reviewCount={reviewSummary?.review_count}
              />

              <DistributionContainer>
                <RatingDistributionWrapper>
                  {Object.entries(reviewSummary?.ratings_distribution ?? {})
                    .sort((a, b) => Number(b[0][0]) - Number(a[0][0]))
                    .map(([key, count]) => {
                      const stars = parseInt(key.split("_")[0], 10);
                      return (
                        <RatingDistributionRow
                          key={key}
                          stars={stars}
                          percentage={getPercentage(count)}
                          count={Number(count)}
                        />
                      );
                    })}
                </RatingDistributionWrapper>

                <FilterButtonsWrapper>
                  {filterButtons.map((btn, idx) => (
                    <FilterButton
                      key={idx}
                      label={btn.label}
                      isActive={selectedFilter === btn.value}
                      onClick={() => setSelectedFilter(btn.value)}
                    />
                  ))}
                </FilterButtonsWrapper>
              </DistributionContainer>
            </RatingsContent>

            <ReviewsGrid container spacing={1}>
              {filteredReviews?.map((review: any, idx: any) => (
                <ReviewGridItem key={idx}>
                  <ReviewCard
                    rating={review.rating}
                    title={review.title}
                    size={review.size}
                    text={review.text}
                    vintage={review.vintage}
                  />
                </ReviewGridItem>
              ))}
            </ReviewsGrid>
          </>
        )}
      </RatingsWrapper>

      <ReviewFormWrapper>
        <CustomReviewForm
          title="Write a Review"
          placeholder="Write a Comment"
          buttonText="Submit Feedback"
          onSubmit={handleSubmit}
          initialComment={comment}
          initialRating={rating}
          setComment={setComment}
          setRating={setRating}
          isLoading={ReviewLoading}
        />
      </ReviewFormWrapper>
    </>
  );
};

export default RatingsBreakdown;
