import { Box, Skeleton } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SkeletonWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: 16, // spacing between skeleton elements
}));

export const BreadcrumbSkeleton = styled(Skeleton)(() => ({
  width: "40%",
  height: 30,
}));

export const ProductImageSkeleton = styled(Skeleton)(() => ({
  width: "100%",
  height: 400,
}));

export const ProductNameSkeleton = styled(Skeleton)(() => ({
  width: "60%",
  height: 40,
}));

export const RatingSkeleton = styled(Skeleton)(() => ({
  width: "20%",
  height: 20,
}));

export const PriceSkeleton = styled(Skeleton)(() => ({
  width: "30%",
  height: 30,
}));

export const ButtonSkeletonRow = styled(Box)(() => ({
  display: "flex",
  gap: 16,
}));

export const ButtonSkeleton = styled(Skeleton)(() => ({
  width: 120,
  height: 40,
}));
