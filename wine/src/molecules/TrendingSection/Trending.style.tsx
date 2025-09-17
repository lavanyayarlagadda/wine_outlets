import { Typography, Box, Button, styled } from "@mui/material";
import { banner_img1 } from "../../assets";
import palette from "../../themes/palette";
import shape from "../../themes/shape";

export const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  margin: "0 auto",
  padding: "80px 64px",
  backgroundColor: theme.palette.primary.light,
  [theme.breakpoints.down("md")]: {
    padding: "40px 16px",
  },
}));
export const Wrapper = styled(Box)(({ theme }) => ({
  // display: "flex",
  // justifyContent: "space-between",
  // gap: "40px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));
export const LeftSectionBox = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "30%",
  height: "100%",
  borderRadius: shape.borderRadius,
  overflow: "hidden",
  cursor: "pointer",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const BackgroundImage = styled(Box)<{ backgroundImage?: string }>(({ backgroundImage }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundImage: backgroundImage ? `url(${backgroundImage})` : banner_img1,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
}));

export const ContentContainer = styled(Box)({
  position: "relative",
  zIndex: 2,
  height: "640px",
  display: "flex",
  flexDirection: "column",
  padding: "32px 24px",
  color: palette.white.main,
});

export const TextContent = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: `${theme.typography.body1.fontSize}px`,
  fontWeight: 600,
  lineHeight: 1.2,
  color: palette.white.main,
  [theme.breakpoints.down("md")]: {
    fontSize: "18px",
  },
}));

export const Description = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: 1.5,
  color: palette.grey.light,
  maxWidth: "320px",
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
    maxWidth: "100%",
  },
}));

export const CTAButton = styled(Button)({
  alignSelf: "flex-start",
  backgroundColor: "transparent",
  color: palette.white.main,
  fontSize: "16px",
  fontWeight: 500,
  marginTop: "40px",
  padding: "8px 0",
  textTransform: "none",
  border: "none",
  borderRadius: 0,
  borderBottom: "2px solid transparent",
  transition: "border-bottom-color 0.3s ease",
  "&:hover": {
    backgroundColor: "transparent",
    borderBottomColor: palette.white.main,
  },
  "& .MuiButton-endIcon": {
    marginLeft: "8px",
    transition: "transform 0.3s ease",
  },
  "&:hover .MuiButton-endIcon": {
    transform: "translateX(4px)",
  },
});

export const RightSectionBox = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(4,1fr)",
  gap: theme.spacing(2.5),
  [theme.breakpoints.down("md")]: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: theme.spacing(3),
    "& > *": {
      flex: "1 1 100%",
      maxWidth: theme.spacing(36),
    },
  },
}));
