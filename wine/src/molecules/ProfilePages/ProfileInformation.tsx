import React from "react";
import {
  FormWrapper,
  PasswordFields,
  HalfField,
} from "../../organisms/Authentication/AuthDialog.style";
import { CustomButton, CustomTextField } from "../../atoms";
import { useProfileForm } from "./ProfilePages.hook";
import { Typography } from "@mui/material";
import { theme } from "../../themes/theme";
import * as Styled from "./ProfilePages.style";

const ProfileInformation = ({ initialData }: { initialData?: any }) => {
  const { form, errors, handleChange, handleSubmit } = useProfileForm(initialData);

  return (
    <Styled.Container>
      <FormWrapper onSubmit={handleSubmit}>
        {/* Header */}
        <Styled.HeaderBox>
          <Typography variant="h6" fontWeight={600}>
            Profile Information
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Set up and manage your personal details
          </Typography>
          <Styled.DividerLine />
        </Styled.HeaderBox>

        {/* First + Last Name */}
        <PasswordFields>
          <HalfField>
            <CustomTextField
              label="First Name"
              value={form.firstName}
              onChange={(val) => handleChange("firstName", val)}
              required
              error={errors.firstName}
            />
          </HalfField>
          <HalfField>
            <CustomTextField
              label="Last Name"
              value={form.lastName}
              onChange={(val) => handleChange("lastName", val)}
              required
              error={errors.lastName}
            />
          </HalfField>
        </PasswordFields>

        {/* Email + Phone */}
        <PasswordFields>
          <HalfField>
            <CustomTextField
              label="Email"
              value={form.email}
              onChange={(val) => handleChange("email", val)}
              required
              error={errors.email}
            />
          </HalfField>
          <HalfField>
            <CustomTextField
              label="Phone Number"
              value={form.phoneNumber}
              onChange={(val) => handleChange("phoneNumber", val)}
              // required
              error={errors.phoneNumber}
            />
          </HalfField>
        </PasswordFields>

        {/* Address + ZIP */}
        <PasswordFields>
          <HalfField>
            <CustomTextField
              label="Address"
              value={form.address}
              onChange={(val) => handleChange("address", val)}
              // required
              error={errors.address}
            />
          </HalfField>
          <HalfField>
            <CustomTextField
              label="ZIP Code"
              value={form.zipCode}
              onChange={(val) => handleChange("zipCode", val)}
              required
              error={errors.zipCode}
            />
          </HalfField>
        </PasswordFields>

        {/* Save Button */}
        <Styled.ButtonWrapper>
          <CustomButton
            text={"Save"}
            bgColor={theme.palette.primary.dark}
            onClick={() => console.log("save")}
            color={""}
            border={""}
            btnBorderColor={""}
          />
        </Styled.ButtonWrapper>
      </FormWrapper>
    </Styled.Container>
  );
};

export default ProfileInformation;
