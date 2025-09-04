import React, { useState } from "react";
import {
  Box,
  Button,
  Rating,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SendIcon from "@mui/icons-material/Send";
import CustomButton from "../CustomButton/CustomButton";

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
    <Box
      sx={{
        border: "1px solid #e0e0e0",
        borderRadius: 2,
        p: { xs: 2, sm: 3 },
        width: "100%",
        backgroundColor: "#fff",
      }}
    >
      {/* Header */}
      <Typography variant="subtitle1" fontWeight="bold" mb={2}>
        {title}
      </Typography>

      {/* Comment box */}
      <TextField
        placeholder={placeholder}
        multiline
        rows={4}
        fullWidth
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        sx={{ mb: 2 }}
      />

      {/* Rating + Button */}
      <Box
        display="flex"
        flexDirection={isSm ? "column" : "row"}
        alignItems={isSm ? "flex-start" : "center"}
        justifyContent="space-between"
        gap={2}
      >
        {/* Rating */}
        <Rating
          value={rating}
          onChange={(_, newValue) => setRating(newValue)}
          size="large"
          sx={{ color: "#fbc02d" }}
        />

        {/* Button + Hint */}
        <Box
          display="flex"
          alignItems="center"
          gap={2}
          width={isSm ? "100%" : "auto"}
        >
          <CustomButton
              text={buttonText}
              bgColor={theme.palette.primary.dark}
              onClick={() => console.log("subscribe")}
              color={""}
              border={""}
              btnBorderColor={""}
            />
          {!isSm && (
            <Typography variant="body2" color="text.secondary">
              Your feedback is essential for us!
            </Typography>
          )}
        </Box>
      </Box>

      {/* Mobile hint */}
      {isSm && (
        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="center"
          mt={1}
        >
          Your feedback is essential for us!
        </Typography>
      )}
    </Box>
  );
};

export default ReusableReviewForm;
