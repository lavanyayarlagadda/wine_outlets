import { styled } from "@mui/material/styles";
import { Box, Chip, Typography } from "@mui/material";
import shape from "../../themes/shape";
import { useFontSize } from "../../themes/fontSize";
import { theme } from "../../themes/theme";
import palette from "../../themes/palette";

export const MainContainer = styled(Box)(({ theme }) => ({
  border: shape.borderSuccess,
  borderRadius: theme.shape.borderRadius,
}));
export const ProductHeader = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
  width: "100%",
  boxSizing: "border-box",
  padding: theme.spacing(2),
}));

export const HeaderTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 600,
  fontSize: useFontSize(16),
}));
// export const ProductContent = styled(Box)(() => ({
//     border:shape.borderSuccess
// }))

export const ProductContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  padding: theme.spacing(2),
}));

export const ContentRow = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const LabelText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontWeight: 500,
  fontSize: useFontSize(16),
}));

export const ValueText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 600,
  fontSize: useFontSize(16),
}));
export const DividerLine = styled("hr")(({ theme }) => ({
  border: "none",
  borderTop: `1px solid ${theme.palette.divider}`,
  margin: theme.spacing(1, 0),
}));

export const SavingContent = styled(Typography)(({ theme }) => ({
  display: "flex",
  textAlign: "center",
  color: theme.palette.warning.light,
  justifyContent: "center",
  fontSize: useFontSize(16),
  marginBottom: "20px",
}));
export const StyledChip = styled(Chip)(() => ({
  fontWeight: 500,
  color: palette.warning.light,
  border: shape.borderWarning,
  backgroundColor: palette.white[400],
}));
