import { Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

interface Props {
  value: number;
  size?: "small" | "medium" | "large";
}

const StarRating: React.FC<Props> = ({ value, size = "medium" }) => {
  return (
    <Box display="flex" alignItems="center">
      {Array.from({ length: 5 }).map((_, i) =>
        i < value ? (
          <StarIcon key={i} fontSize={size} sx={{ color: "#f5b50a" }} />
        ) : (
          <StarBorderIcon key={i} fontSize={size} sx={{ color: "#ccc" }} />
        )
      )}
    </Box>
  );
};

export default StarRating;
