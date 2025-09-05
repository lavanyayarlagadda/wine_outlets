import React from "react";
import { ProgressBar, StarRating } from "../../atoms";
import { RatingRowWrapper, StarsText, CountText } from "./RatingDistributionRow.style";

interface RatingDistributionRowProps {
  stars: number;
  percentage: number;
  count: number;
}

const RatingDistributionRow: React.FC<RatingDistributionRowProps> = ({ stars, percentage, count }) => (
  <RatingRowWrapper>
    <StarsText>{stars}</StarsText>
    <StarRating value={stars} size="small" />
    <ProgressBar value={percentage} />
    <CountText variant="body2">{count}</CountText>
  </RatingRowWrapper>
);

export default RatingDistributionRow;
