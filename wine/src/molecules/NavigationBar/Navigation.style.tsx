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
  ListItemButton,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import shape from "../../themes/shape";
import palette from "../../themes/palette";
import { useFontSize } from "../../themes/fontSize";

// 🔴 Top Bar
export const TopBar = styled(Box)(({ theme }) => ({
  backgroundColor: theme?.palette?.primary?.dark,
  padding: "6px 10px",
  cursor: "pointer",
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
  // padding: "20px 64px !important",
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

export const DropdownTriggerNoBorder = styled(DropdownTrigger)<{ open?: boolean }>(({ open }) => ({
  border: "none",
  fontSize: useFontSize(14),
  color: open ? palette.primary.dark : "inherit",
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
    marginTop: "16px",
    minWidth: "168px",
    maxHeight:"400px",
    
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

export const CustomizeIconButton = styled(IconButton)<{ icon?: boolean }>(({ theme, icon }) => ({
  color: theme.palette.white.main,
  border: shape.borderSuccess,
  padding: "8px",
  borderRadius: shape.borderRadiuspx,

  [theme.breakpoints.down("sm")]: {
    padding: "4px",
    border: "none",
    "& img": {
      width: "20px",
      height: "20px",
    },
    display: "flex", // hide if icon=true, show if false
  },

  [theme.breakpoints.up("md")]: {
    padding: "4px",
    border: "none",
    "& img": {
      width: "20px",
      height: "20px",
    },
    display: icon ? "flex" : "none", // show if icon=true, hide if false
  },
}));

export const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    top: "-3px", // move count up
    right: "4px",
    fontSize: "0.75rem",
    height: "16px",
    minWidth: "16px",
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

export const CategoryColumn = styled(Box)(({ theme }) => ({
  flex: "1 1 200px",
  marginBottom: 16,
  minWidth: 250, // smaller minimum
  maxWidth: 500, // default for large screens

  // Medium screens (tablet)
  [theme.breakpoints.down("md")]: {
    minWidth: "100%", // take full width
  },

  // Small screens (mobile)
  [theme.breakpoints.down("sm")]: {
    minWidth: "100%",
    marginBottom: 8, // smaller spacing on mobile
  },
}));

export const PromotionCategoryColumn = styled(Box)(({ theme }) => ({
  // flex: "1 1 200px",
  marginBottom: 16,
  minWidth: 200, // default for large screens

  // Medium screens (tablet)
  [theme.breakpoints.down("md")]: {
    minWidth: "100%", // take full width
  },

  // Small screens (mobile)
  [theme.breakpoints.down("sm")]: {
    minWidth: "100%",
    marginBottom: 8, // smaller spacing on mobile
  },
}));

export const CategoryTitle = styled(Typography)(() => ({
  fontWeight: 600,
  fontSize: 14,
  marginBottom: 10,
  color: "#b02a37",
  textTransform: "uppercase",
  paddingLeft: 30,
  cursor: "pointer",
}));

// export const ColumnsWrapper = styled(Box)(() => ({
//   display: "flex",
//   flexDirection: "row",
//   gap: 20,
//   paddingLeft: "30px",
//   paddingRight: "30px",
//   paddingTop: "8px",
//   paddingBottom: "8px",
// }));

// export const ColumnsWrapper = styled(Box)<{ expanded?: boolean }>(({ expanded }) => ({
//   display: "grid",
//   gridTemplateColumns: "repeat(2, 1fr)", // always 2 columns
//   gap: 16,
//   padding: "8px 30px",
//   maxHeight: expanded ? 300 : "auto",
//   overflowY: expanded ? "auto" : "visible",
// }));

export const ColumnsWrapper = styled(Box)<{ columns: number; expanded?: boolean }>(
  ({ columns, expanded, theme }) => ({
    display: "grid",
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: 16,
    padding: "8px 30px",
    maxHeight: expanded ? 300 : "auto",
    overflowY: expanded ? "auto" : "visible",
    maxWidth: columns * 180, // prevent full stretch

    [theme.breakpoints.down("lg")]: {
      gridTemplateColumns: `repeat(${Math.min(columns, 3)}, 1fr)`,
    },
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: `repeat(${Math.min(columns, 2)}, 1fr)`,
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
    },
  })
);

// styled component for ColumnsWrapper
export const PromotionsWrapper = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(150px, auto))", // flexible columns
  gap: "12px 24px", // row-gap and column-gap
  padding: "12px 16px",
  backgroundColor: "#fff",
  borderRadius: "8px",
  boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
  width: "fit-content", // ✅ shrink-to-content
  maxWidth: "90vw", // prevent overflowing screen
});

export const PromotionsColumnsWrapper = styled(Box)({
  display: "grid",
  gap: 16,
  padding: "8px 30px",
});

export const Column = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  flex: "1 1 100%", // responsive full width on mobile
}));

