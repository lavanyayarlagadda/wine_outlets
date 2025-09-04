import { Box, Typography } from "@mui/material";
import { ProgressBar, StarRating } from "../../atoms";


interface RatingDistributionRowProps {
  stars: number;
  percentage: number;
  count: number;
}

const RatingDistributionRow: React.FC<RatingDistributionRowProps> = ({ stars, percentage, count }) => (
  <Box display="flex" alignItems="center" width="100%">
    <Typography width={20}>{stars}</Typography>
    <StarRating value={stars} size="small" />
    <ProgressBar value={percentage} />
    <Typography variant="body2" color="text.secondary">
      {count}
    </Typography>
  </Box>
);

export default RatingDistributionRow;
