
import {Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import shape from "../../themes/shape";
export const CounterBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  border: "1px solid #E0E0E0",
  borderRadius: shape.borderRadius,
  padding: "6px",
}));