import { useState, useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  useCreateReviewMutation,
  useGetReviewsQuery,
} from "../../store/apis/ProductView/ProductViewAPI";
import { toast } from "react-toastify";

export interface Review {
  rating: number;
  title: string;
  vintage: number;
  size: string;
  text: string;
}

export interface RatingsData {
  average_rating: number;
  satisfaction_percentage: string;
  rating_count: string;
  review_count: string;
  ratings_distribution: { [key: string]: number };
  sample_reviews: Review[];
}

export const useRatingsBreakdown = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productId = queryParams.get("productId") || "";
  const [rating, setRating] = useState<number | null>(0);
  const [comment, setComment] = useState<string>("");
  const [createReview, { isLoading: ReviewLoading, isSuccess, isError: ReviewError }] =
    useCreateReviewMutation();
  const userId = localStorage.getItem("userId");
  const handleSubmit = () => {
    if (rating && comment.trim()) {
      createReview({
        rating,
        comment,
        userId: Number(userId),
        itemNumber: Number(productId),
      });
    }
  };

  const {
    data: ReviewsData,
    isLoading,
    isError,
  } = useGetReviewsQuery({
    itemId: Number(productId),
    userId: Number(userId),
    page: 1,
    limit: 10,
    rating: selectedFilter,
  });
  useEffect(() => {
    if (isSuccess) {
      toast.success("Review submitted successfully!");
      setRating(0);
      setComment("");
    }
    if (isError) {
      toast.error("Failed to submit review. Please try again.");
    }
  }, [isSuccess, ReviewError]);

  const reviewSummary = ReviewsData?.reviews[0];

  const totalRatings = useMemo(() => {
    const distribution = reviewSummary?.ratings_distribution;
    if (!distribution) return 0;

    return Object.values(distribution as Record<string, number>).reduce((a, b) => a + b, 0);
  }, [reviewSummary?.ratings_distribution]);

  const getPercentage = (count: any) => (totalRatings > 0 ? (count / totalRatings) * 100 : 0);

  const filterButtons = useMemo(() => {
    return [
      { label: `All (${totalRatings})`, value: "All" },
      { label: `5 Stars (${reviewSummary?.ratings_distribution["5_star"] || 0})`, value: "5" },
      { label: `4 Stars (${reviewSummary?.ratings_distribution["4_star"] || 0})`, value: "4" },
      { label: `3 Stars (${reviewSummary?.ratings_distribution["3_star"] || 0})`, value: "3" },
      { label: `2 Stars (${reviewSummary?.ratings_distribution["2_star"] || 0})`, value: "2" },
      { label: `1 Star (${reviewSummary?.ratings_distribution["1_star"] || 0})`, value: "1" },
    ];
  }, [reviewSummary?.ratings_distribution, totalRatings]);

  const filteredReviews = reviewSummary?.sample_reviews;

  useEffect(() => {
    if (isError) {
      toast.error("Failed to submit review. Please try again.");
    }
  }, [isError]);

  return {
    selectedFilter,
    setSelectedFilter,
    totalRatings,
    getPercentage,
    filterButtons,
    filteredReviews,
    ReviewsData,
    isLoading,
    ReviewLoading,
    rating,
    comment,
    handleSubmit,
    setComment,
    setRating,
    reviewSummary,
  };
};
export type RatingsBreakDownHookReturn = ReturnType<typeof useRatingsBreakdown>;
