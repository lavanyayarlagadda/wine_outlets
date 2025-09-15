import React, { useState } from "react";
import { toast } from "react-toastify";
import { useTheme } from "@mui/material";
import { useSendNewsletterMutation } from "../../store/apis/Home/homeAPI";
import { Person as PersonIcon } from "@mui/icons-material";
import { CustomTextField, CustomDropdown, CustomButton } from "../../atoms";
import { countryOptions, alcoholPreferences } from "../../constant/newsletterData";
import {
  NewsletterContainer,
  BtnWrapperBox,
  WrapperBox,
  CustomizedGrid,
  CustomizeUnsubscribeText,
  CustomizeTitleText,
} from "./Newsletter.style";
import palette from "../../themes/palette";
import { stores } from "../../constant/curatedData";

const initialForm = {
    fullName: "",
    countryCode: "US",
    phoneNumber: "",
    email: "",
    preferredStore: "",
    alcoholPreferences: "",
  }

const Newsletter: React.FC = () => {
  const theme = useTheme();
  const [sendNewsletter, { isLoading }] = useSendNewsletterMutation();
  const [formData, setFormData] = useState(initialForm);

  const handleInputChange = (field: string) => (value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const preferredStores = stores.map((store) => ({
    label: store.name,
    value: store.name.toLowerCase(),
  }));

  const handleSubscribe = async () => {
    try {
      const payload = {
        userId: 1, // replace with real user id from auth if available
        userIp: "1", // replace with actual IP if you collect it; backend accepts a string "1" per your example
        fullName: formData.fullName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        preferredStore: formData.preferredStore ? [formData.preferredStore] : [],
        preferredAlcohol: formData.alcoholPreferences ? [formData.alcoholPreferences] : [],
      };

      await sendNewsletter(payload).unwrap();
      toast.success("Subscribed to newsletter successfully!");
      setFormData(initialForm);
    } catch (err: any) {
      const message =
        err?.data?.error ||
        err?.data?.details ||
        err?.message ||
        "Subscription failed. Please try again.";
      toast.error(message);
      console.error("newsletter error", err);
    }
  };

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
            startIcon={<PersonIcon sx={{ color: palette.grey.main }} />}
          />

          <CustomTextField
            label="Phone Number"
            value={formData.phoneNumber}
            onChange={handleInputChange("phoneNumber")}
            placeholder="954589334"
            type="tel"
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
          />

          {/* Second Row */}
          <CustomDropdown
            label="Preferred Store"
            value={formData.preferredStore}
            onChange={handleInputChange("preferredStore")}
            options={preferredStores}
            placeholder="Select Store"
          />

          <CustomDropdown
            label="Alcohol Preferences"
            value={formData.alcoholPreferences}
            onChange={handleInputChange("alcoholPreferences")}
            options={alcoholPreferences}
            placeholder="Select Preferences"
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
