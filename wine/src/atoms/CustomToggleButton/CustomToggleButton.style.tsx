import { styled } from "@mui/material/styles";

interface IconImageProps {
  selected?: boolean;
}

export const IconImage = styled("img")<IconImageProps>(({ selected }) => ({
  width: 30,
  height: 30,
  opacity: selected ? 1 : 0.6,
}));
