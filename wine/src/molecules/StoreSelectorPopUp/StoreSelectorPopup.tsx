
import React from "react";
import { Box, Typography, Button, ButtonBase } from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PhoneIcon from "@mui/icons-material/Phone";
import { Check } from "@mui/icons-material";
import palette from "../../themes/palette";
import { CustomPopup } from "../../atoms";
import { SearchBox, StyledInput } from "../NavigationBar/Navigation.style";
import SearchIcon from "@mui/icons-material/Search";
import {mapIcon,mapIconSelected} from '../../assets'

export interface Store {
  id: number;
  name: string;
  address: string;
  hours: string;
  phone: string;
}

interface StoreSelectorPopupProps {
  open: boolean;
  onClose: () => void;
  stores: Store[];
  selectedStoreId?: number;
  onSelect: (id: number) => void;
  setIsAgeVerified: React.Dispatch<React.SetStateAction<boolean>>;
}

const StoreSelectorPopup: React.FC<StoreSelectorPopupProps> = ({
  open,
  onClose,
  stores,
  selectedStoreId,
  onSelect,
  setIsAgeVerified
}) => {
  return (
    <CustomPopup
      open={open}
      onClose={onClose}
      title="Select Your Store"
      footer={
        <Typography variant="caption" color="text.secondary" >
          <strong>Note:</strong> If no store is selected, Wall WineOutlet will be used
          as default. You can change your store preference at any time using the store selector in
          the header.
        </Typography>
      }
    >
        <Typography sx={{ mb: 1, color: palette.black[800] }}>
          Find stores near me
        </Typography>
        <Box display="flex" gap={1} mb={2}>
          <SearchBox sx={{ display: { xs: "none", sm: "flex" } }}>
            <SearchIcon sx={{ color: "gray" }} />
            <StyledInput placeholder="Enter Zip Code" inputProps={{ "aria-label": "search" }} />
          </SearchBox>
          <Button
            variant="contained"
            sx={{ backgroundColor: palette.primary.dark, borderRadius: "12px" }}
          >
            Search
          </Button>
        </Box>
        {stores.map((store) => {
          const isSelected = selectedStoreId === store.id;
          return (
            <ButtonBase
              key={store.id}
              onClick={() => {
                onSelect(store.id);
                setIsAgeVerified(true);
                setTimeout(() => {
                  onClose();
                }, 5000);
              }}
              sx={{
                width: "100%",
                textAlign: "left",
                bgcolor: isSelected ? palette.primary.light : "background.paper",
                borderRadius: 2,
                p: 2,
                mb: 2,
                display: "block",
              }}
            >
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box display="flex" alignItems="center" gap={2}>
                  <Typography fontWeight="bold">{store.name}</Typography>
                  <Button
  size="small"
  variant="outlined"
  endIcon={
    <img
      src={isSelected ? mapIconSelected:mapIcon}    
      alt="map"
      style={{ width: 15, height: 15 }} 
    />
  }
  onClick={(e) => e.stopPropagation()}
  sx={{
    color: isSelected ? palette.primary.dark : "inherit",
    borderRadius: "20px",
    border: `1px solid ${
      isSelected ? palette.primary.dark : palette.grey.border
    }`,
  }}
>
  Open Map
</Button>

                </Box>
                {isSelected && <Check sx={{ color: palette.primary.dark }} />}
              </Box>

              <Typography variant="body2" color="text.secondary" mt={1}>
                {store.address}
              </Typography>
<Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
  {/* Hours */}
  <Box display="flex" alignItems="center" gap={1}>
    <AccessTimeIcon fontSize="small" color="action" />
    <Typography variant="body2">{store.hours}</Typography>
  </Box>

  {/* Phone */}
  <Box display="flex" alignItems="center" gap={1}>
    <PhoneIcon fontSize="small" color="action" />
    <Typography variant="body2">{store.phone}</Typography>
  </Box>
</Box>

            </ButtonBase>
          );
        })}
    </CustomPopup>
  );
};

export default StoreSelectorPopup;
