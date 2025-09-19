import React from "react";
import { useTheme } from "@mui/material";
import { Person as PersonIcon } from "@mui/icons-material";
import { CustomTextField, CustomDropdown, CustomButton } from "../../atoms";
import { countryOptions, alcoholPreferences } from "../../constant/newsletterData";
import useNewsletter from "./NewsLetter.hook";
import {
  NewsletterContainer,
  BtnWrapperBox,
  WrapperBox,
  CustomizedGrid,
  CustomizeUnsubscribeText,
  CustomizeTitleText,
} from "./Newsletter.style";
import palette from "../../themes/palette";
import { useHomeLogic } from "../../pages/Home/Home.hook";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";

const Newsletter: React.FC = () => {
  const theme = useTheme();
  const { searchTerm } = useSelector((store: RootState) => store.homeSlice);
  const { stores, storesData } = useHomeLogic();
  const { formData, handleInputChange, handleSubscribe, isLoading } = useNewsletter();
  const preferredStores = searchTerm
    ? storesData
    : stores?.map((store: any) => ({
        label: store.name,
        value: store.name.toLowerCase(),
      }));

  return (
    <NewsletterContainer>
      <WrapperBox>
        <CustomizeTitleText>Newsletter</CustomizeTitleText>
        <CustomizedGrid>
          {/* First Row */}
          <CustomTextField
            label="Full Name"
            value={formData.fullName}
            onChange={handleInputChange("fullName")}
            placeholder="John Cena"
            required={true}
            startIcon={<PersonIcon sx={{ color: palette.grey.main }} />}
          />

          <CustomTextField
            label="Phone Number"
            value={formData.phoneNumber}
            onChange={handleInputChange("phoneNumber")}
            placeholder="954589334"
            type="tel"
            required={true}
            isPhoneInput={true}
            countryValue={formData.countryCode}
            onCountryChange={handleInputChange("countryCode")}
            countryOptions={countryOptions}
          />

          <CustomTextField
            label="Email"
            value={formData.email}
            onChange={handleInputChange("email")}
            placeholder="youcanseeme@gmail.com"
            type="email"
            required={true}
          />

          {/* Second Row */}
          <CustomDropdown
            label="Preferred Store"
            value={formData.preferredStore}
            onChange={handleInputChange("preferredStore")}
            options={preferredStores}
            placeholder="Select Store"
            required={true}
          />

          <CustomDropdown
            label="Alcohol Preferences"
            value={formData.alcoholPreferences}
            onChange={handleInputChange("alcoholPreferences")}
            options={alcoholPreferences}
            placeholder="Select Preferences"
            required={true}
          />

          <BtnWrapperBox>
            <CustomButton
              text={"Subscribe"}
              bgColor={theme.palette.primary.dark}
              onClick={handleSubscribe}
              color={""}
              border={""}
              btnBorderColor={""}
              isLoading={isLoading}
            />
            <CustomizeUnsubscribeText>
              Unsubscribe anytime. We respect your privacy.
            </CustomizeUnsubscribeText>
          </BtnWrapperBox>
        </CustomizedGrid>
      </WrapperBox>
    </NewsletterContainer>
  );
};

export default Newsletter;
