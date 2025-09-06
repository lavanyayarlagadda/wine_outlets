import React from "react";
import { Card, CardContent } from "@mui/material";

import { RatingHeader, RatingBadge, RatingText, RatingTitle } from "./ProductView.style";

type ProfessionalRatingCardProps = {
  title: string;
  description: string;
  score: number; // numeric rating (e.g., 90)
};

const ProfessionalRatingCard: React.FC<ProfessionalRatingCardProps> = ({
  title,
  score,
  description,
  // reviewer,
}) => {
  return (
    <Card elevation={2}>
      <CardContent>
        {/* Header with reviewer + badge */}
        <RatingHeader>
          <RatingTitle>{title}</RatingTitle>
          <RatingBadge>{score}</RatingBadge>
        </RatingHeader>

        {/* Review text */}
        <RatingText>{description}</RatingText>

        {/* Reviewer + stars */}
        {/* <ReviewerBox>
          <Box display="flex" alignItems="center" gap={1}>
            <Avatar src={avatar} alt={reviewer} />
            <ReviewerName>{reviewer}</ReviewerName>
          </Box>
          <Rating value={stars} precision={0.5} readOnly />
        </ReviewerBox> */}
      </CardContent>
    </Card>
  );
};

export default ProfessionalRatingCard;
