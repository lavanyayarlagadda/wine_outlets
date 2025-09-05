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
  styled
} from "@mui/material";
import palette from "../../themes/palette";

export const LogoImage = styled("img")({
  height: "80px",
  width: "80px",
  objectFit: "contain",
  position: "relative", // ensure it participates in stacking
  zIndex: 2,           // above the circle
});


export const RedCircle = styled("div")({
  position: "absolute",
  top: "70%",
  left: "35%",
  transform: "translate(-50%, -50%)",
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  backgroundColor:palette.primary.dark,
  zIndex: 1, 
});

export const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: "24px",
    maxWidth: 550,
    margin: theme.spacing(2),
    boxShadow: theme.shadows[8],
  },
}));

// Dialog content
export const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
  padding: theme.spacing(4),
  paddingBottom: theme.spacing(3),
}));

// Containers
export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(2.5),
}));

export const LogoSection = styled("div")({
  position: "relative", // important for absolute positioning of the circle
  display: "inline-block",
});

// Typography
export const BrandText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: `${theme.typography.h1}`,
  fontWeight: "bold",
  letterSpacing: "1px",
}));

export const Title = styled(Typography)(({ theme }) => ({
  ...theme.typography.h6,
  fontWeight: "bold",
  color: theme.palette.text.primary,
  textAlign: "center",
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  textAlign: "center",
}));

export const InputLabel = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  color: palette.black[800],
  fontWeight: 500,
  marginBottom:8,
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
}));

// Inputs
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
  "& .MuiOutlinedInput-root": {
    borderRadius: theme.shape.borderRadius,
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
}));

export const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
  color: theme.palette.action.disabled,
  "&.Mui-checked": {
    color: theme.palette.primary.main,
  },
  padding: "4px",
}));

export const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  margin: 0,
  "& .MuiFormControlLabel-label": {
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing(0.5),
  },
}));

// Buttons
export const ButtonsSection = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  gap: theme.spacing(1.5),
}));

export const VerifyButton = styled(Button)(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.primary.contrastText,
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: theme.typography.body2.fontSize,
  textTransform: "none",
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1.5, 3),
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
}));

// Error text
export const ErrorText = styled(FormHelperText)(({ theme }) => ({
  fontSize: theme.typography.caption.fontSize,
  marginTop: theme.spacing(0.5),
  marginLeft: 0,
  color: `${theme?.palette?.error?.main}!important`,
}));
