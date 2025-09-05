import { useState, useMemo } from "react";

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

export const useRatingsBreakdown = (data: RatingsData) => {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const totalRatings = useMemo(
    () => Object.values(data.ratings_distribution).reduce((a, b) => a + b, 0),
    [data.ratings_distribution]
  );

  const getPercentage = (count: number) => (totalRatings > 0 ? (count / totalRatings) * 100 : 0);

  const filterButtons = useMemo(() => {
    return [
      { label: `All (${totalRatings})`, value: "All" },
      { label: `5 Stars (${data.ratings_distribution["5_star"] || 0})`, value: "5" },
      { label: `4 Stars (${data.ratings_distribution["4_star"] || 0})`, value: "4" },
      { label: `3 Stars (${data.ratings_distribution["3_star"] || 0})`, value: "3" },
      { label: `2 Stars (${data.ratings_distribution["2_star"] || 0})`, value: "2" },
      { label: `1 Star (${data.ratings_distribution["1_star"] || 0})`, value: "1" },
    ];
  }, [data.ratings_distribution, totalRatings]);

  const filteredReviews = useMemo(
    () =>
      selectedFilter === "All"
        ? data.sample_reviews
        : data.sample_reviews.filter((review) => review.rating === Number(selectedFilter)),
    [selectedFilter, data.sample_reviews]
  );

  return {
    selectedFilter,
    setSelectedFilter,
    totalRatings,
    getPercentage,
    filterButtons,
    filteredReviews,
  };
};
