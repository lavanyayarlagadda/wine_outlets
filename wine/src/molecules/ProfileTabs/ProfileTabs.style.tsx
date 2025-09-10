import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import {
  TabsWrapper as OriginalTabsWrapper,
  TabFields as OriginalTabFields,
} from "../../organisms/Authentication/AuthDialog.style";
import palette from "../../themes/palette";
import shape from "../../themes/shape";

export const ProfileTabsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(3),
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(4),
  padding: theme.spacing(4),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    marginLeft: 0,
    paddingTop: theme.spacing(1.5),
  },
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    // marginLeft: "100px",
    // paddingTop: theme.spacing(2.5),
  },
}));

export const TabsWrapperStyled = styled(OriginalTabsWrapper)(({ theme }) => ({
  width: 220,
  height: 150,
  flexShrink: 0,
  overflowY: "auto",
  borderRadius: shape.baseBorderRadius * 2,
  backgroundColor: palette.primary.light,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "auto",
  },
}));

export const TabFieldsStyled = styled(OriginalTabFields)(() => ({
  flex: 1,
}));
