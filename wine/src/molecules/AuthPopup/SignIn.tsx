import React, { useState } from "react";
import { Box, Button, Typography, IconButton } from "@mui/material";
import { Email, Visibility, VisibilityOff } from "@mui/icons-material";
import { CustomTextField } from "../../atoms";
import {
  FormWrapper,
  SubmitButton,
  SwitchLink,
  SwitchText,
} from "../../organisms/Authentication/AuthDialog.style";

const SignIn = ({ setTab, onClose }: { setTab: any; onClose: any }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const handleChange = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!form.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Invalid email";

    if (!form.password) newErrors.password = "Password is required";
    else if (form.password.length < 6) newErrors.password = "Min 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onClose();
      console.log("Form submitted ", form);
    }
  };

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

      <SubmitButton type="submit" variant="contained" fullWidth>
        Submit
      </SubmitButton>

      <SwitchText variant="body2" align="center">
        Don't have an account? <SwitchLink onClick={() => setTab("signup")}>Sign Up</SwitchLink>
      </SwitchText>
    </FormWrapper>
  );
};

export default SignIn;
