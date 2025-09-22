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
  SkeletonCircle,
  SkeletonTextShort,
  SkeletonTextMedium,
  NoDataWrapper,
} from "./RatingsBreakDown.style";
import AverageRatingCard from "../../atoms/CustomCircularProgressBar/CustomCircularProgressBar";
import RatingDistributionRow from "../../molecules/RatingDistributionRow/RatingDistributionRow";
import FilterButton from "../../atoms/FilterButtons/FilterButtons";
import ReviewCard from "../../molecules/ReviewCard/ReviewCard";
import { CustomReviewForm } from "../../atoms";
import { type RatingsBreakDownHookReturn } from "./RatingsBreakDown.hook";
import { Typography } from "@mui/material";
import { SkeletonWrapper, StyledSkeletonRect } from "../Filter/FilterPanel.style";

interface RatingsBreakdownProps {
  selectedFilter: RatingsBreakDownHookReturn["selectedFilter"];
  setSelectedFilter: RatingsBreakDownHookReturn["setSelectedFilter"];
  getPercentage: RatingsBreakDownHookReturn["getPercentage"];
  filterButtons: RatingsBreakDownHookReturn["filterButtons"];
  filteredReviews: RatingsBreakDownHookReturn["filteredReviews"];
  isLoading: RatingsBreakDownHookReturn["isLoading"];
  handleSubmit: RatingsBreakDownHookReturn["handleSubmit"];
  ReviewLoading: RatingsBreakDownHookReturn["ReviewLoading"];
  rating: RatingsBreakDownHookReturn["rating"];
  comment: RatingsBreakDownHookReturn["comment"];
  setComment: RatingsBreakDownHookReturn["setComment"];
  setRating: RatingsBreakDownHookReturn["setRating"];
  reviewSummary: RatingsBreakDownHookReturn["reviewSummary"];
}

const RatingsBreakdown: React.FC<RatingsBreakdownProps> = ({
  selectedFilter,
  setSelectedFilter,
  getPercentage,
  filterButtons,
  filteredReviews,
  isLoading,
  handleSubmit,
  ReviewLoading,
  rating,
  comment,
  setComment,
  setRating,
  reviewSummary,
}) => {
  const hasReviews = reviewSummary?.length <= 0;

  return (
    <>
      <RatingsWrapper>
        <RatingsHeader variant="h6">Ratings Breakdown</RatingsHeader>

        {isLoading ? (
          <SkeletonWrapper>
            <SkeletonCircle />
            <SkeletonTextShort />
            <SkeletonTextMedium />
            <StyledSkeletonRect />
            <StyledSkeletonRect />
            <StyledSkeletonRect />
            <StyledSkeletonRect />
            <StyledSkeletonRect />
            <StyledSkeletonRect />
          </SkeletonWrapper>
        ) : hasReviews ? (
          <NoDataWrapper>
            <Typography variant="body1" color="text.secondary" fontStyle="italic">
              No reviews available. Add a review to get started!
            </Typography>
          </NoDataWrapper>
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
