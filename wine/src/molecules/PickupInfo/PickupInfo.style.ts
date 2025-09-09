import styled from "@emotion/styled";
import { Typography, Box, Button } from "@mui/material";
import { useFontSize } from "../../themes/fontSize";
import palette from "../../themes/palette";
import shape from "../../themes/shape";
import RotateRightRoundedIcon from '@mui/icons-material/RotateRightRounded';
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
export const StoreName = styled(Typography)(() => ({
//   color: palette.text.primary,
  fontWeight: 600,
  fontSize: useFontSize(16),
  
}));
export const StoreAddress = styled(Typography)(() => ({
  color:palette.text.secondary,
    fontWeight: 600,
  fontSize: useFontSize(16),
}));

export const PhoneTimeRow = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  //   marginTop: theme.spacing(2),
}));

export const PhoneNumber = styled(Typography)(() => ({
  fontWeight: 600,
  fontSize: useFontSize(16),
  color: palette.text.secondary,
  display:"flex",
  gap:"5px"
}));

export const PickupTime = styled(Typography)(() => ({
  fontWeight: 500,
  fontSize: useFontSize(16),
  color: palette.text.primary,
}));

// export const ChangeStoreBtn = styled(Button)(({theme}) => ({
//   display: "flex",
//   alignItems: "center",
//   gap: "10px",
//   textTransform: "none",
//   border:shape.borderRed,

// }));

export const StoreButton = styled(Button)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  textTransform: "none",
  border: shape.borderRed,
  backgroundColor:palette.primary.light,
  color: palette.primary.dark, 
  "&:hover":{
    color:palette.primary.dark,
    backgroundColor:palette.primary.light
  },
});

export const ButtonIcon = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const ButtonText = styled(Typography)(() => ({
  fontWeight: 500,
  fontSize: useFontSize(12),
}));
export const SmallRotateIcon = styled(RotateRightRoundedIcon)(() => ({
  fontSize: useFontSize(16),  
}));


export const SmallAccessTimeIcon = styled(AccessTimeRoundedIcon)(() => ({
  fontSize: '18px',  
  verticalAlign: 'middle',  
}));

export const SmallLocalPhoneIcon = styled(LocalPhoneRoundedIcon)(() => ({
  fontSize: '18px',
  verticalAlign: 'middle',
}));