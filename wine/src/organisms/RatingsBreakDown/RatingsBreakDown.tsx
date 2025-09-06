import React from "react";
import { RatingsWrapper, RatingsHeader, RatingsContent, DistributionContainer, RatingDistributionWrapper, FilterButtonsWrapper, ReviewsGrid, ReviewFormWrapper, ReviewGridItem } from "./RatingsBreakDown.style";
import AverageRatingCard from "../../atoms/CustomCircularProgressBar/CustomCircularProgressBar";
import RatingDistributionRow from "../../molecules/RatingDistributionRow/RatingDistributionRow";
import FilterButton from "../../atoms/FilterButtons/FilterButtons";
import ReviewCard from "../../molecules/ReviewCard/ReviewCard";
import { CustomReviewForm } from "../../atoms";
import { useRatingsBreakdown } from "./RatingsBreakDown.hook";
import type { RatingsData } from "./RatingsBreakDown.hook";

interface RatingsBreakdownProps {
  data: RatingsData;
}

const RatingsBreakdown: React.FC<RatingsBreakdownProps> = ({ data }) => {
  const { 
    selectedFilter, 
    setSelectedFilter, 
    getPercentage, 
    filterButtons, 
    filteredReviews 
  } = useRatingsBreakdown(data);

  return (
    <>
      <RatingsWrapper>
        <RatingsHeader variant="h6">Ratings Breakdown</RatingsHeader>

        <RatingsContent>
          <AverageRatingCard
            averageRating={data.average_rating}
            satisfaction={data.satisfaction_percentage}
            ratingCount={data.rating_count}
            reviewCount={data.review_count}
          />

          <DistributionContainer>
            <RatingDistributionWrapper>
              {Object.entries(data.ratings_distribution)
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
          {filteredReviews.map((review, idx) => (
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
      </RatingsWrapper>

      <ReviewFormWrapper>
        <CustomReviewForm
          title="Write a Review"
          placeholder="Write a Comment"
          buttonText="Submit Feedback"
          initialRating={4}
          initialComment="Great product!"
          onSubmit={(review) => console.log("Submitted:", review)}
        />
      </ReviewFormWrapper>
    </>
  );
};

export default RatingsBreakdown;
