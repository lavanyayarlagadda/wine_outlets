import { Rating } from "@mui/material";
import React from "react";

interface StarRatingProps {
  value: number;
  precision?: number;
  size?: "small" | "medium" | "large";
  readOnly?: boolean;
}

const StarRating: React.FC<StarRatingProps> = ({
  value,
  precision = 0.1,
  size = "medium",
  readOnly = true,
}) => {
  return <Rating value={value} precision={precision} size={size} readOnly={readOnly} />;
};

export default StarRating;
