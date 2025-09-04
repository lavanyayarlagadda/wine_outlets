import { Box, Typography, CircularProgress } from "@mui/material";
import palette from "../../themes/palette";
import StarRating from "../StarRatng/StarRating";


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
    <Box display="flex" alignItems="center">
      <Box position="relative" display="inline-flex">
        <CircularProgress
          variant="determinate"
          value={(averageRating / 5) * 100}
          size={100}
          thickness={4}
          sx={{ color: palette.black[800] }}
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          bottom={0}
          right={0}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="h4" fontWeight="bold">
            {averageRating.toFixed(1)}
          </Typography>
        </Box>
      </Box>

      <Box display="flex" flexDirection="column" alignItems="center" ml={2}>
        <StarRating value={averageRating} />
        <Typography variant="body2" color="text.secondary" mt={1}>
          {satisfaction}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {ratingCount} • {reviewCount}
        </Typography>
      </Box>
    </Box>
  );
};

export default AverageRatingCard;
