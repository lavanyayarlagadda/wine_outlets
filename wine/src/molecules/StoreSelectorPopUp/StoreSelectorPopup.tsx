import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Box,
  Typography,
  TextField,
  InputAdornment,
  Button,
  Divider,
  Radio,
  Paper,
  ButtonBase,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import RoomIcon from "@mui/icons-material/Room";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PhoneIcon from "@mui/icons-material/Phone";
import * as Styled from "../AgePopup/AgePopup.style";
import palette from "../../themes/palette";
import shape from "../../themes/shape";
import { SearchBox, StyledInput } from "../NavigationBar/Navigation.style";
import { Check } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

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

const navigate = useNavigate();

  return (
    <>
      <Styled.StyledDialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
        <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
          <Typography variant="h6" fontWeight="bold">
            Select Your Store
          </Typography>

          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider />

        {/* Content */}
        <Styled.StyledDialogContent>
          <Typography sx={{ mb: 1, color: palette.black[800], mt: "-24px" }}>
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
            console.log(selectedStoreId, store.id, "STOREID");
            return (
              <ButtonBase
                onClick={() => {onSelect(store.id),setIsAgeVerified(true),onClose()}}
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
                  {/* Left side: store name + button */}
                  <Box display="flex" alignItems="center" gap={2}>
                    <Typography fontWeight="bold">{store.name}</Typography>
                    <Button
                      size="small"
                      variant="outlined"
                      endIcon={<RoomIcon />}
                      onClick={(e) => e.stopPropagation()}
                      sx={{
                        color: isSelected ? palette.primary.dark : "inherit",
                        borderRadius: "20px",
                        border: `1px solid ${isSelected ? palette.primary.dark : palette.grey.border}`,
                      }}
                    >
                      Open Map
                    </Button>
                  </Box>

                  {/* Right side: check icon */}
                  {isSelected && <Check sx={{ color: palette.primary.dark }} />}
                </Box>

                {/* Address */}
                <Typography variant="body2" color="text.secondary" mt={1}>
                  {store.address}
                </Typography>

                {/* Hours */}
                <Box display="flex" alignItems="center" gap={1} mt={1}>
                  <AccessTimeIcon fontSize="small" color="action" />
                  <Typography variant="body2">{store.hours}</Typography>
                </Box>

                {/* Phone */}
                <Box display="flex" alignItems="center" gap={1} mt={1}>
                  <PhoneIcon fontSize="small" color="action" />
                  <Typography variant="body2">{store.phone}</Typography>
                </Box>
              </ButtonBase>
            );
          })}

          <Box
            p={2}
            borderTop="1px solid"
            borderColor="divider"
            bgcolor="background.paper"
            position="sticky"
            bottom={0}
          >
            <Typography variant="caption" color="text.secondary">
              <strong>Note:</strong> If no store is selected, Oceanview Spirits & Liquors will be
              used as default. You can change your store preference at any time using the store
              selector in the header.
            </Typography>
          </Box>
        </Styled.StyledDialogContent>
      </Styled.StyledDialog>
    </>
  );
};

export default StoreSelectorPopup;
