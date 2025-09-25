import { Box, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { MailOutline } from "@mui/icons-material";
import palette from "../../themes/palette";

export const HeadingBox = styled(Box)(({ theme }) => ({
  textAlign: "center",
  marginBottom: theme.spacing(4),
  marginTop: theme.spacing(2),
}));

export const TitleLine = styled(Box)(({ theme }) => ({
  width: 80,
  height: 4,
  backgroundColor: theme.palette.primary.dark,
  margin: "0 auto",
}));

export const ApplyPaper = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(2),
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(6),
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
  textAlign: "center",
  backgroundColor: palette.grey.light,
  borderRadius: 0, // removed border radius
}));

export const ApplyMailIcon = styled(MailOutline)(({ theme }) => ({
  fontSize: 50,
  color: theme.palette.primary.dark,
  marginBottom: theme.spacing(2),
}));

export const ApplyLink = styled("a")(({ theme }) => ({
  color: theme.palette.primary.dark,
  fontWeight: "bold",
  textDecoration: "underline",
  display: "inline-block",
  marginTop: theme.spacing(1),
}));

export const BoldSpan = styled("span")(({ theme }) => ({
  fontWeight: "bold",
  color: theme.palette.primary.dark,
}));
