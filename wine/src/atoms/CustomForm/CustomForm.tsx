import React from "react";
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
  initialRating?: number | null;
  initialComment?: string;
  onSubmit: () => void;
  isLoading?: boolean;
  setComment: React.Dispatch<React.SetStateAction<any>>;
  setRating: React.Dispatch<React.SetStateAction<any>>;
}

const ReusableReviewForm: React.FC<ReviewFormProps> = ({
  title = "Write a review",
  placeholder = "Write a comment",
  buttonText = "Share Review",
  initialRating = 0,
  initialComment = "",
  onSubmit,
  isLoading,
  setComment,
  setRating,
}) => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <FormWrapper>
      <HeaderText variant="subtitle1">{title}</HeaderText>
      <CommentField
        placeholder={placeholder}
        multiline
        rows={4}
        fullWidth
        value={initialComment}
        onChange={(e) => setComment(e.target.value)}
      />
      <RatingBox isSm={isSm}>
        <StyledRating
          value={initialRating}
          onChange={(_, newValue) => setRating(newValue)}
          size="large"
        />

        <ButtonHintWrapper isSm={isSm}>
          <CustomButton
            text={buttonText}
            bgColor={theme.palette.primary.dark}
            onClick={onSubmit}
            color=""
            border=""
            btnBorderColor=""
            isLoading={isLoading}
          />
          {!isSm && (
            <span style={{ color: palette.grey.main }}>Your feedback is essential for us!</span>
          )}
        </ButtonHintWrapper>
      </RatingBox>
      {isSm && <MobileHint>Your feedback is essential for us!</MobileHint>}
    </FormWrapper>
  );
};

export default ReusableReviewForm;
