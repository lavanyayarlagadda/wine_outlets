import React from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import { CustomTextField } from "../../atoms";
import {
  FormWrapper,
  PasswordFields,
  HalfField,
  SubmitButton,
  SwitchText,
  SwitchLink,
} from "../../organisms/Authentication/AuthDialog.style";
import { useSignUp } from "./SignUpPopup.hook";

interface SignUpProps {
  setTab: (tab: "signin" | "signup") => void;
  onClose: () => void;
  setIsSubmit: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignUp: React.FC<SignUpProps> = ({ setTab, onClose, setIsSubmit }) => {
  const { form, errors, showPassword, handleChange, setShowPassword, handleSubmit } =
    useSignUp(onClose);

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <CustomTextField
        label="Full Name"
        value={form.fullName}
        onChange={(val) => handleChange("fullName", val)}
        startIcon={<PersonIcon />}
        required
        error={errors.fullName}
      />

      <CustomTextField
        label="Email"
        value={form.email}
        onChange={(val) => handleChange("email", val)}
        startIcon={<EmailIcon />}
        required
        error={errors.email}
      />

      <CustomTextField
        label="Contact Number"
        value={form.contact}
        onChange={(val) => handleChange("contact", val)}
        startIcon={<PhoneIcon />}
        required
        error={errors.contact}
      />

      <PasswordFields>
        <HalfField>
          <CustomTextField
            label="Create Password"
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
        </HalfField>

        <HalfField>
          <CustomTextField
            label="Confirm Password"
            value={form.confirmPassword}
            onChange={(val) => handleChange("confirmPassword", val)}
            required
            error={errors.confirmPassword}
            type={showPassword ? "text" : "password"}
            endIcon={
              <IconButton onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            }
          />
        </HalfField>
      </PasswordFields>

      <CustomTextField
        label="VIP Customer ID"
        value={form.vipId}
        onChange={(val) => handleChange("vipId", val)}
        error={errors.vipId}
      />

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

      <SwitchText>
        If you have existing account?{" "}
        <SwitchLink onClick={() => setTab("signin")}>Login</SwitchLink>
      </SwitchText>
    </FormWrapper>
  );
};

export default SignUp;
