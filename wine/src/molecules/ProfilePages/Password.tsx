import React from "react";
import {
  FormWrapper,
  PasswordFields,
  HalfField,
} from "../../organisms/Authentication/AuthDialog.style";
import { CustomButton, CustomTextField } from "../../atoms";
import { useProfileForm } from "./ProfilePages.hook";
import { IconButton, Typography } from "@mui/material";
import { theme } from "../../themes/theme";
import * as Styled from "./ProfilePages.style";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Password = () => {
  const {
    passwordErrors,
    passwordForm,
    handleChangePassword,
    handleSubmitPassword,
    showPassword,
    setShowPassword,
  } = useProfileForm();

  return (
    <Styled.Container>
      <FormWrapper onSubmit={handleSubmitPassword}>
        {/* Header */}
        <Styled.HeaderBox>
          <Typography variant="h6" fontWeight={600}>
            Password
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Set up and manage your personal details
          </Typography>
          <Styled.DividerLine />
        </Styled.HeaderBox>

        <Styled.PasswordFieldsResponsive>
          <HalfField>
            <CustomTextField
              label="Old Password"
              value={passwordForm.oldPassword}
              onChange={(val) => handleChangePassword("oldPassword", val)}
              required
              error={passwordErrors.oldPassword}
              type={showPassword.old ? "text" : "password"}
              endIcon={
                <IconButton
                  onClick={() => setShowPassword((prev) => ({ ...prev, old: !prev.old }))}
                >
                  {showPassword.old ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              }
            />
          </HalfField>

          <Styled.InfoText>Provide existing password to update new one.</Styled.InfoText>
        </Styled.PasswordFieldsResponsive>

        {/* Email + Phone */}
        <PasswordFields>
          <HalfField>
            <CustomTextField
              label="New Password"
              value={passwordForm.password}
              onChange={(val) => handleChangePassword("password", val)}
              required
              error={passwordErrors.password}
              type={showPassword.new ? "text" : "password"}
              endIcon={
                <IconButton
                  onClick={() => setShowPassword((prev) => ({ ...prev, new: !prev.new }))}
                >
                  {showPassword.new ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              }
            />
          </HalfField>

          <HalfField>
            <CustomTextField
              label="Confirm Password"
              value={passwordForm.confirmPassword}
              onChange={(val) => handleChangePassword("confirmPassword", val)}
              required
              error={passwordErrors.confirmPassword}
              type={showPassword.confirm ? "text" : "password"}
              endIcon={
                <IconButton
                  onClick={() => setShowPassword((prev) => ({ ...prev, confirm: !prev.confirm }))}
                >
                  {showPassword.confirm ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              }
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

export default Password;
