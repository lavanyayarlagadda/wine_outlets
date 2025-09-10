import type { SxProps, Theme } from "@mui/material";
import palette from "../../themes/palette";
import shape from "../../themes/shape";

export const container: SxProps<Theme> = (theme) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  mt: 3,
  mb: 3,
  gap: 0,
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: 2,
  },
});

export const buttonBase: SxProps<Theme> = {
  textTransform: "none",
  px: 3,
  borderRadius: shape.borderRadiuspx,
  color: palette.black[800],
  border: shape.borderSuccess,
  fontWeight: 600,
};

export const prevButton = (isMobile: boolean): SxProps<Theme> => ({
  ...buttonBase,
  width: isMobile ? "100%" : "auto",
});

export const nextButton = (isMobile: boolean): SxProps<Theme> => ({
  ...buttonBase,
  width: isMobile ? "100%" : "auto",
});

export const paginationItem: SxProps<Theme> = {
  "&.Mui-selected": {
    bgcolor: palette.primary.light,
    color: palette.primary.dark,
    borderRadius: shape.borderRadiuspx,
  },
  fontWeight: 500,
  minWidth: 36,
  height: 36,
  mx: 0.5,
};
