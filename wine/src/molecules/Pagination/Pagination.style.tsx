import { styled } from "@mui/material/styles";
import { Box, Button, PaginationItem } from "@mui/material";
import shape from "../../themes/shape";

export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
  gap: theme.spacing(2),
  marginTop: theme.spacing(2),
}));

export const ButtonWrapper = styled(Box)<{ justify?: "flex-start" | "center" | "flex-end" }>(
  ({ justify }) => ({
    flex: 1,
    display: "flex",
    justifyContent: justify || "flex-start",
  })
);

export const PrevButton = styled(Button)({
  minWidth: 100,
  borderRadius: shape.borderRadiuspx,
});

export const NextButton = styled(Button)({
  minWidth: 100,
  borderRadius: shape.borderRadiuspx,
});

export const StyledPaginationItem = styled(PaginationItem)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  marginLeft: theme.spacing(0.5),
  marginRight: theme.spacing(0.5),
  "&.Mui-selected": {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.dark,
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  },
}));
