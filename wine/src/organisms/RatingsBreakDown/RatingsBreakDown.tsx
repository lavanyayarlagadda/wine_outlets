import React, { useState } from "react";
import { Grid } from "@mui/material";
import { CustomReviewForm } from "../../atoms";
import AverageRatingCard from "../../atoms/CustomCircularProgressBar/CustomCircularProgressBar";
import RatingDistributionRow from "../../molecules/RatingDistributionRow/RatingDistributionRow";
import FilterButton from "../../atoms/FilterButtons/FilterButtons";
import ReviewCard from "../../molecules/ReviewCard/ReviewCard";
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

interface RatingsBreakdownProps {
  data: {
    average_rating: number;
    satisfaction_percentage: string;
    rating_count: string;
    review_count: string;
    ratings_distribution: { [key: string]: number };
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

  const getPercentage = (count: number) => (totalRatings > 0 ? (count / totalRatings) * 100 : 0);

  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const filteredReviews =
    selectedFilter === "All"
      ? sample_reviews
      : sample_reviews.filter((review) => review.rating === Number(selectedFilter));

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
      <RatingsWrapper>
        <RatingsHeader variant="h6">Ratings Breakdown</RatingsHeader>

        <RatingsContent>
          <AverageRatingCard
            averageRating={average_rating}
            satisfaction={satisfaction_percentage}
            ratingCount={rating_count}
            reviewCount={review_count}
          />

          <DistributionContainer>
            <RatingDistributionWrapper>
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
