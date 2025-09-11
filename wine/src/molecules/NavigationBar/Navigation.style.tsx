import {
  styled,
  Box,
  Menu,
  MenuItem,
  InputBase,
  Typography,
  IconButton,
  Toolbar,
  AppBar,
  Drawer,
  ListItemIcon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import shape from "../../themes/shape";
import palette from "../../themes/palette";

// 🔴 Top Bar
export const TopBar = styled(Box)(({ theme }) => ({
  backgroundColor: theme?.palette?.primary?.dark,
  padding: "6px 10px",
}));

export const CustomiseOfferText = styled(Typography)(({ theme }) => ({
  color: theme?.palette.white.main,
  fontWeight: 400,
  fontSize: `${theme?.typography?.subtitle2?.fontSize}px !important`,
  "& span": {
    textDecoration: "underline",
    cursor: "pointer",
    marginLeft: "5px",
  },
}));

export const TopBarContent = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

// 🔴 AppBar
export const StyledAppBar = styled(AppBar)(() => ({
  position: "static",
  backgroundColor: palette.white.main,
  boxShadow: "none",
}));

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: "space-between",
  flexWrap: "wrap",
  padding: "16px 0px !important",
  margin: "0px 30px",
  borderBottom: shape.borderSuccess,
  [theme.breakpoints.down("md")]: {
    margin: "0px 16px",
    padding: "0px 0px !important",
  },
}));

export const BottomToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: "space-between",
  background: theme.palette.white.main,
  gap: "40px",
  padding: "20px 64px !important",
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

// 🔴 Logo
export const Logo = styled("img")(({ theme }) => ({
  height: "40px",
  cursor: "pointer",
  [theme.breakpoints.down("md")]: {
    height: "30px",
  },
}));

// 🔴 Search
export const SearchBox = styled(Box)(({ theme }) => ({
  display: "none",

  alignItems: "center",
  padding: "4px 12px",
  borderRadius: shape.borderRadiuspx,
  minWidth: "300px",
  border: shape.borderSuccess,
  width: "400px",

  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },

  // Tablet styles
  [theme.breakpoints.down("lg")]: {
    minWidth: "250px",
    width: "300px",
    padding: "4px 10px",
  },
  // Mobile styles
  [theme.breakpoints.down("md")]: {
    minWidth: "auto",
    width: "100%",
  },
  // Small mobile styles
  [theme.breakpoints.down("sm")]: {
    padding: "6px 12px",
    borderRadius: "10px",
  },
}));

export const StyledInput = styled(InputBase)(({ theme }) => ({
  marginLeft: "8px",
  flex: 1,
  color: palette.grey.main, // text color
  "& input::placeholder": {
    color: palette.grey.main, // placeholder color
    opacity: 1,
  },
  // Tablet styles
  [theme.breakpoints.down("lg")]: {
    fontSize: "13px",
    "& input::placeholder": {
      fontSize: "13px",
    },
  },
  // Mobile styles
  [theme.breakpoints.down("md")]: {
    marginLeft: "6px",
    fontSize: "16px", // Larger text for mobile touch devices
    "& input::placeholder": {
      fontSize: "16px",
      color: palette.grey.main,
    },
  },
  // Small mobile styles
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
    "& input::placeholder": {
      fontSize: "14px",
    },
  },
}));

// 🔴 Nav Menus
export const NavWrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "40px",
}));

export const NavMenu = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  fontWeight: 500,
  fontSize: "15px",
  "&:hover": {
    color: theme.palette.primary.dark,
  },
}));

export const HighlightMenu = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  fontWeight: 600,
  fontSize: "15px",
  color: theme.palette.warning.light,
}));

// 🔴 Dropdown
export const DropdownTrigger = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  padding: "6px 12px",
  borderRadius: shape.borderRadiuspx,
  border: shape.borderSuccess,
  display: "flex",
  alignItems: "center",
  fontSize: "14px",
  fontWeight: 500,
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
  },
  [theme.breakpoints.down("md")]: {
    padding: "4px 8px",
    fontSize: "12px",
    flex: 1, // Take equal width
    justifyContent: "center", // Center content
  },
}));

