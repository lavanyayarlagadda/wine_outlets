// AgePopup.style.tsx
import {
  Box,
  Typography,
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  TextField,
  FormControlLabel,
  FormHelperText,
  styled,
} from "@mui/material";
import palette from "../../themes/palette";
import shape from "../../themes/shape";

export const LogoImage = styled("img")(({ theme }) => ({
  height: theme.spacing(10),
  width: theme.spacing(10),
  objectFit: "contain",
  position: "relative",
  zIndex: 2,
  [theme.breakpoints.down("sm")]: {
    height: theme.spacing(8),
    width: theme.spacing(8),
  },
}));

export const RedCircle = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "70%",
  left: "35%",
  transform: "translate(-50%, -50%)",
  width: theme.spacing(5),
  height: theme.spacing(5),
  borderRadius: "50%",
  backgroundColor: palette.primary.dark,
  zIndex: 1,
  [theme.breakpoints.down("sm")]: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    top: "72%",
    left: "40%",
  },
}));

export const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: shape.baseBorderRadius * 3,
    maxWidth: 550,
    margin: theme.spacing(2),
    boxShadow: theme.shadows[8],
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(2),
      width: `calc(100% - ${theme.spacing(4)})`,
      maxWidth: `calc(100% - ${theme.spacing(4)})`,
      maxHeight: `calc(100vh - ${theme.spacing(6)})`,
      overflow: "auto",
      borderRadius: shape.baseBorderRadius * 2,
      top: theme.spacing(2),
    },
  },
}));

export const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
  padding: theme.spacing(4),
  paddingBottom: theme.spacing(3),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
    paddingTop: theme.spacing(3),
  },
}));

export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(2.5),
}));

export const LogoSection = styled("div")(({ theme }) => ({
  position: "relative",
  display: "inline-block",
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));

export const BrandText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  ...theme.typography.h4,
  fontWeight: "bold",
  letterSpacing: "1px",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    ...theme.typography.h6,
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  ...theme.typography.h6,
  fontWeight: "bold",
  color: theme.palette.text.primary,
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    ...theme.typography.subtitle1,
  },
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    ...theme.typography.body2,
  },
}));

export const InputLabel = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  color: palette.black[800],
  fontWeight: 500,
  marginBottom: theme.spacing(1),
  alignSelf: "flex-start",
  "& span": {
    color: palette.primary.dark,
  },
}));

export const Disclaimer = styled(Typography)(({ theme }) => ({
  ...theme.typography.caption,
  color: theme.palette.text.disabled,
  textAlign: "center",
  lineHeight: 1.4,
  marginTop: theme.spacing(1),
}));

export const InputSection = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
}));

export const CheckBoxSection = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});

export const StyledTextField = styled(TextField)(({ theme }) => ({
  width: "100%",
  "& .MuiOutlinedInput-root": {
    borderRadius: shape.baseBorderRadius,
    backgroundColor: theme.palette.background.paper,
    "& fieldset": {
      borderColor: theme.palette.divider,
    },
    "&:hover fieldset": {
      borderColor: theme.palette.text.secondary,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
    },
  },
  "& .MuiInputBase-input": {
    padding: theme.spacing(1.5, 1.5),
    fontSize: theme.typography.body2.fontSize,
    color: theme.palette.text.primary,
  },
  [theme.breakpoints.down("sm")]: {
    "& .MuiInputBase-input": {
      padding: theme.spacing(1.25, 1.25),
      fontSize: theme.typography.body1.fontSize,
    },
  },
}));

export const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
  color: theme.palette.action.disabled,
  "&.Mui-checked": {
    color: theme.palette.primary.main,
  },
  padding: theme.spacing(0.5),
}));

export const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  margin: 0,
  width: "100%",
  "& .MuiFormControlLabel-label": {
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing(0.5),
  },
}));

export const ButtonsSection = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  gap: theme.spacing(1.5),
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: theme.spacing(1),
  },
}));

export const VerifyButton = styled(Button)(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.primary.contrastText,
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: theme.typography.body2.fontSize,
  textTransform: "none",
  borderRadius: shape.borderRadiuspx,
  padding: theme.spacing(1.5, 3),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1.25, 2),
    width: "100%",
  },
}));

export const ExitButton = styled(Button)(({ theme }) => ({
  flex: 1,
  borderColor: theme.palette.text.secondary,
  backgroundColor: theme.palette.action.hover,
  color: theme.palette.text.secondary,
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: theme.typography.body2.fontSize,
  textTransform: "none",
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1.5, 3),
  "&:hover": {
    borderColor: theme.palette.text.secondary,
    backgroundColor: theme.palette.action.hover,
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1.25, 2),
    width: "100%",
  },
}));

export const ErrorText = styled(FormHelperText)(({ theme }) => ({
  fontSize: theme.typography.caption.fontSize,
  marginTop: theme.spacing(0.5),
  marginLeft: 0,
  color: `${theme.palette.error.main}`,
}));
