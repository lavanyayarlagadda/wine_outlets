import React, { useState } from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import CustomButton from "../CustomButton/CustomButton";
import {
  FormWrapper,
  HeaderText,
  CommentField,
  RatingBox,
  ButtonHintWrapper,
  MobileHint,
  StyledRating,
} from "./CustomForm.style";
import palette from "../../themes/palette";

interface ReviewFormProps {
  title?: string;
  placeholder?: string;
  buttonText?: string;
  initialRating?: number;
  initialComment?: string;
  onSubmit: (review: { rating: number; comment: string }) => void;
}

const ReusableReviewForm: React.FC<ReviewFormProps> = ({
  title = "Write a review",
  placeholder = "Write a comment",
  buttonText = "Share Review",
  initialRating = 0,
  initialComment = "",
  onSubmit,
}) => {
  const [rating, setRating] = useState<number | null>(initialRating);
  const [comment, setComment] = useState<string>(initialComment);

  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  const handleSubmit = () => {
    if (rating && comment.trim()) {
      onSubmit({ rating, comment });
      setRating(initialRating);
      setComment(initialComment);
    }
  };

  return (
    <FormWrapper>
      {/* Header */}
      <HeaderText variant="subtitle1">{title}</HeaderText>

      {/* Comment Field */}
      <CommentField
        placeholder={placeholder}
        multiline
        rows={4}
        fullWidth
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      {/* Rating + Button */}
      <RatingBox isSm={isSm}>
        <StyledRating
          value={rating}
          onChange={(_, newValue) => setRating(newValue)}
          size="large"
        />

        <ButtonHintWrapper isSm={isSm}>
          <CustomButton
            text={buttonText}
            bgColor={theme.palette.primary.dark}
            onClick={handleSubmit}
            color=""
            border=""
            btnBorderColor=""
          />
          {!isSm && (
            <span style={{ color:palette.grey.greyDark }}>
              Your feedback is essential for us!
            </span>
          )}
        </ButtonHintWrapper>
      </RatingBox>

      {/* Mobile hint */}
      {isSm && <MobileHint>Your feedback is essential for us!</MobileHint>}
    </FormWrapper>
  );
};

export default ReusableReviewForm;
