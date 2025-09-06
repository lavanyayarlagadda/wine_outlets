import { Box, styled, Typography, Button } from "@mui/material";
import shape from "../../themes/shape";

interface ContainerProps {
  padding?: string;
  backgroundColor?: string;
  maxWidth?: string | number;
}

export const Container = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "padding" && prop !== "backgroundColor" && prop !== "maxWidth",
})<ContainerProps>(({ theme, padding, backgroundColor, maxWidth }) => ({
  width: "100%",
  margin: "0 auto",
  padding: padding || "30px 30px",
  backgroundColor: backgroundColor || theme.palette.primary.light,
  maxWidth: maxWidth || "100%",
  position: "relative",
  marginBottom: theme.spacing(6), // replaces sx={{ mb: 6 }}
}));

// Slide container
interface CarouselSlideProps {
  bgImage?: string;
  bgVideo?: string;
  bgColor?: string;
}

export const CarouselSlide = styled(Box, {
  shouldForwardProp: (prop) => prop !== "bgImage" && prop !== "bgVideo" && prop !== "bgColor",
})<CarouselSlideProps>(({ bgImage, bgVideo, bgColor, theme }) => ({
  background: bgImage
    ? `url(${bgImage}) center/cover no-repeat`
    : bgVideo
      ? "transparent"
      : bgColor || "linear-gradient(135deg, #8B4513 0%, #A0522D 100%)",
  borderRadius: "16px",
  padding: "40px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  minHeight: "160px",
  position: "relative",
  overflow: "hidden",

  "&::before": {
    content: '""',
    position: "absolute",
    top: "20px",
    right: "60px",
    width: "80px",
    height: "80px",
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "50%",
    filter: "blur(20px)",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "10px",
    right: "120px",
    width: "40px",
    height: "40px",
    background: "rgba(255, 255, 255, 0.08)",
    borderRadius: "50%",
    filter: "blur(15px)",
  },

  "& video": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: -1,
  },

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "24px",
  },
}));

// Content section
export const ContentSection = styled(Box)(({ theme }) => ({
  flex: 1,
  paddingRight: "32px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  height: "100%",
  padding: theme.spacing(3),

  [theme.breakpoints.down("sm")]: {
    paddingRight: 0,
  },
}));

// Title + description
export const SlideTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: theme.palette.black[800],
  marginBottom: "12px",
}));

export const SlideDescription = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  color: theme.palette.black[800],
  lineHeight: 1.5,
  maxWidth: "500px",
}));

// Price button
export const PriceButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.white.main,
  color: theme.palette.primary.dark,
  borderRadius: "12px",
  padding: "8px 20px",
  fontSize: "0.875rem",
  fontWeight: "600",
  textTransform: "none",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    marginTop: "24px",
    marginBottom: "10px",
  },
}));

// Dots wrapper
export const DotsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(3),
}));

export const DotsContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  gap: "12px",
}));

export const Dot = styled(Box)<{ active: boolean }>(({ theme, active }) => ({
  width: active ? "24px" : "12px",
  height: "12px",
  borderRadius: active ? "12px" : "50%",
  border: shape.borderWhiteMain,
  backgroundColor: active ? theme.palette.primary.dark : theme.palette.warning.light,
  cursor: "pointer",
  transition: "all 0.3s ease",
}));

// PeopleBought wrapper
export const PeopleBoughtWrapper = styled(Box)(() => ({
  textAlign: "left",
}));

// Icon wrapper
export const IconWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: theme?.palette?.primary.dark,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "28px",
  height: "28px",
  marginLeft: "8px",
}));