export const DropdownMenuItemStyled = styled(MenuItem)(() => ({
  fontSize: useFontSize(14),
  padding: "4px 0",
  cursor: "pointer",
  "&:hover": {
    color: palette.primary.dark,
    background: "transparent",
  },
}));

export const ViewMoreText = styled(Typography)<{ expanded?: boolean }>(({ expanded }) => ({
  fontSize:useFontSize(12),
  fontWeight: 500,
  marginTop: 8,
  cursor: "pointer",
  gridColumn: "1 / -1", // span both columns
  textAlign: expanded ? "right" : "right",
}));

export const SpecialsBlock = styled(Box)(() => ({
  background: "#fff5f5",
  borderRadius: 8,
  padding: 16,
  minWidth: 220,
  flex: "1 1 200px",
}));

export const SpecialsItem = styled(Typography)(() => ({
  fontSize: 13,
  color: palette.primary.dark,
  fontWeight: 500,
  marginBottom: 6,
  cursor: "pointer",
}));

export const SuggestionsContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "75px",
  marging: "auto",
  zIndex: 10,
  maxHeight: "200px",
  overflowY: "auto",
  minWidth: "400px",
  border: "none",
  backgroundColor: "transparent",
  boxShadow: theme.shadows[2],
  fontSize: useFontSize(12),

  // Tablet styles
  [theme.breakpoints.down("lg")]: {
    top: "65px",
    minWidth: "300px",
  },
  // Mobile styles
  [theme.breakpoints.down("md")]: {
    // top:"100px"
    top: "50px",
    minWidth: "265px",
  },
  // Small mobile styles
  [theme.breakpoints.down("sm")]: {
    top: "100px",
    left: "0px",
    minWidth: "480px",
  },
}));

export const HighlightedText = styled("span")(({ theme }) => ({
  color: theme.palette.junk.main,
  fontWeight: "bold",
}));
export const StyledSuggestionItem = styled(ListItemButton)(({ theme }) => ({
  border: "none",
  textAlign: "left",
  padding: "8px 16px",
  width: "100%",
  justifyContent: "flex-start",
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.default,
  fontSize: useFontSize(12),
  "&:hover": {
    backgroundColor: palette.white.light,
  },
}));

export const MenuContentWrapper = styled("div")({
  display: "flex",
  gap: "20px",
  alignItems: "flex-start",
});

export const LeftColumn = styled("div")({
  flex: 1,
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  maxWidth: "700px",
});

export const RightColumn = styled("div")({
  flex: "0 0 auto",
  padding: "0px 30px 0px 0px",
  width: "auto", // width only as per content
  maxWidth: "350px", // optional limit
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});

export const SpecialBox = styled("div")({
  // background: palette.primary.light,
  // border: shape.borderRed,
  // borderRadius: "8px",
  // padding: "12px",
});

export const SpecialTitle = styled("h4")({
  fontWeight: "bold",
  color: palette.primary.dark,
  marginBottom: "8px",
});

export const SpecialItem = styled("div")({
  padding: "6px 0",
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
  },
});