export const DropdownTriggerNoBorder = styled(DropdownTrigger)(() => ({
  border: "none",
}));

export const DropdownTriggerWithGap = styled(DropdownTrigger)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  [theme.breakpoints.down("md")]: {
    "& img": {
      width: "14px",
      height: "14px",
    },
  },
}));

export const DropdownTriggerWithIconMargin = styled(DropdownTrigger)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  "& img": {
    marginRight: "0px",
  },
  [theme.breakpoints.down("md")]: {
    "& img": {
      width: "14px", // Smaller icon on mobile
      height: "14px",
    },
  },
  color: palette.grey.main,
  cursor: "pointer",
}));

export const StyledMenu = styled(Menu)(() => ({
  "& .MuiPaper-root": {
    borderRadius: shape.borderRadiuspx,
    marginTop: "8px",
    minWidth: "168px",
  },
}));
export const StyledProfileMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    marginTop: theme.spacing(1),
    borderRadius: shape.borderRadiuspx,
    boxShadow: theme.shadows[3],
    minWidth: 180,
  },
}));

export const StyledProfileMenuItem = styled(MenuItem)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  padding: theme.spacing(1.2, 2),
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

export const ProfileMenuIcon = styled(ListItemIcon)(() => ({
  minWidth: 30,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const ProfileMenuText = styled(Typography)<{ colorType?: string }>(
  ({ theme, colorType }) => ({
    color: colorType === "error" ? theme.palette.error.main : "inherit",
    fontWeight: 400,
    fontSize: "0.9rem",
  })
);

export const DropdownMenuItem = styled(MenuItem)(() => ({
  fontSize: "14px",
}));

// 🔴 Right Section
export const RightNavSection = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "16px",
}));

export const CustomizeIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.white.main,
  border: shape.borderSuccess,
  padding: "8px",
  borderRadius: shape.borderRadiuspx,
  // Mobile styles
  [theme.breakpoints.down("md")]: {
    padding: "4px",
    border: "none",
    "& img": {
      width: "20px",
      height: "20px",
    },
  },
}));

export const MobileMenuIcon = styled(MenuIcon)(({ theme }) => ({
  fontSize: theme.typography.h5.fontSize,
  color: palette.primary.dark,
  marginTop: theme.spacing(1),
}));

export const StyledSearchIcon = styled(SearchIcon)(() => ({
  color: palette.grey.main,
}));

export const IconGroup = styled(Box)(() => ({
  display: "flex",
  gap: "16px",
  marginTop: "8px",
}));

//  Mobile Drawer Styles
export const MobileMenuButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "block",
    border: shape.borderBlue,
  },
}));

export const DesktopMenuWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "40px",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    width: "260px",
    borderRadius: "0 16px 16px 0",
    boxShadow: theme.shadows[4],
    backgroundColor: theme.palette.background.default,
    padding: "20px",
    boxSizing: "border-box",
  },
}));

export const DrawerHeader = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "16px",
  borderBottom: palette.grey.main,
}));

export const DrawerMenuItem = styled(Box)(() => ({
  padding: "12px",
  fontSize: "14px",
  fontWeight: 500,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const MobileLocationDeliveryWrapper = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    gap: "8px",
    width: "100%",
    margin: "10px 0",
    color: palette.grey.main,
  },
}));

export const DrawerSubMenuItem = styled(Box)(() => ({
  padding: "10px 16px",
  fontSize: "14px",
  color: palette.grey.main,
  cursor: "pointer",
}));

export const DrawerAccountSection = styled(Box)(() => ({
  marginTop: "16px",
  paddingTop: "16px",
  borderTop: shape.borderSuccess,
}));

export const CloseButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: "50%",
  padding: "4px",
}));
