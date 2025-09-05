import { styled } from "@mui/material/styles";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import spacing from "../../../themes/spacing";
import palette from "../../../themes/palette";


export const RatingHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: theme.spacing(1),
}));

export const RatingTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,   // bold
  fontSize: "1rem",  // adjust as needed
  color: theme.palette.text.primary,
}));

export const RatingBadge = styled(Box)(({ theme }) => ({
  border: `2px solid ${theme.palette.primary.dark}`,
  borderRadius: "50%",
  width: 36,
  height: 36,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: 600,
//   color: theme.palette.error.main,
}));

export const RatingText = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  lineHeight: 1.6,
  color: theme.palette.grey[200],
  marginBottom: theme.spacing(2),
}));

export const ReviewerBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const ReviewerName = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: "14px",
  color: theme.palette.text.primary,
}));
export const Container = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.success.main}`,
  borderRadius: spacing.outlineSpace,
  padding: theme.spacing(0.5), // 2px
}));

export const Header = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  cursor: "pointer",
  backgroundColor: palette.white.light,
  padding: theme.spacing(1, 2), // 8px 16px
  borderRadius: 4,
}));

export const RatingsGrid = styled(Grid)(({ theme }) => ({
 backgroundColor: palette.white.light,
  padding: theme.spacing(2),
}));