
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

// Outer container
export const ProductLayoutContainer = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(4),
  },
}));



// Grid Container
export const ProductLayoutGrid = styled(Grid)(() => ({
  height: "100%",
  
}));



// Image Section
export const ProductImageSection = styled(Grid)(() => ({
  // display: "flex",
}));

// export const ImageBox = styled(Box)(({ theme }) => ({
//   flex: 1,
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   padding: theme.spacing(0),
//   [theme.breakpoints.up("md")]: {
//     padding: theme.spacing(2),
//   },
// }));

export const ProductImageBox = styled(Box)(({ theme }) => ({
  position: "sticky",
  top: '200px', // distance from top when scrolling
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  padding: theme.spacing(0),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(2),
  },
}));

// Details Section
export const ProductDetailsSection = styled(Grid)(() => ({
  display: "flex",
}));

export const ProductDetailsBox = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  // maxHeight: "82vh", // Adjust based on your design
  overflowY: "auto",
  padding: theme.spacing(0),
    // [theme.breakpoints.up("md")]: {
  //   padding: theme.spacing(2),
  // },
}));

