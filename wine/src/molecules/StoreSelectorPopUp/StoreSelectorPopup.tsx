import React from "react";
import { Typography } from "@mui/material";
import { Check } from "@mui/icons-material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PhoneIcon from "@mui/icons-material/Phone";
import { CustomPopup } from "../../atoms";
import { StyledInput } from "../NavigationBar/Navigation.style";
import { mapIcon, mapIconSelected } from "../../assets";
import {
  TitleText,
  SearchContainer,
  SearchBoxWrapper,
  SearchIconStyled,
  StyledSearchButton,
  StoreButtonBase,
  StoreHeader,
  StoreName,
  MapButton,
  MapIconImage,
  StoreInfoRow,
  InfoItem,
  StoreLeftGroup,
} from "./StoreSelectorPopup.style";

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
  setIsAgeVerified,
}) => {
  return (
    <CustomPopup
      open={open}
      onClose={onClose}
      title="Select Your Store"
      footer={
        <Typography variant="caption" color="text.secondary">
          <strong>Note:</strong> If no store is selected, Wall WineOutlet will be used as default.
          You can change your store preference at any time using the store selector in the header.
        </Typography>
      }
    >
      <TitleText>Find stores near me</TitleText>

      <SearchContainer>
        <SearchBoxWrapper>
          <SearchIconStyled />
          <StyledInput placeholder="Enter Zip Code" inputProps={{ "aria-label": "search" }} />
        </SearchBoxWrapper>
        <StyledSearchButton variant="contained">Search</StyledSearchButton>
      </SearchContainer>

      {stores.map((store) => {
        const isSelected = selectedStoreId === store.id;
        return (
          <StoreButtonBase
            key={store.id}
            selected={isSelected}
            onClick={() => {
              onSelect(store.id);
              setIsAgeVerified(true);
              onClose();
            }}
          >
            <StoreHeader>
              <StoreLeftGroup>
                <StoreName>{store.name}</StoreName>
                <MapButton
                  size="small"
                  variant="outlined"
                  endIcon={<MapIconImage src={isSelected ? mapIconSelected : mapIcon} alt="map" />}
                  selected={isSelected}
                  onClick={(e) => e.stopPropagation()}
                >
                  Open Map
                </MapButton>
              </StoreLeftGroup>

              {isSelected && <Check color="primary" />}
            </StoreHeader>

            <Typography variant="body2" color="text.secondary" mt={1}>
              {store.address}
            </Typography>

            <StoreInfoRow>
              <InfoItem>
                <AccessTimeIcon fontSize="small" color="action" />
                <Typography variant="body2">{store.hours}</Typography>
              </InfoItem>

              <InfoItem>
                <PhoneIcon fontSize="small" color="action" />
                <Typography variant="body2">{store.phone}</Typography>
              </InfoItem>
            </StoreInfoRow>
          </StoreButtonBase>
        );
      })}
    </CustomPopup>
  );
};

export default StoreSelectorPopup;
