import React, { useEffect, useState } from "react";
import { Typography, Skeleton } from "@mui/material";
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
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../../store/slices/Home/Home";

export interface Store {
  id: number;
  name: string;
  address: string;
  hours: string;
  phone: string;
  mapUrl: string;
}

interface StoreSelectorPopupProps {
  open: boolean;
  onClose: () => void;
  stores: Store[];
  selectedStoreId?: number;
  onSelect: (id: number) => void;
  setIsAgeVerified?: React.Dispatch<React.SetStateAction<boolean>>;
  navigation?: boolean;
  isLoading?: boolean;
}

// 🔹 debounce hook
const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};

const StoreSelectorPopup: React.FC<StoreSelectorPopupProps> = ({
  open,
  onClose,
  stores,
  selectedStoreId,
  onSelect,
  setIsAgeVerified,
  navigation = false,
  isLoading = false,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const debouncedValue = useDebounce(inputValue, 500);

  useEffect(() => {
    if (debouncedValue.trim()) {
      dispatch(setSearchTerm(debouncedValue));
    } else if (inputValue === "") {
      // Clear immediately when input is empty
      dispatch(setSearchTerm(""));
    }
  }, [debouncedValue, inputValue, dispatch]);

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
      navigation={navigation}
    >
      <TitleText>Find stores near me</TitleText>

      <SearchContainer>
        <SearchBoxWrapper>
          <SearchIconStyled />
          <StyledInput
            placeholder="Enter Zip Code"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </SearchBoxWrapper>
        <StyledSearchButton variant="contained" onClick={() => dispatch(setSearchTerm(inputValue))}>
          Search
        </StyledSearchButton>
      </SearchContainer>

      {isLoading
        ? Array.from({ length: 3 }).map((_, i) => (
            <StoreButtonBase key={i} selected={false}>
              <StoreHeader>
                <StoreLeftGroup>
                  <Skeleton variant="text" width={120} height={24} />
                </StoreLeftGroup>
              </StoreHeader>
              <Skeleton variant="text" width="80%" height={20} style={{ marginTop: 8 }} />
              <StoreInfoRow>
                <InfoItem>
                  <Skeleton variant="circular" width={20} height={20} />
                  <Skeleton variant="text" width={80} height={20} />
                </InfoItem>
                <InfoItem>
                  <Skeleton variant="circular" width={20} height={20} />
                  <Skeleton variant="text" width={80} height={20} />
                </InfoItem>
              </StoreInfoRow>
            </StoreButtonBase>
          ))
        : stores?.map((store) => {
            const isSelected = selectedStoreId === store.id;
            return (
              <StoreButtonBase
                key={store.id}
                selected={isSelected}
                onClick={() => {
                  onSelect(store.id);
                  setIsAgeVerified && setIsAgeVerified(true);
                  onClose();
                }}
              >
                <StoreHeader>
                  <StoreLeftGroup>
                    <StoreName>{store?.name}</StoreName>
                    <MapButton
                      size="small"
                      variant="outlined"
                      endIcon={
                        <MapIconImage src={isSelected ? mapIconSelected : mapIcon} alt="map" />
                      }
                      selected={isSelected}
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/${store?.mapUrl}`);
                        onClose();
                      }}
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
