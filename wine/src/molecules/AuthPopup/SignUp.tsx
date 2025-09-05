import React, { useState } from "react";
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

interface SignUpProps {
  setTab: (tab: "signin" | "signup") => void;
  onClose: () => void;
}

const SignUp: React.FC<SignUpProps> = ({ setTab, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    contact: "",
    password: "",
    confirmPassword: "",
    vipId: "",
  });

  const [errors, setErrors] = useState<Partial<typeof form>>({});

  const handleChange = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    const newErrors: Partial<typeof form> = {};
    if (!form.fullName) newErrors.fullName = "Full Name is required";
    if (!form.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Invalid email";
    if (!form.contact) newErrors.contact = "Contact Number is required";
    if (!form.password) newErrors.password = "Password is required";
    else if (form.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (!form.confirmPassword) newErrors.confirmPassword = "Confirm Password is required";
    else if (form.confirmPassword !== form.password)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted ", form);
      onClose();
    }
  };

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

      <SubmitButton type="submit" variant="contained" fullWidth>
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
