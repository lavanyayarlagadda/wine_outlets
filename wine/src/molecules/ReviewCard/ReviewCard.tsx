import React from "react";
import { StarRating } from "../../atoms";
import { StyledCard, StyledCardContent, InfoRow, TitleText, InfoText, BodyText } from "./ReviewCard.style";

interface ReviewCardProps {
  rating: number;
  title: string;
  size: string;
  text: string;
  vintage: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ rating, title, size, text, vintage }) => (
  <StyledCard variant="outlined">
    <StyledCardContent>
      <StarRating value={rating} size="small" />
      <TitleText variant="subtitle1">{title}</TitleText>
      <InfoRow>
        <InfoText variant="body2">Size: {size}</InfoText>
        <InfoText variant="body2">Vintage: {vintage}</InfoText>
      </InfoRow>
      <BodyText variant="body2">{text}</BodyText>
    </StyledCardContent>
  </StyledCard>
);

export default ReviewCard;
