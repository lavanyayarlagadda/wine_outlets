import React from "react";
import StarRating from "../StarRatng/StarRating";
import {
  AverageRatingWrapper,
  CircularProgressWrapper,
  CircularProgressStyled,
  CircularLabel,
  RatingNumber,
  RatingInfo,
  RatingText,
} from "./CustomCircularProgressBar.style";

interface AverageRatingCardProps {
  averageRating: number;
  satisfaction: string;
  ratingCount: string;
  reviewCount: string;
}

const AverageRatingCard: React.FC<AverageRatingCardProps> = ({
  averageRating,
  satisfaction,
  ratingCount,
  reviewCount,
}) => {
  return (
    <AverageRatingWrapper>
      <CircularProgressWrapper>
        <CircularProgressStyled
          variant="determinate"
          value={(averageRating / 5) * 100}
          size={100}
          thickness={4}
        />
        <CircularLabel>
          <RatingNumber variant="h4">{averageRating?.toFixed(1)}</RatingNumber>
        </CircularLabel>
      </CircularProgressWrapper>

      <RatingInfo>
        <StarRating value={Number(averageRating)} />
        <RatingText variant="body2">{satisfaction}</RatingText>
        <RatingText variant="body2">
          {ratingCount} • {reviewCount}
        </RatingText>
      </RatingInfo>
    </AverageRatingWrapper>
  );
};

export default AverageRatingCard;
