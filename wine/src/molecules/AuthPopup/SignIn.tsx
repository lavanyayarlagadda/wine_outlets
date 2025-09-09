import React from "react";
import { IconButton } from "@mui/material";
import { Email, Visibility, VisibilityOff } from "@mui/icons-material";
import { CustomTextField } from "../../atoms";
import {
  ForgotPasswordBox,
  FormWrapper,
  SubmitButton,
  SwitchLink,
  SwitchText,
} from "../../organisms/Authentication/AuthDialog.style";
import { useSignIn } from "./SignInPopup.hook";

const SignIn = ({
  setTab,
  onClose,
  setIsSubmit,
}: {
  setTab: any;
  onClose: any;
  setIsSubmit: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { form, errors, showPassword, handleChange, setShowPassword, handleSubmit } =
    useSignIn(onClose);

  return (
    <FormWrapper component="form" onSubmit={handleSubmit}>
      <CustomTextField
        label="Email Address"
        value={form.email}
        onChange={(val) => handleChange("email", val)}
        startIcon={<Email />}
        required
        error={errors.email}
      />

      <CustomTextField
        label="Password"
        value={form.password}
        onChange={(val) => handleChange("password", val)}
        required
        error={errors.password}
        type={showPassword ? "text" : "password"}
        endIcon={
          <IconButton onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        }
      />
      <ForgotPasswordBox>
        <SwitchLink onClick={() => setTab("forgotPassword")}>Forgot Password</SwitchLink>
      </ForgotPasswordBox>
      <SubmitButton
        type="submit"
        variant="contained"
        fullWidth
        onClick={() => {
          setIsSubmit(true);
        }}
      >
        Submit
      </SubmitButton>

      <SwitchText variant="body2" align="center">
        Don't have an account? <SwitchLink onClick={() => setTab("signup")}>Sign Up</SwitchLink>
      </SwitchText>
    </FormWrapper>
  );
};

export default SignIn;
