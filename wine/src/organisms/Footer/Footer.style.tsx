import { styled } from "@mui/material/styles";
import { Box, Typography, Link, Grid } from "@mui/material";
import IconButton, { type IconButtonProps } from "@mui/material/IconButton";
import shape from "../../themes/shape";
import palette from "../../themes/palette";

export const FooterContainer = styled(Box)(() => ({
  width: "100%",
  margin: "0 auto",
  padding: "24px 30px 0px 30px",
}));

export const InnerWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing(4),
  },
}));

export const LogoImage = styled("img")(({ theme }) => ({
  height: "40px",
  width: "auto",
  objectFit: "contain",
  [theme.breakpoints.down("sm")]: {
    display: "block",
    margin: "0 auto",
  },
}));

export const CustomizedGrid = styled(Grid)(({ theme }) => ({
  width: "200px",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    textAlign: "left",
    marginBottom: theme.spacing(2),
  },
}));

export const SocialIconsContainer = styled(Box)(() => ({
  display: "flex",
  gap: "22px",
  paddingBottom: 10,
}));

export const StyledIconButton = styled((props: IconButtonProps) => <IconButton {...props} />)(
  ({ theme }) => ({
    border: shape.borderRed,
    background: theme.palette.primary.light,
    borderRadius: "6px",
    width: 36,
    height: 36,
    marginTop: "18px",
    "&:hover": {
      backgroundColor: palette.grey.greyMain,
    },
  })
);

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  marginBottom: theme.spacing(2),
  fontSize: "1rem",
}));

export const LinksContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    alignItems: "left",
    gap: theme.spacing(0.5),
  },
}));

export const StyledLink = styled(Link)(() => ({
  textDecoration: "none",
  color: palette.grey.main,
  fontSize: "0.875rem",
  "&:hover": {
    textDecoration: "underline",
  },
  cursor: "pointer",
}));

export const FooterContent = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  // gap: 16,
}));

export const FooterGridRow = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  flexWrap: "wrap",
  [theme.breakpoints.up("md")]: {
    flexWrap: "nowrap",
  },
}));

export const CopyrightText = styled(Typography)(({ theme }) => ({
  color: "gray",
  marginTop: 16,
  fontSize: 14,
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
}));
