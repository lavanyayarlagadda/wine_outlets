import { Box, Card, CardContent, Typography } from "@mui/material";
import { StarRating } from "../../atoms";


interface ReviewCardProps {
  rating: number;
  title: string;
  size: string;
  text: string;
  vintage:number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ rating, title, size, text,vintage }) => (
  <Card variant="outlined" sx={{ borderRadius: 2, height: "100%", display: "flex", flexDirection: "column" }}>
    <CardContent sx={{ flexGrow: 1 }}>
      <StarRating value={rating} size="small" />
      <Typography variant="subtitle1" fontWeight="bold" mt={1}>
        {title}
      </Typography>
      <Box sx={{display:'flex',flexDirection:'row',gap:2}}>
      <Typography variant="body2" color="text.secondary" mb={1}>
        Size: {size}
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={1}>
        Vintage: {vintage}
      </Typography>
      </Box>
      <Typography variant="body2" color="text.primary">
        {text}
      </Typography>
    </CardContent>
  </Card>
);

export default ReviewCard;
